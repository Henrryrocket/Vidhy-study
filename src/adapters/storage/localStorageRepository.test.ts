import { LocalStorageProfileRepository, LocalStorageProgressRepository } from "./localStorageRepository";

beforeEach(() => localStorage.clear());

describe("LocalStorageProfileRepository", () => {
  it("returns null when there is no profile", () => {
    expect(new LocalStorageProfileRepository().load()).toBeNull();
  });

  it("persists and loads a profile", () => {
    const repo = new LocalStorageProfileRepository();
    repo.save({ name: "Ana", age: 13, grade: 8, interests: ["music"] });
    expect(new LocalStorageProfileRepository().load()).toEqual({ name: "Ana", age: 13, grade: 8, interests: ["music"] });
  });

  it("returns null when stored data is corrupt", () => {
    localStorage.setItem("easy-homework:profile", "{not json");
    expect(new LocalStorageProfileRepository().load()).toBeNull();
  });
});

describe("LocalStorageProgressRepository", () => {
  it("keeps the best score per topic", () => {
    const repo = new LocalStorageProgressRepository();
    repo.record({ topicId: "t1", percent: 80, completedAt: "2026-11-10" });
    repo.record({ topicId: "t1", percent: 40, completedAt: "2026-11-11" });
    const entry = repo.list().find((p) => p.topicId === "t1");
    expect(entry?.bestPercent).toBe(80);
    expect(entry?.attempts).toBe(2);
    expect(entry?.lastStudiedAt).toBe("2026-11-11");
  });
});
