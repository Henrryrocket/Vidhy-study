import { lookupTopic } from "./topicLookup";
import { CuratedContentProvider } from "../adapters/curated/CuratedContentProvider";
import type { LessonGenerator } from "../ports";
import { nervousSystem } from "../adapters/curated/articles/nervousSystem";

const profile = { name: "Ana", age: 13, grade: 8, interests: ["sports" as const] };
const content = new CuratedContentProvider();
const fakeGenerator: LessonGenerator = {
  name: "fake",
  generate: async (query) => ({ ...nervousSystem, id: "generated", title: query }),
};

describe("lookupTopic", () => {
  it("returns encyclopedia matches first", async () => {
    const result = await lookupTopic({ query: "fotosintesis", content, profile, superpowers: true, generator: fakeGenerator });
    expect(result.kind).toBe("matches");
  });

  it("reports not-found when superpowers are off", async () => {
    const result = await lookupTopic({ query: "revolucion francesa", content, profile, superpowers: false, generator: fakeGenerator });
    expect(result.kind).toBe("not-found");
  });

  it("reports superpowers-unavailable when the switch is on but no generator is connected", async () => {
    const result = await lookupTopic({ query: "revolucion francesa", content, profile, superpowers: true });
    expect(result.kind).toBe("superpowers-unavailable");
  });

  it("generates a lesson when the switch is on and a generator exists", async () => {
    const result = await lookupTopic({ query: "revolucion francesa", content, profile, superpowers: true, generator: fakeGenerator });
    expect(result.kind).toBe("generated");
    if (result.kind === "generated") expect(result.lesson.title).toBe("revolucion francesa");
  });
});
