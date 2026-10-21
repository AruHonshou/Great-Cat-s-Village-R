(() => {
 const guide=document.querySelector('#neco-guide'), home=document.querySelector('.guide-home');
 const face=document.querySelector('#guide-face'), message=document.querySelector('#guide-message');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const topics={
 welcome:[100,'Bienvenido. Pasa el cursor por el menú y te explicaré qué encontrarás en cada apartado.','Welcome. Hover over the menu and I’ll explain what you’ll find in each section.'],
 'the-mod':[109,'Conoce Great Cat’s Village R: una colección modular de skins, modelos, animaciones y audio para Deadlock.','Meet Great Cat’s Village R: a modular collection of skins, models, animations and audio for Deadlock.'],
 skins:[106,'Aquí están las cinco skins completas. Cada una reúne su modelo, animaciones, imágenes y audio asociados.','Explore five complete skins. Each brings together its model, animations, images and associated audio.'],
 installation:[119,'Te explico cómo instalar con el gestor o manualmente. El 01 es necesario para las skins; los demás apartados son opcionales.','Learn to install with the manager or manually. Package 01 is required for skins; the other features are optional.'],
 creator:[110,'Conoce a AruHonshou, el creador que mantiene y actualiza esta colección.','Meet AruHonshou, the creator who maintains and updates this collection.'],
 commissions:[118,'¿Quieres un mod personalizado? Consulta los servicios y precios, y contacta por X o Discord para explicar tu idea.','Want a custom mod? Review services and prices, then get in touch on X or Discord to discuss your idea.'],
 support:[108,'Puedes apoyar las próximas actualizaciones mediante Ko-fi o Buy Me a Coffee. Gracias por tu apoyo.','Support future updates through Ko-fi or Buy Me a Coffee. Thank you for your support.'],
 downloads:[101,'Consulta qué incluye cada archivo. La edición agrupada ya está en GameBanana; los enlaces individuales siguen en preparación.','Review what each file includes. The grouped edition is on GameBanana; individual links are still being prepared.']
 };
 // Decode expressions once. Only the latest interaction may commit its image.
 const loaded=new Map();
 function expression(n){
  if(!loaded.has(n)){
   const img=new Image();img.src=`assets/guide/st_face_0019_${n}.png`;
   loaded.set(n,img.decode().then(()=>img.src).catch(()=>null));
  }return loaded.get(n);
 }
 Object.values(topics).forEach(item=>expression(item[0]));
 let current='welcome',generation=0,gesture;
 const es=()=>document.documentElement.lang==='es';
 function renderText(){
  const item=topics[current];message.textContent=item[es()?1:2];
  document.querySelector('[data-guide-label]').textContent=es()?'TU GUÍA':'YOUR GUIDE';
  document.querySelector('[data-gb-link]').textContent=es()?'Descargar en GameBanana':'Download on GameBanana';
 }
 async function show(topic,interacting=false){
  if(!topics[topic])return;
  const changed=topic!==current;current=topic;const request=++generation,item=topics[topic];
  renderText();guide.dataset.topic=topic;
  const src=await expression(item[0]);
  if(request!==generation)return;
  if(src){face.setAttribute('href',src);face.dataset.expression=String(item[0]);}
  if(interacting && changed && !reduced.matches){
   gesture?.cancel();gesture=face.parentElement.animate([
    {transform:'translateY(0) rotate(0deg)'},
    {transform:'translateY(-5px) rotate(-2deg)',offset:.4},
    {transform:'translateY(0) rotate(0deg)'}
   ],{duration:440,easing:'ease-out'});
  }
 }
 document.querySelectorAll('.header a[href^="#"]').forEach(link=>{
  const topic=link.getAttribute('href').slice(1)||'welcome';if(!topics[topic])return;
  link.addEventListener('pointerenter',()=>show(topic,true));
  link.addEventListener('focus',()=>show(topic,true));
  link.addEventListener('click',()=>show(topic,true));
 });
 // Keep the selected explanation until the next category or an explicit reset.
 document.querySelector('#guide-reset').addEventListener('click',()=>show('welcome',true));
 document.addEventListener('neco:languagechange',renderText);show('welcome');
})();
