import type { Lesson } from "../../../../domain/lesson";

export const studyHabits: Lesson = {
  id: "guide-study-habits",
  title: "Técnicas y hábitos de estudio",
  subjectId: "guidance",
  emoji: "📚",
  year: 1,
  keywords: ["hábitos de estudio", "técnicas de estudio", "cómo estudiar", "estudiar mejor", "pomodoro", "resumen", "mapa conceptual", "repaso", "concentración"],
  hook: "¿Te ha pasado que lees la misma página tres veces y no recuerdas nada? No es falta de inteligencia: muchas veces es la forma de estudiar. Con buenos hábitos, estudias menos tiempo y aprendes más.",
  summary:
    "Los hábitos de estudio son las costumbres que repetimos al estudiar: dónde, cuándo y cómo lo hacemos. Las técnicas de estudio son herramientas concretas para comprender y recordar, como subrayar ideas principales, hacer resúmenes y mapas conceptuales, repasar en varios días y ponerse a prueba con preguntas. Un buen hábito combina un lugar adecuado, un horario regular, pausas cortas, descanso suficiente y técnicas activas en lugar de solo releer.",
  keyPoints: [
    {
      title: "El lugar y el momento",
      text: "Estudia en un lugar tranquilo, con buena luz y sin distracciones (el teléfono lejos o en silencio). Elige un horario fijo cada día: el cerebro se acostumbra y es más fácil concentrarse.",
      deeper: "Tener a mano los materiales (cuaderno, lápiz, libros) evita levantarse a cada rato. Si en casa hay ruido, puedes estudiar en la biblioteca o acordar con tu familia un rato de silencio.",
    },
    {
      title: "Bloques de estudio con pausas",
      text: "Es mejor estudiar en bloques cortos con descansos que horas seguidas. La técnica Pomodoro propone 25 minutos de concentración y 5 de descanso; después de cuatro bloques, un descanso más largo.",
      deeper: "Durante la pausa conviene moverse, tomar agua o estirarse, en lugar de mirar redes sociales, que suelen alargar el descanso sin que lo notes.",
    },
    {
      title: "Técnicas activas para comprender",
      text: "Primero haz una lectura general; luego lee con atención y subraya solo las ideas principales. Después organiza la información con un resumen, un esquema o un mapa conceptual hecho con tus palabras.",
      deeper: "Un mapa conceptual une conceptos con flechas y palabras de enlace (por ejemplo: \"la célula → forma → los tejidos\"). Hacerlo te obliga a entender cómo se relacionan las ideas.",
    },
    {
      title: "Repasar y ponerse a prueba",
      text: "Repasar varias veces en días distintos funciona mejor que estudiar todo la noche antes del examen. Hacerte preguntas, usar tarjetas o explicarle el tema a alguien ayuda a recordar.",
      deeper: "Esto se conoce como repaso espaciado y práctica de recuperación: cada vez que intentas recordar algo sin mirar, lo fijas mejor en la memoria. Dormir bien también ayuda a consolidar lo aprendido.",
    },
  ],
  diagram: {
    id: "root",
    label: "Estudiar mejor",
    detail: "Hábitos + técnicas",
    children: [
      {
        id: "habitos",
        label: "Hábitos",
        detail: "Dónde, cuándo y cuánto",
        children: [
          { id: "lugar", label: "Lugar adecuado", detail: "Tranquilo, con luz y sin teléfono" },
          { id: "horario", label: "Horario fijo", detail: "Bloques cortos con pausas" },
          { id: "descanso", label: "Descanso", detail: "Dormir bien consolida lo aprendido" },
        ],
      },
      {
        id: "tecnicas",
        label: "Técnicas",
        detail: "Cómo comprender y recordar",
        children: [
          { id: "subrayado", label: "Lectura y subrayado", detail: "Solo las ideas principales" },
          { id: "organizar", label: "Resumen y mapa conceptual", detail: "Con tus propias palabras" },
          { id: "repaso", label: "Repaso y autoevaluación", detail: "En días distintos, con preguntas" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Prepara el lugar", narration: "Busca una mesa con buena luz, deja el teléfono en otra habitación y ten tus materiales listos.", scene: "🪑💡📵" },
    { title: "Pon el temporizador", narration: "Programa 25 minutos y concéntrate solo en una materia. Al sonar, descansa 5 minutos.", scene: "⏲️📖☕" },
    { title: "Organiza las ideas", narration: "Subraya lo principal y haz un mapa conceptual con tus palabras.", scene: "🖍️🗺️✍️" },
    { title: "Ponte a prueba", narration: "Al día siguiente, tapa tus notas y trata de explicar el tema. Lo que no recuerdes, repásalo.", scene: "🃏🤔✅" },
  ],
  analogies: {
    default: "Estudiar es como regar una planta: es mejor un poco de agua cada día que un balde entero una sola vez.",
    sports: "Es como entrenar: un atleta no se prepara para una competencia con una sola práctica larga la noche anterior, sino con entrenamientos regulares y descanso.",
    videogames: "Es como subir de nivel: cada sesión corta te da experiencia, y los descansos son como guardar la partida para no perder el progreso.",
    music: "Es como aprender una canción en un instrumento: practicas un trozo cada día y repites hasta que te sale sin mirar la partitura.",
    cooking: "Es como seguir una receta: primero preparas los ingredientes (el lugar y los materiales), luego cocinas por pasos (las técnicas) y al final pruebas el sabor (te pones a prueba).",
    technology: "Tu memoria funciona como guardar un archivo: si lo guardas una vez puede perderse, pero si haces copias en varios días queda bien respaldado.",
  },
  glossary: [
    { term: "Hábito", definition: "Costumbre que se repite con regularidad hasta hacerse casi automática." },
    { term: "Técnica Pomodoro", definition: "Método de estudiar en bloques de 25 minutos con pausas cortas." },
    { term: "Mapa conceptual", definition: "Esquema que une conceptos con flechas y palabras de enlace." },
    { term: "Repaso espaciado", definition: "Repasar un tema varias veces en días distintos para recordarlo mejor." },
    { term: "Idea principal", definition: "La información más importante de un párrafo o texto." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Qué crees que funciona mejor para recordar un tema?",
      options: ["Releerlo muchas veces la noche antes", "Repasarlo en varios días y ponerte a prueba"],
      correctIndex: 1,
      explanation: "Repasar en días distintos e intentar recordar sin mirar fija mejor la información.",
      concept: "repaso",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Cuánto dura un bloque de concentración en la técnica Pomodoro?",
      options: ["5 minutos", "25 minutos", "2 horas", "Toda la tarde"],
      correctIndex: 1,
      explanation: "Un pomodoro son 25 minutos de concentración seguidos de 5 minutos de descanso.",
      concept: "Bloques de estudio",
    },
    {
      id: "q2",
      prompt: "Al subrayar un texto, ¿qué debes marcar?",
      options: ["Todo el texto", "Solo las ideas principales", "Las palabras más largas", "Nada"],
      correctIndex: 1,
      explanation: "Si subrayas todo, nada destaca. Marca solo lo esencial para luego resumir.",
      concept: "Técnicas activas",
    },
    {
      id: "q3",
      prompt: "¿Cuál es el mejor lugar para estudiar?",
      options: [
        "En la cama con el teléfono al lado",
        "Frente al televisor encendido",
        "Un sitio tranquilo, con buena luz y sin distracciones",
        "En un lugar distinto y ruidoso cada día",
      ],
      correctIndex: 2,
      explanation: "Un lugar tranquilo y bien iluminado favorece la concentración.",
      concept: "El lugar y el momento",
    },
    {
      id: "q4",
      prompt: "Tienes examen el viernes. ¿Qué plan es más eficaz?",
      options: [
        "Estudiar 4 horas seguidas el jueves en la noche",
        "Estudiar un rato el lunes, el miércoles y el jueves, poniéndote a prueba",
        "Leer los apuntes en el camino al liceo el viernes",
        "No estudiar y confiar en la suerte",
      ],
      correctIndex: 1,
      explanation: "El repaso espaciado con autoevaluación permite recordar mejor que una sola sesión larga.",
      concept: "Repasar y ponerse a prueba",
    },
    {
      id: "q5",
      prompt: "¿Qué es un mapa conceptual?",
      options: [
        "Un mapa de la ciudad",
        "Un esquema que une conceptos con flechas y palabras de enlace",
        "Una lista de tareas",
        "Un dibujo libre sin relación con el tema",
      ],
      correctIndex: 1,
      explanation: "El mapa conceptual organiza ideas y muestra cómo se relacionan.",
      concept: "Técnicas activas",
    },
  ],
  explainPrompt: "Explica con tus palabras a un compañero cómo organizarías tu estudio para un examen que tienes en una semana.",
  explainChecklist: ["lugar", "horario", "pausas", "resumen", "repaso"],
  deeperResources: [
    { title: "Técnica Pomodoro", url: "https://es.wikipedia.org/wiki/T%C3%A9cnica_Pomodoro", kind: "reference", source: "Wikipedia" },
    { title: "Mapa conceptual", url: "https://es.wikipedia.org/wiki/Mapa_conceptual", kind: "reference", source: "Wikipedia" },
    { title: "Aprender a aprender (búsqueda)", url: "https://es.khanacademy.org/search?page_search_query=aprender%20a%20aprender", kind: "interactive", source: "Khan Academy" },
    { title: "Videos sobre técnicas de estudio", url: "https://www.youtube.com/results?search_query=t%C3%A9cnicas+de+estudio+para+estudiantes", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Técnica Pomodoro", url: "https://es.wikipedia.org/wiki/T%C3%A9cnica_Pomodoro", kind: "reference", source: "Wikipedia" },
    { title: "Mapa conceptual", url: "https://es.wikipedia.org/wiki/Mapa_conceptual", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["guide-time-management", "guide-new-school", "guide-emotions"],
};
