import { localIsoDate } from "./dates";

it("formats a local date without shifting to UTC", () => {
  expect(localIsoDate(new Date(2026, 10, 10, 23, 30))).toBe("2026-11-10");
  expect(localIsoDate(new Date(2026, 0, 5, 0, 5))).toBe("2026-01-05");
});
