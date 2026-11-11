import type { CurriculumArea } from "../types";
import { fractions } from "./fractions";

export const mathematics: CurriculumArea = {
  subjectId: "mathematics",
  topics: [
    { id: "fractions", title: "Fracciones", year: 1, emoji: "🍕", keywords: fractions.keywords },
  ],
  lessons: [fractions],
};
