# Bodegas de Yucatán

Sitio web para promoción y renta de bodegas industriales en Mérida, Yucatán.
Sitio **estático** (HTML + CSS + JavaScript), sin dependencias ni build.

## Características

- **Catálogo** de bodegas con filtro por complejo.
- **Detalle por bodega** con carrusel de imágenes, **lightbox** a pantalla
  completa (navegación con teclado) y especificaciones técnicas.
- **Compartir** (Web Share API / copiar enlace) y **descargar PDF** de los datos
  de la bodega actual (Imprimir / Guardar como PDF).
- CTA a **WhatsApp** en todo el sitio.
- Diseño minimalista y corporativo, responsive.

## Estructura

```
index.html            Home (raíz)
paginas/
  bodegas.html        Catálogo
  bodega.html         Detalle (?id=<slug>)
  servicios.html      Servicios
  nosotros.html       Nosotros
  contacto.html       Contacto
assets/css/styles.css
assets/js/data.js
assets/js/main.js
assets/img/
```

## Uso local

No requiere servidor. Abre `index.html` en el navegador.
Para probar el detalle con parámetro, abre:

```
paginas/bodega.html?id=bodega-crit-13
```

En Windows (PowerShell):

```powershell
$base = (Get-Location).Path -replace '\\','/'
Start-Process "file:///$base/paginas/bodega.html?id=bodega-crit-13"
```

## Cómo editar el contenido

Todo el contenido vive en `assets/js/data.js`:

- `SITIO` — nombre, teléfono, WhatsApp, correo, dirección, horario.
- `BODEGAS` — arreglo de bodegas. Para agregar una, copia un bloque y ajusta los
  campos (`id`, `titulo`, `complejo`, `area`, `precio`, `precioTexto`, `ubicacion`,
  `andenes`, `altura`, `fondo`, `seguridad`, `oficinas`, `estado`, `imagen`,
  `fotos`, `descripcion`).

## Verificación

```powershell
node --check assets/js/data.js
node --check assets/js/main.js
```

## Configuración del agente

La carpeta `.opencode/skills/` contiene las skills del proyecto y
`opencode.json` las registra. **Reinicia opencode** después de editar la config
o las skills.

Ver también [`AGENTS.md`](AGENTS.md) para la memoria del proyecto.
