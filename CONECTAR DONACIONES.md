# Conectar donaciones nuevas

La página se publica en https://aruhonshou.github.io/Great-Cat-s-Village-R/

El receptor está en tu cuenta de Cloudflare, con Workers y D1 gratuitos. No cambies de plan para conectar las donaciones.

## Ko-fi

1. Abre https://ko-fi.com/manage/webhooks e inicia sesión.
2. Usa esta dirección de webhook: `https://great-cats-village-api.aruhonshou.workers.dev/api/webhooks/kofi`.
3. Copia el **Verification Token** que muestra Ko-fi.
4. En Cloudflare → Workers & Pages → great-cats-village-api → Settings → Variables and Secrets, crea un secreto llamado `KOFI_VERIFICATION_TOKEN` con ese token. Guárdalo como **Secret**, no como texto público.
5. Guarda el webhook en Ko-fi. Sus avisos verificados actualizarán el ranking; las aportaciones privadas no se mostrarán.

## Buy Me a Coffee

1. En el panel de Buy Me a Coffee, abre la integración de webhooks y añade un webhook.
2. Usa `https://great-cats-village-api.aruhonshou.workers.dev/api/webhooks/bmac`.
3. Activa los eventos `donation.created` y `donation.refunded`.
4. Copia el **signing secret** de ese webhook. En el mismo Worker, guárdalo como secreto llamado `BMAC_SIGNING_SECRET`.
5. Guarda el webhook. El receptor comprueba la firma antes de registrar una aportación. Los eventos de prueba no se suman al ranking real.

## Comprobación

El ranking consulta los datos cada minuto mientras está abierto. El contador de descargas se consulta al cargar la página y cada cinco minutos. Los avisos de pago llegan aunque la página esté cerrada.

La respuesta pública de `/api/donors` indica qué conexiones están configuradas y cuándo llegó su último aviso. Tener el secreto configurado no demuestra por sí solo que el proveedor esté enviando avisos: revisa también el historial de entregas en su panel.

No publiques tokens, correos de donantes ni archivos CSV en GitHub. Los límites del plan gratuito siguen aplicándose. Ko-fi no proporciona avisos de devolución en esta integración; esas devoluciones necesitan reconciliación con el historial.
