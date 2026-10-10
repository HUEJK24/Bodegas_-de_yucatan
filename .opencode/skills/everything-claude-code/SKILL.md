---
name: everything-claude-code
description: Use when setting up or improving this project's agent configuration and engineering quality: agents, rules, commands, memory (AGENTS.md) and the plan -> test -> implement -> review -> verify workflow. Trigger on "configurar proyecto", "reglas", "agentes", "comandos", "calidad de código", "orden del proyecto", "AGENTS.md", "workflow", "memoria del proyecto".
---

# ECC — Sistema de ingeniería para agentes

Fuente original: https://github.com/affaan-m/everything-claude-code (copia en
`reference/original.txt`). Colección de configuraciones (agentes, skills, reglas,
comandos y memoria) para trabajar con calidad y eficiencia.

Esta skill define **cómo dar orden y calidad** a este proyecto: memoria,
convenciones, flujo de trabajo y verificación.

## Flujo de trabajo

```
plan -> test -> implement -> review -> verify -> remember -> improve
```

1. **Plan**: entiende el objetivo y los archivos afectados antes de escribir.
2. **Test/Verificar primero**: define cómo comprobar (para un sitio estático:
   `node --check` en los `.js`, revisar rutas de imágenes, abrir en el navegador).
3. **Implementar**: cambios pequeños y enfocados.
4. **Review**: relee el diff, busca regresiones y clases muertas.
5. **Verify**: corre las verificaciones del paso 2.
6. **Remember**: anota en `AGENTS.md` comandos, convenciones y decisiones.
7. **Improve**: convierte lo aprendido en una skill o regla.

## Componentes (y su equivalente aquí)

| ECC        | En este proyecto                                             |
| ---------- | ------------------------------------------------------------ |
| Memory     | `AGENTS.md` (resumen, estructura, comandos, convenciones)    |
| Rules      | Secciones de convenciones y la skill `diseno-frontend`       |
| Skills     | `.opencode/skills/*`                                          |
| Commands   | Tareas repetibles documentadas en `AGENTS.md`                |
| Agents     | `.opencode/agent/*` (cuando haga falta)                      |

## Principios

- **Optimiza el contexto; persiste lo demás.** Lo estable va en archivos
  (`AGENTS.md`, README), no en mensajes.
- **Instrucciones mínimas pero efectivas.** Cada línea de una regla debe evitar
  un error real; si no, sobra.
- **Separar lo determinista de lo probabilístico.** Los checks (lint, `node
  --check`, rutas) son deterministas; el diseño es probabilístico.

## Aplicación al proyecto

- Mantén `AGENTS.md` a la raíz como memoria del proyecto.
- Verifica siempre: `node --check assets/js/*.js`, existencia de imágenes y
  apertura en navegador.
- No commitees sin pedir permiso explícito.

## Checklist

- [ ] ¿Actualicé/creé `AGENTS.md` con lo aprendido?
- [ ] ¿Corrí las verificaciones deterministas?
- [ ] ¿Revisé el diff antes de cerrar?
- [ ] ¿Convertí lo repetible en skill o regla?
