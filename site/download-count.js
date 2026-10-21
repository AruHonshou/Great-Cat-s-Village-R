(() => {
 const key='neco-downloads-v2';let snapshot=null,busy=false,lastAttempt=0,failed=false;
 try{const v=JSON.parse(localStorage.getItem(key));if(v&&Number.isSafeInteger(v.count)&&v.count>=0&&Number.isFinite(v.at))snapshot=v;}catch{}
 function render(){const es=document.documentElement.lang==='es',locale=es?'es-ES':'en-US';
  document.querySelectorAll('[data-download-count]').forEach(el=>{if(!snapshot){el.textContent='—';return;}const full=new Intl.NumberFormat(locale).format(snapshot.count);el.textContent=el.dataset.downloadCount==='compact'?new Intl.NumberFormat('en-US',{notation:'compact',maximumFractionDigits:1}).format(snapshot.count).toLowerCase():full;el.title=`GameBanana: ${full}`;el.setAttribute('aria-label',`${full} ${es?'descargas en GameBanana':'downloads on GameBanana'}`);});
  const source=document.querySelector('[data-count-source]');
  if(!snapshot)source.textContent=es?'GameBanana · Consultando descargas…':'GameBanana · Checking downloads…';
  else{const time=new Intl.DateTimeFormat(locale,{hour:'2-digit',minute:'2-digit'}).format(snapshot.at);source.textContent=failed||snapshot.stale?(es?`GameBanana · Último dato disponible (${time})`:`GameBanana · Last available count (${time})`):(es?`GameBanana · Última consulta: ${time}`:`GameBanana · Last checked: ${time}`);source.title=new Intl.DateTimeFormat(locale,{dateStyle:'medium',timeStyle:'short'}).format(snapshot.at);}
  if(failed&&!snapshot)source.textContent=es?'Consultar descargas en GameBanana ↗':'Check downloads on GameBanana ↗';
 }
 async function refresh(){if(busy||document.hidden||Date.now()-lastAttempt<15000)return;busy=true;lastAttempt=Date.now();
  try{const r=await fetch(window.necoApi.url(`/api/downloads?_=${Math.floor(Date.now()/60000)}`),{cache:'no-store',signal:AbortSignal.timeout(12000)});if(!r.ok)throw new Error();const d=await r.json();if(!Number.isSafeInteger(d.count)||d.count<0||!Number.isFinite(d.at))throw new Error();snapshot=d;failed=false;try{localStorage.setItem(key,JSON.stringify(snapshot));}catch{}}
  catch{failed=true;}finally{busy=false;render();}
 }
 document.addEventListener('neco:languagechange',render);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});window.addEventListener('focus',refresh);render();refresh();setInterval(refresh,5*60000);
})();
