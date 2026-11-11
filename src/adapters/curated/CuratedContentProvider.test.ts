import { CuratedContentProvider } from "./CuratedContentProvider";
import { AREAS } from "./areas";
import { SUBJECTS } from "./subjects";
import type { SchoolYear } from "../../domain/lesson";

const profile = { name: "Ana", age: 13, grade: 8, interests: ["sports" as const] };
const provider = new CuratedContentProvider();
const yearsOf = (subjectId: string) => Object.keys(SUBJECTS.find((s) => s.id === subjectId)!.hoursByYear).map(Number) as SchoolYear[];

describe("CuratedContentProvider", () => {
  it("finds the nervous system for an exam-style query", async () => {
    const results = await provider.search("examen sistema nervioso");
    expect(results[0]?.id).toBe("nervous-system");
  });

  it("returns null for unknown topics", async () => {
    expect(await provider.getLesson("unknown", profile)).toBeNull();
  });

  it("lists topics with a written lesson before 'Próximamente' ones in search", async () => {
    const results = await provider.search("célula");
    const firstPending = results.findIndex((t) => !t.hasLesson);
    if (firstPending >= 0) expect(results.slice(firstPending).every((t) => !t.hasLesson)).toBe(true);
  });
});

describe("curriculum catalog (Resolución DM/0033)", () => {
  it("has one área module per subject of the study plan", () => {
    expect(AREAS.map((a) => a.subjectId).sort()).toEqual(SUBJECTS.map((s) => s.id).sort());
  });

  it("uses unique topic ids across all áreas", () => {
    const ids = AREAS.flatMap((a) => a.topics.map((t) => t.id));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(SUBJECTS.map((s) => [s.name, s.id]))("%s: every año of the plan has at least 3 topics, and none outside it", (_name, id) => {
    const area = AREAS.find((a) => a.subjectId === id)!;
    const years = yearsOf(id);
    for (const year of years) expect(area.topics.filter((t) => t.year === year).length).toBeGreaterThanOrEqual(3);
    expect(area.topics.every((t) => years.includes(t.year))).toBe(true);
  });

  it.each(SUBJECTS.map((s) => [s.name, s.id]))("%s: has at least 2 complete lessons that match its catalog", (_name, id) => {
    const area = AREAS.find((a) => a.subjectId === id)!;
    expect(area.lessons.length).toBeGreaterThanOrEqual(2);
    for (const lesson of area.lessons) {
      const topic = area.topics.find((t) => t.id === lesson.id);
      expect(topic, `lesson ${lesson.id} must be in the catalog`).toBeDefined();
      expect(lesson.subjectId).toBe(id);
      expect(lesson.year).toBe(topic!.year);
    }
  });
});

describe("lesson quality", () => {
  const lessons = AREAS.flatMap((a) => a.lessons);
  const topicIds = new Set(AREAS.flatMap((a) => a.topics.map((t) => t.id)));

  it.each(lessons.map((l) => [l.id, l]))("%s is complete and cites https sources", (_id, lesson) => {
    expect(lesson.summary.length).toBeGreaterThan(150);
    expect(lesson.keyPoints.length).toBeGreaterThanOrEqual(3);
    expect(lesson.diagram.children?.length ?? 0).toBeGreaterThanOrEqual(2);
    expect(lesson.miniClass.length).toBeGreaterThanOrEqual(3);
    expect(lesson.analogies.default).toBeTruthy();
    expect(lesson.glossary.length).toBeGreaterThanOrEqual(3);
    expect(lesson.warmUp.length).toBeGreaterThanOrEqual(1);
    expect(lesson.quiz.length).toBeGreaterThanOrEqual(5);
    expect(lesson.explainChecklist.length).toBeGreaterThanOrEqual(3);
    expect(lesson.sources.length).toBeGreaterThan(0);
    expect([...lesson.sources, ...lesson.deeperResources].every((r) => r.url.startsWith("https://"))).toBe(true);
    for (const q of [...lesson.quiz, ...lesson.warmUp]) {
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(q.options.length);
    }
    expect(new Set(lesson.quiz.map((q) => q.id)).size).toBe(lesson.quiz.length);
    expect(lesson.relatedTopicIds.every((id) => topicIds.has(id))).toBe(true);
  });
});
