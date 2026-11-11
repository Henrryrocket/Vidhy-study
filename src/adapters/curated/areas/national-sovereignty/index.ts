import type { CurriculumArea } from "../types";
import { territorySpaces } from "./territorySpaces";
import { riskManagement } from "./riskManagement";

export const nationalSovereignty: CurriculumArea = {
  subjectId: "national-sovereignty",
  topics: [
    { id: "sov-territory-spaces", title: "El territorio venezolano y sus espacios", year: 4, emoji: "🗺️", keywords: ["territorio", "espacio terrestre", "espacio marítimo", "espacio aéreo", "mar territorial", "zona económica exclusiva"] },
    { id: "sov-borders", title: "Límites y fronteras de Venezuela", year: 4, emoji: "📍", keywords: ["límites", "fronteras", "Colombia", "Brasil", "Guyana", "Esequibo", "límites marítimos"] },
    { id: "sov-national-symbols", title: "Los símbolos patrios", year: 4, emoji: "🇻🇪", keywords: ["símbolos patrios", "bandera", "escudo", "himno nacional", "Gloria al Bravo Pueblo"] },
    { id: "sov-constitution-principles", title: "Principios fundamentales de la Constitución de 1999", year: 4, emoji: "📜", keywords: ["Constitución", "1999", "principios fundamentales", "soberanía", "Estado", "carta magna"] },
    { id: "sov-public-power", title: "El Poder Público y sus ramas", year: 4, emoji: "⚖️", keywords: ["Poder Público", "Ejecutivo", "Legislativo", "Judicial", "Ciudadano", "Electoral", "separación de poderes"] },
    { id: "sov-risk-management", title: "Gestión integral de riesgos y protección civil", year: 5, emoji: "🚨", keywords: ["gestión de riesgos", "protección civil", "desastres", "sismo", "terremoto", "inundación", "prevención"] },
    { id: "sov-human-rights", title: "Los derechos humanos en la Constitución", year: 5, emoji: "🕊️", keywords: ["derechos humanos", "Constitución", "garantías", "dignidad", "deberes", "Declaración Universal"] },
    { id: "sov-natural-resources", title: "Los recursos naturales estratégicos", year: 5, emoji: "⛏️", keywords: ["recursos estratégicos", "petróleo", "gas", "minerales", "agua", "biodiversidad"] },
    { id: "sov-food-security", title: "Seguridad y soberanía alimentaria", year: 5, emoji: "🌽", keywords: ["seguridad alimentaria", "soberanía alimentaria", "agricultura", "producción de alimentos", "nutrición"] },
    { id: "sov-digital-citizenship", title: "Seguridad digital y ciudadanía", year: 5, emoji: "🔐", keywords: ["seguridad digital", "ciberseguridad", "datos personales", "internet", "privacidad"] },
  ],
  lessons: [territorySpaces, riskManagement],
};
