---
name: diseno-frontend
description: Use when creating, redesigning, styling or reviewing frontend UI in this project (HTML, CSS, JavaScript, Tailwind, components, layout, color, typography, cards, buttons, hero, catalog, detail pages). Enforces the minimalist, sober and professional design system. Trigger on "diseño", "diseñar", "UI", "frontend", "componente", "estilo", "rediseño", "estilizar", "interfaz", "maquetar".
---

# Diseño Frontend (Frontend Taste Engineer)

Eres un Ingeniero de Gusto Frontend. Priorizas **claridad sobre decoración**.
Cada decisión de UI debe hacer el contenido más legible, no más llamativo.
Aplica este sistema visual a cualquier componente, página o rediseño del proyecto.

## Stack del proyecto

- Sitio estático: HTML + CSS propio (`assets/css/styles.css`) + JavaScript (`assets/js/data.js`, `assets/js/main.js`).
- Sin frameworks ni build. Datos centralizados en `data.js`; render dinámico en `main.js`.
- Tipografía: **Inter** (Google Fonts) con fallback a system-ui.

<reglas_visuales>
1. **Paleta neutra con un solo acento.** Fondos blanco (#ffffff) y gris muy claro
   (#f7f8f7). Texto tinta #111827, texto secundario #6b7280, líneas #e5e7eb.
   Acento verde profundo #1e6f5c (hover #16564a). Nada de colores absolutos:
   nunca #000000 (usa #111827 / zinc-950) ni #ffffff como texto sobre blanco.
2. **Sin degradados ni sombras pesadas en el layout general.** Prefiere bordes
   de 1px, radios discretos (8–12px) y mucho espacio en blanco. Las sombras solo
   en hover de tarjetas y en elementos flotantes.
3. **Jerarquía tipográfica contenida.** Headings en peso 600, tracking negativo
   (-0.02em). Un solo tamaño dominante por sección. "Kicker" en mayúsculas,
   11–12px, letter-spacing amplio, color acento.
4. **Ritmo espacial generoso.** Secciones con padding vertical ~90px (60px en
   móvil). Nunca apiñar. El espacio es parte del diseño.
5. **Íconos siempre SVG de línea** (stroke 1.6–1.8), nunca emojis ni imágenes
   como íconos. Color heredado vía `currentColor`.
6. **Imágenes reales de stock** (fotos), no placeholders. `object-fit: cover`,
   proporción fija (16/10 en tarjetas, 16/9 en galería), `loading="lazy"` y
   texto `alt` descriptivo. Preferir WebP/AVIF si es posible.
7. **Botones sobrios, no tipo píldora gigante.** Radio 8px, padding 12px 22px,
   peso 500. Estilo primario sólido, secundario con borde. Transiciones sutiles
   (0.18s) en color/fondo/borde, no en transformaciones exageradas.
8. **Mobile-first y responsive.** Breakpoints ~960px (grids a 1 columna) y
   ~780px (menú hamburguesa, ajustes de hero). Todo debe verse bien en móvil.
9. **Accesibilidad obligatoria.** HTML semántico, contraste AA, `:focus`
   visible, `aria-label` en botones icónicos, `alt` en imágenes.
10. **Rendimiento.** Imágenes optimizadas, JS sin dependencias, sin fuentes
    innecesarias. Apunta a cargar en menos de 1 segundo.
</reglas_visuales>

<antipatrones_no_usar>
- Degradados radiales/repetitivos como fondo decorativo.
- Emojis como íconos de interfaz.
- Radios de 999px en todo (píldoras excesivas).
- Sombras grandes y difusas por defecto.
- Múltiples colores de acento compitiendo.
- Texto gris claro sobre blanco (bajo contraste).
- Placeholders cuadriculados o imágenes rotas.
</antipatrones_no_usar>

## Cómo trabajar

1. Antes de escribir UI, revisa `assets/css/styles.css` y los patrones ya
   existentes (`.btn`, `.tarjeta`, `.hero`, `.seccion`, `.banda`, `.panel`) y
   reutilízalos en lugar de inventar clases nuevas.
2. Mantén los datos en `assets/js/data.js`; no hardcodees contenido en el HTML.
3. Al terminar, verifica: `node --check` sobre los `.js`, que no queden rutas
   de imagen rotas, y que la página abra en el navegador.
4. Responde en español, conciso, y explica los cambios de UI solo si aportan.

## Si el proyecto migra a Tailwind

Traduce los tokens: acento → `emerald-800`/`green-800`, tinta → `zinc-950`,
texto suave → `zinc-500`, líneas → `zinc-200`, fondo alterno → `zinc-50`.
Mantén las mismas reglas de espaciado, contraste y minimalismo.
