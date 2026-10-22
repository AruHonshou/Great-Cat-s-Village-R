const english={};
document.querySelectorAll('[data-i18n]').forEach(el=>english[el.dataset.i18n]=el.innerHTML);
const spanish={
 "announcement": "Great Cat’s Village R · Colección independiente de mods para Deadlock",
 "navMod": "El proyecto",
 "navSkins": "Skins",
 "navInstall": "Instalación",
 "navCreator": "Acerca de",
 "navDownloads": "Descargas",
 "heroLine1": "Deadlock.",
 "heroLine2": "A tu",
 "heroLine3": "manera.",
 "heroDescription": "Una colección modular de Neco-Arc para Deadlock. Explora cinco skins completas, entornos, modelos y audio personalizados, con instrucciones claras para instalar cada componente.",
 "heroCta": "Explorar descargas",
 "heroGuide": "Guía de instalación",
 "heroNote": "Un proyecto fan independiente de AruHonshou.",
 "heroStickerTop": "PERSONAJES",
 "heroStickerBottom": "SKINS COMPLETAS",
 "heroArtNote": "Rem / Neco-Arc · Skin de personaje",
 "introLabel": "EL PROYECTO",
 "introTitle": "Una colección.<br>Elecciones individuales.",
 "introDescription": "Great Cat’s Village R lleva a Neco-Arc y personajes relacionados a Deadlock mediante skins, animaciones, imágenes de habilidades, voces, música y modelos del entorno.",
 "introDescription2": "Cada componente tiene una función definida. Elige los personajes y apartados que quieras, y conserva el contenido original del juego para lo demás.",
 "introLink": "Ver los componentes",
 "factSkins": "skins completas de personajes",
 "factFiles": "componentes individuales",
 "factDownloads": "descargas. Gracias por tu apoyo.",
 "factChoice": "Instala solo<br>lo que necesitas.",
 "skinsLabel": "SKINS DE PERSONAJES",
 "skinsTitle": "Cinco personajes.<br>Paquetes completos.",
 "skinsDescription": "Cada skin incluye su modelo, animaciones, elementos visuales, imágenes de habilidades, voces y efectos de sonido asociados.",
 "skinsFootnote": "Estas publicaciones individuales incluyen su soporte: no requieren el archivo 01. Para combinar varias skins, usa los paquetes del catálogo modular con su base compartida 01.",
 "installLabel": "INSTALACIÓN",
 "installTitle": "Configura tu mod<br>en cuatro pasos.",
 "installDescription": "Estas instrucciones corresponden al catálogo modular. Su base compartida es necesaria para las skins; las publicaciones independientes de la sección anterior ya incluyen su soporte.",
 "baseFirst": "OBLIGATORIO PARA SKINS",
 "baseDescription": "Base compartida de<br>compatibilidad de skins",
 "baseOnce": "Una instalación para las skins 02–06.",
 "managerTab": "Mod Manager",
 "manualTab": "Instalación manual",
 "installWarning": "Mantén una sola copia activa de cada función. No combines una descarga agrupada de GameBanana con copias individuales de los mismos VPK.",
 "downloadsLabel": "CATÁLOGO DE ARCHIVOS",
 "downloadsTitle": "Conoce lo que instalas.",
 "downloadsDescription": "Revisa el contenido, las dependencias y el tamaño de cada componente antes de preparar tu selección.",
 "downloadNotice": "Descarga los ZIP actualizados r42 de cada componente desde el catálogo. La edición agrupada también está disponible en GameBanana.",
 "filterAll": "Todos",
 "filterSkins": "Skins",
 "filterWorld": "Mundo y criaturas",
 "filterAudio": "Audio e interfaz",
 "filterObjects": "Objetos",
 "noResults": "No hay archivos que coincidan. Prueba otra búsqueda.",
 "catalogSmall": "Se conservan los números originales. El 25 es un componente antiguo y no forma parte de la instalación recomendada.",
 "setupTitle": "LISTA DE INSTALACIÓN",
 "setupFiles": "componentes seleccionados",
 "setupTotal": "Tamaño estimado de descarga",
 "saveList": "Guardar lista de instalación",
 "resetList": "Reiniciar selección",
 "setupNote": "Pulsa el nombre de cada componente seleccionado para descargar su ZIP. También puedes guardar la lista de instalación. El 01 es necesario para las skins.",
 "creatorLabel": "SOBRE EL CREADOR",
 "creatorGraphic": "DESCARGAS. GRACIAS POR TU APOYO.",
 "creatorEyebrow": "CREADO Y MANTENIDO POR ARUHONSHOU",
 "creatorTitle": "Creado con cuidado.<br>Mejorado con tus comentarios.",
 "creatorDescription": "Desarrollo y mantengo Great Cat’s Village R como un proyecto fan independiente. La colección reúne modelos de personajes, animaciones, elementos de interfaz y audio en paquetes modulares.",
 "creatorDescription2": "Gracias a quienes han descargado el mod, reportado un problema o apoyado su desarrollo. Esta web reúne la información del proyecto, las guías de instalación y el catálogo de componentes.",
 "faqLabel": "PREGUNTAS FRECUENTES",
 "faqTitle": "Antes de<br>instalar.",
 "footerNote": "Un mod independiente de Deadlock creado por un fan. Neco-Arc y los personajes relacionados pertenecen a sus respectivos propietarios.",
 "credits": "Créditos y atribuciones ↗",
 "backTop": "Volver arriba ↑",
 "navSupport": "Apoyar",
 "navServices": "Encargos",
 "supportLabel": "APOYA EL PROYECTO",
 "supportTitle": "Ayuda a continuar<br>el desarrollo.",
 "supportDescription": "Si disfrutas la colección, puedes apoyar su mantenimiento y futuras actualizaciones. Las donaciones son opcionales e independientes de los encargos de mods.",
 "supportNote": "Elige la plataforma que prefieras. Gracias por apoyar el desarrollo independiente de mods.",
 "servicesLabel": "ENCARGOS DE MODS",
 "servicesTitle": "Un mod para<br>tu proyecto.",
 "servicesDescription": "Solicita un reemplazo de modelo, cambios visuales o trabajo de audio. Consulta los precios y escríbeme para confirmar el alcance y la disponibilidad.",
 "serviceHeader": "Servicio",
 "scopeHeader": "Contenido",
 "priceHeader": "Precio (USD)",
 "serviceModel": "Reemplazo de modelo de personaje",
 "scopeModel": "Sustituir el modelo de un personaje.",
 "serviceAsset": "Imágenes o sonidos",
 "scopeAsset": "Añadir una imagen o un sonido personalizado.",
 "perAsset": "por imagen o sonido",
 "serviceAnimated": "Poses animadas",
 "scopeAnimated": "Poses animadas personalizadas.",
 "serviceParticles": "Cambios de partículas",
 "scopeParticles": "Modificar efectos de partículas.",
 "servicePresentation": "Poses de presentación",
 "scopePresentation": "Selección de personaje, MVP o jugador clave.",
 "serviceObjects": "Modelado de objetos",
 "scopeObjects": "Crear modelos para objetos del juego.",
 "pricingNote": "Precios en USD. El alcance y la disponibilidad se confirman antes de comenzar el trabajo.",
 "contactTitle": "Hablemos de tu encargo",
 "contactDescription": "Escríbeme por X o Discord con el servicio que necesitas, una descripción y los archivos de referencia.",
 "briefTitle": "Prepara tu solicitud",
 "briefDescription": "Elige un servicio y describe tu idea. Copia la solicitud y envíala por el medio de contacto que prefieras.",
 "briefService": "Servicio",
 "briefQuantity": "Cantidad",
 "briefDetails": "Detalles del proyecto",
 "briefPlaceholder": "Describe el cambio e incluye referencias o requisitos…",
 "briefCopy": "Copiar solicitud de encargo",
 "briefEstimate": "Estimación del servicio",
 "motionToggle": "Ocultar decoraciones animadas"
};
let language='en',category='all',query='',visibleCount=8,method='manager',catalog=null;
let activeStandalone=null;
let selected=new Set(['01']);
try{language=localStorage.getItem('neco-language')==='es'?'es':'en';const saved=JSON.parse(localStorage.getItem('neco-selection')||'[]');if(Array.isArray(saved))selected=new Set(['01',...saved.filter(n=>/^\d\d$/.test(n)&&n!=='25')]);}catch{}
const $=s=>document.querySelector(s);
const text=(en,es)=>language==='es'?es:en;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const size=n=>n>=1e9?(n/1e9).toFixed(2)+' GB':n>=1e6?(n/1e6).toFixed(1)+' MB':Math.max(1,Math.round(n/1e3))+' KB';
const title=f=>language==='es'?f.titleEs:f.title;
const description=f=>language==='es'?f.descriptionEs:f.description;
const skins=[{"number":"04","name":"Neco-Arc","hero":"REM / FAMILIAR","image":"rem","standaloneUrl":"https://gamebanana.com/mods/727192","videoId":"BRhOZ204O-I","videoUrl":"https://www.youtube.com/watch?v=BRhOZ204O-I","videoStart":0,"variants":[{"kind":"complete","url":"https://gamebanana.com/dl/1858831","size":187512977},{"kind":"no-images","url":"https://gamebanana.com/dl/1858830","size":182015656}]},{"number":"03","name":"Neco Chaos","hero":"BABA","image":"chaos","standaloneUrl":"https://gamebanana.com/mods/727198","videoId":"cbrgHNZJrVc","videoUrl":"https://www.youtube.com/watch?v=cbrgHNZJrVc&t=20s","videoStart":20,"variants":[{"kind":"complete","url":"https://gamebanana.com/dl/1858829","size":122171301},{"kind":"no-images","url":"https://gamebanana.com/dl/1858828","size":118522494}]},{"number":"02","name":"Neco Akiha","hero":"PARADOX","image":"akiha","standaloneUrl":"https://gamebanana.com/mods/730696","videoId":"BoOvFsJbM_Y","videoUrl":"https://www.youtube.com/watch?v=BoOvFsJbM_Y","videoStart":0,"variants":[{"kind":"complete","url":"https://gamebanana.com/dl/1858827","size":70692893},{"kind":"no-images","url":"https://gamebanana.com/dl/1858826","size":66259069}]},{"number":"05","name":"Hisui & Kohaku","hero":"GRAVES","image":"graves","standaloneUrl":"https://gamebanana.com/mods/728839","videoId":"LjbHBn45P0Q","videoUrl":"https://www.youtube.com/watch?v=LjbHBn45P0Q&t=5s","videoStart":5,"variants":[{"kind":"complete","url":"https://gamebanana.com/dl/1858833","size":153009941},{"kind":"no-images","url":"https://gamebanana.com/dl/1858832","size":150515864}]},{"number":"06","name":"Neco Ciel","hero":"DYNAMO","image":"ciel","standaloneUrl":"https://gamebanana.com/mods/730699","videoId":"5vznYbX0uHs","videoUrl":"https://www.youtube.com/watch?v=5vznYbX0uHs","videoStart":0,"variants":[{"kind":"complete","url":"https://gamebanana.com/dl/1858824","size":71448000},{"kind":"no-images","url":"https://gamebanana.com/dl/1858823","size":70056743}]}];
const steps={
 manager:{en:[['Close Deadlock.','Make sure the game is fully closed before adding or replacing mods.'],['Install package 01 once.','The shared compatibility base supports your Neco skins. Keep it enabled while using them.'],['Choose the components you need.','Download the ZIPs you want from this catalog, then import them into Deadlock Mod Manager. Read each included README.'],['Enable your selection.','Start Deadlock with mods through the manager. Keep only one version of each included feature.']],es:[['Cierra Deadlock.','El juego debe estar completamente cerrado antes de añadir o sustituir mods.'],['Instala el archivo 01 una vez.','La base de compatibilidad da soporte a tus skins Neco. Mantenla activa mientras las uses.'],['Elige los componentes que necesitas.','Descarga los ZIP que quieras desde este catálogo e impórtalos en Deadlock Mod Manager. Lee el README incluido en cada uno.'],['Activa tu selección.','Inicia Deadlock con mods desde el gestor. Mantén solo una versión de cada función incluida.']]},
 manual:{en:[['Close the game. Find its folder.','In Steam, open Deadlock → Properties → Installed Files → Browse. Make sure addon loading is enabled.'],['Start with 01. Add your favorites.','Get the compatibility base and the optional skin or feature ZIPs you want. Download each ZIP from this catalog. The grouped edition is also available on GameBanana.'],['Keep the folder structure intact.','Extract into the Deadlock installation folder, preserving <code>game/citadel/addons/</code>. Keep the supplied VPK filenames. Avoid creating a second nested game folder.'],['Check and launch.','Remove older duplicates of the same features, follow the README and launch the game. Keep backups when replacing files.']],es:[['Cierra el juego. Encuentra su carpeta.','En Steam, abre Deadlock → Propiedades → Archivos instalados → Explorar. La carga de addons debe estar habilitada.'],['Empieza por el 01. Añade tus favoritos.','Descarga la base y las skins o funciones que quieras. Descarga cada ZIP desde este catálogo. La edición agrupada también está en GameBanana.'],['Conserva la estructura de carpetas.','Extrae en la carpeta de instalación de Deadlock, conservando <code>game/citadel/addons/</code>. Mantén los nombres de los VPK. Evita crear una segunda carpeta game dentro de game.'],['Revisa e inicia el juego.','Retira los duplicados antiguos de las mismas funciones, sigue el README e inicia el juego. Conserva una copia al sustituir archivos.']]}
};
const faq={en:[['Do I need all the downloads?','No. The standalone skins above need no extra base. For the modular catalog, install 01 when using one or more of skins 02–06. Other feature packages are optional.'],['Can I combine several skins?','Yes, with the modular catalog: install base 01 once, then add the skins you want. The standalone publications are intended for one skin at a time.'],['Why are the website and GameBanana packages different?','GameBanana has a file-count limit, so related features are grouped there. This website catalogs the original individual files for more granular choices. Each component has its own ZIP download in this catalog.'],['Where is the map download?','Map Colors & Decorations is distributed separately from the main grouped collection. It remains original feature 19 in this catalog.'],['How should I report a problem?','Include your ZIP filenames, Deadlock version, installation method, affected character and other active mods. A short video or screenshot makes a big difference. Use the project’s GameBanana comments to send your report.']],es:[['¿Necesito descargarlo todo?','No. Las skins independientes de arriba no necesitan una base adicional. En el catálogo modular, instala el 01 si usas skins del 02 al 06. Las demás funciones son opcionales.'],['¿Puedo combinar varias skins?','Sí, con el catálogo modular: instala la base 01 una vez y añade las skins que quieras. Las publicaciones independientes son para usar una skin a la vez.'],['¿Por qué los paquetes de la web y GameBanana son diferentes?','GameBanana tiene un límite de archivos, así que allí se agrupan funciones relacionadas. Esta web muestra los archivos originales por separado para elegir con más libertad. Cada componente tiene su propia descarga ZIP en este catálogo.'],['¿Dónde está la descarga del mapa?','Colores del mapa y decoraciones se distribuye aparte de la colección agrupada principal. En este catálogo conserva el número original 19.'],['¿Cómo reporto un problema?','Indica los ZIP instalados, la versión de Deadlock, el método de instalación, el personaje afectado y otros mods activos. Una captura o un vídeo ayudan mucho. Puedes enviar tu reporte en los comentarios del proyecto en GameBanana.']]};
function remember(){try{localStorage.setItem('neco-language',language);localStorage.setItem('neco-selection',JSON.stringify([...selected]));}catch{}}
function applyLanguage(){
 document.documentElement.lang=language;
 document.querySelectorAll('[data-i18n]').forEach(el=>el.innerHTML=(language==='es'?spanish:english)[el.dataset.i18n]||english[el.dataset.i18n]||el.innerHTML);
 $('#language').innerHTML=language==='en'?'EN <span>↔</span> ES':'ES <span>↔</span> EN';
 $('#language').setAttribute('aria-label',text('Switch language to Spanish','Cambiar idioma a inglés'));
 $('#catalog-search').placeholder=text('Search components…','Buscar componentes…');
 renderSkins();renderInstallation();renderFaq();if(activeStandalone)openSkinDetails(activeStandalone);if(catalog){renderCatalog();renderSelection();}remember();document.dispatchEvent(new CustomEvent("neco:languagechange"));
}
function renderSkins(){
 $('#skin-roster').innerHTML=skins.map(s=>`<button class="skin-card" data-skin="${s.number}" aria-label="${text('Explore','Explorar')} ${esc(s.name)}"><span class="skin-card-top"><span>${text('STANDALONE SKIN','SKIN INDEPENDIENTE')}</span><span>↗</span></span><div class="skin-portrait"><img src="assets/${s.image}.webp" alt="${esc(s.name)} — ${s.hero}" loading="lazy" width="280" height="380"></div><span class="skin-name"><strong>${esc(s.name)}</strong><span>${s.hero}<span><img class="neco-mark" src="assets/neco-face.png" alt="" aria-hidden="true" width="24" height="24"></span></span></span></button>`).join('');
 document.querySelectorAll('[data-skin]').forEach(b=>b.addEventListener('click',()=>openSkinDetails(b.dataset.skin)));
}
function renderInstallation(){
 const panel=$('#installation-panel');panel.setAttribute('aria-labelledby','tab-'+method);
 panel.innerHTML=steps[method][language].map((s,i)=>`<div class="install-step"><span class="step-number">0${i+1}</span><div><h3>${s[0]}</h3><p>${s[1]}</p></div></div>`).join('');
 document.querySelectorAll('[data-method]').forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.method===method));b.tabIndex=b.dataset.method===method?0:-1;});
}
function renderFaq(){$('#faq-list').innerHTML=faq[language].map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('');}
function renderCatalog(){
 const found=catalog.files.filter(f=>(category==='all'||f.category===category)&&(!query||[f.number,f.title,f.titleEs,f.description,f.descriptionEs].some(t=>t.toLowerCase().includes(query))));
 $('#catalog-list').innerHTML=found.slice(0,visibleCount).map(f=>`<article class="file-row ${f.legacy?'legacy-row':''}"><span class="file-number">${f.number}</span><div><button class="file-title" data-details="${f.number}">${esc(title(f))}</button><p class="file-description">${esc(description(f))}</p><div class="file-meta"><span>${size(f.size)}</span>${f.number==='01'?`<span class="file-tag required">${text('START HERE','EMPIEZA AQUÍ')}</span>`:f.legacy?`<span class="file-tag legacy">${text('INACTIVE LEGACY','ANTIGUO · DESACTIVADO')}</span>`:f.requires.length?`<span class="file-tag">${text('REQUIRES 01','REQUIERE 01')}</span>`:`<span class="file-tag">${text('OPTIONAL','OPCIONAL')}</span>`}</div>${f.downloadUrl?`<a class="file-download" href="${esc(f.downloadUrl)}" aria-label="${text('Download ZIP','Descargar ZIP')} ${esc(title(f))}">${text('Download ZIP','Descargar ZIP')} ↓</a>`:''}</div><button class="file-select" data-select="${f.number}" aria-pressed="${selected.has(f.number)}" aria-label="${selected.has(f.number)?text('Remove','Quitar'):text('Add','Añadir')} ${esc(title(f))}" ${f.number==='01'||f.legacy?'disabled':''}>${selected.has(f.number)?'✓':f.legacy?'—':'+'}</button></article>`).join('');
 if(found.length>visibleCount){const more=document.createElement('button');more.className='button catalog-more';more.textContent=text(`Show more files (${found.length-visibleCount}) ↓`,`Ver más archivos (${found.length-visibleCount}) ↓`);more.addEventListener('click',()=>{visibleCount+=10;renderCatalog();});$('#catalog-list').append(more);}
 $('#empty-state').hidden=found.length!==0;
 document.querySelectorAll('[data-details]').forEach(b=>b.addEventListener('click',()=>openDetails(b.dataset.details)));
 document.querySelectorAll('[data-select]').forEach(b=>b.addEventListener('click',()=>toggleSelection(b.dataset.select)));
}
function toggleSelection(number){if(number==='01'||number==='25')return;if(selected.has(number))selected.delete(number);else selected.add(number);selected.add('01');remember();renderCatalog();renderSelection();}
function renderSelection(){const files=catalog.files.filter(f=>selected.has(f.number)&&!f.legacy);$('#setup-count').textContent=String(files.length).padStart(2,'0');$('#selection-list').innerHTML=files.map(f=>`<div class="selected-item"><span>${f.number}</span>${f.downloadUrl?`<a class="selected-download" href="${esc(f.downloadUrl)}">${esc(title(f))} ↓</a>`:`<span>${esc(title(f))}</span>`}</div>`).join('');$('#setup-size').textContent=size(files.reduce((n,f)=>n+f.size,0));}

function openSkinDetails(number){
 const skin=skins.find(s=>s.number===number);if(!skin)return;
 activeStandalone=number;
 $('#dialog-number').textContent=text('STANDALONE SKIN / NO EXTRA PACKAGE','SKIN INDEPENDIENTE / SIN PAQUETE ADICIONAL');
 $('#dialog-content').innerHTML=`<img class="dialog-art" src="assets/${skin.image}.webp" alt="${esc(skin.name)}"><h3>${esc(skin.name)}</h3><p class="standalone-hero">${esc(skin.hero)}</p><p>${text('One complete character skin with its support files included. No separate package 01 is required.','Una skin completa con su soporte integrado. No necesita descargar el paquete 01 por separado.')}</p><p>${text('Includes character models, animations, shop dance, selection/MVP/key-player presentation, portraits, voices, sounds and associated effects.','Incluye modelos, animaciones, baile de tienda, presentación de selección/MVP/jugador clave, retratos, voces, sonidos y efectos asociados.')}</p><div class="standalone-variants">${skin.variants.map(v=>`<section class="standalone-variant"><h4>${v.kind==='complete'?text('Complete','Completa'):text('No ability images','Sin imágenes de habilidades')}</h4><p>${v.kind==='complete'?text('All skin content, including custom ability icons and images/GIFs.','Todo el contenido de la skin, incluidos los iconos e imágenes/GIF de habilidades.'):text('The same skin with original ability icons and no cast images/GIFs.','La misma skin con iconos originales y sin imágenes/GIF al usar habilidades.')}</p><a class="button ${v.kind==='complete'?'button-red':'button-dark'}" href="${esc(v.url)}">${text('Download','Descargar')} · ${size(v.size)} ↓</a></section>`).join('')}</div><p class="standalone-note">${text('Choose one variant. These standalone packages are for one Neco skin at a time.','Elige una sola variante. Estos paquetes independientes son para usar una skin Neco a la vez.')}</p><div class="skin-gameplay"><h4>${text('Gameplay video','Vídeo del mod en juego')}</h4><iframe src="https://www.youtube-nocookie.com/embed/${skin.videoId}?start=${skin.videoStart}&rel=0" title="${esc(skin.name)} — ${text('gameplay','mod en juego')}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe><a href="${esc(skin.videoUrl)}" target="_blank" rel="noopener noreferrer">${text('Watch on YouTube','Ver en YouTube')} ↗</a></div><div class="standalone-links"><a class="button button-dark" href="${esc(skin.standaloneUrl)}" target="_blank" rel="noopener noreferrer">${text('This skin on GameBanana','Esta skin en GameBanana')} ↗</a><button class="button standalone-modular" id="skin-modular-details">${text('Combine skins: modular version','Combinar skins: versión modular')} →</button></div><p class="standalone-note">${text('To combine several Neco skins, use the modular catalog and its shared base 01. Follow the README included with each download.','Para combinar varias skins Neco, usa el catálogo modular y su base compartida 01. Sigue el README incluido en cada descarga.')}</p>`;
 $('#skin-modular-details').addEventListener('click',()=>{$('#file-dialog').close();activeStandalone=null;openDetails(number);});
 if(!$('#file-dialog').open)$('#file-dialog').showModal();
}

function openDetails(number){
 activeStandalone=null;
 if(!catalog)return;
 const f=catalog.files.find(f=>f.number===number);if(!f)return;const skin=skins.find(s=>s.number===number);
 $('#dialog-number').textContent=`${text('ORIGINAL FILE','ARCHIVO ORIGINAL')} ${number} / R42`;
 $('#dialog-content').innerHTML=`${skin?`<img class="dialog-art" src="assets/${skin.image}.webp" alt="${esc(skin.name)}">`:''}<h3>${esc(title(f))}</h3><p>${esc(description(f))}</p><p>${f.legacy?text('This is an inactive legacy file. It is not part of the recommended setup.','Este archivo antiguo está desactivado y no forma parte de la selección recomendada.'):f.number==='01'?text('Install once. This is the shared support for all five character skins.','Instálalo una vez. Es el soporte compartido de las cinco skins.'):f.requires.length?text('Requires package 01, installed once.','Requiere el archivo 01, instalado una sola vez.'):text('An optional independent feature.','Una función independiente y opcional.')}</p><p class="dialog-file">${esc(f.filename)}<br>${size(f.size)}</p>${!f.legacy&&f.number!=='01'?`<button class="button button-red" id="dialog-select">${selected.has(number)?text('Remove from setup','Quitar de mi selección'):text('Add to my setup','Añadir a mi selección')} <span>+</span></button>`:''}${!f.legacy?`<a class="button button-dark" href="${catalog.gamebananaUrl}" target="_blank" rel="noopener noreferrer">${text('Collection on GameBanana','Colección en GameBanana')} ↗</a>`:''}${f.downloadUrl?`<a class="button button-red" href="${esc(f.downloadUrl)}">${text('Download ZIP','Descargar ZIP')} ↓</a>`:''}<small class="pending-download">${text('Read the README included in the ZIP before installing.','Lee el README incluido en el ZIP antes de instalar.')}</small>`;
 $('#dialog-select')?.addEventListener('click',()=>{toggleSelection(number);$('#file-dialog').close();showToast(text('Your setup has been updated.','Tu selección se ha actualizado.'));});
 $('#file-dialog').showModal();
}
function showToast(message){const toast=$('#toast');toast.textContent=message;toast.classList.add('visible');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('visible'),3300);}
function saveList(){
 if(!catalog)return;
 const files=catalog.files.filter(f=>selected.has(f.number)&&!f.legacy);
 const content=["GREAT CAT'S VILLAGE R — MY INSTALLATION LIST",`Version: ${catalog.version}`,`Selected: ${files.length} original features`,`Estimated individual ZIP size: ${size(files.reduce((n,f)=>n+f.size,0))}`,'',...files.map(f=>`[ ] ${f.number} — ${title(f)}\n    ${f.filename}\n    ${size(f.size)}\n    ${f.downloadUrl||''}`),'','INSTALLATION','1. Close Deadlock.','2. Install package 01 once for the Neco skins.','3. Install selected features, preserving game/citadel/addons/ and the VPK filenames.','4. Avoid duplicate versions and follow the included README.','','GAMEBANANA GROUPING','The GameBanana collection groups some of these original features. Do not install individual files together with a grouped package that already contains them.',catalog.gamebananaUrl,'','Download each ZIP using the links above. This file is an installation checklist.',''].join('\n');
 const url=URL.createObjectURL(new Blob([content],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='Great-Cats-Village-R-my-setup.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);showToast(text('Your installation list is ready.','Tu lista de instalación está lista.'));
}
$('#language').addEventListener('click',()=>{language=language==='en'?'es':'en';applyLanguage();});
document.querySelectorAll('[data-method]').forEach(b=>{b.addEventListener('click',()=>{method=b.dataset.method;renderInstallation();});b.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();method=method==='manager'?'manual':'manager';renderInstallation();$('#tab-'+method).focus();}});});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;visibleCount=8;document.querySelectorAll('[data-filter]').forEach(el=>el.classList.toggle('active',el===b));renderCatalog();}));
$('#catalog-search').addEventListener('input',e=>{query=e.target.value.toLowerCase().trim();visibleCount=8;renderCatalog();});
$('#reset-list').addEventListener('click',()=>{selected=new Set(['01']);remember();renderCatalog();renderSelection();});
$('#save-list').addEventListener('click',saveList);$('#close-dialog').addEventListener('click',()=>$('#file-dialog').close());
$('#file-dialog').addEventListener('close',()=>{activeStandalone=null;$('#dialog-content').querySelectorAll('iframe').forEach(frame=>frame.remove());});
$('#file-dialog').addEventListener('click',e=>{if(e.target===$('#file-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
applyLanguage();
fetch('catalog.json?v=r42-downloads').then(r=>{if(!r.ok)throw new Error('catalog');return r.json();}).then(data=>{catalog=data;selected=new Set([...selected].filter(n=>catalog.files.some(f=>f.number===n&&!f.legacy)));selected.add('01');renderCatalog();renderSelection();}).catch(()=>{$('#catalog-list').innerHTML=`<p>${text('The catalog could not load. Please refresh this page.','No se pudo cargar el catálogo. Actualiza esta página.')}</p>`;$('#save-list').disabled=true;});
