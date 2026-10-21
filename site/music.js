(() => {
 const audio=document.querySelector('#background-music'),button=document.querySelector('#music-toggle');
 let muted=false,starting=false,revision=0;
 try{muted=localStorage.getItem('neco-background-music')==='muted';}catch{}
 audio.volume=.22;audio.muted=muted;
 const es=()=>document.documentElement.lang==='es';
 function render(){
  const playing=!audio.paused&&!audio.muted;
  button.classList.toggle('is-playing',playing);
  button.setAttribute('aria-pressed',String(playing));
  const label=playing?(es()?'Silenciar música de fondo':'Mute background music'):(es()?'Activar música de fondo':'Enable background music');
  button.setAttribute('aria-label',label);button.title=label;
 }
 function remember(){try{localStorage.setItem('neco-background-music',muted?'muted':'enabled');}catch{}}
 async function start(){
  if(muted||starting||!audio.paused)return;
  starting=true;const request=revision;audio.muted=false;
  try{await audio.play();if(request!==revision||muted)audio.pause();}
  catch{/* Browsers may require another explicit click; keep the enable icon. */}
  finally{starting=false;render();}
 }
 button.addEventListener('click',()=>{
  if(!audio.paused&&!audio.muted){muted=true;revision++;audio.muted=true;audio.pause();remember();render();}
  else{muted=false;remember();start();}
 });
 // Try immediately where permitted; retain real interaction as the fallback.
 document.addEventListener('click',event=>{if(!event.target.closest('#music-toggle'))start();},{capture:true});
 document.addEventListener('keydown',event=>{
  if(event.key==='Tab'||event.key==='Enter'||event.key===' '){if(!event.target.closest('#music-toggle'))start();}
 },{capture:true});
 ['play','pause','volumechange','error'].forEach(name=>audio.addEventListener(name,render));
 document.addEventListener('neco:languagechange',render);render();start();
 window.addEventListener('pageshow',start);
})();
