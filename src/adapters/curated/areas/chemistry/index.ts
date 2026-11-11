import type { CurriculumArea } from "../types";
import { atomicStructure } from "./atomicStructure";
import { chemicalReactions } from "./chemicalReactions";

export const chemistry: CurriculumArea = {
  subjectId: "chemistry",
  topics: [
    // 3.º año
    { id: "chem-matter-properties", title: "La materia y sus propiedades", year: 3, emoji: "🧊", keywords: ["materia", "propiedades de la materia", "estados de la materia", "masa", "volumen", "densidad", "cambios físicos y químicos"] },
    { id: "chem-mixtures", title: "Sustancias puras, mezclas y métodos de separación", year: 3, emoji: "🥤", keywords: ["mezclas", "sustancias puras", "mezcla homogénea", "mezcla heterogénea", "filtración", "destilación", "métodos de separación"] },
    { id: "chem-atomic-structure", title: "El átomo y su estructura", year: 3, emoji: "⚛️", keywords: atomicStructure.keywords },
    { id: "chem-periodic-table", title: "La tabla periódica", year: 3, emoji: "🧪", keywords: ["tabla periódica", "elementos químicos", "grupos", "períodos", "metales", "no metales", "configuración electrónica"] },
    { id: "chem-nomenclature", title: "Nomenclatura de compuestos inorgánicos", year: 3, emoji: "🏷️", keywords: ["nomenclatura", "óxidos", "ácidos", "hidróxidos", "sales", "fórmulas químicas", "valencia"] },
    // 4.º año
    { id: "chem-chemical-bonds", title: "El enlace químico", year: 4, emoji: "🔗", keywords: ["enlace químico", "enlace iónico", "enlace covalente", "enlace metálico", "electronegatividad", "regla del octeto"] },
    { id: "chem-chemical-reactions", title: "Reacciones y ecuaciones químicas", year: 4, emoji: "🔥", keywords: chemicalReactions.keywords },
    { id: "chem-stoichiometry", title: "El mol y la estequiometría", year: 4, emoji: "⚖️", keywords: ["mol", "masa molar", "estequiometría", "número de avogadro", "reactivo limitante", "rendimiento"] },
    { id: "chem-gases", title: "Leyes de los gases", year: 4, emoji: "🎈", keywords: ["gases", "ley de boyle", "ley de charles", "presión", "volumen", "temperatura", "gas ideal"] },
    { id: "chem-solutions", title: "Soluciones y concentración", year: 4, emoji: "🧂", keywords: ["soluciones", "disoluciones", "soluto", "solvente", "concentración", "molaridad", "solubilidad"] },
    // 5.º año
    { id: "chem-reaction-rates", title: "Velocidad de reacción", year: 5, emoji: "⏱️", keywords: ["cinética química", "velocidad de reacción", "catalizador", "temperatura", "concentración"] },
    { id: "chem-chemical-equilibrium", title: "Equilibrio químico", year: 5, emoji: "🔄", keywords: ["equilibrio químico", "reacciones reversibles", "principio de le chatelier", "constante de equilibrio"] },
    { id: "chem-acids-bases", title: "Ácidos, bases y pH", year: 5, emoji: "🍋", keywords: ["ácidos", "bases", "ph", "neutralización", "indicadores", "escala de ph"] },
    { id: "chem-redox", title: "Oxidación y reducción", year: 5, emoji: "🔋", keywords: ["oxidación", "reducción", "redox", "número de oxidación", "pilas", "corrosión"] },
    { id: "chem-organic-intro", title: "Química del carbono", year: 5, emoji: "🌿", keywords: ["química orgánica", "carbono", "compuestos orgánicos", "grupos funcionales", "alcoholes", "biomoléculas"] },
    { id: "chem-hydrocarbons", title: "Hidrocarburos y petróleo", year: 5, emoji: "🛢️", keywords: ["hidrocarburos", "petróleo", "alcanos", "alquenos", "alquinos", "refinación", "gas natural"] },
  ],
  lessons: [atomicStructure, chemicalReactions],
};
