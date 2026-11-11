import type { CurriculumArea } from "../types";
import { warmUpHealthyHabits } from "./warmUpHealthyHabits";
import { physicalCapacities } from "./physicalCapacities";
import { athletics } from "./athletics";

export const physicalEducation: CurriculumArea = {
  subjectId: "physical-education",
  topics: [
    { id: "pe-warmup-healthy-habits", title: "El calentamiento y los hábitos de vida saludable", year: 1, emoji: "🔥", keywords: ["calentamiento", "hábitos saludables", "vida saludable", "estiramiento", "vuelta a la calma", "hidratación"] },
    { id: "pe-motor-skills", title: "Las habilidades motrices básicas", year: 1, emoji: "🤸", keywords: ["habilidades motrices", "correr", "saltar", "lanzar", "atrapar", "desplazamientos"] },
    { id: "pe-traditional-games", title: "Juegos tradicionales venezolanos", year: 1, emoji: "🪀", keywords: ["juegos tradicionales", "metras", "trompo", "perinola", "papagayo", "pañuelito"] },
    { id: "pe-posture", title: "La postura corporal", year: 1, emoji: "🧍", keywords: ["postura", "columna", "espalda", "morral", "ergonomía", "sentarse bien"] },
    { id: "pe-physical-capacities", title: "Las capacidades físicas", year: 2, emoji: "💪", keywords: ["capacidades físicas", "fuerza", "resistencia", "velocidad", "flexibilidad", "condición física"] },
    { id: "pe-athletics", title: "Atletismo: carreras, saltos y lanzamientos", year: 2, emoji: "🏃", keywords: ["atletismo", "carreras", "salto largo", "salto alto", "lanzamiento", "relevos"] },
    { id: "pe-coordination-balance", title: "Coordinación y equilibrio", year: 2, emoji: "⚖️", keywords: ["coordinación", "equilibrio", "capacidades coordinativas", "agilidad", "ritmo"] },
    { id: "pe-football", title: "Fútbol y fútbol sala", year: 2, emoji: "⚽", keywords: ["fútbol", "fútbol sala", "futsal", "pase", "conducción", "reglas"] },
    { id: "pe-basketball", title: "Baloncesto", year: 3, emoji: "🏀", keywords: ["baloncesto", "básquet", "basketball", "dribling", "lanzamiento", "reglas"] },
    { id: "pe-volleyball", title: "Voleibol", year: 3, emoji: "🏐", keywords: ["voleibol", "vóley", "saque", "recepción", "remate", "reglas"] },
    { id: "pe-baseball", title: "Béisbol y softbol", year: 3, emoji: "⚾", keywords: ["béisbol", "softbol", "pelota", "bateo", "lanzamiento", "reglas"] },
    { id: "pe-hydration-nutrition", title: "Hidratación y alimentación para la actividad física", year: 3, emoji: "💧", keywords: ["hidratación", "alimentación", "nutrición", "agua", "energía", "deporte"] },
    { id: "pe-training-principles", title: "Los principios del entrenamiento", year: 4, emoji: "📈", keywords: ["entrenamiento", "principios", "progresión", "sobrecarga", "descanso", "continuidad"] },
    { id: "pe-heart-rate", title: "Frecuencia cardíaca y control del esfuerzo", year: 4, emoji: "❤️", keywords: ["frecuencia cardíaca", "pulso", "pulsaciones", "esfuerzo", "intensidad"] },
    { id: "pe-gymnastics", title: "Gimnasia básica", year: 4, emoji: "🤸", keywords: ["gimnasia", "rollo", "voltereta", "equilibrio", "acrobacia", "colchoneta"] },
    { id: "pe-fair-play", title: "Juego limpio y reglamentos deportivos", year: 4, emoji: "🤝", keywords: ["juego limpio", "fair play", "reglamento", "árbitro", "deportividad"] },
    { id: "pe-personal-fitness-plan", title: "Plan personal de acondicionamiento físico", year: 5, emoji: "🗓️", keywords: ["plan de entrenamiento", "acondicionamiento", "rutina", "condición física", "metas"] },
    { id: "pe-first-aid", title: "Primeros auxilios básicos en el deporte", year: 5, emoji: "🩹", keywords: ["primeros auxilios", "lesiones", "esguince", "RICE", "emergencia", "deporte"] },
    { id: "pe-outdoor-recreation", title: "Recreación y actividades al aire libre", year: 5, emoji: "🏕️", keywords: ["recreación", "aire libre", "excursión", "campamento", "senderismo", "tiempo libre"] },
    { id: "pe-sports-organization", title: "Organización de eventos deportivos", year: 5, emoji: "🏆", keywords: ["torneo", "eventos deportivos", "organización", "intercursos", "competencia"] },
  ],
  lessons: [warmUpHealthyHabits, physicalCapacities, athletics],
};
