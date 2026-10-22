(() => {
 const ticker=document.querySelector('.ticker');
 if(ticker){
  const labels=['CHARACTER SKINS','MODELS & ANIMATIONS','CUSTOM AUDIO','MODULAR DOWNLOADS'];
  const block=()=>labels.map(label=>`<span class="ticker-label">${label}</span><img class="neco-mark" src="assets/neco-face.png" width="23" height="23" alt="">`).join('');
  let width=0;
  function buildTicker(){
   if(!ticker.clientWidth||ticker.clientWidth===width)return;width=ticker.clientWidth;
   const track=document.createElement('div');track.className='ticker-track';
   const group=document.createElement('div');group.className='ticker-group';group.innerHTML=block();
   track.append(group);ticker.replaceChildren(track);
   const unit=group.getBoundingClientRect().width||1000;
   group.innerHTML=block().repeat(Math.max(1,Math.ceil(width/unit)));
   track.style.setProperty('--ticker-duration',`${group.getBoundingClientRect().width/58}s`);
   track.append(group.cloneNode(true));
  }
  (document.fonts?document.fonts.ready:Promise.resolve()).then(buildTicker);
  if('ResizeObserver' in window)new ResizeObserver(buildTicker).observe(ticker);else window.addEventListener('resize',buildTicker);
 }
 const fine=matchMedia('(hover: hover) and (pointer: fine)');
 const follower=document.createElement('div');follower.id='neco-cursor';follower.setAttribute('aria-hidden','true');
 const states=['idle','left','right','click'];
 follower.innerHTML=states.map(state=>`<svg data-pose="${state}" viewBox="86 130 78 100" width="44" height="57"><image href="assets/cursor/${state}.gif" width="256" height="256" /></svg>`).join('');
 follower.dataset.state='idle';document.body.append(follower);
 let ready=false,visible=false,x=0,y=0,moving=false,frame=0,idleTimer=0;
 const clickable='a[href],button,input:not([type="hidden"]),select,textarea,summary,label[for],[role="button"],[role="link"],[tabindex]:not([tabindex="-1"])';
 function updatePose(){
  const target=document.elementFromPoint(x,y)?.closest(clickable);
  const canClick=target&&!target.disabled&&target.getAttribute('aria-disabled')!=='true';
  follower.dataset.state=canClick?'click':moving?(x<innerWidth/2?'left':'right'):'idle';
 }
 function draw(){frame=0;follower.style.transform=`translate3d(${x}px,${y}px,0)`;updatePose();}
 function hide(){visible=false;follower.classList.remove('visible');document.documentElement.classList.remove('neco-cursor-active');}
 function host(){const dialogs=[...document.querySelectorAll('dialog[open]')];const parent=dialogs.at(-1)||document.body;if(follower.parentElement!==parent)parent.append(follower);}
 Promise.all(states.map(state=>new Promise((resolve,reject)=>{const image=new Image();image.onload=resolve;image.onerror=reject;image.src=`assets/cursor/${state}.gif`;}))).then(()=>{ready=true;}).catch(hide);
 document.addEventListener('pointermove',event=>{
  if(!ready||!fine.matches||event.pointerType==='touch')return;
  x=event.clientX;y=event.clientY;moving=true;
  if(!visible){visible=true;follower.classList.add('visible');document.documentElement.classList.add('neco-cursor-active');}
  if(!frame)frame=requestAnimationFrame(draw);
  clearTimeout(idleTimer);idleTimer=setTimeout(()=>{moving=false;if(visible)updatePose();},180);
 },{passive:true});
 document.addEventListener('pointerover',()=>{if(visible)updatePose();},{passive:true});
 document.addEventListener('scroll',()=>{if(visible)updatePose();},{passive:true,capture:true});
 document.documentElement.addEventListener('pointerleave',hide);window.addEventListener('blur',hide);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)hide();});fine.addEventListener('change',()=>{if(!fine.matches)hide();});
 new MutationObserver(host).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['open']});
})();
