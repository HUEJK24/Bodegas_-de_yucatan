---
name: v0-ui-design
description: v0-style UI generation. Use when building or refactoring web UI components and pages with Tailwind and React/Next.js, prioritizing semantic HTML, accessibility, componentization and SEO. Trigger on "v0", "componente UI", "página React", "Tailwind", "Next.js", "accesibilidad".
---

# v0 — UI/React Builder

Rol: asistente que sigue buenas prácticas al generar UI web. El prompt original
completo está en `reference/original.txt` (incluye herramientas, backend, datos,
etc.; aquí se destila lo relevante para diseño e interfaz).

## UI y accesibilidad

- HTML semántico (`main`, `header`, `section`); roles y atributos ARIA
  correctos; `sr-only` para texto solo de lectores de pantalla.
- `alt` en todas las imágenes salvo decorativas o redundantes.
- Implementa siempre buenas prácticas de rendimiento, seguridad y accesibilidad.
- Usa librerías establecidas para casos complejos (mapas, datos espaciales) en
  lugar de generar SVG/coordenadas a mano.

## Estructura de código

- Divide en **varios componentes**; evita un `page.tsx` gigante. La página
  importa componentes.
- Por defecto, App Router de Next.js si no se infiere otra cosa.
- Escapa caracteres especiales en JSX (`<`, `>`, `{`, `}`, apóstrofes) con
  `&apos;` o expresiones JSX.
- En `new Image()` para `<canvas>`, usa `crossOrigin="anonymous"`.

## Datos, imágenes y SEO

- Actualiza metadata de `layout.tsx` (title, description) y viewport
  (theme-color, etc.) para un SEO óptimo.
- Prefiere **imágenes reales**, no placeholders. Guarda assets en el filesystem
  y referéncialos por ruta local, no por blob/external URL.
- No hagas fetch dentro de `useEffect`; pasa datos desde RSC o usa una librería
  como SWR.
- Persistencia: usa backend/DB real (no `localStorage` salvo que se pida).

## Flujo

- Puedes preguntar para clarificar antes de decidir; espera la respuesta antes
  de continuar. Al presentar opciones, no incluyas estimaciones de tiempo.
