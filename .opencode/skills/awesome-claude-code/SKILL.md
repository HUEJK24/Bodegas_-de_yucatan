---
name: awesome-claude-code
description: Use when choosing best practices, conventions, structure, documentation or tooling for this project, or when organizing files and keeping the repo tidy. Curated reference for project structure, memory files, skills, agents, commands, quality gates and security. Trigger on "buenas prácticas", "convenciones", "estructura del proyecto", "organizar", "ordenar", "documentación", "checklist", "lineamientos".
---

# Awesome Claude Code (referencia curada)

Fuente original: https://github.com/hesreallyhim/awesome-claude-code (copia en
`reference/original.txt`). Lista curada de recursos y buenas prácticas para
trabajar con agentes de código: memoria, skills, agentes, comandos, status
lines, observabilidad, calidad y seguridad.

Úsala como **referencia de decisiones** al organizar y mejorar este proyecto.

## Buenas prácticas clave

1. **Memory file de alto impacto.** Un `AGENTS.md`/README con estructura,
   comandos y convenciones evita repetir contexto (progressive disclosure).
2. **Instrucciones mínimas y verificables.** Solo lo que evita errores reales.
3. **Estructura clara.** Separa `assets/`, HTML de páginas, configuración
   (`opencode.json`) y `.opencode/` (skills/agentes/comandos).
4. **Documenta los comandos.** Build/test/lint/verificación, aunque el proyecto
   sea estático.
5. **Seguridad.** No exponer secretos; revisar la configuración; no commitear
   claves. En este sitio, los datos son públicos pero aun así se documentan.
6. **Skills y agentes con propósito único.** Una skill = una capacidad.
7. **Checklists.** Convierten convenciones en verificaciones repetibles.

## Estructura recomendada (estado actual del proyecto)

```
Bodegas_ de_yucatan/
|-- index.html, bodegas.html, bodega.html,
|   servicios.html, nosotros.html, contacto.html   # páginas
|-- assets/
|   |-- css/styles.css                             # sistema visual
|   |-- js/data.js                                 # datos (SITIO + BODEGAS)
|   |-- js/main.js                                 # render e interacción
|   `-- img/                                       # fotos de bodegas
|-- .opencode/skills/                              # skills del proyecto
|-- AGENTS.md                                      # memoria del proyecto
|-- README.md                                      # guía para humanos
|-- opencode.json                                  # config de opencode
`-- demo_bodega_imprimir.pdf                       # referencia de impresión
```

## Verificaciones rápidas

- `node --check assets/js/data.js` y `node --check assets/js/main.js`.
- Que todas las rutas `assets/img/*.jpg` existan.
- Abrir `index.html` y `bodega.html?id=<slug>` en el navegador.

## Checklist

- [ ] ¿El `AGENTS.md` refleja la estructura y los comandos reales?
- [ ] ¿No hay archivos sueltos ni nombres inconsistentes?
- [ ] ¿Cada skill tiene un propósito único y una `description` clara?
- [ ] ¿Se evitaron secretos en el repo?
