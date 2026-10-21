/* Commission brief and decorative motion. No form data leaves this page. */
(() => {
  const services = [
    {id:'model', en:'Character model replacement', es:'Reemplazo de modelo de personaje', rate:40},
    {id:'asset', en:'Custom image or sound', es:'Imagen o sonido personalizado', rate:10},
    {id:'animated', en:'Animated poses', es:'Poses animadas', rate:40},
    {id:'particles', en:'Particle changes', es:'Cambios de partículas', rate:30},
    {id:'presentation', en:'Selection / MVP / key player pose', es:'Pose de selección / MVP / jugador clave', rate:30},
    {id:'objects', en:'Object modelling', es:'Modelado de objetos', rate:40}
  ];
  const selector = document.querySelector('#commission-service');
  const quantity = document.querySelector('#commission-quantity');
  const details = document.querySelector('#commission-details');
  const status = document.querySelector('#brief-status');
  const motion = document.querySelector('#motion-toggle');
  const es = () => document.documentElement.lang === 'es';
  let hidden = false;
  try { hidden = localStorage.getItem('neco-decorations') === 'hidden'; } catch {}
  function updateEstimate() {
    const service = services.find(s => s.id === selector.value) || services[0];
    document.querySelector('#quantity-field').hidden = service.id !== 'asset';
    quantity.required = service.id === 'asset';
    const units = service.id === 'asset' ? Math.max(1, Math.min(100, Number(quantity.value) || 1)) : 1;
    document.querySelector('#commission-estimate').textContent = `$${service.rate * units} USD`;
  }
  function updateLanguage() {
    const value = selector.value || 'model';
    selector.replaceChildren(...services.map(service => {
      const option = document.createElement('option');
      option.value = service.id;
      option.textContent = `${es() ? service.es : service.en} — $${service.rate}`;
      return option;
    }));
    selector.value = value;
    details.placeholder = es() ? 'Describe el cambio e incluye referencias o requisitos…' : 'Describe the change and include references or requirements…';
    motion.textContent = hidden ? (es() ? 'Mostrar decoraciones animadas' : 'Show animated decorations') : (es() ? 'Ocultar decoraciones animadas' : 'Hide animated decorations');
    motion.setAttribute('aria-pressed', String(hidden));
    updateEstimate();
  }
  document.querySelector('#commission-form').addEventListener('submit', async event => {
    event.preventDefault();
    const service = services.find(s => s.id === selector.value) || services[0];
    const units = service.id === 'asset' ? Math.max(1, Math.min(100, Number(quantity.value) || 1)) : 1;
    const message = [
      es() ? 'Solicitud de encargo — AruHonshou' : 'Mod commission request — AruHonshou',
      `${es() ? 'Servicio' : 'Service'}: ${es() ? service.es : service.en}`,
      `${es() ? 'Cantidad' : 'Quantity'}: ${units}`,
      `${es() ? 'Precio publicado' : 'Listed service price'}: $${service.rate * units} USD`,
      '', details.value.trim(), '',
      es() ? 'Me gustaría confirmar el alcance y la disponibilidad.' : 'I would like to confirm the scope and availability.'
    ].join('\n');
    try {
      await navigator.clipboard.writeText(message);
      status.textContent = es() ? 'Solicitud copiada. Envíamela por X o Discord.' : 'Request copied. Send it to me on X or Discord.';
    } catch {
      const url = URL.createObjectURL(new Blob([message], {type:'text/plain;charset=utf-8'}));
      const anchor = document.createElement('a');
      anchor.href = url; anchor.download = 'AruHonshou-commission-request.txt';
      anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
      status.textContent = es() ? 'Solicitud descargada. Puedes enviarla por X o Discord.' : 'Request downloaded. You can send it on X or Discord.';
    }
  });
  selector.addEventListener('change', updateEstimate);
  quantity.addEventListener('input', updateEstimate);
  motion.addEventListener('click', () => {
    hidden = !hidden;
    document.documentElement.classList.toggle('motion-off', hidden);
    try { localStorage.setItem('neco-decorations', hidden ? 'hidden' : 'visible'); } catch {}
    updateLanguage();
  });
  document.documentElement.classList.toggle('motion-off', hidden);
  document.addEventListener('neco:languagechange', updateLanguage);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) entry.target.classList.toggle('in-view', entry.isIntersecting);
    }, {rootMargin:'80px'});
    document.querySelectorAll('.scene-divider').forEach(divider => observer.observe(divider));
  } else {
    document.querySelectorAll('.scene-divider').forEach(divider => divider.classList.add('in-view'));
  }
  updateLanguage();
})();
