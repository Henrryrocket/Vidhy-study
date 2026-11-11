import type { Lesson } from "../../../../domain/lesson";

export const accentuation: Lesson = {
  id: "spa-accentuation",
  title: "La acentuación: agudas, llanas y esdrújulas",
  subjectId: "spanish-language",
  emoji: "🔤",
  year: 2,
  keywords: ["tilde", "acento", "agudas", "llanas", "graves", "esdrújulas", "sílaba tónica", "reglas de acentuación"],
  hook: "No es lo mismo «papa» que «papá», ni «práctico» que «practicó». Una rayita chiquita, la tilde, cambia por completo el significado.",
  summary:
    "En cada palabra hay una sílaba que se pronuncia con más fuerza: la sílaba tónica. Según dónde esté, las palabras son agudas (última sílaba), llanas o graves (penúltima), esdrújulas (antepenúltima) o sobresdrújulas (antes de la antepenúltima). La tilde es la marca escrita (´) que, siguiendo reglas fijas de la RAE, se coloca sobre la vocal de la sílaba tónica en algunos casos.",
  keyPoints: [
    {
      title: "La sílaba tónica",
      text: "Todas las palabras de más de una sílaba tienen acento (fuerza de voz), pero no todas llevan tilde. En «ca-MI-sa» la sílaba tónica es «mi» y no se escribe tilde.",
      deeper: "Para encontrarla, di la palabra en voz alta como si llamaras a alguien desde lejos: la sílaba que alargas es la tónica.",
    },
    {
      title: "Agudas",
      text: "La sílaba tónica es la última. Llevan tilde si terminan en vocal, en -n o en -s: café, canción, compás. Sin tilde: reloj, papel, feliz.",
    },
    {
      title: "Llanas o graves",
      text: "La sílaba tónica es la penúltima. Llevan tilde si NO terminan en vocal, -n ni -s: árbol, lápiz, fácil, cráter. Sin tilde: mesa, joven, lunes.",
      deeper: "Es la regla contraria a la de las agudas. La mayoría de las palabras del español son llanas.",
    },
    {
      title: "Esdrújulas y sobresdrújulas",
      text: "Siempre llevan tilde, sin excepción: música, pájaro, murciélago, dígamelo.",
    },
    {
      title: "La tilde diacrítica",
      text: "Distingue palabras que se escriben igual pero tienen distinta función: tú (pronombre) / tu (posesivo), él / el, sí (afirmación) / si (condición), más (cantidad) / mas (pero).",
      deeper: "Según la Ortografía de la RAE (2010), los monosílabos como «fue», «dio», «vio» o «ti» no llevan tilde, salvo los casos de tilde diacrítica.",
    },
  ],
  diagram: {
    id: "root",
    label: "Acentuación",
    detail: "¿Dónde está la sílaba tónica?",
    children: [
      { id: "agudas", label: "Agudas", detail: "Última sílaba · tilde si terminan en vocal, -n, -s" },
      { id: "llanas", label: "Llanas o graves", detail: "Penúltima · tilde si NO terminan en vocal, -n, -s" },
      { id: "esdru", label: "Esdrújulas y sobresdrújulas", detail: "Antepenúltima o antes · siempre tilde" },
      { id: "diacritica", label: "Tilde diacrítica", detail: "Distingue tú/tu, él/el, sí/si" },
    ],
  },
  miniClass: [
    { title: "Separar en sílabas", narration: "Tomemos la palabra «canción»: se separa can-ción.", scene: "🔤✂️" },
    { title: "Buscar la fuerza", narration: "Al decirla en voz alta, la fuerza cae en «ción», la última sílaba: es aguda.", scene: "🗣️💪🔊" },
    { title: "Aplicar la regla", narration: "Las agudas llevan tilde si terminan en vocal, -n o -s. «Canción» termina en -n, así que lleva tilde.", scene: "📏✅" },
    { title: "Comparar", narration: "«Árbol» es llana y termina en -l, por eso lleva tilde. «Pájaro» es esdrújula: siempre la lleva.", scene: "🌳🐦✍️" },
  ],
  analogies: {
    default: "La sílaba tónica es como el protagonista de una película: todas las sílabas actúan, pero una se lleva la atención. La tilde es el cartel que lo señala cuando la regla lo pide.",
    music: "La sílaba tónica es como el tiempo fuerte de un compás: en el joropo sientes dónde cae el golpe; en las palabras, dónde cae la fuerza de la voz.",
    sports: "Es como el jugador que patea el penal: todo el equipo está en la cancha, pero uno solo lleva la fuerza en ese momento.",
    videogames: "Las reglas de acentuación son como los controles de un juego: una vez que te los aprendes, los aplicas sin pensar.",
    technology: "La tilde funciona como un ícono de notificación: no aparece siempre, solo cuando una regla lo activa.",
  },
  glossary: [
    { term: "Sílaba tónica", definition: "Sílaba que se pronuncia con mayor intensidad dentro de una palabra." },
    { term: "Tilde", definition: "Signo ortográfico (´) que marca la sílaba tónica según las reglas de acentuación." },
    { term: "Aguda", definition: "Palabra cuya sílaba tónica es la última." },
    { term: "Llana o grave", definition: "Palabra cuya sílaba tónica es la penúltima." },
    { term: "Esdrújula", definition: "Palabra cuya sílaba tónica es la antepenúltima; siempre lleva tilde." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "En la palabra «mesa», ¿qué sílaba suena más fuerte?",
      options: ["me", "sa"],
      correctIndex: 0,
      explanation: "¡Así es! ME-sa: la fuerza está en la penúltima sílaba, así que es llana.",
      concept: "Sílaba tónica",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Qué tipo de palabra es «murciélago»?",
      options: ["Aguda", "Llana", "Esdrújula", "Monosílaba"],
      correctIndex: 2,
      explanation: "Se divide mur-cié-la-go y la fuerza cae en «cié», la antepenúltima sílaba: es esdrújula.",
      concept: "Esdrújulas",
    },
    {
      id: "q2",
      prompt: "¿Cuál de estas palabras agudas está bien escrita?",
      options: ["relój", "sofá", "papél", "dolór"],
      correctIndex: 1,
      explanation: "«Sofá» es aguda y termina en vocal, así que lleva tilde. Reloj, papel y dolor terminan en consonante distinta de -n o -s, así que no llevan tilde.",
      concept: "Agudas",
    },
    {
      id: "q3",
      prompt: "¿Por qué «lápiz» lleva tilde?",
      options: ["Porque es esdrújula", "Porque es llana y no termina en vocal, -n ni -s", "Porque es aguda", "Porque es un monosílabo"],
      correctIndex: 1,
      explanation: "LÁ-piz es llana y termina en -z; las llanas llevan tilde cuando no terminan en vocal, -n ni -s.",
      concept: "Llanas",
    },
    {
      id: "q4",
      prompt: "Completa: «___ llueve, no iremos al parque. —¿Seguro? —___, seguro».",
      options: ["Si / Si", "Sí / Si", "Si / Sí", "Sí / Sí"],
      correctIndex: 2,
      explanation: "El primero es la conjunción condicional «si» (sin tilde); el segundo es el adverbio de afirmación «sí» (con tilde).",
      concept: "Tilde diacrítica",
    },
    {
      id: "q5",
      prompt: "¿Cuál de estas palabras llanas NO lleva tilde?",
      options: ["árbol", "examen", "difícil", "azúcar"],
      correctIndex: 1,
      explanation: "«Examen» es llana (e-XA-men) y termina en -n, así que no lleva tilde. Las otras terminan en -l o -r.",
      concept: "Llanas",
    },
  ],
  explainPrompt: "Explica cómo decides si una palabra lleva tilde. Usa como ejemplos «camión», «cárcel» y «brújula».",
  explainChecklist: ["sílaba tónica", "aguda", "llana", "esdrújula", "terminación"],
  deeperResources: [
    { title: "Diccionario de la lengua española", url: "https://dle.rae.es/", kind: "reference", source: "Real Academia Española" },
    { title: "Ejercicios de acentuación", url: "https://es.khanacademy.org/search?page_search_query=acentuaci%C3%B3n", kind: "interactive", source: "Khan Academy" },
    { title: "Videos sobre reglas de acentuación", url: "https://www.youtube.com/results?search_query=reglas+de+acentuaci%C3%B3n+agudas+llanas+esdr%C3%BAjulas", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Tilde", url: "https://es.wikipedia.org/wiki/Tilde", kind: "reference", source: "Wikipedia" },
    { title: "Real Academia Española", url: "https://www.rae.es/", kind: "reference", source: "RAE" },
  ],
  relatedTopicIds: ["spa-punctuation", "spa-parts-of-speech"],
};
