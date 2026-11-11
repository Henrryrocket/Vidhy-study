# Feature: venezuela-curriculum

Objective: organize the encyclopedia by the official Venezuelan secondary-school study plan (áreas de formación, 1.º–5.º año) with a full topic catalog and 2–3 complete lessons per área.
Branch: feat/venezuela-curriculum (base main @ f2b6459). Delivery: ask-on-risk. Test runner: `npm test` (Vitest).

## Specs

- S1 "Investiga cuales son las asignaturas de secundaría, al menos para Venezuela."
- S2 "En base a la investigación anterior, crea la sección de enciclopedia en base a esas asignaturas, ejemplo: Física, química, matemática, etc."
- S3 "Añade el contenido relevante a cada materia. Si tienes acceso al plan de estudio de cada materia del ministerio del poder popular para la educación de cada materia, mejor, de esta manera podrás organizar y clasificar mejor el contenido."
- S4 "Comprueba que el contenido y plan de estudio este actualizado"
- S5 Depth (user decision): "Catalog + key lessons" — every área and año with its topics; 2–3 complete lessons per área; the rest marked "Próximamente".

- S6 "La aplicación debe tener como foco principal el curriculum de estudio del MPPE para estudiantes de segundo año de secundaria o bachillerato. Sin embargo, el estudiante puede consultar temas del año anterior para un repaso y un mejor entendimiento."
- S7 "Después de esto, corramos los test para asegurarnos que todo funcione bien y hagamos push a main."
- S8 (user decision on 3.º–5.º año): "Hide them for now (Recommended)" — only áreas taught in 2.º año are shown; 1.º año appears as "Repaso"; 3.º–5.º content stays in code, hidden. Each 2.º-año área needs ≥2 complete lessons in 2.º año.

Research result: plan de estudio = Resolución DM/0033 (Gaceta Oficial 41.221, 24-08-2017), 14 áreas; 2026-2027 listing shows the same áreas plus Informática (teacher blog, unofficial). Official per-year "temas generadores" document (MPPE, junio 2017) could not be fetched (expired TLS / dead hosts) → topic catalog is a reference catalog aligned to the áreas and years, labeled as such.
Assumptions: "Participación en Grupos de Creación, Recreación y Producción" has no fixed content (each school defines groups) → not an encyclopedia área. Informática is not in DM/0033 → not added.

## Tasks

- [x] T1 (S2) Model: áreas with years/hours, topics with año + hasLesson, area modules, grade→año mapping (RED: schoolYearFor missing → GREEN) — inline — commit 7054bb2.
- [x] T2 (S3, S5, S8) Catalog (233 topics; 81 in 1.º–2.º) + 38 lessons for 13 áreas (24 in 1.º–2.º); every 2.º-año área has ≥2 year-2 lessons — delegated, 4 parallel writers (Writer trigger: 4 independent units, disjoint files, each several hundred lines). Surfaces checked: no writer edited outside its áreas.
- [x] T3 (S2) Encyclopedia UI by área and año — inline.
- [x] T5 (S6, S8) Focus: provider shows only años [1, 2]; 2.º año is the default, 1.º is "Repaso" (RED: visibleYears tests → GREEN) — inline.
- [x] T4 (S3, S4, S7) 126/126 tests, typecheck and build clean; `npm run check:sources`: 71 URLs, 0 broken (checker confirmed to report 404); browser at 375px — inline.

## Log

- L1 (2026-11-11) User request: S1–S3 verbatim above.
- L2 (2026-11-11) User: "Comprueba que el contenido y plan de estudio este actualizado".
- L3 (2026-11-11) User chose "Catalog + key lessons (Recommended)".
- L4 (2026-11-11) T2 launched: 4 parallel writers (math/physics/chemistry; natural-sciences/biology/earth-sciences; spanish/foreign-languages/art; GHC/sovereignty/guidance/PE), each limited to its áreas' folders. Contract RED: 25 área tests failing before writers.
- L5 (2026-11-11) User: S6 + S7 verbatim. Decision S8. Writers redirected to write year-2 lessons.
- L6 (2026-11-11) Verification: home shows 16 topics of 2.º año and 8 review topics, only the 8 áreas of 2.º año; área pages open on 2.º año with "1.º año · Repaso"; hidden áreas and lessons (physics, bio-cell) are unreachable even by URL; new lesson nat-energy-transformations works end to end. Fixed: "Tu progreso" heading shown empty when saved progress pointed to a hidden topic; lookup test used "revolución francesa", now a real catalog topic.
- Content doubts reported by writers (approximate figures and dates: Pico Bolívar ~4.978 m, Salto Ángel ~979 m, Caracas 1967 earthquake ~6,5; UNCLOS cited although Venezuela has not signed it). Build warns the JS bundle is over 500 kB because all content is bundled; lazy-loading lessons is a follow-up.
