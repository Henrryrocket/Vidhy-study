# Easy Homework

A mobile-first study encyclopedia for students aged 10–18. Students create a profile (age, grade, interests), answer "¿Qué estudiaremos hoy?", and go through a guided study flow:

1. **Setup** – why they are studying (exam, homework, curiosity), what they already know, and ungraded warm-up questions.
2. **Lesson** – illustrated summary, key ideas with optional depth, interactive concept map, a narrated animated mini-class, an analogy based on their interests, and a glossary.
3. **Explain it back** – the student explains the topic in their own words (Feynman technique) and gets feedback on the key ideas they used.
4. **Quiz** – one question at a time with immediate explained feedback (retrieval practice).
5. **Results** – mastery level, concepts to reinforce, a spaced-repetition review plan (compressed before an exam date), resources to go deeper, and sources.

Profile, settings and progress are stored only in the browser (`localStorage`).

## Getting started

```bash
npm install
npm run dev
```

| Script              | What it does                    |
| ------------------- | ------------------------------- |
| `npm run dev`       | Development server              |
| `npm test`          | Unit tests (Vitest + jsdom)     |
| `npm run typecheck` | TypeScript check                |
| `npm run build`     | Typecheck and production build  |
| `npm run check:sources` | Check that every source URL responds |

## Architecture

Hexagonal: the domain and the UI only depend on ports, so content sources can change without touching screens.

```
src/
  domain/        Pure rules: profile validation, search, quiz scoring, spaced review, explanation review
  ports/         Interfaces: ContentProvider, LessonGenerator, Profile/Settings/Progress repositories
  application/   Use cases: lookupTopic (encyclopedia first, superpowers fallback)
  adapters/
    curated/     The built-in encyclopedia (hand-written articles with sources)
    storage/     localStorage repositories
  features/      Screens: onboarding, home, encyclopedia, study flow, profile
  app/           Composition root (services), router, shell
```

## Curriculum and focus

The encyclopedia follows the áreas de formación of Venezuela's Educación Media General study plan (Resolución DM/0033, Gaceta Oficial N.º 41.221, 2017), with weekly hours per año in `src/adapters/curated/subjects.ts`. Each área lives in `src/adapters/curated/areas/<area>/`: `index.ts` holds its topic catalog per año and the list of complete lessons; topics without a lesson show as "Próximamente".

The app is focused on **2.º año**, with **1.º año** available as review ("Repaso"). Content for 3.º–5.º año stays in the catalog but is hidden. Change the focus in `src/app/focus.ts`.

## Adding a topic

Add the topic to its área's catalog (`areas/<area>/index.ts`), write the lesson in the same folder following the `Lesson` type in `src/domain/lesson.ts`, and list it in `lessons`. The catalog tests check that every lesson is complete, matches its catalog entry and cites `https` sources; `npm run check:sources` checks that every source URL responds. Optionally add an illustration in `src/features/study/TopicIllustration.tsx`.

## Superpowers (AI) switch

The profile screen has a **Superpowers** switch. When it is on and a topic is not in the encyclopedia, `lookupTopic` asks a `LessonGenerator` to create a lesson. No generator is connected yet, so the app tells the student and keeps using the encyclopedia.

To connect one:

1. Implement `LessonGenerator` (`src/ports/index.ts`) in a new adapter, e.g. `src/adapters/ai/`. It must return a complete `Lesson`, including `sources`.
2. Call the model from a **backend endpoint**, never from the browser: API keys must not ship in the frontend bundle.
3. Assign it to `generator` in `createDefaultServices()` (`src/app/services.tsx`).
