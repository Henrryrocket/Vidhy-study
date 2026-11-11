import type { Lesson } from "../../../../domain/lesson";

export const presentSimple: Lesson = {
  id: "eng-present-simple",
  title: "Presente simple (present simple)",
  subjectId: "foreign-languages",
  emoji: "🔁",
  year: 2,
  keywords: ["present simple", "presente simple", "simple present", "do does", "rutinas", "tercera persona"],
  hook: "«I play football every Saturday.» Con el presente simple hablas de lo que haces siempre: tus rutinas, tus gustos y las verdades que no cambian.",
  summary:
    "El presente simple (present simple) se usa para hábitos y rutinas (I wake up at six), gustos (She likes music) y hechos generales (Water boils at 100 °C). Se forma con el verbo en su forma base, pero con he, she e it se le agrega -s o -es (he plays, she watches). Para negar y preguntar se usa el auxiliar do o does: I don't play, Does she play?",
  keyPoints: [
    {
      title: "¿Cuándo se usa?",
      text: "Para rutinas (I go to school by bus), gustos y preferencias (They love arepas) y verdades generales (The sun rises in the east).",
      deeper: "Suele ir con adverbios de frecuencia: always, usually, often, sometimes, never. Van antes del verbo principal: «I always eat breakfast».",
    },
    {
      title: "Afirmativo: la -s de la tercera persona",
      text: "I/you/we/they + verbo base (I play). He/she/it + verbo + -s (he plays). Verbos que terminan en -s, -sh, -ch, -x, -o agregan -es: watches, goes, does.",
      deeper: "Si el verbo termina en consonante + y, la y cambia a -ies: study → studies. Pero vocal + y solo agrega -s: play → plays. El verbo have es irregular: he has.",
    },
    {
      title: "Negativo con don't / doesn't",
      text: "I/you/we/they + don't + verbo base: I don't like rain. He/she/it + doesn't + verbo base: She doesn't like rain (¡sin -s en el verbo!).",
    },
    {
      title: "Preguntas con do / does",
      text: "Do + I/you/we/they + verbo base: Do you play the cuatro? Does + he/she/it + verbo base: Does he speak English? Respuestas cortas: Yes, I do. / No, he doesn't.",
    },
  ],
  diagram: {
    id: "root",
    label: "Present simple",
    detail: "Rutinas, gustos, hechos",
    children: [
      {
        id: "aff",
        label: "Afirmativo",
        detail: "I play / He plays",
        children: [
          { id: "base", label: "I, you, we, they", detail: "Verbo base" },
          { id: "s", label: "He, she, it", detail: "Verbo + s / es / ies" },
        ],
      },
      { id: "neg", label: "Negativo", detail: "don't / doesn't + verbo base" },
      { id: "q", label: "Pregunta", detail: "Do / Does + sujeto + verbo base" },
    ],
  },
  miniClass: [
    { title: "Una rutina", narration: "Luis wakes up at six. Él se despierta a las seis todos los días: es una rutina, así que usamos present simple.", scene: "⏰🛏️☀️" },
    { title: "La -s mágica", narration: "Con I decimos «I wake up», pero con he decimos «he wakes up». La -s aparece solo con he, she, it.", scene: "👦➕🇸" },
    { title: "Negar", narration: "Para negar usamos doesn't: «He doesn't eat meat». Fíjate: la -s se va al auxiliar y el verbo queda en su forma base.", scene: "🙅🍖" },
    { title: "Preguntar", narration: "Para preguntar ponemos does al principio: «Does he eat meat?» —«No, he doesn't.»", scene: "❓🍽️" },
  ],
  analogies: {
    default: "El present simple es como tu horario de clases: describe lo que pasa siempre, semana tras semana.",
    sports: "«Messi plays football. He scores many goals.» Hablamos de lo que hace habitualmente, por eso va en present simple con la -s de he.",
    videogames: "Las reglas de un juego van en present simple: «The player jumps when you press A. The enemy loses a life».",
    music: "«She plays the guitar and sings every weekend.» Las rutinas de práctica de tu banda se cuentan en present simple.",
    animals: "Los datos de los animales son verdades generales: «Turtles live a long time. A jaguar runs very fast».",
    cooking: "Las instrucciones y hábitos de cocina: «My grandma makes arepas every morning».",
  },
  glossary: [
    { term: "Base form", definition: "Forma básica del verbo, sin to ni terminaciones: play, eat, go." },
    { term: "Auxiliary (auxiliar)", definition: "Verbo de apoyo para negar o preguntar: do, does." },
    { term: "Third person singular", definition: "Tercera persona del singular: he, she, it. Es la que lleva -s." },
    { term: "Adverb of frequency", definition: "Palabra que indica con qué frecuencia: always, usually, sometimes, never." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Qué significa «I play»?",
      options: ["Yo juego", "Yo jugué", "Yo jugaré"],
      correctIndex: 0,
      explanation: "¡Bien! «I play» es presente: yo juego.",
      concept: "Significado",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Elige la opción correcta: «She ___ to school by bus.»",
      options: ["go", "goes", "going", "gos"],
      correctIndex: 1,
      explanation: "Con she se agrega -s, y como go termina en -o, se agrega -es: goes.",
      concept: "Tercera persona",
    },
    {
      id: "q2",
      prompt: "¿Cuál es la forma negativa correcta?",
      options: ["He don't like pizza.", "He doesn't likes pizza.", "He doesn't like pizza.", "He not like pizza."],
      correctIndex: 2,
      explanation: "Con he se usa doesn't y el verbo queda en forma base: doesn't like.",
      concept: "Negativo",
    },
    {
      id: "q3",
      prompt: "Completa la pregunta: «___ you speak Spanish?»",
      options: ["Does", "Do", "Are", "Is"],
      correctIndex: 1,
      explanation: "Con you se usa el auxiliar do: Do you speak Spanish?",
      concept: "Preguntas",
    },
    {
      id: "q4",
      prompt: "¿Cómo se escribe study con he? «He ___ English every day.»",
      options: ["studys", "studyes", "studies", "study"],
      correctIndex: 2,
      explanation: "Study termina en consonante + y, así que la y cambia a -ies: studies.",
      concept: "Ortografía de la -s",
    },
    {
      id: "q5",
      prompt: "¿Qué oración expresa una rutina en present simple?",
      options: ["I am eating now.", "I eat breakfast at seven.", "I ate breakfast yesterday.", "I will eat later."],
      correctIndex: 1,
      explanation: "«I eat breakfast at seven» describe algo que haces habitualmente. Las otras están en presente continuo, pasado y futuro.",
      concept: "Uso",
    },
  ],
  explainPrompt: "Describe en inglés tres cosas de tu rutina y una de la rutina de un amigo (con he o she). Luego explica en español por qué el verbo de tu amigo cambia.",
  explainChecklist: ["rutina", "tercera persona", "-s", "do/does"],
  deeperResources: [
    { title: "LearnEnglish Teens (gramática y práctica)", url: "https://learnenglishteens.britishcouncil.org/", kind: "interactive", source: "British Council" },
    { title: "Videos sobre el present simple", url: "https://www.youtube.com/results?search_query=present+simple+explicado+en+espa%C3%B1ol", kind: "video", source: "YouTube (búsqueda)" },
    { title: "Ejercicios de present simple", url: "https://es.khanacademy.org/search?page_search_query=present+simple", kind: "interactive", source: "Khan Academy" },
  ],
  sources: [
    { title: "Idioma inglés", url: "https://es.wikipedia.org/wiki/Idioma_ingl%C3%A9s", kind: "reference", source: "Wikipedia" },
    { title: "LearnEnglish Teens", url: "https://learnenglishteens.britishcouncil.org/", kind: "reference", source: "British Council" },
  ],
  relatedTopicIds: ["eng-frequency-adverbs", "eng-present-continuous", "eng-verb-to-be"],
};
