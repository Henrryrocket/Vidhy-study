import type { CurriculumArea } from "../types";
import { nervousSystem } from "./nervousSystem";

export const biology: CurriculumArea = {
  subjectId: "biology",
  topics: [
    { id: "nervous-system", title: "El sistema nervioso", year: 4, emoji: "🧠", keywords: nervousSystem.keywords },
  ],
  lessons: [nervousSystem],
};
