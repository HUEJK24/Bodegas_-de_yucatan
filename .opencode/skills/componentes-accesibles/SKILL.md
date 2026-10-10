---
name: componentes-accesibles
description: Use when building or reviewing interactive overlays in this project — lightbox/galería, modales, menús, selects y popovers — with correct accessibility and mobile behavior, so panels never overflow the viewport or get stuck behind the virtual keyboard. Adopts the principles of shadcn/ui + Radix UI (https://github.com/shadcn-ui/ui) in vanilla HTML + CSS + JS, without adding those libraries. Trigger on "lightbox", "modal", "popover", "dropdown", "accesibilidad", "a11y", "aria", "foco", "focus", "teclado", "select", "carrusel", "overlay".
---

# Componentes accesibles (patrones shadcn/Radix)

Aplica los **principios** de shadcn/ui y Radix UI
(<https://github.com/shadcn-ui/ui>) —componentes accesibles y con comportamiento
táctil impecable— construidos a mano con HTML + JS vanilla. **No agregar
shadcn, Radix, React ni dependencias.**

## Reglas para overlays (modal, lightbox, menú)

1. **Semántica y ARIA.** El contenedor del overlay: `role="dialog"` y
   `aria-modal="true"`; botones de acción con `aria-label`. El disparador
   (ej. `.menu-toggle`) lleva `aria-expanded` y, si aplica, `aria-controls`.
2. **Gestión de foco.** Al abrir: mueve el foco al overlay y **atrápalo** dentro
   (`Tab` no debe salir). Al cerrar: devuélvelo al elemento que lo abrió.
3. **Cierre accesible.** Cierra con `Escape`, con clic en el fondo y con un
   botón visible de cerrar. En móvil, además, gesto/deslizamiento si es natural.
4. **Bloqueo de scroll del fondo.** Mientras el overlay está abierto, bloquea
   el `overflow` del `body` para que no haga scroll detrás.
5. **Nunca se salga de pantalla.** Posiciona paneles con `inset`, `max-width`
   y `max-height` relativos al viewport (`vw`/`vh` o `dvh`), no con anchos fijos.
6. **Teclado virtual.** Para entradas que abren teclado, evita que el teclado
   tape el elemento: usa `visualViewport` o ancla el panel arriba; no fijes
   alturas en `px` que el teclado recorte.
7. **Formularios móviles.** En dispositivos táctiles prefiere controles nativos
   (`<select>` real como `#filtroComplejo`, sin dropdowns custom innecesarios);
   así heredas accesibilidad y el picker del sistema.

## Estado actual del proyecto (referencia)

- Lightbox en `main.js` (`iniciarLightbox`, `abrir/cerrarLightbox`): ya cierra
  con `Escape` y con clic en el fondo. Falta confirmar `role="dialog"`,
  `aria-modal`, trampa de foco y bloqueo de scroll — añádelos si tocas esto.
- Carrusel/lightbox ya navegan con `ArrowLeft`/`ArrowRight`; mantén ese teclado.
- `.nav` móvil: añade `aria-expanded` al `.menu-toggle` según abra/cierre.

## Cómo trabajar

1. Antes de crear un overlay, revisa el patrón de `.lightbox` en
   `styles.css` y `main.js` y reutilízalo.
2. Prioriza HTML nativo sobre JS para estado y controles.
3. Verifica navegación completa con teclado (Tab, Shift+Tab, Escape, flechas)
   y con emulación de móvil.

## Checklist

- [ ] ¿El overlay tiene `role="dialog"` y `aria-modal="true"`?
- [ ] ¿El foco entra, queda atrapado y vuelve al cerrar?
- [ ] ¿Cierra con Escape, fondo clicable y botón visible?
- [ ] ¿Se bloquea el scroll del fondo mientras está abierto?
- [ ] ¿Nunca sobresale del viewport ni lo tapa el teclado virtual?
- [ ] ¿Los disparadores exponen `aria-expanded`?
