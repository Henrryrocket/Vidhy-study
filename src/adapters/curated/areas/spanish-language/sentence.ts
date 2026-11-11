import type { Lesson } from "../../../../domain/lesson";

export const sentence: Lesson = {
  id: "spa-sentence",
  title: "La oración: sujeto y predicado",
  subjectId: "spanish-language",
  emoji: "🧱",
  year: 2,
  keywords: ["oración simple", "sujeto", "predicado", "núcleo", "sintaxis", "sujeto tácito"],
  hook: "«Los turpiales cantan en la mañana.» ¿De quién se habla? ¿Y qué se dice de ellos? Esas dos preguntas son la llave para analizar cualquier oración.",
  summary:
    "La oración es un conjunto de palabras con sentido completo que, por lo general, tiene un verbo conjugado. La oración simple tiene dos partes: el sujeto, que es de quien se habla, y el predicado, que es lo que se dice del sujeto. El núcleo del sujeto suele ser un sustantivo o un pronombre, y el núcleo del predicado es siempre un verbo conjugado. Sujeto y verbo concuerdan en número y persona.",
  keyPoints: [
    {
      title: "¿Qué es una oración?",
      text: "Es una unidad con sentido completo que empieza con mayúscula y termina con punto (o con signos de interrogación o exclamación): «Mi hermana estudia música».",
    },
    {
      title: "El sujeto",
      text: "Es la persona, animal o cosa de la que se dice algo. Para encontrarlo, pregúntale al verbo «¿quién?» o «¿qué?»: «¿Quién estudia música?» → Mi hermana.",
      deeper: "Su núcleo es un sustantivo o un pronombre (hermana). Puede llevar artículos y adjetivos que lo acompañan: «Mi hermana mayor».",
    },
    {
      title: "El predicado",
      text: "Es todo lo que se dice del sujeto. Su núcleo es el verbo conjugado: en «Mi hermana estudia música», el predicado es «estudia música» y su núcleo es «estudia».",
    },
    {
      title: "La concordancia",
      text: "El núcleo del sujeto y el verbo deben coincidir en número y persona: «El niño juega» / «Los niños juegan». Esta regla te ayuda a comprobar cuál es el sujeto.",
      deeper: "El sujeto no siempre va al principio: en «Llegaron los invitados», el sujeto «los invitados» está al final.",
    },
    {
      title: "El sujeto tácito",
      text: "A veces el sujeto no se escribe, pero se entiende por la forma del verbo: «Comimos arepas» → el sujeto es «nosotros». Se llama sujeto tácito u omitido.",
    },
  ],
  diagram: {
    id: "root",
    label: "Oración simple",
    detail: "Sentido completo",
    children: [
      {
        id: "sujeto",
        label: "Sujeto",
        detail: "De quién se habla",
        children: [
          { id: "ns", label: "Núcleo", detail: "Sustantivo o pronombre" },
          { id: "tacito", label: "Tácito", detail: "Se deduce del verbo" },
        ],
      },
      {
        id: "predicado",
        label: "Predicado",
        detail: "Lo que se dice del sujeto",
        children: [{ id: "np", label: "Núcleo", detail: "Verbo conjugado" }],
      },
    ],
  },
  miniClass: [
    { title: "La oración", narration: "Leemos: «Los turpiales cantan en la mañana».", scene: "🐦🎶🌅" },
    { title: "Buscar el verbo", narration: "Primero encontramos el verbo conjugado: «cantan». Es el núcleo del predicado.", scene: "🔍🎶" },
    { title: "Preguntar ¿quién?", narration: "¿Quién canta? Los turpiales. Ese es el sujeto, y su núcleo es «turpiales».", scene: "❓🐦" },
    { title: "Comprobar", narration: "Si decimos «El turpial canta», sujeto y verbo cambian juntos a singular: ¡concuerdan!", scene: "🐦🔁✅" },
  ],
  analogies: {
    default: "Una oración es como una noticia corta: el sujeto es el protagonista y el predicado es lo que le pasó o lo que hace.",
    sports: "En «El bateador conectó un jonrón», el bateador es el sujeto (el jugador) y «conectó un jonrón» es el predicado (la jugada).",
    videogames: "El sujeto es tu personaje y el predicado es la acción que ejecuta: «El caballero abre el cofre».",
    music: "El sujeto es el músico y el predicado es lo que toca: «La orquesta interpreta un joropo».",
    animals: "«El chigüire nada en el río»: el chigüire es el sujeto, «nada en el río» es el predicado.",
    cooking: "«Mi abuela prepara hallacas»: mi abuela es el sujeto y «prepara hallacas» es el predicado.",
  },
  glossary: [
    { term: "Oración", definition: "Conjunto de palabras con sentido completo, normalmente con un verbo conjugado." },
    { term: "Sujeto", definition: "Parte de la oración que indica de quién o de qué se habla." },
    { term: "Predicado", definition: "Parte de la oración que dice algo del sujeto; su núcleo es el verbo." },
    { term: "Núcleo", definition: "Palabra más importante de un sujeto o de un predicado." },
    { term: "Sujeto tácito", definition: "Sujeto que no está escrito pero se deduce de la forma del verbo." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "En «Carlos corre», ¿quién realiza la acción?",
      options: ["Carlos", "corre", "Nadie"],
      correctIndex: 0,
      explanation: "¡Muy bien! Carlos es el sujeto: es quien corre.",
      concept: "Sujeto",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Cuál es el sujeto en «Las estudiantes de 2.º año ganaron el concurso»?",
      options: ["ganaron el concurso", "Las estudiantes de 2.º año", "el concurso", "2.º año"],
      correctIndex: 1,
      explanation: "¿Quiénes ganaron el concurso? Las estudiantes de 2.º año.",
      concept: "Sujeto",
    },
    {
      id: "q2",
      prompt: "¿Cuál es el núcleo del predicado en «Mi primo vive en Maracaibo»?",
      options: ["primo", "vive", "Maracaibo", "en"],
      correctIndex: 1,
      explanation: "El núcleo del predicado es siempre el verbo conjugado: vive.",
      concept: "Predicado",
    },
    {
      id: "q3",
      prompt: "¿Cuál es el sujeto de «Visitamos el Parque del Este»?",
      options: ["el Parque del Este", "Visitamos", "Nosotros (tácito)", "No tiene sujeto"],
      correctIndex: 2,
      explanation: "El sujeto no está escrito, pero «visitamos» indica que es «nosotros»: sujeto tácito.",
      concept: "Sujeto tácito",
    },
    {
      id: "q4",
      prompt: "¿Qué oración tiene un error de concordancia?",
      options: ["Los perros ladran.", "El equipo entrena.", "Las flores crece.", "Tú escribes bien."],
      correctIndex: 2,
      explanation: "«Las flores» es plural, así que el verbo debe ser plural: «Las flores crecen».",
      concept: "Concordancia",
    },
    {
      id: "q5",
      prompt: "En «Llegó tarde el autobús», ¿dónde está el sujeto?",
      options: ["Al principio", "En el medio", "Al final", "No hay sujeto"],
      correctIndex: 2,
      explanation: "¿Qué llegó tarde? El autobús. El sujeto puede ir después del verbo.",
      concept: "Sujeto",
    },
  ],
  explainPrompt: "Escribe una oración sobre algo que hiciste hoy y explica cómo encontraste su sujeto y su predicado. ¿Qué pasa si el sujeto es tácito?",
  explainChecklist: ["sujeto", "predicado", "verbo", "concordancia"],
  deeperResources: [
    { title: "Diccionario de la lengua española", url: "https://dle.rae.es/", kind: "reference", source: "Real Academia Española" },
    { title: "Ejercicios de sujeto y predicado", url: "https://es.khanacademy.org/search?page_search_query=sujeto+y+predicado", kind: "interactive", source: "Khan Academy" },
    { title: "Videos sobre sujeto y predicado", url: "https://www.youtube.com/results?search_query=sujeto+y+predicado+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Oración (gramática)", url: "https://es.wikipedia.org/wiki/Oraci%C3%B3n_(gram%C3%A1tica)", kind: "reference", source: "Wikipedia" },
    { title: "Real Academia Española", url: "https://www.rae.es/", kind: "reference", source: "RAE" },
  ],
  relatedTopicIds: ["spa-parts-of-speech", "spa-verb", "spa-compound-sentence"],
};
