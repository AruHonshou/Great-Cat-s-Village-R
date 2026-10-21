# GREAT CAT’S VILLAGE R

Sitio oficial del proyecto de mods de Deadlock de AruHonshou.

## Publicación gratuita

- `site/`: página estática para GitHub Pages; los cambios en main se publican automáticamente mediante GitHub Actions. En Settings → Pages, la fuente debe ser **GitHub Actions**.
- `receiver/`: receptor ligero para Cloudflare Workers Free y D1 Free. No requiere un servidor encendido ni un plan de pago.
- `site/site-config.js`: dirección pública del receptor; no contiene claves. Apunta al receptor de Cloudflare de AruHonshou, que conserva el ranking y consulta el contador actualizado.

La página consulta el contador cada cinco minutos y el ranking cada minuto mientras su ventana está abierta. Las donaciones llegan al receptor aunque nadie tenga abierta la web. Se conservan los límites de los planes gratuitos; el servicio guarda en caché las consultas públicas.

## Conexión del receptor

1. Iniciar sesión en una cuenta de Cloudflare con Workers Free.
2. Crear una D1 llamada `great-cats-village`.
3. Copiar `receiver/wrangler.example.json` a `receiver/wrangler.json` y usar el ID real de D1.
4. Aplicar `receiver/migrations/0001_initial.sql` y desplegar el Worker.
5. Guardar los secretos DONOR_ID_SECRET y DONOR_IMPORT_TOKEN, y después KOFI_VERIFICATION_TOKEN y BMAC_SIGNING_SECRET. Se cargan como secretos del Worker, nunca en este repositorio.
6. Importar una vez el historial original desde los CSV privados; no subirlos a GitHub.
7. Configurar los webhooks de Ko-fi y Buy Me a Coffee con la URL real del Worker y las rutas `/api/webhooks/kofi` y `/api/webhooks/bmac`.
8. Cambiar apiBase en `site/site-config.js` por la URL del Worker. Un push vuelve a publicar la página automáticamente.

## Datos

Solo se muestran nombres públicos, plataforma, aportes y usuarios de perfil cuando la plataforma los proporciona. Los correos se transforman en identificadores privados HMAC y no se guardan ni publican. Los reintentos de pagos no duplican importes. Las monedas se clasifican por separado. Las personas de plataformas diferentes no se fusionan solo por tener el mismo nombre. Las devoluciones de Buy Me a Coffee se descuentan; Ko-fi requiere reconciliación con su historial porque no ofrece ese evento en la integración utilizada.

Los mods y sus copias funcionales no se modifican ni se incluyen en este repositorio.

