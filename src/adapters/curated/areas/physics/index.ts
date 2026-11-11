import type { CurriculumArea } from "../types";
import { newtonLaws } from "./newtonLaws";
import { uniformMotion } from "./uniformMotion";

export const physics: CurriculumArea = {
  subjectId: "physics",
  topics: [
    // 3.º año
    { id: "phys-magnitudes-units", title: "Magnitudes físicas y unidades (SI)", year: 3, emoji: "📏", keywords: ["magnitudes", "unidades", "sistema internacional", "conversión de unidades", "notación científica", "medición"] },
    { id: "phys-vectors", title: "Magnitudes escalares y vectoriales", year: 3, emoji: "➡️", keywords: ["vectores", "escalares", "magnitud vectorial", "suma de vectores", "módulo", "dirección y sentido"] },
    { id: "phys-uniform-motion", title: "Movimiento rectilíneo uniforme (MRU)", year: 3, emoji: "🚗", keywords: uniformMotion.keywords },
    { id: "phys-accelerated-motion", title: "Movimiento rectilíneo uniformemente variado (MRUV)", year: 3, emoji: "🏎️", keywords: ["mruv", "aceleración", "movimiento acelerado", "frenado", "velocidad inicial", "cinemática"] },
    { id: "phys-free-fall", title: "Caída libre y lanzamiento vertical", year: 3, emoji: "🪂", keywords: ["caída libre", "gravedad", "lanzamiento vertical", "aceleración de gravedad", "9,8 m/s²"] },
    // 4.º año
    { id: "phys-newton-laws", title: "Leyes de Newton", year: 4, emoji: "🍎", keywords: newtonLaws.keywords },
    { id: "phys-friction", title: "Fuerza de roce y diagramas de cuerpo libre", year: 4, emoji: "🧊", keywords: ["roce", "fricción", "rozamiento", "fuerza normal", "diagrama de cuerpo libre", "plano inclinado"] },
    { id: "phys-circular-motion", title: "Movimiento circular uniforme", year: 4, emoji: "🎡", keywords: ["movimiento circular", "período", "frecuencia", "velocidad angular", "fuerza centrípeta"] },
    { id: "phys-gravitation", title: "Gravitación universal", year: 4, emoji: "🪐", keywords: ["gravitación", "ley de gravitación universal", "peso", "órbitas", "satélites", "gravedad"] },
    { id: "phys-work-energy", title: "Trabajo, energía y potencia", year: 4, emoji: "⚡", keywords: ["trabajo", "energía cinética", "energía potencial", "conservación de la energía", "potencia", "julio"] },
    { id: "phys-momentum", title: "Cantidad de movimiento e impulso", year: 4, emoji: "🎱", keywords: ["cantidad de movimiento", "momento lineal", "impulso", "choques", "colisiones"] },
    // 5.º año
    { id: "phys-heat-temperature", title: "Calor y temperatura", year: 5, emoji: "🌡️", keywords: ["calor", "temperatura", "dilatación", "escalas de temperatura", "calor específico", "termodinámica"] },
    { id: "phys-waves", title: "Ondas y sonido", year: 5, emoji: "🌊", keywords: ["ondas", "sonido", "frecuencia", "longitud de onda", "amplitud", "eco"] },
    { id: "phys-optics", title: "La luz y la óptica geométrica", year: 5, emoji: "🔦", keywords: ["luz", "óptica", "reflexión", "refracción", "espejos", "lentes"] },
    { id: "phys-electrostatics", title: "Carga eléctrica y ley de Coulomb", year: 5, emoji: "🎈", keywords: ["electrostática", "carga eléctrica", "ley de coulomb", "campo eléctrico", "electrización"] },
    { id: "phys-electric-current", title: "Corriente eléctrica y ley de Ohm", year: 5, emoji: "🔌", keywords: ["corriente eléctrica", "ley de ohm", "voltaje", "resistencia", "circuitos", "amperio"] },
    { id: "phys-magnetism", title: "Magnetismo y electromagnetismo", year: 5, emoji: "🧲", keywords: ["magnetismo", "imanes", "campo magnético", "electromagnetismo", "inducción", "brújula"] },
  ],
  lessons: [uniformMotion, newtonLaws],
};
