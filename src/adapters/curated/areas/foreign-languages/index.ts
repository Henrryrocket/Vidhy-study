import type { CurriculumArea } from "../types";
import { pastSimple } from "./pastSimple";
import { presentContinuous } from "./presentContinuous";
import { presentSimple } from "./presentSimple";

export const foreignLanguages: CurriculumArea = {
  subjectId: "foreign-languages",
  topics: [
    // 1.er año
    { id: "eng-greetings", title: "Saludos y presentaciones (greetings)", year: 1, emoji: "👋", keywords: ["greetings", "saludos", "hello", "presentarse", "introductions"] },
    { id: "eng-verb-to-be", title: "El verbo to be", year: 1, emoji: "🧍", keywords: ["verb to be", "am is are", "ser o estar en inglés", "to be"] },
    { id: "eng-alphabet-numbers", title: "El alfabeto y los números", year: 1, emoji: "🔢", keywords: ["alphabet", "numbers", "alfabeto en inglés", "números en inglés", "spelling"] },
    { id: "eng-family-possessives", title: "La familia y los adjetivos posesivos", year: 1, emoji: "👨‍👩‍👧", keywords: ["family", "familia en inglés", "possessive adjectives", "my your his her"] },
    { id: "eng-articles-plurals", title: "Artículos (a/an/the) y plurales", year: 1, emoji: "🍎", keywords: ["articles", "a an the", "plurals", "artículos en inglés", "plural"] },
    // 2.º año
    { id: "eng-present-simple", title: "Presente simple (present simple)", year: 2, emoji: "🔁", keywords: ["present simple", "presente simple", "do does", "rutinas", "simple present"] },
    { id: "eng-frequency-adverbs", title: "Rutinas y adverbios de frecuencia", year: 2, emoji: "⏰", keywords: ["adverbs of frequency", "always usually never", "daily routine", "rutina diaria"] },
    { id: "eng-present-continuous", title: "Presente continuo (present continuous)", year: 2, emoji: "🏃", keywords: ["present continuous", "presente progresivo", "ing", "present progressive"] },
    { id: "eng-there-is-are", title: "There is / there are", year: 2, emoji: "🏠", keywords: ["there is", "there are", "hay en inglés", "describir lugares"] },
    { id: "eng-prepositions", title: "Preposiciones de lugar y tiempo", year: 2, emoji: "📍", keywords: ["prepositions", "in on at", "preposiciones en inglés", "under next to"] },
    // 3.er año
    { id: "eng-past-simple", title: "Pasado simple (past simple)", year: 3, emoji: "⏪", keywords: ["past simple", "pasado simple", "simple past", "irregular verbs", "verbos irregulares", "did"] },
    { id: "eng-past-continuous", title: "Pasado continuo (past continuous)", year: 3, emoji: "🎞️", keywords: ["past continuous", "was were ing", "pasado progresivo", "past progressive"] },
    { id: "eng-comparatives", title: "Comparativos y superlativos", year: 3, emoji: "🏆", keywords: ["comparatives", "superlatives", "bigger biggest", "more most", "comparar en inglés"] },
    { id: "eng-going-to", title: "Futuro con going to", year: 3, emoji: "🗓️", keywords: ["going to", "future plans", "planes futuros", "futuro en inglés"] },
    { id: "eng-countable-uncountable", title: "Sustantivos contables e incontables", year: 3, emoji: "🥛", keywords: ["countable", "uncountable", "much many", "some any", "contables"] },
    // 4.º año
    { id: "eng-present-perfect", title: "Presente perfecto (present perfect)", year: 4, emoji: "✅", keywords: ["present perfect", "have has", "past participle", "ever never", "presente perfecto"] },
    { id: "eng-future-will", title: "Futuro con will", year: 4, emoji: "🔮", keywords: ["will", "future simple", "predicciones", "futuro simple"] },
    { id: "eng-modal-verbs", title: "Verbos modales (can, must, should)", year: 4, emoji: "🛑", keywords: ["modal verbs", "can", "must", "should", "verbos modales"] },
    { id: "eng-first-conditional", title: "Primer condicional", year: 4, emoji: "🔀", keywords: ["first conditional", "if clauses", "condicional", "if will"] },
    { id: "eng-reading-comprehension", title: "Comprensión de lectura (reading)", year: 4, emoji: "📖", keywords: ["reading comprehension", "skimming", "scanning", "lectura en inglés", "cognates"] },
    // 5.º año
    { id: "eng-passive-voice", title: "La voz pasiva", year: 5, emoji: "🔄", keywords: ["passive voice", "voz pasiva", "by", "was made"] },
    { id: "eng-second-conditional", title: "Segundo condicional", year: 5, emoji: "💭", keywords: ["second conditional", "if I were", "would", "situaciones hipotéticas"] },
    { id: "eng-reported-speech", title: "Estilo indirecto (reported speech)", year: 5, emoji: "🗨️", keywords: ["reported speech", "indirect speech", "estilo indirecto", "said told"] },
    { id: "eng-relative-clauses", title: "Oraciones de relativo (who, which, that)", year: 5, emoji: "🔗", keywords: ["relative clauses", "who which that", "pronombres relativos", "where"] },
    { id: "eng-writing-paragraphs", title: "Escribir párrafos y correos en inglés", year: 5, emoji: "✍️", keywords: ["writing", "paragraph", "email", "redacción en inglés", "linking words"] },
  ],
  lessons: [presentSimple, presentContinuous, pastSimple],
};
