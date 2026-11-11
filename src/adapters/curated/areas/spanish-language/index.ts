import type { CurriculumArea } from "../types";
import { accentuation } from "./accentuation";
import { partsOfSpeech } from "./partsOfSpeech";
import { sentence } from "./sentence";

export const spanishLanguage: CurriculumArea = {
  subjectId: "spanish-language",
  topics: [
    // 1.er año
    { id: "spa-communication", title: "La comunicación y sus elementos", year: 1, emoji: "💬", keywords: ["emisor", "receptor", "mensaje", "canal", "código", "comunicación"] },
    { id: "spa-parts-of-speech", title: "Las categorías gramaticales", year: 1, emoji: "🧩", keywords: ["sustantivo", "adjetivo", "verbo", "clases de palabras", "artículo", "adverbio"] },
    { id: "spa-narrative-text", title: "El texto narrativo: el cuento", year: 1, emoji: "📖", keywords: ["narrador", "personajes", "inicio nudo desenlace", "cuento", "narración"] },
    { id: "spa-punctuation", title: "Mayúsculas y signos de puntuación", year: 1, emoji: "✏️", keywords: ["punto", "coma", "mayúsculas", "puntuación", "ortografía"] },
    { id: "spa-myths-legends", title: "Mitos y leyendas de Venezuela", year: 1, emoji: "🐉", keywords: ["mito", "leyenda", "tradición oral", "la sayona", "el silbón", "María Lionza"] },
    // 2.º año
    { id: "spa-accentuation", title: "La acentuación: agudas, llanas y esdrújulas", year: 2, emoji: "🔤", keywords: ["tilde", "acento", "agudas", "llanas", "graves", "esdrújulas", "sílaba tónica"] },
    { id: "spa-sentence", title: "La oración: sujeto y predicado", year: 2, emoji: "🧱", keywords: ["oración simple", "sujeto", "predicado", "núcleo", "sintaxis"] },
    { id: "spa-verb", title: "El verbo: tiempos y modos", year: 2, emoji: "⏳", keywords: ["conjugación", "modo indicativo", "subjuntivo", "imperativo", "tiempos verbales"] },
    { id: "spa-descriptive-text", title: "El texto descriptivo", year: 2, emoji: "🖼️", keywords: ["descripción", "retrato", "prosopografía", "etopeya", "describir"] },
    { id: "spa-lyric-genre", title: "El género lírico: verso, rima y estrofa", year: 2, emoji: "🎼", keywords: ["poesía", "poema", "verso", "rima", "estrofa", "métrica"] },
    // 3.er año
    { id: "spa-argumentative-text", title: "El texto argumentativo", year: 3, emoji: "⚖️", keywords: ["tesis", "argumentos", "conclusión", "opinión", "argumentar"] },
    { id: "spa-literary-figures", title: "Las figuras literarias", year: 3, emoji: "🌙", keywords: ["metáfora", "símil", "comparación", "personificación", "hipérbole", "recursos literarios"] },
    { id: "spa-compound-sentence", title: "Oraciones compuestas: coordinadas y subordinadas", year: 3, emoji: "🔗", keywords: ["oración compuesta", "coordinación", "subordinación", "conjunciones", "nexos"] },
    { id: "spa-drama-genre", title: "El género dramático", year: 3, emoji: "🎭", keywords: ["teatro", "drama", "acotaciones", "diálogo", "tragedia", "comedia"] },
    { id: "spa-expository-text", title: "El texto expositivo", year: 3, emoji: "📰", keywords: ["exposición", "informar", "texto informativo", "causa y efecto", "explicar"] },
    // 4.º año
    { id: "spa-venezuelan-literature-19th", title: "Literatura venezolana del siglo XIX", year: 4, emoji: "🇻🇪", keywords: ["romanticismo", "costumbrismo", "Andrés Bello", "Juan Vicente González", "literatura venezolana"] },
    { id: "spa-essay", title: "El ensayo", year: 4, emoji: "📝", keywords: ["ensayo", "introducción desarrollo conclusión", "Mariano Picón Salas", "escribir un ensayo"] },
    { id: "spa-oral-debate", title: "La exposición oral y el debate", year: 4, emoji: "🎤", keywords: ["debate", "exposición oral", "moderador", "oratoria", "hablar en público"] },
    { id: "spa-linguistic-variation", title: "Variedades del español de Venezuela", year: 4, emoji: "🗣️", keywords: ["dialecto", "venezolanismos", "registro formal", "registro informal", "variación lingüística"] },
    { id: "spa-research-report", title: "El informe y la monografía", year: 4, emoji: "📑", keywords: ["informe", "monografía", "citas", "bibliografía", "investigación"] },
    // 5.º año
    { id: "spa-venezuelan-literature-20th", title: "Literatura venezolana del siglo XX", year: 5, emoji: "📚", keywords: ["Rómulo Gallegos", "Doña Bárbara", "Arturo Uslar Pietri", "Teresa de la Parra", "Andrés Eloy Blanco"] },
    { id: "spa-latin-american-boom", title: "Literatura latinoamericana: el boom", year: 5, emoji: "🌎", keywords: ["boom latinoamericano", "realismo mágico", "García Márquez", "Cortázar", "Vargas Llosa"] },
    { id: "spa-critical-reading", title: "Lectura crítica e inferencias", year: 5, emoji: "🔍", keywords: ["inferir", "comprensión lectora", "idea principal", "lectura crítica", "intención del autor"] },
    { id: "spa-media-discourse", title: "El discurso de los medios y la publicidad", year: 5, emoji: "📺", keywords: ["publicidad", "noticia", "medios de comunicación", "persuasión", "noticias falsas"] },
    { id: "spa-formal-writing", title: "Textos formales: carta, solicitud y currículo", year: 5, emoji: "✉️", keywords: ["carta formal", "solicitud", "currículo", "curriculum vitae", "redacción formal"] },
  ],
  lessons: [partsOfSpeech, accentuation, sentence],
};
