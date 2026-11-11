# Feature: venezuela-curriculum

Objective: organize the encyclopedia by the official Venezuelan secondary-school study plan (áreas de formación, 1.º–5.º año) with a full topic catalog and 2–3 complete lessons per área.
Branch: feat/venezuela-curriculum (base main @ f2b6459). Delivery: ask-on-risk. Test runner: `npm test` (Vitest).

## Specs

- S1 "Investiga cuales son las asignaturas de secundaría, al menos para Venezuela."
- S2 "En base a la investigación anterior, crea la sección de enciclopedia en base a esas asignaturas, ejemplo: Física, química, matemática, etc."
- S3 "Añade el contenido relevante a cada materia. Si tienes acceso al plan de estudio de cada materia del ministerio del poder popular para la educación de cada materia, mejor, de esta manera podrás organizar y clasificar mejor el contenido."
- S4 "Comprueba que el contenido y plan de estudio este actualizado"
- S5 Depth (user decision): "Catalog + key lessons" — every área and año with its topics; 2–3 complete lessons per área; the rest marked "Próximamente".

Research result: plan de estudio = Resolución DM/0033 (Gaceta Oficial 41.221, 24-08-2017), 14 áreas; 2026-2027 listing shows the same áreas plus Informática (teacher blog, unofficial). Official per-year "temas generadores" document (MPPE, junio 2017) could not be fetched (expired TLS / dead hosts) → topic catalog is a reference catalog aligned to the áreas and years, labeled as such.
Assumptions: "Participación en Grupos de Creación, Recreación y Producción" has no fixed content (each school defines groups) → not an encyclopedia área. Informática is not in DM/0033 → not added.

## Tasks

- [ ] T1 (S2) Model: áreas with years/hours, topics with año + hasLesson, area modules, grade→año mapping — inline.
- [ ] T2 (S3, S5) Catalog + lessons for 13 áreas — delegated, 4 parallel writers (Writer trigger: 4 independent units, disjoint files, each several hundred lines).
- [ ] T3 (S2) Encyclopedia UI by área and año; home shows the student's año — inline.
- [ ] T4 (S3, S4) Integrity tests, source URL check, browser verification — inline.

## Log

- L1 (2026-11-11) User request: S1–S3 verbatim above.
- L2 (2026-11-11) User: "Comprueba que el contenido y plan de estudio este actualizado".
- L3 (2026-11-11) User chose "Catalog + key lessons (Recommended)".
