import type { Lesson } from "../../../../domain/lesson";

export const presentContinuous: Lesson = {
  id: "eng-present-continuous",
  title: "Presente continuo (present continuous)",
  subjectId: "foreign-languages",
  emoji: "🏃",
  year: 2,
  keywords: ["present continuous", "presente continuo", "present progressive", "presente progresivo", "ing", "right now"],
  hook: "«Shh! I'm watching the game.» Cuando algo está pasando justo ahora, en inglés usas el present continuous.",
  summary:
    "El presente continuo (present continuous) describe acciones que están ocurriendo en este momento (I am reading now) o situaciones temporales (She is staying with her aunt this week). Se forma con el verbo to be en presente (am, is, are) más el verbo con la terminación -ing: I am playing, he is eating, they are running. Para negar se agrega not después de to be, y para preguntar se pone to be antes del sujeto: Are you listening?",
  keyPoints: [
    {
      title: "¿Cuándo se usa?",
      text: "Para acciones que pasan ahora mismo (It's raining now) y para situaciones temporales (I'm learning to play the cuatro this month). Suele ir con now, right now, at the moment, today, this week.",
      deeper: "No confundas: present simple = rutina (I play every day); present continuous = ahora (I'm playing now).",
    },
    {
      title: "Estructura: to be + verbo-ing",
      text: "I am (I'm) + verbo-ing. He/she/it is (he's) + verbo-ing. You/we/they are (they're) + verbo-ing. Ejemplo: She is dancing.",
    },
    {
      title: "Reglas del -ing",
      text: "Casi siempre se agrega -ing: play → playing. Si termina en -e muda, se quita la e: dance → dancing. Si es de una sílaba con consonante-vocal-consonante, se duplica la última: run → running, swim → swimming.",
      deeper: "Los verbos que terminan en -ie cambian a -ying: lie → lying, die → dying.",
    },
    {
      title: "Negativo y preguntas",
      text: "Negativo: I'm not / he isn't / they aren't + verbo-ing (He isn't sleeping). Pregunta: Am/Is/Are + sujeto + verbo-ing (Is she studying?). Respuestas cortas: Yes, she is. / No, she isn't.",
    },
  ],
  diagram: {
    id: "root",
    label: "Present continuous",
    detail: "Lo que pasa ahora",
    children: [
      {
        id: "aff",
        label: "Afirmativo",
        detail: "am / is / are + verbo-ing",
        children: [
          { id: "i", label: "I", detail: "am playing" },
          { id: "he", label: "He, she, it", detail: "is playing" },
          { id: "you", label: "You, we, they", detail: "are playing" },
        ],
      },
      { id: "neg", label: "Negativo", detail: "am not / isn't / aren't + verbo-ing" },
      { id: "q", label: "Pregunta", detail: "Am / Is / Are + sujeto + verbo-ing?" },
    ],
  },
  miniClass: [
    { title: "Ahora mismo", narration: "Mira por la ventana: it's raining. Está lloviendo en este momento.", scene: "🪟🌧️⏱️" },
    { title: "Dos piezas", narration: "Necesitamos dos piezas: el verbo to be (is) y el verbo con -ing (raining).", scene: "🧩➕🧩" },
    { title: "Con personas", narration: "My brothers are playing videogames and I am doing my homework.", scene: "🎮👦📚" },
    { title: "Preguntar", narration: "Is Mom cooking? —Yes, she is! Para preguntar, el to be pasa adelante.", scene: "❓👩‍🍳🍲" },
  ],
  analogies: {
    default: "El present continuous es como una transmisión en vivo: muestra lo que está pasando en este preciso momento.",
    sports: "Un narrador deportivo lo usa todo el tiempo: «He's running… he's shooting… goal!».",
    videogames: "Es como la pantalla de estado en un juego online: «Player 2 is loading… Player 3 is fighting a boss».",
    music: "«The band is playing our favorite song right now!» La canción está sonando mientras hablas.",
    technology: "Los mensajes de estado: «Ana is typing…», «Downloading… the file is updating».",
    animals: "En un documental: «Look! The jaguar is hunting and the monkeys are watching it».",
  },
  glossary: [
    { term: "-ing form", definition: "Forma del verbo con la terminación -ing (playing); equivale al gerundio español (jugando)." },
    { term: "To be", definition: "Verbo auxiliar del present continuous: am, is, are." },
    { term: "Contraction (contracción)", definition: "Forma abreviada: I am → I'm, is not → isn't, are not → aren't." },
    { term: "Right now", definition: "Ahora mismo; expresión típica de este tiempo verbal." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Qué significa «I am eating»?",
      options: ["Yo como (siempre)", "Yo estoy comiendo", "Yo comí"],
      correctIndex: 1,
      explanation: "¡Bien! «I am eating» = yo estoy comiendo, ahora mismo.",
      concept: "Significado",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Completa: «They ___ football right now.»",
      options: ["is playing", "are playing", "plays", "am playing"],
      correctIndex: 1,
      explanation: "Con they se usa are, más el verbo con -ing: are playing.",
      concept: "Estructura",
    },
    {
      id: "q2",
      prompt: "¿Cómo se escribe swim con -ing?",
      options: ["swiming", "swimming", "swimeing", "swimmming"],
      correctIndex: 1,
      explanation: "Swim tiene una sílaba y termina en consonante-vocal-consonante, así que se duplica la m: swimming.",
      concept: "Reglas del -ing",
    },
    {
      id: "q3",
      prompt: "¿Cuál es la forma negativa correcta?",
      options: ["She not is sleeping.", "She isn't sleeping.", "She doesn't sleeping.", "She isn't sleep."],
      correctIndex: 1,
      explanation: "Se niega con to be + not y el verbo sigue con -ing: isn't sleeping.",
      concept: "Negativo",
    },
    {
      id: "q4",
      prompt: "Completa la pregunta: «___ you listening to me?»",
      options: ["Do", "Is", "Are", "Am"],
      correctIndex: 2,
      explanation: "Con you se usa are, que va antes del sujeto en las preguntas: Are you listening?",
      concept: "Preguntas",
    },
    {
      id: "q5",
      prompt: "¿Qué oración describe algo que ocurre ahora mismo?",
      options: ["I go to the beach every summer.", "I am writing a message.", "I wrote a message.", "I usually write messages."],
      correctIndex: 1,
      explanation: "«I am writing a message» está en present continuous: la acción ocurre en este momento.",
      concept: "Uso",
    },
  ],
  explainPrompt: "Describe en inglés tres cosas que están pasando ahora a tu alrededor (por ejemplo, en tu casa o en el salón) y explica en español cómo formaste cada oración.",
  explainChecklist: ["am/is/are", "-ing", "ahora", "diferencia con present simple"],
  deeperResources: [
    { title: "LearnEnglish Teens (gramática y práctica)", url: "https://learnenglishteens.britishcouncil.org/", kind: "interactive", source: "British Council" },
    { title: "Videos sobre el present continuous", url: "https://www.youtube.com/results?search_query=present+continuous+explicado+en+espa%C3%B1ol", kind: "video", source: "YouTube (búsqueda)" },
    { title: "Ejercicios de present continuous", url: "https://es.khanacademy.org/search?page_search_query=present+continuous", kind: "interactive", source: "Khan Academy" },
  ],
  sources: [
    { title: "Idioma inglés", url: "https://es.wikipedia.org/wiki/Idioma_ingl%C3%A9s", kind: "reference", source: "Wikipedia" },
    { title: "LearnEnglish Teens", url: "https://learnenglishteens.britishcouncil.org/", kind: "reference", source: "British Council" },
  ],
  relatedTopicIds: ["eng-present-simple", "eng-verb-to-be", "eng-past-continuous"],
};
