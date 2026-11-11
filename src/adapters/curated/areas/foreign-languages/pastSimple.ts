import type { Lesson } from "../../../../domain/lesson";

export const pastSimple: Lesson = {
  id: "eng-past-simple",
  title: "Pasado simple (past simple)",
  subjectId: "foreign-languages",
  emoji: "⏪",
  year: 3,
  keywords: ["past simple", "pasado simple", "simple past", "irregular verbs", "verbos irregulares", "did", "ed"],
  hook: "«Yesterday I watched a movie and ate popcorn.» Para contar lo que ya pasó —el fin de semana, un viaje, un partido— necesitas el past simple.",
  summary:
    "El pasado simple (past simple) describe acciones terminadas en un momento del pasado: I visited Mérida last year. Los verbos regulares agregan -ed (play → played) y los irregulares tienen formas propias que hay que memorizar (go → went, eat → ate). A diferencia del presente, la forma es igual para todas las personas. Para negar y preguntar se usa el auxiliar did con el verbo en forma base: I didn't go, Did you go?",
  keyPoints: [
    {
      title: "¿Cuándo se usa?",
      text: "Para acciones que empezaron y terminaron en el pasado, a menudo con expresiones de tiempo: yesterday, last week, two days ago, in 2020.",
    },
    {
      title: "Verbos regulares: -ed",
      text: "Se agrega -ed: work → worked, play → played. Si terminan en -e, solo -d: dance → danced. Consonante + y cambia a -ied: study → studied.",
      deeper: "Si el verbo es de una sílaba y termina en consonante-vocal-consonante, se duplica la última consonante: stop → stopped, plan → planned.",
    },
    {
      title: "Verbos irregulares",
      text: "No siguen la regla del -ed: go → went, have → had, see → saw, eat → ate, buy → bought, make → made. Se aprenden con práctica y listas.",
      deeper: "El verbo to be tiene dos formas en pasado: was (I, he, she, it) y were (you, we, they). Con to be no se usa did: «I wasn't tired», «Were you there?».",
    },
    {
      title: "Negativo y preguntas con did",
      text: "Negativo: sujeto + didn't + verbo base (She didn't go). Pregunta: Did + sujeto + verbo base (Did she go?). El pasado ya lo marca did, así que el verbo vuelve a su forma base.",
    },
  ],
  diagram: {
    id: "root",
    label: "Past simple",
    detail: "Acciones terminadas",
    children: [
      {
        id: "aff",
        label: "Afirmativo",
        detail: "Igual para todas las personas",
        children: [
          { id: "reg", label: "Regulares", detail: "verbo + ed (played)" },
          { id: "irr", label: "Irregulares", detail: "forma propia (went, ate)" },
        ],
      },
      { id: "neg", label: "Negativo", detail: "didn't + verbo base" },
      { id: "q", label: "Pregunta", detail: "Did + sujeto + verbo base" },
    ],
  },
  miniClass: [
    { title: "Ayer", narration: "Yesterday I played baseball. «Play» es regular, así que solo le agregamos -ed.", scene: "📅⚾🧢" },
    { title: "Un verbo rebelde", narration: "Después I went home. «Go» es irregular: en pasado se convierte en «went».", scene: "🏠🚶" },
    { title: "Negar con didn't", narration: "I didn't do my homework… ¡ups! Con didn't, el verbo vuelve a su forma base: do, no did.", scene: "📚🙈" },
    { title: "Preguntar con did", narration: "Did you finish your homework? —Yes, I did.", scene: "❓✅" },
  ],
  analogies: {
    default: "El past simple es como una foto en tu galería: muestra un momento que ya ocurrió y terminó.",
    sports: "La crónica de un partido va en past simple: «The team won 3–1. The pitcher threw a perfect game».",
    videogames: "Tu historial de partidas: «I completed level 5, I lost two lives and I found a secret key».",
    music: "La historia de una banda: «They recorded their first album in 2019 and played in Caracas».",
    technology: "El historial de tu celular: «You sent 20 messages and took 15 photos yesterday».",
    nature: "«Last vacation we visited Canaima and saw Angel Falls.»",
  },
  glossary: [
    { term: "Regular verb", definition: "Verbo que forma el pasado agregando -ed: worked, played." },
    { term: "Irregular verb", definition: "Verbo con una forma de pasado propia: went, ate, saw." },
    { term: "Did / didn't", definition: "Auxiliar del pasado para preguntas y negaciones." },
    { term: "Time expressions", definition: "Expresiones de tiempo pasado: yesterday, last week, ago." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Qué significa «yesterday»?",
      options: ["Mañana", "Ayer", "Hoy"],
      correctIndex: 1,
      explanation: "¡Correcto! Yesterday = ayer. Es una pista clara de que la oración va en pasado.",
      concept: "Expresiones de tiempo",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Cuál es el pasado de «go»?",
      options: ["goed", "went", "gone", "goes"],
      correctIndex: 1,
      explanation: "Go es irregular: su pasado simple es went. «Gone» es el participio, que se usa en otros tiempos.",
      concept: "Irregulares",
    },
    {
      id: "q2",
      prompt: "Completa: «They ___ football last Sunday.»",
      options: ["play", "plays", "played", "playing"],
      correctIndex: 2,
      explanation: "«Last Sunday» indica pasado. Play es regular: played.",
      concept: "Regulares",
    },
    {
      id: "q3",
      prompt: "¿Cuál es la forma negativa correcta?",
      options: ["I didn't saw the movie.", "I didn't see the movie.", "I don't saw the movie.", "I not saw the movie."],
      correctIndex: 1,
      explanation: "Después de didn't el verbo va en forma base: didn't see.",
      concept: "Negativo",
    },
    {
      id: "q4",
      prompt: "Completa la pregunta: «___ you eat arepas for breakfast yesterday?»",
      options: ["Do", "Were", "Did", "Was"],
      correctIndex: 2,
      explanation: "Para preguntar en pasado con un verbo distinto de to be se usa did: Did you eat…?",
      concept: "Preguntas",
    },
    {
      id: "q5",
      prompt: "Elige la opción correcta: «We ___ very tired after the trip.»",
      options: ["was", "were", "did", "be"],
      correctIndex: 1,
      explanation: "El pasado de to be con we es were.",
      concept: "Was / were",
    },
  ],
  explainPrompt: "Cuenta en inglés, en cuatro oraciones, lo que hiciste el fin de semana pasado. Incluye un verbo regular, uno irregular y una oración negativa, y explica en español cómo los formaste.",
  explainChecklist: ["-ed", "irregular", "didn't", "verbo base"],
  deeperResources: [
    { title: "LearnEnglish Teens (gramática y práctica)", url: "https://learnenglishteens.britishcouncil.org/", kind: "interactive", source: "British Council" },
    { title: "Videos sobre el past simple", url: "https://www.youtube.com/results?search_query=past+simple+explicado+en+espa%C3%B1ol", kind: "video", source: "YouTube (búsqueda)" },
    { title: "Ejercicios de past simple", url: "https://es.khanacademy.org/search?page_search_query=past+simple", kind: "interactive", source: "Khan Academy" },
  ],
  sources: [
    { title: "Idioma inglés", url: "https://es.wikipedia.org/wiki/Idioma_ingl%C3%A9s", kind: "reference", source: "Wikipedia" },
    { title: "LearnEnglish Teens", url: "https://learnenglishteens.britishcouncil.org/", kind: "reference", source: "British Council" },
  ],
  relatedTopicIds: ["eng-present-simple", "eng-past-continuous", "eng-present-perfect"],
};
