import type { Mastery } from "./quiz";

/** Spaced-repetition intervals (in days) after a study session. */
const INTERVALS: Record<Mastery, number[]> = {
  review: [1, 3, 7],
  almost: [2, 5, 10],
  mastered: [3, 7, 14],
};

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

/**
 * Review dates for spaced practice. With an exam date, intervals are
 * compressed so every review lands on or before the exam.
 */
export function reviewSchedule(mastery: Mastery, from: Date, examDate?: Date): Date[] {
  const dates = INTERVALS[mastery].map((d) => addDays(from, d));
  if (!examDate) return dates;

  const daysLeft = Math.floor((examDate.getTime() - from.getTime()) / 86_400_000);
  if (daysLeft < 1) return [];
  const before = dates.filter((d) => d <= examDate);
  if (before.length > 0) return before;
  return [addDays(from, Math.max(1, Math.floor(daysLeft / 2)))];
}
