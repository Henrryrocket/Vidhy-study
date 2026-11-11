import type { CurriculumArea } from "../types";
import { earthInternalStructure } from "./earthInternalStructure";
import { plateTectonics } from "./plateTectonics";

export const earthSciences: CurriculumArea = {
  subjectId: "earth-sciences",
  topics: [
    { id: "earth-internal-structure", title: "La estructura interna de la Tierra", year: 5, emoji: "🌍", keywords: earthInternalStructure.keywords },
    { id: "earth-plate-tectonics", title: "Tectónica de placas y sismos", year: 5, emoji: "🌋", keywords: plateTectonics.keywords },
    { id: "earth-rocks-minerals", title: "Minerales, rocas y el ciclo de las rocas", year: 5, emoji: "🪨", keywords: ["minerales", "rocas ígneas", "rocas sedimentarias", "rocas metamórficas", "ciclo de las rocas", "petrología"] },
    { id: "earth-relief-venezuela", title: "El relieve de Venezuela y su formación", year: 5, emoji: "🏔️", keywords: ["relieve", "Andes", "cordillera de la Costa", "llanos", "tepuyes", "macizo guayanés", "erosión"] },
    { id: "earth-atmosphere-climate", title: "La atmósfera, el tiempo y el clima", year: 5, emoji: "⛅", keywords: ["atmósfera", "clima", "tiempo atmosférico", "capas de la atmósfera", "efecto invernadero", "cambio climático"] },
    { id: "earth-natural-hazards", title: "Riesgos naturales y gestión de riesgos", year: 5, emoji: "⚠️", keywords: ["riesgos naturales", "amenaza", "vulnerabilidad", "deslaves", "inundaciones", "prevención de desastres"] },
  ],
  lessons: [earthInternalStructure, plateTectonics],
};
