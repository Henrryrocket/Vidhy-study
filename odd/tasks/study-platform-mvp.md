# Feature: study-platform-mvp

Objective: mobile-first study web app for students aged 10-18 ("like an Encarta, with superpowers switch").
Branch: feat/study-platform-mvp (repo initialized 2026-11-10; base main). Delivery: ask-on-risk. Test runner: `npm test` (Vitest + jsdom).

## Specs

- S1 Audience and form factor: "aplicación web dirigida a jovenes entre 10 a 18 años" — "mobile-first, pero también disponible en desktop view".
- S2 Entry: "El estudiante ingresará a la plataforma."
- S3 Catalog: "La plataforma tendrá tópicos y asignaturas comunes de secundaría."
- S4 Prompt: "La plataforma le preguntará: ¿Que estudiaremos hoy?"
- S5 Visual delivery: "preparar un resumen y una entrega visual, a traves de esquemas, imagénes y resúmenes ilustrados" — also "gráficos, imagénes e incluso videos cortos".
- S6 Pedagogy: "familiarizadas con los mejores métodos de enseñanza, practicas de pedagogía y asegurarse de que el estudiante comprenda muy bien el tema."
- S7 Profile: "preguntar el perfil del estudiante: grado, edad e intereses."
- S8 Persistence: "guardar las preferencias e información del estudiante."
- S9 Flow: clarifying questions about the topic → summary → visuals → comprehension questions → "al finalizar realiza recomendaciones en donde el estudiante pueda profundizar."
- S10 Sources: "debe asegurarse de tomar la información de fuentes confiables."
- S11 Content engine (user decision): "Contenido curado fijo pero con la opción de incorporar una API en el luego".
- S12 Shape (user decision): "Será como una Encarta, pero con posibilidad de superpoderes, un interruptor que puede ser activado luego".

Assumptions: UI copy in neutral Spanish (audience and quoted strings are Spanish); code in English. "Videos cortos" = narrated animated mini-class (Web Speech API) plus links to video searches; no fabricated video URLs.

## Tasks

- [x] T1 (S1) Scaffold Vite + React + TS — inline.
- [x] T2 (S7, S8, S9, S11) Domain + ports + localStorage adapters, test-first (RED observed: missing modules; GREEN 26/26) — inline.
- [x] T3 (S3, S5, S6, S10, S11, S12) Curated encyclopedia: 4 articles with sources + lookupTopic superpowers service (RED: missing module; GREEN 33/33) — inline.
- [ ] T4 (S2, S4, S5, S6, S7, S9, S12) UI: onboarding, home, encyclopedia, study setup, lesson, quiz, results, settings with superpowers switch — inline.
- [ ] T5 (all) Tests, typecheck, build, browser verification at mobile and desktop widths — inline.

Route evidence: no Writer trigger (one sequential behavior chain, no parallel units); all inline.

## Log

- L1 (2026-11-10) Original request: the full Spanish request quoted in S1-S10 (study platform for 10-18 year olds, profile, "¿Que estudiaremos hoy?", visual summaries, comprehension questions, recommendations, reliable sources).
- L2 (2026-11-10) User: "Contenido curado fijo pero con la opción de incorporar una API en el luego".
- L3 (2026-11-10) User: "Será como una Encarta, pero con posibilidad de superpoderes, un interruptor que puede ser activado luego".
- L4 (2026-11-10) User: "¿Estamos usando ODD en este proyecto?" → feature document created late (after T2); commits blocked: not a git repo.
- L5 Node 25 global localStorage shadows jsdom's; fixed with in-memory Storage in src/test/setup.ts.
- L6 (2026-11-10) User: "Usa engram y gentle-ai por favor" → git initialized, work-unit commits started; RDD on (global). Engram mirror blocked: auto mode cannot review mem_save because a hook rewrites its input.
