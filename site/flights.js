(() => {
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const field=document.querySelector('#free-flight');const flights=[];
 function pause(){flights.forEach(a=>document.hidden||reduced.matches||document.documentElement.classList.contains('motion-off')?a.pause():a.play());}
 const flying='<svg class="sprite" viewBox="380 560 218 86" width="110" height="44"><image href="assets/animations/flying.gif" width="960" height="768" /></svg>';
 const carpet=(dance)=>`<div class="carpet-scene"><svg class="sprite carpet" viewBox="230 521 476 162"><image href="assets/animations/carpet.gif" width="960" height="768" /></svg><svg class="sprite rider ${dance?'rider-dance':'rider-idle'}" viewBox="${dance?'0 130 152 160':'0 129 96 160'}"><image href="assets/animations/${dance?'dance':'idle'}.gif" width="${dance?152:96}" height="${dance?290:289}" /></svg></div>`;
 let bandCount=0;
 function addBand(band){
  for(let n=0;n<3;n++){
   const isCarpet=n===2,reverse=(band+n)%2===1,size=isCarpet?230:120;
   const el=document.createElement('div');el.className=isCarpet?'free-carpet':`free-flyer ${n===1?'secondary':''}`;
   el.innerHTML=`<div class="flight-facing" style="transform:scaleX(${reverse?-1:1})">${isCarpet?carpet(band%2===0):flying}</div>`;
   field.append(el);const frames=[];
   // Stable document-space routes. Width changes adapt through vw units.
   for(let j=0;j<7;j++){
    const progress=reverse?1-j/6:j/6;
    const x=`calc(${progress*100}vw + ${-size+2*size*progress}px)`;
    const y=Math.max(35,band*1300+1300*(n+.5)/3+(Math.random()-.5)*400);
    frames.push({transform:`translate(${x},${y}px)`,offset:j/6});
   }
   const duration=(isCarpet?65000:46000)+Math.random()*16000;
   flights.push(el.animate(frames,{duration,iterations:Infinity,easing:'linear',delay:-Math.random()*duration}));
  }
 }
 function syncBounds(){
  const height=document.body.offsetHeight;
  field.style.height=`${height}px`;
  // Existing actors and animations are never recreated for content size changes.
  if(!reduced.matches){const needed=Math.ceil(height/1300);while(bandCount<needed)addBand(bandCount++);}
  pause();
 }
 let scheduled=false;
 function scheduleBounds(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;syncBounds();});}
 document.addEventListener('visibilitychange',pause);
 new MutationObserver(pause).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
 reduced.addEventListener('change',syncBounds);
 window.addEventListener('resize',scheduleBounds);
 if('ResizeObserver' in window)new ResizeObserver(scheduleBounds).observe(document.body);
 if(document.fonts)document.fonts.ready.then(syncBounds);else syncBounds();
})();
