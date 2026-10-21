import {createApi} from './api';
type Environment={DB:any;DONOR_ID_SECRET?:string;DONOR_IMPORT_TOKEN?:string;KOFI_VERIFICATION_TOKEN?:string;BMAC_SIGNING_SECRET?:string};
const paths=new Set(['/api/downloads','/api/donors']);
function readable(response:Response){const headers=new Headers(response.headers);headers.set('Access-Control-Allow-Origin','*');headers.set('X-Content-Type-Options','nosniff');return new Response(response.body,{status:response.status,headers});}
export default {
 async fetch(request:Request,environment:Environment,context:{waitUntil(p:Promise<any>):void}){
  const url=new URL(request.url),api=createApi(environment);
  if(request.method==='OPTIONS'&&paths.has(url.pathname))return new Response(null,{status:204,headers:{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,OPTIONS','Access-Control-Max-Age':'86400'}});
  if(request.method==='GET'&&paths.has(url.pathname)){
   // Public data only. The normalized key avoids one cache entry per visitor timestamp.
   const cacheUrl=new URL(url.origin+url.pathname);
   if(url.pathname==='/api/donors')cacheUrl.searchParams.set('currency',url.searchParams.get('currency')||'USD');
   const key=new Request(cacheUrl),cache=(caches as any).default;
   const hit=await cache.match(key);if(hit)return readable(hit);
   const response=await api.GET(request);
   if(response.ok){const headers=new Headers(response.headers);headers.set('Cache-Control','public, max-age=0, s-maxage=60');const stored=new Response(response.body,{status:response.status,headers});context.waitUntil(cache.put(key,stored.clone()));return readable(stored);}
   return readable(response);
  }
  if(request.method==='POST')return api.POST(request);
  return Response.json({service:'Great Cat’s Village R donation receiver',error:'Not found'},{status:404,headers:{'Cache-Control':'no-store'}});
 }
};
