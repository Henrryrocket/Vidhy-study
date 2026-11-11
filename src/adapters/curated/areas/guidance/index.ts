import type { CurriculumArea } from "../types";
import { studyHabits } from "./studyHabits";
import { conflictResolution } from "./conflictResolution";
import { assertiveCommunication } from "./assertiveCommunication";

export const guidance: CurriculumArea = {
  subjectId: "guidance",
  topics: [
    { id: "guide-new-school", title: "Adaptación al liceo", year: 1, emoji: "🏫", keywords: ["liceo", "adaptación", "primer año", "cambio de escuela", "nuevo ambiente"] },
    { id: "guide-self-knowledge", title: "Autoconocimiento y autoestima", year: 1, emoji: "🪞", keywords: ["autoconocimiento", "autoestima", "identidad", "fortalezas", "quién soy"] },
    { id: "guide-study-habits", title: "Técnicas y hábitos de estudio", year: 1, emoji: "📚", keywords: ["hábitos de estudio", "técnicas de estudio", "cómo estudiar", "pomodoro", "resumen", "mapa conceptual"] },
    { id: "guide-emotions", title: "Reconocer y manejar las emociones", year: 1, emoji: "💛", keywords: ["emociones", "sentimientos", "inteligencia emocional", "ira", "ansiedad", "calma"] },
    { id: "guide-adolescence-changes", title: "Los cambios de la adolescencia", year: 2, emoji: "🌱", keywords: ["adolescencia", "pubertad", "cambios físicos", "cambios emocionales", "crecimiento"] },
    { id: "guide-assertive-communication", title: "La comunicación asertiva", year: 2, emoji: "💬", keywords: ["asertividad", "comunicación asertiva", "escucha activa", "decir que no", "expresarse"] },
    { id: "guide-friendship", title: "La amistad y la presión de grupo", year: 2, emoji: "🫂", keywords: ["amistad", "amigos", "presión de grupo", "pares", "influencia"] },
    { id: "guide-time-management", title: "Organización del tiempo", year: 2, emoji: "⏰", keywords: ["organización del tiempo", "horario", "agenda", "planificación", "procrastinación"] },
    { id: "guide-conflict-resolution", title: "La resolución pacífica de conflictos", year: 2, emoji: "🕊️", keywords: ["conflictos", "resolución de conflictos", "mediación", "negociación", "peleas", "diálogo"] },
    { id: "guide-teamwork", title: "El trabajo en equipo", year: 3, emoji: "👥", keywords: ["trabajo en equipo", "cooperación", "roles", "colaborar", "grupo"] },
    { id: "guide-bullying-prevention", title: "Prevención del acoso escolar", year: 3, emoji: "🛑", keywords: ["acoso escolar", "bullying", "ciberacoso", "violencia escolar", "respeto"] },
    { id: "guide-digital-citizenship", title: "Uso responsable de internet y redes sociales", year: 3, emoji: "📱", keywords: ["redes sociales", "internet", "privacidad", "huella digital", "uso responsable"] },
    { id: "guide-values", title: "Los valores para la convivencia", year: 3, emoji: "🤝", keywords: ["valores", "respeto", "solidaridad", "responsabilidad", "honestidad", "tolerancia"] },
    { id: "guide-decision-making", title: "La toma de decisiones", year: 4, emoji: "🔀", keywords: ["decisiones", "toma de decisiones", "consecuencias", "elegir", "pros y contras"] },
    { id: "guide-healthy-relationships", title: "Relaciones sanas y respeto", year: 4, emoji: "❤️", keywords: ["relaciones sanas", "noviazgo", "respeto", "consentimiento", "violencia"] },
    { id: "guide-addiction-prevention", title: "Prevención del consumo de drogas", year: 4, emoji: "🚭", keywords: ["drogas", "alcohol", "tabaco", "adicciones", "prevención", "consumo"] },
    { id: "guide-vocational-interests", title: "Intereses y aptitudes vocacionales", year: 4, emoji: "🧩", keywords: ["vocación", "intereses", "aptitudes", "habilidades", "test vocacional"] },
    { id: "guide-life-project", title: "El proyecto de vida", year: 5, emoji: "🎯", keywords: ["proyecto de vida", "metas", "futuro", "objetivos", "plan de vida"] },
    { id: "guide-career-choice", title: "Orientación vocacional: carreras y oficios", year: 5, emoji: "🎓", keywords: ["carreras", "universidad", "oficios", "orientación vocacional", "estudios superiores"] },
    { id: "guide-personal-finance", title: "Administración del dinero personal", year: 5, emoji: "💰", keywords: ["dinero", "ahorro", "presupuesto", "finanzas personales", "gastos"] },
    { id: "guide-community-service", title: "Servicio y participación en la comunidad", year: 5, emoji: "🙌", keywords: ["servicio comunitario", "voluntariado", "comunidad", "participación", "solidaridad"] },
  ],
  lessons: [studyHabits, assertiveCommunication, conflictResolution],
};
