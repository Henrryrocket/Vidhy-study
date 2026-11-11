import type { CurriculumArea } from "../types";
import { culturalHeritage } from "./culturalHeritage";
import { kineticArt } from "./kineticArt";
import { visualElements } from "./visualElements";

export const artHeritage: CurriculumArea = {
  subjectId: "art-heritage",
  topics: [
    // 1.er año
    { id: "art-visual-elements", title: "Los elementos del lenguaje visual", year: 1, emoji: "🎨", keywords: ["punto", "línea", "forma", "textura", "elementos del arte", "lenguaje visual"] },
    { id: "art-color-theory", title: "La teoría del color", year: 1, emoji: "🌈", keywords: ["colores primarios", "colores secundarios", "círculo cromático", "colores cálidos y fríos", "color"] },
    { id: "art-drawing-techniques", title: "Técnicas de dibujo y pintura", year: 1, emoji: "🖌️", keywords: ["dibujo", "acuarela", "témpera", "sombreado", "técnicas artísticas"] },
    { id: "art-traditional-music", title: "Música tradicional venezolana", year: 1, emoji: "🎶", keywords: ["joropo", "cuatro", "gaita", "calipso", "música llanera", "instrumentos"] },
    { id: "art-crafts", title: "La artesanía venezolana", year: 1, emoji: "🧺", keywords: ["artesanía", "cestería", "cerámica", "chinchorro", "tejido"] },
    // 2.º año
    { id: "art-cultural-heritage", title: "El patrimonio cultural y natural de Venezuela", year: 2, emoji: "🏛️", keywords: ["patrimonio", "patrimonio de la humanidad", "UNESCO", "Canaima", "Coro", "Ciudad Universitaria"] },
    { id: "art-traditional-festivities", title: "Fiestas y danzas tradicionales", year: 2, emoji: "💃", keywords: ["diablos danzantes", "parranda de San Pedro", "tambores de San Juan", "danzas", "fiestas populares"] },
    { id: "art-venezuelan-painters", title: "Artistas plásticos venezolanos", year: 2, emoji: "🖼️", keywords: ["Arturo Michelena", "Armando Reverón", "Martín Tovar y Tovar", "pintura venezolana", "pintores"] },
    { id: "art-kinetic-art", title: "El arte cinético venezolano", year: 2, emoji: "🌀", keywords: ["arte cinético", "Jesús Soto", "Carlos Cruz-Diez", "op art", "arte óptico"] },
    { id: "art-theater-dance", title: "Teatro y expresión corporal", year: 2, emoji: "🎭", keywords: ["teatro", "expresión corporal", "títeres", "improvisación", "artes escénicas"] },
  ],
  lessons: [visualElements, culturalHeritage, kineticArt],
};
