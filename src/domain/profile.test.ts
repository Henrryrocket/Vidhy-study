import { validateProfile, readingLevel, type StudentProfile } from "./profile";

const base: StudentProfile = { name: "Ana", age: 13, grade: 8, interests: ["sports"] };

describe("validateProfile", () => {
  it("accepts a complete profile", () => {
    expect(validateProfile(base)).toEqual({});
  });

  it("requires a name", () => {
    expect(validateProfile({ ...base, name: "  " }).name).toBeDefined();
  });

  it("only accepts ages from 10 to 18", () => {
    expect(validateProfile({ ...base, age: 9 }).age).toBeDefined();
    expect(validateProfile({ ...base, age: 19 }).age).toBeDefined();
    expect(validateProfile({ ...base, age: 10 }).age).toBeUndefined();
  });

  it("requires at least one interest", () => {
    expect(validateProfile({ ...base, interests: [] }).interests).toBeDefined();
  });
});

describe("readingLevel", () => {
  it("is basic up to 7th grade and advanced from 8th", () => {
    expect(readingLevel({ ...base, grade: 7 })).toBe("basic");
    expect(readingLevel({ ...base, grade: 8 })).toBe("advanced");
  });
});
