import { reviewSchedule } from "./review";

const day = (iso: string) => new Date(`${iso}T12:00:00`);

describe("reviewSchedule", () => {
  it("uses short intervals when the topic needs review", () => {
    expect(reviewSchedule("review", day("2026-11-10")).map((d) => d.toDateString())).toEqual(
      [day("2026-11-11"), day("2026-11-13"), day("2026-11-17")].map((d) => d.toDateString()),
    );
  });

  it("uses longer intervals when the topic is mastered", () => {
    expect(reviewSchedule("mastered", day("2026-11-10")).map((d) => d.toDateString())).toEqual(
      [day("2026-11-13"), day("2026-11-17"), day("2026-11-24")].map((d) => d.toDateString()),
    );
  });

  it("never schedules before the exam date when one is given", () => {
    const dates = reviewSchedule("review", day("2026-11-10"), day("2026-11-14"));
    expect(dates.every((d) => d <= day("2026-11-14"))).toBe(true);
    expect(dates.length).toBeGreaterThan(0);
  });
});
