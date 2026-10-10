---
name: ux-tactil-nativa
description: Use when building or refining the mobile touch experience of this site — navigation menus, tap targets, carousels, sticky headers and floating actions — so the web app feels native on iOS and Android. Adopts the principles of Ionic Framework (https://github.com/ionic-team/ionic-framework) in vanilla HTML + CSS + JS, without adding Ionic or any dependency. Trigger on "táctil", "touch", "tap", "móvil", "app nativa", "menú hamburguesa", "navegación móvil", "áreas táctiles", "se siente nativo", "dedo", "48px".
---

# UX táctil nativa

Traduce los **principios** de Ionic Framework
(<https://github.com/ionic-team/ionic-framework>) a un sitio estático: mismas
sensaciones que una app nativa (áreas táctiles generosas, transiciones suaves,
navegación pensada para el dedo) **sin importar Ionic ni añadir dependencias**.

## Reglas táctiles

1. **Área mínima de toque: 48×48px** (o `44px` como mínimo absoluto). Aplica a
   botones, enlaces de navegación, íconos y controles. Si el diseño pide algo
   más pequeño, aumenta el `padding` o usa un pseudo-elemento para agrandar el
   área sin cambiar el aspecto.
2. **Separación entre objetivos táctiles** de al menos 8px para evitar toques
   accidentales.
3. **Feedback inmediato.** Cada elemento interactivo necesita estado `:active`
   (cambio sutil de fondo/opacidad) o transición corta (<200ms). No dependas
   de `:hover`, que no existe en pantallas táctiles.
4. **Menú móvil como panel (`<=780px`).** El `.nav` ya funciona como off-canvas
   bajo el header (`top: 66px`). Mantén: fondo sólido, borde inferior, enlaces
   a fila completa con `padding: 12px 8px`, y `aria-expanded`/`aria-controls`
   en `.menu-toggle`.
5. **Cabeceras y acciones flotantes.** El header es `sticky`; respeta el
   respiro bajo él al fijar cosas. El botón de WhatsApp (`.whatsapp-flotante`)
   debe quedar dentro del área segura.
6. **Áreas seguras (notch/home indicator).** En elementos fijos usa
   `env(safe-area-inset-*)`, por ejemplo:
   `bottom: calc(16px + env(safe-area-inset-bottom));`.
7. **Carrusel táctil fluido.** Usa `-webkit-overflow-scrolling: touch`,
   `scroll-snap-type` en `.carousel-thumbs` y `touch-action: manipulation` en
   controles para evitar el retraso del doble-toque.
8. **Sin resaltados feos al tocar.** Controla `-webkit-tap-highlight-color` en
   `body` (usa un tinte del acento, no el azul por defecto).

## Cómo trabajar

1. Revisa en `styles.css` los bloques de `.nav`, `.menu-toggle`,
   `.whatsapp-flotante`, `.carousel-*` y `.btn` antes de tocar nada.
2. Mantén el diseño sobrio actual: nada de animaciones exageradas ni
   "bounce"; transiciones de 150–250ms con easing suave.
3. Prueba con el modo táctil / device emulation del navegador y a 320–414px.

## Checklist

- [ ] ¿Todo control mide al menos 48×48px (o 44px mínimo)?
- [ ] ¿Hay feedback `:active` sin depender de `:hover`?
- [ ] ¿El menú móvil abre/cierra y es navegable con el pulgar?
- [ ] ¿Los elementos fijos respetan `env(safe-area-inset-*)`?
- [ ] ¿Los carruseles hacen scroll con inercia y snap?
