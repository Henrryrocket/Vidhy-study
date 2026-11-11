import type { Interest, SchoolYear } from "./lesson";

export interface StudentProfile {
  name: string;
  age: number;
  /** School grade from 1 to 12. */
  grade: number;
  interests: Interest[];
}

export interface Settings {
  /** "Superpowers" switch: AI-generated content for topics outside the encyclopedia. */
  superpowers: boolean;
  theme: "system" | "light" | "dark";
}

export const DEFAULT_SETTINGS: Settings = { superpowers: false, theme: "system" };

export type ProfileErrors = Partial<Record<keyof StudentProfile, string>>;

export function validateProfile(profile: StudentProfile): ProfileErrors {
  const errors: ProfileErrors = {};
  if (!profile.name.trim()) errors.name = "Escribe tu nombre o un apodo.";
  if (!Number.isInteger(profile.age) || profile.age < 10 || profile.age > 18) {
    errors.age = "La plataforma es para estudiantes de 10 a 18 años.";
  }
  if (!Number.isInteger(profile.grade) || profile.grade < 4 || profile.grade > 12) {
    errors.grade = "Elige tu grado.";
  }
  if (profile.interests.length === 0) errors.interests = "Elige al menos un interés.";
  return errors;
}

export type ReadingLevel = "basic" | "advanced";

export function readingLevel(profile: StudentProfile): ReadingLevel {
  return profile.grade >= 8 ? "advanced" : "basic";
}

/** Año of Educación Media General (Venezuela): 7.º grado = 1.er año … 11.º grado = 5.º año. */
export function schoolYearFor(profile: StudentProfile): SchoolYear | null {
  const year = profile.grade - 6;
  return year >= 1 && year <= 5 ? (year as SchoolYear) : null;
}
