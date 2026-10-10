# AGENTS.md — Memoria del proyecto

Sitio web estático para **Bodegas de Yucatán** (renta de bodegas industriales en
Mérida, Yucatán). Sin build ni frameworks: HTML + CSS propio + JavaScript vanilla.

## Estructura

```
index.html          Home (hero, métricas, complejos, destacadas, CTA)
paginas/
  bodegas.html      Catálogo con filtro por complejo (#filtroComplejo)
  bodega.html       Plantilla de detalle (?id=<slug>) con carrusel, lightbox,
                    compartir e imprimir/PDF
  servicios.html    Servicios
  nosotros.html     Nosotros
  contacto.html     Contacto
assets/css/styles.css   Sistema visual completo (tokens, componentes, print)
assets/js/data.js       Datos: SITIO + arreglo BODEGAS (fuente de verdad)
assets/js/main.js       Render de tarjetas/catálogo/detalle + interacción
assets/img/             Fotos de bodegas (Pexels)
.opencode/skills/       Skills del proyecto
opencode.json           Config de opencode (registra .opencode/skills)
demo_bodega_imprimir.pdf  Referencia del documento imprimible
```

## Comandos

- Verificar JS: `node --check assets/js/data.js` y `node --check assets/js/main.js`
- Abrir el sitio: abrir `index.html` y `paginas/bodega.html?id=bodega-crit-13` en el navegador
- (Windows PowerShell) abrir con URL file:// para probar el query `?id=`

## Convenciones

- **Datos centralizados** en `assets/js/data.js`; no hardcodear contenido en el HTML.
- **Rutas**: `index.html` vive en la raíz y las páginas principales en `paginas/`.
  `data.js` calcula `RUTA_RAIZ` / `RUTA_PAGINAS` según la ubicación, y `main.js`
  las usa para enlaces e imágenes; al añadir páginas, mantener estas rutas.
- **Diseño**: minimalista, sobrio, corporativo. Tokens en `:root` de `styles.css`.
  Acento verde `#1c6b57`, tinta `#111827`, líneas `#e5e7eb`. Sin degradados ni
  sombras pesadas. Reutilizar clases existentes (`.btn`, `.tarjeta`, `.seccion`,
  `.panel`, `.carousel`, `.print-*`).
- **Tipografía**: Inter (marca) + JetBrains Mono para datos numéricos.
- **Íconos**: SVG de línea vía `currentColor`. Nunca emojis.
- **Imágenes**: reales, `object-fit: cover`, `alt` descriptivo, `loading="lazy"`.
- **Imprenta/PDF**: se genera con `window.print()` sobre `.print-doc` (CSS en
  `@media print`); el documento usa los datos de la bodega actual.
- **Idioma**: responder en español; comentarios de código mínimos (solo cuando aportan).

## Flujo de trabajo

`plan -> implementar -> verificar -> recordar`

1. Revisar `data.js` y `styles.css` antes de tocar UI.
2. Implementar cambios pequeños y enfocados.
3. Verificar (ver Comandos) y revisar el diff.
4. Anotar decisiones/comandos nuevos en este archivo.

## Skills disponibles (`.opencode/skills/`)

- `diseno-frontend` — sistema visual del proyecto (minimalista sobrio).
- `frontend-taste-engineer` — anti-slop, tipografía, datos en mono.
- `v0-ui-design` — HTML semántico, a11y, imágenes reales.
- `lovable-design-system` — tokens semánticos, SEO/a11y.
- `a2ui-agent-architect` — agentes que generan UI.
- `claude-prompts-library` — cómo escribir prompts/SKILL.md.
- `composio-skills-catalog` — cuándo/cómo crear una skill repetible.
- `everything-claude-code` — orden, memoria y calidad (este flujo).
- `awesome-claude-code` — buenas prácticas y estructura.

> Nota: opencode carga config/skills **al iniciar**; reinicia opencode tras editar
> `opencode.json` o las skills.

## Pendientes / mejoras

- Ajustar el layout exacto del PDF si se confirma el formato de `demo_bodega_imprimir.pdf`
  (es imagen/vector, sin texto extraíble).
- Optimizar imágenes a WebP/AVIF si se requiere rendimiento.
