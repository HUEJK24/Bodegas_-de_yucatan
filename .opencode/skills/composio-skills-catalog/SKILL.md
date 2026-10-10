---
name: composio-skills-catalog
description: Use when turning a repeated or multi-step task into a reusable, repeatable skill/workflow (automation) in this project, or when deciding whether to create a new skill. Covers skill anatomy, triggers, inputs/outputs, idempotency and checklists. Trigger on "skill", "habilidad", "automatizar", "automation", "repetible", "flujo de trabajo", "workflow", "pasos".
---

# Catálogo de Skills (Composio)

Fuente original: https://github.com/ComposioHQ/awesome-claude-skills (copia en
`reference/original.txt`). Repositorio curado de skills y herramientas cuyo
objetivo es que el modelo ejecute tareas **de forma repetible** — ideal para
automatización.

Esta skill define **cuándo y cómo convertir una tarea en una skill** dentro de
`.opencode/skills/`.

## Cuándo crear una skill

- La tarea **se repite** (o se repetirá) más de una vez.
- Tiene **pasos estables** y un resultado esperado claro.
- Tiene **entradas y salidas** identificables.
- No depende de decisiones ad-hoc irrepetibles.

Si es un arreglo puntual, **no** es una skill.

## Anatomía en opencode

```
.opencode/skills/<nombre-kebab>/SKILL.md   # frontmatter + cuerpo con pasos
.opencode/skills/<nombre-kebab>/reference/original.txt  # material fuente
```

- `name`: kebab-case, igual al nombre de la carpeta (≤64 chars).
- `description`: una línea; *qué hace* + *cuándo usarla*; incluye las palabras
  clave que el usuario diría (ES/EN). Sin esto, la skill no se detecta.
- Cuerpo: pasos numerados, ejemplos, y un **checklist** de verificación.

## Diseño de una skill

1. **Disparador**: en qué situaciones debe activarse (y en cuáles no).
2. **Entradas**: qué necesita (archivos, datos, parámetros).
3. **Pasos**: secuencia determinista y numerada.
4. **Salidas**: artefactos concretos y verificables.
5. **Idempotencia**: ejecutarla dos veces no debe romper nada.
6. **Verificación**: cómo comprobar que salió bien.

## Aplicación al proyecto

Skills ya presentes: `diseno-frontend`, `frontend-taste-engineer`,
`a2ui-agent-architect`, `v0-ui-design`, `lovable-design-system`,
`claude-prompts-library`, `everything-claude-code`, `awesome-claude-code`.

Al automatizar aquí: usa HTML/CSS/JS sin build, datos centralizados en
`assets/js/data.js`, y verifica con `node --check` + abrir en el navegador.

## Checklist

- [ ] ¿La tarea es realmente repetible?
- [ ] ¿El `name` coincide con la carpeta?
- [ ] ¿La `description` incluye disparadores claros?
- [ ] ¿Los pasos son deterministas y verificables?
- [ ] ¿Existe un checklist de verificación al final?
