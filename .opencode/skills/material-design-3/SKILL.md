---
name: material-design-3
description: Use when styling components, spacing, states, motion or color in this project, to apply Material Design 3 fundamentals (48dp touch targets, 8dp spacing grid, state layers, elevation and standard motion) on top of the existing minimalist design system. Adopts the principles of material-components/material-web (https://github.com/material-components/material-web) without adding web components. Trigger on "Material Design", "Material 3", "M3", "elevación", "spacing", "espaciado", "estado", "ripple", "movimiento", "motion", "dp", "48dp", "tokens".
---

# Material Design 3 (principios aplicados)

Toma las especificaciones de Google en material-components/material-web
(<https://github.com/material-components/material-web>) —**espaciado, áreas
táctiles, estados y movimiento**— y aplícalas con los tokens propios del
proyecto. **No agregar `<md-*>` web components, Material, ni dependencias:**
solo traducir las reglas a `assets/css/styles.css`.

## Espaciado y toque

1. **Rejilla de 8dp.** Usa múltiplos de 8 (8, 12, 16, 24, 32, 48, 64) en
   `padding`, `gap` y `margin`. Evita valores arbitrarios.
2. **Área táctil mínima 48×48dp.** Toda superficie interactiva la cumple
   (ver skill `ux-tactil-nativa`).
3. **Densidad contenida.** Ya usamos mucho aire; mantén el ritmo sin apiñar.

## Estados (state layers)

- En lugar de cambiar el color de fondo por completo al interactuar, superpón
  una capa sutil sobre el color base:
  - hover ≈ 8% de opacidad, pressed/active ≈ 12%, focus ≈ 12%.
- Usa el color del estado heredado (`currentColor`) o el acento, nunca un
  cambio brusco de matiz. Transiciones de color cortas (150–200ms).
- `:focus-visible` visible y con contraste (accesibilidad AA).

## Elevación

- Mapea a las sombras ya existentes: reposo = borde 1px (`--linea`); tarjetas
  en hover y elementos flotantes = `--sombra-sutil`; overlays = sombra más
  marcada pero discreta.
- **Sin sombras pesadas por defecto** (coherente con el diseño actual).

## Movimiento

- Duraciones **150–300ms**; evita >400ms.
- Easing estándar M3: `cubic-bezier(0.2, 0, 0, 1)` (equivale al "standard").
- Anima propiedades baratas (`opacity`, `transform`, `color`, `background`).

## Color (roles M3 → tokens del proyecto)

| Rol Material 3 | Token actual            |
| -------------- | ----------------------- |
| primary        | `--acento` (#1c6b57)    |
| on-primary     | `#ffffff`               |
| surface        | `--fondo` / `--fondo-2` |
| on-surface     | `--tinta` / `--texto`   |
| outline        | `--linea` / `--linea-fuerte` |
| error/warning  | tonos ámbar ya usados en etiquetas |

Mantén **un solo acento** y contraste AA; no introduzcas la paleta completa de
Material.

## Tipografía (escala M3 acotada)

- `display`/`headline` → headings en peso 600, tracking `-0.02em`.
- `title`/`body` → 16px base, interlineado 1.65.
- `label` → kickers y chips: mayúsculas, 11–12px, `letter-spacing` amplio.

## Cómo trabajar

1. Reutiliza tokens en `:root` de `styles.css` (no hardcodees valores).
2. Antes de animar o sombrear, busca el patrón ya existente y ajústalo.
3. Verifica que el resultado siga siendo sobrio y minimalista, no "Google".

## Checklist

- [ ] ¿Espaciado en múltiplos de 8 y sin valores arbitrarios?
- [ ] ¿Toda superficie interactiva ≥48×48dp?
- [ ] ¿Los estados usan capas sutiles (8–12%), no cambios bruscos?
- [ ] ¿Animaciones 150–300ms con easing estándar?
- [ ] ¿Colores mapeados a tokens y con contraste AA?
