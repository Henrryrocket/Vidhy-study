import { yearsOf, type Subject } from "../domain/lesson";

export const yearLabel = (year: number) => `${year}.º año`;

export function yearRange(subject: Subject): string {
  const years = yearsOf(subject);
  return years.length === 1 ? yearLabel(years[0]) : `${years[0]}.º a ${yearLabel(years[years.length - 1])}`;
}
