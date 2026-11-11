import type { CurriculumArea } from "../types";
import { cell } from "./cell";
import { mendelianGenetics } from "./mendelianGenetics";
import { nervousSystem } from "./nervousSystem";

export const biology: CurriculumArea = {
  subjectId: "biology",
  topics: [
    { id: "bio-cell", title: "La célula: unidad de la vida", year: 3, emoji: "🦠", keywords: cell.keywords },
    { id: "bio-biomolecules", title: "Las biomoléculas", year: 3, emoji: "🥚", keywords: ["biomoléculas", "carbohidratos", "lípidos", "proteínas", "ácidos nucleicos", "glúcidos"] },
    { id: "bio-cell-division", title: "División celular: mitosis y meiosis", year: 3, emoji: "➗", keywords: ["mitosis", "meiosis", "ciclo celular", "división celular", "gametos", "cromosomas"] },
    { id: "bio-classification", title: "Clasificación de los seres vivos", year: 3, emoji: "🗂️", keywords: ["taxonomía", "reinos", "dominios", "especie", "nombre científico", "Linneo"] },
    { id: "bio-microorganisms", title: "Microorganismos: virus, bacterias y hongos", year: 3, emoji: "🧫", keywords: ["microorganismos", "virus", "bacterias", "hongos", "microbios", "antibióticos"] },
    { id: "bio-digestion-excretion", title: "Digestión y excreción", year: 4, emoji: "🍽️", keywords: ["digestión", "aparato digestivo", "excreción", "riñones", "orina", "intestino"] },
    { id: "bio-circulation-respiration", title: "Circulación y respiración", year: 4, emoji: "❤️", keywords: ["corazón", "sangre", "aparato circulatorio", "pulmones", "respiración", "arterias y venas"] },
    { id: "nervous-system", title: "El sistema nervioso", year: 4, emoji: "🧠", keywords: nervousSystem.keywords },
    { id: "bio-endocrine", title: "Las hormonas y el sistema endocrino", year: 4, emoji: "🧪", keywords: ["hormonas", "glándulas", "endocrino", "tiroides", "insulina", "pubertad"] },
    { id: "bio-immunity", title: "Las defensas del cuerpo: inmunidad", year: 4, emoji: "🛡️", keywords: ["inmunidad", "sistema inmunológico", "anticuerpos", "vacunas", "glóbulos blancos", "defensas"] },
    { id: "bio-human-reproduction", title: "Reproducción humana y salud sexual", year: 4, emoji: "👶", keywords: ["reproducción humana", "aparato reproductor", "fecundación", "embarazo", "salud sexual", "ciclo menstrual"] },
    { id: "bio-mendelian-genetics", title: "Genética y herencia: las leyes de Mendel", year: 5, emoji: "🧬", keywords: mendelianGenetics.keywords },
    { id: "bio-dna-proteins", title: "El ADN y la síntesis de proteínas", year: 5, emoji: "🧵", keywords: ["ADN", "ARN", "código genético", "transcripción", "traducción", "proteínas"] },
    { id: "bio-evolution", title: "La evolución de los seres vivos", year: 5, emoji: "🐒", keywords: ["evolución", "Darwin", "selección natural", "adaptación", "especiación", "fósiles"] },
    { id: "bio-ecology-biodiversity", title: "Ecología y biodiversidad de Venezuela", year: 5, emoji: "🦜", keywords: ["ecología", "biodiversidad", "especies endémicas", "conservación", "parques nacionales", "especies en peligro"] },
    { id: "bio-biotechnology", title: "Biotecnología y salud", year: 5, emoji: "🧫", keywords: ["biotecnología", "ingeniería genética", "transgénicos", "clonación", "medicamentos", "vacunas"] },
  ],
  lessons: [cell, nervousSystem, mendelianGenetics],
};
