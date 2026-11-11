import type { Lesson } from "../../../../domain/lesson";

export const riskManagement: Lesson = {
  id: "sov-risk-management",
  title: "Gestión integral de riesgos y protección civil",
  subjectId: "national-sovereignty",
  emoji: "🚨",
  year: 5,
  keywords: ["gestión de riesgos", "riesgo", "amenaza", "vulnerabilidad", "protección civil", "desastres", "sismo", "terremoto", "inundación", "deslave", "plan de emergencia"],
  hook: "Venezuela tiene fallas sísmicas, temporadas de lluvias intensas y montañas cerca de las ciudades. No podemos evitar un sismo, pero sí podemos evitar que se convierta en una tragedia. ¿Cómo? Gestionando el riesgo.",
  summary:
    "La gestión integral de riesgos es el conjunto de acciones para reducir la posibilidad de que un fenómeno natural o provocado por las personas cause daños graves. El riesgo depende de dos factores: la amenaza (el fenómeno que puede ocurrir, como un sismo o una inundación) y la vulnerabilidad (qué tan expuestos y preparados estamos). La gestión incluye prevenir y mitigar, prepararse, responder durante la emergencia y recuperarse después. En Venezuela participan instituciones como Protección Civil y los bomberos, pero también cada familia, escuela y comunidad.",
  keyPoints: [
    {
      title: "Amenaza, vulnerabilidad y riesgo",
      text: "La amenaza es el fenómeno que puede causar daño (sismo, lluvia intensa, incendio). La vulnerabilidad es la debilidad frente a esa amenaza (casas en zonas inestables, falta de preparación). El riesgo es la probabilidad de sufrir daños: crece cuando hay amenaza y vulnerabilidad a la vez.",
      deeper: "Suele resumirse como riesgo = amenaza × vulnerabilidad. Como muchas amenazas no se pueden evitar, la forma más eficaz de reducir el riesgo es disminuir la vulnerabilidad.",
    },
    {
      title: "Amenazas frecuentes en Venezuela",
      text: "El país tiene zonas sísmicas, sobre todo en los Andes, la región central y el oriente. En temporada de lluvias pueden ocurrir inundaciones y deslaves (deslizamientos de tierra). También hay incendios forestales en época de sequía.",
      deeper: "Ejemplos históricos son el terremoto de Caracas de 1967 y la tragedia de Vargas en diciembre de 1999, cuando lluvias extraordinarias provocaron deslaves e inundaciones en el litoral central.",
    },
    {
      title: "Las fases de la gestión del riesgo",
      text: "Antes: prevención, mitigación y preparación (planes, simulacros, mochila de emergencia). Durante: respuesta (evacuar, protegerse, atender heridos). Después: recuperación y reconstrucción, tratando de no repetir las vulnerabilidades anteriores.",
      deeper: "Un simulacro es un ensayo de emergencia. Practicarlo ayuda a que, en un evento real, las personas actúen con calma porque ya conocen las rutas de evacuación y los puntos de encuentro.",
    },
    {
      title: "Qué hacer durante un sismo",
      text: "Mantén la calma. Agáchate, cúbrete bajo una mesa resistente y sujétate. Aléjate de ventanas y objetos que puedan caer. No uses ascensores. Al terminar, sal con cuidado por la ruta de evacuación hacia el punto de encuentro.",
      deeper: "La Constitución de 1999 prevé una organización de protección civil y administración de desastres. En una emergencia, sigue siempre las indicaciones de las autoridades de protección civil y de los bomberos.",
    },
  ],
  diagram: {
    id: "root",
    label: "Gestión integral de riesgos",
    detail: "Reducir daños ante amenazas",
    children: [
      {
        id: "factores",
        label: "Factores del riesgo",
        detail: "Riesgo = amenaza × vulnerabilidad",
        children: [
          { id: "amenaza", label: "Amenaza", detail: "Sismo, inundación, deslave, incendio" },
          { id: "vulnerabilidad", label: "Vulnerabilidad", detail: "Exposición y falta de preparación" },
        ],
      },
      {
        id: "fases",
        label: "Fases",
        detail: "Antes, durante y después",
        children: [
          { id: "antes", label: "Antes", detail: "Prevención, mitigación y preparación" },
          { id: "durante", label: "Durante", detail: "Respuesta y protección" },
          { id: "despues", label: "Después", detail: "Recuperación y reconstrucción" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Identificar la amenaza", narration: "Tu liceo está en una zona sísmica. Esa es la amenaza: no podemos evitar que la tierra tiemble.", scene: "🏫🌍⚠️" },
    { title: "Reducir la vulnerabilidad", narration: "El liceo fija los estantes a la pared, señala rutas de evacuación y define un punto de encuentro.", scene: "🔧🪧🚪" },
    { title: "Practicar", narration: "Hacen un simulacro: suena la alarma, todos se agachan, se cubren y se sujetan, y luego evacúan en orden.", scene: "🔔🧎🏃" },
    { title: "Responder con calma", narration: "Cuando ocurre un sismo real, todos saben qué hacer. El riesgo bajó porque la vulnerabilidad bajó.", scene: "😌✅🤝" },
  ],
  analogies: {
    default: "Gestionar el riesgo es como usar el cinturón de seguridad: no evita que pueda haber un choque, pero reduce mucho el daño si ocurre.",
    sports: "Es como un equipo que entrena las jugadas defensivas: no controla cuándo atacará el rival (la amenaza), pero sí qué tan preparado está (la vulnerabilidad).",
    videogames: "Es como prepararte antes de una misión difícil: guardas la partida, llevas pociones y conoces la salida. El jefe es igual de fuerte, pero tu riesgo de perder baja.",
    nature: "Los animales también se preparan: las hormigas guardan comida antes de la temporada difícil y algunas aves buscan refugio antes de una tormenta.",
    cooking: "Es como cocinar con un extintor cerca y sin dejar el aceite solo en el fuego: el fuego sigue siendo una amenaza, pero el riesgo de incendio baja.",
    technology: "Es como hacer copias de seguridad de tus archivos: no evita que el disco se dañe, pero evita que pierdas todo.",
  },
  glossary: [
    { term: "Amenaza", definition: "Fenómeno natural o causado por personas que puede provocar daños." },
    { term: "Vulnerabilidad", definition: "Grado de exposición y fragilidad de personas o bienes frente a una amenaza." },
    { term: "Riesgo", definition: "Probabilidad de sufrir daños cuando una amenaza afecta a algo vulnerable." },
    { term: "Mitigación", definition: "Acciones para reducir el impacto de una amenaza." },
    { term: "Simulacro", definition: "Ensayo práctico de cómo actuar en una emergencia." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Se puede evitar que ocurra un sismo?",
      options: ["Sí, con tecnología", "No, pero sí podemos prepararnos"],
      correctIndex: 1,
      explanation: "Los sismos no se pueden evitar ni predecir con exactitud, pero la preparación reduce mucho los daños.",
      concept: "amenaza",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Una familia vive en una casa construida al borde de una quebrada. ¿Qué representa esa ubicación?",
      options: ["Una amenaza", "Una vulnerabilidad", "Una mitigación", "Un simulacro"],
      correctIndex: 1,
      explanation: "La ubicación expuesta es una vulnerabilidad. La crecida de la quebrada sería la amenaza.",
      concept: "Amenaza, vulnerabilidad y riesgo",
    },
    {
      id: "q2",
      prompt: "¿Qué debes hacer durante un sismo si estás en el salón de clases?",
      options: [
        "Correr hacia las escaleras de inmediato",
        "Agacharte, cubrirte bajo una mesa resistente y sujetarte",
        "Usar el ascensor para salir rápido",
        "Pararte junto a las ventanas",
      ],
      correctIndex: 1,
      explanation: "Agacharse, cubrirse y sujetarse protege de objetos que caen. Se evacúa cuando termina el movimiento.",
      concept: "Qué hacer durante un sismo",
    },
    {
      id: "q3",
      prompt: "Preparar una mochila de emergencia y hacer simulacros corresponde a la fase de…",
      options: ["Respuesta", "Recuperación", "Preparación (antes)", "Reconstrucción"],
      correctIndex: 2,
      explanation: "Son acciones que se hacen antes del evento, en la fase de prevención y preparación.",
      concept: "Fases de la gestión del riesgo",
    },
    {
      id: "q4",
      prompt: "¿Qué ocurrió en el litoral central de Venezuela en diciembre de 1999?",
      options: [
        "Un huracán de categoría 5",
        "Deslaves e inundaciones por lluvias extraordinarias (tragedia de Vargas)",
        "La erupción de un volcán",
        "Un tsunami",
      ],
      correctIndex: 1,
      explanation: "La tragedia de Vargas fue causada por lluvias extraordinarias que provocaron deslaves e inundaciones.",
      concept: "Amenazas en Venezuela",
    },
    {
      id: "q5",
      prompt: "¿Cuál es la forma más eficaz de reducir el riesgo cuando la amenaza no se puede evitar?",
      options: ["Ignorar la amenaza", "Disminuir la vulnerabilidad", "Esperar a que pase", "Aumentar la exposición"],
      correctIndex: 1,
      explanation: "Si la amenaza no se puede controlar, reducir la vulnerabilidad (preparación, construcción segura, planes) baja el riesgo.",
      concept: "Amenaza, vulnerabilidad y riesgo",
    },
  ],
  explainPrompt: "Explica con tus palabras la diferencia entre amenaza, vulnerabilidad y riesgo, y qué puede hacer tu familia para prepararse ante un sismo.",
  explainChecklist: ["amenaza", "vulnerabilidad", "riesgo", "simulacro", "punto de encuentro"],
  deeperResources: [
    { title: "Protección civil", url: "https://es.wikipedia.org/wiki/Protecci%C3%B3n_civil", kind: "reference", source: "Wikipedia" },
    { title: "Tragedia de Vargas", url: "https://es.wikipedia.org/wiki/Tragedia_de_Vargas", kind: "reference", source: "Wikipedia" },
    { title: "Videos sobre qué hacer en un sismo", url: "https://www.youtube.com/results?search_query=qu%C3%A9+hacer+durante+un+sismo+agacharse+cubrirse+sujetarse", kind: "video", source: "YouTube (búsqueda)" },
    { title: "Organización Panamericana de la Salud: emergencias y desastres", url: "https://www.paho.org/es", kind: "article", source: "OPS/OMS" },
  ],
  sources: [
    { title: "Desastre natural", url: "https://es.wikipedia.org/wiki/Desastre_natural", kind: "reference", source: "Wikipedia" },
    { title: "Constitución de Venezuela de 1999", url: "https://es.wikipedia.org/wiki/Constituci%C3%B3n_de_Venezuela_de_1999", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["sov-territory-spaces", "sov-human-rights"],
};
