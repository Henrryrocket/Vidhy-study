import { CuratedContentProvider } from "./CuratedContentProvider";
import { SUBJECTS } from "./subjects";

const profile = { name: "Ana", age: 13, grade: 8, interests: ["sports" as const] };
const provider = new CuratedContentProvider();

describe("CuratedContentProvider", () => {
  it("finds the nervous system for an exam-style query", async () => {
    const results = await provider.search("examen sistema nervioso");
    expect(results[0]?.id).toBe("nervous-system");
  });

  it("returns null for unknown topics", async () => {
    expect(await provider.getLesson("unknown", profile)).toBeNull();
  });

  it("every article is complete, cites https sources and has valid quiz answers", async () => {
    const subjectIds = new Set(SUBJECTS.map((s) => s.id));
    for (const topic of await provider.listTopics()) {
      const lesson = (await provider.getLesson(topic.id, profile))!;
      expect(subjectIds.has(lesson.subjectId)).toBe(true);
      expect(lesson.sources.length).toBeGreaterThan(0);
      expect([...lesson.sources, ...lesson.deeperResources].every((r) => r.url.startsWith("https://"))).toBe(true);
      expect(lesson.quiz.length).toBeGreaterThanOrEqual(5);
      for (const q of [...lesson.quiz, ...lesson.warmUp]) {
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan(q.options.length);
      }
      expect(lesson.miniClass.length).toBeGreaterThan(0);
      expect(lesson.analogies.default).toBeTruthy();
    }
  });
});
