---
name: claude-prompts-library
description: Use when writing, improving or reviewing any prompt, system prompt, role/persona, agent instruction or SKILL.md in this project. Applies proven Claude prompt-engineering patterns (explicit role, XML tags, chain-of-thought, few-shot, output contract). Trigger on "prompt", "prompt engineering", "system prompt", "persona", "rol", "instrucciones", "plantilla de prompt", "SKILL.md", "instruction".
---

# Biblioteca de Prompts (Awesome Claude Prompts)

Fuente original: https://github.com/langgptai/awesome-claude-prompts (copia en
`reference/original.txt`). Es una de las colecciones más extensas de prompts
probados: roles/personas, chain-of-thought, conversión de formato y plantillas de
negocio/marketing.

Esta skill define **cómo escribir prompts, system prompts, agentes y SKILL.md**
en este proyecto para que sean claros, estructurados y reutilizables.

## Principios

1. **Rol explícito.** Empieza definiendo quién es el modelo: "Eres un …".
   Un rol concreto mejora el tono y las decisiones.
2. **Una tarea por frase.** El objetivo en una sola oración medible. Si hay
   varias tareas, usa pasos numerados.
3. **Contexto antes que instrucciones.** Stack, convenciones, archivos y límites
   van en un bloque de contexto separado de la orden.
4. **Separa instrucciones de datos.** El contenido del usuario/proyecto no debe
   mezclarse con las reglas.
5. **Estructura con etiquetas.** Usa bloques con etiquetas para delimitar
   secciones: `<contexto>`, `<tarea>`, `<reglas>`, `<formato_salida>`,
   `<ejemplos>`.
6. **Chain-of-thought.** Pide razonamiento por pasos antes de la respuesta final
   cuando la tarea es compleja.
7. **Few-shot.** Incluye 1–3 ejemplos de entrada→salida cuando el formato importa.
8. **Contrato de salida.** Especifica idioma, longitud y forma exacta del
   resultado (tabla, lista, JSON, markdown).

## Plantilla base

```
Rol: Eres <rol con experiencia relevante>.
Tarea: <una frase, verbo + resultado>.
Contexto: <stack, archivos, convenciones del proyecto>.
Reglas:
- <regla 1>
- <regla 2>
Formato de salida: <estructura exacta>.
Ejemplos: <opcional, entrada -> salida>.
```

## Cómo aplicarlo en este proyecto

- **SKILL.md**: el frontmatter lleva `name` (igual a la carpeta, kebab-case) y una
  `description` de una línea que diga *qué hace* + *cuándo usarla* (palabras clave
  literales ES/EN). El cuerpo lleva el rol, los principios y un checklist.
- **Agentes**: el cuerpo del `.md` es el prompt; usa la estructura de arriba.
- **Textos del sitio** (`.html`, `data.js`): aplica el rol y el contrato de salida
  para copy comercial (títulos, descripciones de bodegas, CTAs).
- Responde **en español**, conciso.

## Checklist

- [ ] ¿Hay un rol explícito?
- [ ] ¿El objetivo cabe en una frase?
- [ ] ¿Las reglas están separadas del contexto?
- [ ] ¿El formato de salida está definido?
- [ ] ¿Se evitó el relleno y las instrucciones contradictorias?
