(() => {
 const configured=String(window.NECO_SITE_CONFIG?.apiBase||'').trim();
 const base=new URL(configured||location.origin);
 if(!['https:','http:'].includes(base.protocol))throw new Error('Invalid service URL');
 window.necoApi=Object.freeze({url(path){if(!path.startsWith('/api/'))throw new Error('Invalid API route');return new URL(path,base).href;}});
})();
