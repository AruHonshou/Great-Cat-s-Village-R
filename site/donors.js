(() => {
 const dialog=document.querySelector('#donors-dialog'),list=document.querySelector('#donors-list'),podium=document.querySelector('#donors-podium'),currency=document.querySelector('#donors-currency');
 let data=null,busy=false,error=false;
 const es=()=>document.documentElement.lang==='es',t=(a,b)=>es()?a:b;
 function node(tag,className,value){const el=document.createElement(tag);if(className)el.className=className;if(value!==undefined)el.textContent=value;return el;}
 function money(cents){return new Intl.NumberFormat(es()?'es-ES':'en-US',{style:'currency',currency:currency.value||'USD'}).format(cents/100);}
 function details(d){const box=node('div','donor-identity');box.append(node('strong','',d.name));if(d.username)box.append(node('span','donor-handle',`@${d.username.replace(/^@/,'')}`));box.append(node('small','',d.provider==='kofi'?'Ko-fi':'Buy Me a Coffee'));return box;}
 function render(){
  document.querySelector('[data-donors-button]').textContent=t('TOP DONADORES','TOP SUPPORTERS');
  document.querySelector('#donors-title').textContent=t('Quienes hacen posible el proyecto.','The people supporting this project.');
  document.querySelector('#close-donors').setAttribute('aria-label',t('Cerrar ranking','Close leaderboard'));
  document.querySelector('#donors-description').textContent=t('Gracias por apoyar Great Cat’s Village R. El ranking suma los aportes públicos de cada donador en su plataforma.','Thank you for supporting Great Cat’s Village R. The leaderboard adds each supporter’s public donations on their platform.');
  document.querySelector('#donors-list-title').textContent=t('Todos los donadores','All supporters');
  document.querySelector('#donors-currency-label').textContent=t('Moneda','Currency');
  currency.setAttribute('aria-label',t('Moneda del ranking','Leaderboard currency'));
  document.querySelector('#donors-top-title').textContent='TOP 3';
  const status=document.querySelector('#donors-status');status.textContent=error?t('No se pudo actualizar el ranking. Intenta abrirlo de nuevo.','The leaderboard could not refresh. Try opening it again.'):!data?t('Cargando aportes…','Loading contributions…'):'';
  list.replaceChildren();podium.replaceChildren();if(!data)return;
  const rows=data.donors;
  document.querySelector('#donors-summary').textContent=`${rows.length} ${t('donadores','supporters')} · ${money(rows.reduce((s,d)=>s+d.amount,0))}`;
  rows.forEach((d,i)=>{
   const row=node('li','donor-row');row.append(node('span','donor-rank',String(i+1).padStart(2,'0')),details(d),node('strong','donor-amount',money(d.amount)));list.append(row);
  });
  for(let i=0;i<3;i++){
   const card=node('article',`donor-winner winner-${i+1}`);card.append(node('span','winner-position',`0${i+1}`));
   const d=rows[i];if(d){card.append(node('span','donor-avatar',Array.from(d.name)[0].toUpperCase()),details(d),node('strong','winner-amount',money(d.amount)));}
   else card.append(node('p','',t('Tu apoyo puede ocupar este lugar.','Your support could take this place.')));
   podium.append(card);
  }
  if(!rows.length)list.append(node('li','donors-empty',t('Aún no hay aportes públicos registrados en esta moneda.','No public contributions have been recorded in this currency yet.')));
  const disconnected=Object.entries(data.connections).filter(([,c])=>!c.configured).map(([p])=>p==='kofi'?'Ko-fi':'Buy Me a Coffee');
  document.querySelector('#donors-sync').textContent=disconnected.length
   ?t(`Historial importado. Conexión automática pendiente: ${disconnected.join(' y ')}.`,`History imported. Automatic connection pending: ${disconnected.join(' and ')}.`)
   :t('Nuevos aportes recibidos automáticamente. Esta ventana se actualiza cada minuto.','New contributions are received automatically. This window refreshes every minute.');
 }
 async function refresh(){
  if(busy)return;busy=true;
  try{const r=await fetch(window.necoApi.url(`/api/donors?currency=${encodeURIComponent(currency.value)}`),{cache:'no-store',signal:AbortSignal.timeout(10000)});if(!r.ok)throw new Error();data=await r.json();error=false;
   const selected=currency.value;currency.replaceChildren(...[...new Set(['USD',...data.currencies])].map(value=>{const el=node('option','',value);el.value=value;return el;}));currency.value=selected;
  }catch{error=true;}finally{busy=false;render();}
 }
 document.querySelector('#open-donors').addEventListener('click',()=>{dialog.showModal();render();refresh();});
 document.querySelector('#close-donors').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 currency.addEventListener('change',refresh);
 document.addEventListener('neco:languagechange',render);
 setInterval(()=>{if(dialog.open&&!document.hidden)refresh();},60000);
 render();
})();
