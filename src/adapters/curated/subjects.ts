import type { Subject } from "../../domain/lesson";

/**
 * Áreas de formación of Venezuela's Educación Media General with weekly hours per año,
 * from Resolución DM/0033 (Gaceta Oficial 41.221, 24-08-2017).
 * "Participación en Grupos de Creación, Recreación y Producción" is left out: each school defines its own groups.
 */
export const SUBJECTS: Subject[] = [
  { id: "spanish-language", name: "Castellano", emoji: "📚", color: "#db2777", description: "Lectura, escritura, gramática, literatura y comunicación oral.", hoursByYear: { 1: 4, 2: 4, 3: 4, 4: 4, 5: 4 } },
  { id: "mathematics", name: "Matemáticas", emoji: "➗", color: "#2563eb", description: "Números, álgebra, geometría, funciones y estadística.", hoursByYear: { 1: 4, 2: 4, 3: 4, 4: 4, 5: 4 } },
  { id: "foreign-languages", name: "Inglés y otras lenguas extranjeras", emoji: "🌎", color: "#0d9488", description: "Comunicación en inglés: vocabulario, gramática, lectura y conversación.", hoursByYear: { 1: 6, 2: 6, 3: 6, 4: 6, 5: 4 } },
  { id: "natural-sciences", name: "Ciencias Naturales", emoji: "🔬", color: "#16a34a", description: "Materia, energía, seres vivos, ecosistemas y el cuerpo humano.", hoursByYear: { 1: 6, 2: 6 } },
  { id: "biology", name: "Biología", emoji: "🧬", color: "#15803d", description: "La célula, los sistemas del cuerpo, la genética y la evolución.", hoursByYear: { 3: 4, 4: 4, 5: 4 } },
  { id: "chemistry", name: "Química", emoji: "⚗️", color: "#9333ea", description: "La materia, el átomo, la tabla periódica, los enlaces y las reacciones.", hoursByYear: { 3: 4, 4: 4, 5: 4 } },
  { id: "physics", name: "Física", emoji: "⚛️", color: "#7c3aed", description: "Movimiento, fuerzas, energía, ondas, electricidad y magnetismo.", hoursByYear: { 3: 4, 4: 4, 5: 4 } },
  { id: "earth-sciences", name: "Ciencias de la Tierra", emoji: "🌋", color: "#0891b2", description: "Estructura de la Tierra, rocas, relieve, clima y riesgos naturales.", hoursByYear: { 5: 2 } },
  { id: "geography-history-citizenship", name: "Geografía, Historia y Ciudadanía", emoji: "🗺️", color: "#b45309", description: "El espacio geográfico, la historia de Venezuela y del mundo, y la vida ciudadana.", hoursByYear: { 1: 6, 2: 6, 3: 6, 4: 4, 5: 4 } },
  { id: "art-heritage", name: "Arte y Patrimonio", emoji: "🎨", color: "#ea580c", description: "Expresiones artísticas y el patrimonio cultural y natural.", hoursByYear: { 1: 4, 2: 4 } },
  { id: "physical-education", name: "Educación Física", emoji: "🏃", color: "#dc2626", description: "Actividad física, deporte, salud y vida activa.", hoursByYear: { 1: 6, 2: 6, 3: 6, 4: 6, 5: 6 } },
  { id: "national-sovereignty", name: "Formación para la Soberanía Nacional", emoji: "🇻🇪", color: "#ca8a04", description: "Territorio, Constitución, derechos y gestión de riesgos.", hoursByYear: { 4: 2, 5: 2 } },
  { id: "guidance", name: "Orientación y Convivencia", emoji: "🤝", color: "#0284c7", description: "Autoconocimiento, convivencia, hábitos de estudio y proyecto de vida.", hoursByYear: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2 } },
];

export const STUDY_PLAN_SOURCE = {
  title: "Resolución DM/0033: Plan de Estudio para la Educación Media General (Gaceta Oficial N.º 41.221, 24 de agosto de 2017)",
  url: "http://gacetaoficial-ve.blogspot.com/2017/08/resolucion-n-dm0033-plan-de-estudio.html",
};
