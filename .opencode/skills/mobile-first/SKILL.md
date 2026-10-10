---
name: mobile-first
description: Use when building, styling or reviewing responsive/mobile layouts in this project (HTML + CSS + JS vanilla, sin frameworks). Enforces mobile-first methodology — base styles for the smallest screen and media queries to scale up — fluid sizing with clamp()/porcentajes/fr, no fixed pixel widths, and the project breakpoints. Trigger on "mobile-first", "responsive", "responsivo", "móvil", "celular", "adaptativo", "media queries", "breakpoints", "se ve cortado en el celular", "scroll horizontal".
---

# Mobile-first (responsive sin frameworks)

Adopta los **principios** de Tailwind CSS (<https://github.com/tailwindlabs/tailwindcss>)
—diseñar primero para la pantalla más pequeña y ampliar hacia arriba— pero
implementados con el CSS propio del proyecto. **No agregar Tailwind, dependencias
ni build**: el stack es HTML + `assets/css/styles.css` + JS vanilla.

## Principios

1. **El CSS base es el móvil.** Escribe primero para ~320–390px y amplía el
   layout en pantallas grandes con `@media`. Al añadir estilos, pregúntate:
   ¿esto ya se ve bien en un teléfono de 360px?
2. **Cero anchos fijos en píxeles.** Usa unidades fluidas:
   - `width: 100%`, `%`, `fr`, `min()`, `max()`, `clamp()`.
   - Grids: `repeat(auto-fill, minmax(min(320px, 100%), 1fr))` para que una
     pista nunca exceda el contenedor (evita scroll horizontal).
   - Tipografía: `font-size: clamp(min, vw, max)` como en `.hero h1`.
3. **Breakpoints del proyecto.** La convención actual es **descendente** con
   `max-width` (no rompas la coherencia creando otro sistema):
   - `<=1000px`: grids anchos a 1 columna (`detalle-grid`, `contacto-grid`,
     `servicios-grid`), `.panel` deja de ser sticky.
   - `<=780px`: menú hamburguesa, topbar compacta, hero más bajo, `complejos`
     y `footer-grid` a 1 columna.
   - `<=560px`: ajustes finos de teléfono (padding de `.contenedor` 18px,
     áreas táctiles, botones a ancho completo en `.banda`).
4. **Nada de overflow horizontal.** Verifica siempre a 320px. Sospechosos
   típicos: `minmax(320px, 1fr)`, tablas, correos largos (usa
   `overflow-wrap: anywhere`), imágenes sin `max-width: 100%`.
5. **Imágenes fluidas:** `max-width: 100%`, `display: block`, `aspect-ratio`
   fijo (16/10 tarjetas, 4/3 carrusel en móvil), `object-fit: cover`.
6. **Menos es más en móvil:** oculta información secundaria (horario en la
   topbar), apila CTAs, reduce padding vertical de secciones (~52px).

## Cómo trabajar

1. Lee `assets/css/styles.css` y reutiliza tokens (`--contenedor`, radios,
   colores) y las clases existentes antes de inventar nuevas.
2. Haz el cambio más pequeño posible; edítalo dentro del bloque `@media`
   correspondiente, no dupliques reglas base.
3. Verifica con `node --check assets/js/*.js` si tocas JS, y revisa el layout
   a 320, 360, 390, 414, 768, 1024 y 1280px (modo dispositivo del navegador).
4. Responde en español y explica el ajuste solo si aporta.

## Checklist

- [ ] ¿Se ve bien a 320px sin scroll horizontal?
- [ ] ¿Usé `%`/`fr`/`clamp()` y evité `px` de ancho fijo?
- [ ] ¿El layout va dentro del breakpoint correcto (1000/780/560)?
- [ ] ¿Reutilicé tokens y clases existentes?
- [ ] ¿Imágenes con `max-width`, `aspect-ratio` y `alt`?
