import type { CurriculumArea } from "../types";
import { photosynthesis } from "./photosynthesis";
import { waterCycle } from "./waterCycle";

export const naturalSciences: CurriculumArea = {
  subjectId: "natural-sciences",
  topics: [
    { id: "photosynthesis", title: "La fotosíntesis", year: 1, emoji: "🌱", keywords: photosynthesis.keywords },
    { id: "water-cycle", title: "El ciclo del agua", year: 1, emoji: "💧", keywords: waterCycle.keywords },
  ],
  lessons: [photosynthesis, waterCycle],
};
