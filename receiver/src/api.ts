export function createApi(environment:Record<string,any>){
const config=()=>environment;
const json=(data:unknown,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
const text=(v:unknown,max=100)=>String(v??'').replace(/[\u0000-\u001f\u007f]/g,'').trim().slice(0,max);
const truth=(v:unknown)=>v===true||v==='true';
function equal(a:string,b:string){if(a.length!==b.length)return false;let n=0;for(let i=0;i<a.length;i++)n|=a.charCodeAt(i)^b.charCodeAt(i);return n===0;}
async function hmac(secret:string,value:string){
 const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);
 const bytes=await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(value));return Array.from(new Uint8Array(bytes),v=>v.toString(16).padStart(2,'0')).join('');
}
async function body(request:Request){
 const reader=request.body?.getReader();if(!reader)return '';let size=0;const chunks:Uint8Array[]=[];
 while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>65536){await reader.cancel();throw new Error('Too large');}chunks.push(value);}
 const all=new Uint8Array(size);let at=0;for(const chunk of chunks){all.set(chunk,at);at+=chunk.length;}return new TextDecoder().decode(all);
}
async function keyFor(provider:string,email:string,fallback:string){
 const secret=config().DONOR_ID_SECRET;if(!secret)throw new Error('Identity key unavailable');
 return hmac(secret,`${provider}:${email?email.toLowerCase().trim():fallback}`);
}
async function save(row:any,imported=false){
 const db=config().DB;
 const amount=Number(row.amount);if(!Number.isSafeInteger(amount)||amount<0||amount>100000000)throw new Error('Invalid amount');
 const currency=text(row.currency,3).toUpperCase();if(!/^[A-Z]{3}$/.test(currency))throw new Error('Invalid currency');
 const name=text(row.name,80)||'Anonymous';
 const statement=`INSERT INTO donations(id,donor_key,provider,name,username,amount,currency,public,refunded,occurred_at) VALUES(?,?,?,?,?,?,?,?,?,?) ${imported?'ON CONFLICT(id) DO NOTHING':'ON CONFLICT(id) DO UPDATE SET refunded=MAX(donations.refunded,excluded.refunded)'}`;
 await db.prepare(statement).bind(row.id,row.donorKey,row.provider,name,text(row.username,80)||null,amount,currency,row.public?1:0,row.refunded?1:0,row.occurredAt).run();
}
async function GET(request:Request){
 const path=new URL(request.url).pathname,e=config();
 try{
  if(path==='/api/downloads'){
   const cached=await e.DB.prepare('SELECT value,checked_at FROM metrics WHERE key=?').bind('gamebanana').first();
   if(cached&&Date.now()-cached.checked_at<60000)return json({count:cached.value,at:cached.checked_at,stale:false});
   try{
    const response=await fetch(`https://gamebanana.com/apiv11/Mod/721867?_csvProperties=_nDownloadCount&_fresh=${Math.floor(Date.now()/60000)}`,{cache:'no-store',signal:AbortSignal.timeout(8000)});
    if(!response.ok)throw new Error('Upstream unavailable');const data=await response.json() as any,count=data._nDownloadCount;
    if(!Number.isSafeInteger(count)||count<0)throw new Error('Invalid count');const at=Date.now();
    await e.DB.prepare('INSERT INTO metrics(key,value,checked_at) VALUES(?,?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,checked_at=excluded.checked_at').bind('gamebanana',count,at).run();
    return json({count,at,stale:false});
   }catch{if(cached)return json({count:cached.value,at:cached.checked_at,stale:true});return json({error:'Counter temporarily unavailable'},503);}
  }
  if(path==='/api/donors'){
   const currency=(new URL(request.url).searchParams.get('currency')||'USD').toUpperCase();if(!/^[A-Z]{3}$/.test(currency))return json({error:'Invalid currency'},400);
   const rows=await e.DB.prepare('SELECT donor_key,provider,MAX(name) AS name,MAX(username) AS username,SUM(amount) AS amount,COUNT(*) AS donations,MIN(occurred_at) AS first_at FROM donations WHERE public=1 AND refunded=0 AND currency=? GROUP BY donor_key,provider HAVING SUM(amount)>0 ORDER BY amount DESC,first_at ASC,donor_key ASC').bind(currency).all();
   const currencies=await e.DB.prepare('SELECT DISTINCT currency FROM donations WHERE public=1 AND refunded=0 ORDER BY currency').all();
   const received=await e.DB.prepare('SELECT provider,last_received FROM integration_events').all();
   const last=Object.fromEntries(received.results.map((r:any)=>[r.provider,r.last_received]));
   return json({currency,currencies:currencies.results.map((r:any)=>r.currency),donors:rows.results.map((r:any)=>({name:r.name,username:r.username,provider:r.provider,amount:r.amount,donations:r.donations})),connections:{kofi:{configured:Boolean(e.KOFI_VERIFICATION_TOKEN&&e.DONOR_ID_SECRET),lastReceived:last.kofi||null},bmac:{configured:Boolean(e.BMAC_SIGNING_SECRET&&e.DONOR_ID_SECRET),lastReceived:last.bmac||null}},updatedAt:Date.now()});
  }
  return json({error:'Not found'},404);
 }catch{return json({error:'Service temporarily unavailable'},503);}
}
async function POST(request:Request){
 const path=new URL(request.url).pathname,e=config();
 try{
  if(path==='/api/donors/import'){
   const token=request.headers.get('authorization')?.replace(/^Bearer /,'')||'';
   if(!e.DONOR_IMPORT_TOKEN||!equal(token,e.DONOR_IMPORT_TOKEN))return json({error:'Unauthorized'},401);
   const rows=JSON.parse(await body(request));if(!Array.isArray(rows)||rows.length>100)return json({error:'Invalid import'},400);
   for(const row of rows){
    if(!['kofi','bmac'].includes(row.provider)||!row.externalId||!Number.isSafeInteger(row.occurredAt))return json({error:'Invalid row'},400);
    const donorKey=await keyFor(row.provider,text(row.email,254),text(row.externalId,200));
    await save({...row,id:`${row.provider}:${text(row.externalId,200)}`,donorKey,public:row.public===true},true);
   }return json({imported:rows.length});
  }
  let provider:string,row:any;
  if(path==='/api/webhooks/kofi'){
   if(!e.KOFI_VERIFICATION_TOKEN||!e.DONOR_ID_SECRET)return json({error:'Connection not configured'},503);
   const raw=await body(request);const payload=JSON.parse(new URLSearchParams(raw).get('data')||'{}');
   if(!equal(String(payload.verification_token||''),e.KOFI_VERIFICATION_TOKEN))return json({error:'Unauthorized'},401);
   if(payload.type!=='Donation')return json({received:true,ignored:true});
   if(!payload.kofi_transaction_id)return json({error:'Missing transaction identifier'},400);
   provider='kofi';row={id:`kofi:${text(payload.kofi_transaction_id,200)}`,provider,name:payload.from_name,username:payload.username||null,amount:Math.round(Number(payload.amount)*100),currency:payload.currency,public:truth(payload.is_public),refunded:false,occurredAt:Date.parse(payload.timestamp)};
   row.donorKey=await keyFor(provider,text(payload.email,254),text(payload.kofi_transaction_id,200));
  }else if(path==='/api/webhooks/bmac'){
   if(!e.BMAC_SIGNING_SECRET||!e.DONOR_ID_SECRET)return json({error:'Connection not configured'},503);
   const raw=await body(request),signature=request.headers.get('x-signature-sha256')||'';
   if(!/^[a-f0-9]{64}$/i.test(signature)||!equal(signature.toLowerCase(),await hmac(e.BMAC_SIGNING_SECRET,raw)))return json({error:'Unauthorized'},401);
   const event=JSON.parse(raw);
   if(event.live_mode!==true)return json({received:true,test:true});
   if(!['donation.created','donation.refunded'].includes(event.type))return json({received:true,ignored:true});
   const d=event.data;if(!d||!d.id)return json({error:'Missing payment identifier'},400);
   provider='bmac';const anonymous=/anonymous/i.test(String(d.supporter_name_type||''))||/^anonymous$/i.test(String(d.supporter_name||''));
   row={id:`bmac:${text(d.id,200)}`,provider,name:d.supporter_name,username:d.supporter_username||null,amount:Math.round(Number(d.amount)*100),currency:d.currency,public:!anonymous,refunded:event.type==='donation.refunded'||truth(d.refunded),occurredAt:Number(d.created_at||event.created)*1000};
   row.donorKey=await keyFor(provider,text(d.supporter_email,254),String(d.supporter_id||d.id));
  }else return json({error:'Not found'},404);
  if(!Number.isFinite(row.occurredAt))return json({error:'Invalid date'},400);
  await save(row);
  await e.DB.prepare('INSERT INTO integration_events(provider,last_received) VALUES(?,?) ON CONFLICT(provider) DO UPDATE SET last_received=excluded.last_received').bind(provider,Date.now()).run();
  return json({received:true});
 }catch{return json({error:'Invalid notification'},400);}
}

return {GET,POST};
}
