import type { CurriculumArea } from "../types";
import { energyTransformations } from "./energyTransformations";
import { humanNutrition } from "./humanNutrition";
import { photosynthesis } from "./photosynthesis";
import { waterCycle } from "./waterCycle";

export const naturalSciences: CurriculumArea = {
  subjectId: "natural-sciences",
  topics: [
    { id: "nat-living-beings", title: "Los seres vivos y sus características", year: 1, emoji: "🐞", keywords: ["seres vivos", "funciones vitales", "nutrición", "relación", "reproducción", "reinos"] },
    { id: "nat-matter-properties", title: "La materia y sus propiedades", year: 1, emoji: "🧊", keywords: ["materia", "masa", "volumen", "densidad", "estados de la materia", "sólido líquido gaseoso"] },
    { id: "nat-mixtures", title: "Mezclas y métodos de separación", year: 1, emoji: "🧪", keywords: ["mezclas", "homogénea", "heterogénea", "filtración", "decantación", "evaporación", "destilación"] },
    { id: "photosynthesis", title: "La fotosíntesis", year: 1, emoji: "🌱", keywords: photosynthesis.keywords },
    { id: "water-cycle", title: "El ciclo del agua", year: 1, emoji: "💧", keywords: waterCycle.keywords },
    { id: "nat-ecosystems", title: "Los ecosistemas de Venezuela", year: 1, emoji: "🌳", keywords: ["ecosistema", "cadena alimentaria", "productores", "consumidores", "descomponedores", "biodiversidad"] },
    { id: "nat-energy-transformations", title: "La energía y sus transformaciones", year: 2, emoji: "⚡", keywords: energyTransformations.keywords },
    { id: "nat-heat-temperature", title: "Calor y temperatura", year: 2, emoji: "🌡️", keywords: ["calor", "temperatura", "termómetro", "dilatación", "conducción", "convección", "radiación"] },
    { id: "nat-force-motion", title: "Fuerza y movimiento", year: 2, emoji: "🏃", keywords: ["fuerza", "movimiento", "velocidad", "rapidez", "rozamiento", "fricción", "newton"] },
    { id: "nat-human-nutrition", title: "La nutrición humana y la alimentación sana", year: 2, emoji: "🥗", keywords: humanNutrition.keywords },
    { id: "nat-living-reproduction", title: "La reproducción de los seres vivos", year: 2, emoji: "🐣", keywords: ["reproducción sexual", "reproducción asexual", "polinización", "fecundación", "pubertad"] },
    { id: "nat-health-prevention", title: "Salud integral y prevención de enfermedades", year: 2, emoji: "🩺", keywords: ["salud", "enfermedades", "vacunas", "higiene", "dengue", "prevención"] },
  ],
  lessons: [photosynthesis, waterCycle, energyTransformations, humanNutrition],
};
