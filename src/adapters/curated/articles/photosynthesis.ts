import type { Lesson } from "../../../domain/lesson";

export const photosynthesis: Lesson = {
  id: "photosynthesis",
  title: "La fotosíntesis",
  subjectId: "biology",
  emoji: "🌱",
  minGrade: 5,
  keywords: ["plantas", "clorofila", "cloroplasto", "oxígeno", "glucosa", "luz solar", "dióxido de carbono", "nutrición vegetal"],
  hook: "Cada vez que respiras, usas oxígeno que, en gran parte, fabricó una planta o un alga. ¿Cómo convierten la luz del sol en comida y aire?",
  summary:
    "La fotosíntesis es el proceso con el que las plantas, las algas y algunas bacterias fabrican su propio alimento. Usan la energía de la luz solar para transformar agua y dióxido de carbono en glucosa (azúcar) y liberan oxígeno. Ocurre en los cloroplastos, que contienen un pigmento verde llamado clorofila.",
  keyPoints: [
    {
      title: "Los ingredientes",
      text: "La planta necesita luz solar, agua (que absorbe por las raíces) y dióxido de carbono (que entra por pequeños poros de las hojas llamados estomas).",
      deeper: "Ecuación general: 6 CO₂ + 6 H₂O + energía luminosa → C₆H₁₂O₆ + 6 O₂.",
    },
    {
      title: "La fábrica: el cloroplasto",
      text: "Los cloroplastos son orgánulos de las células vegetales. Su clorofila absorbe sobre todo la luz roja y azul y refleja la verde; por eso vemos las hojas verdes.",
    },
    {
      title: "Los productos",
      text: "La planta obtiene glucosa, que usa como energía y para crecer, y libera oxígeno al aire.",
      deeper: "Parte de la glucosa se guarda como almidón o se usa para formar celulosa, el material de las paredes celulares.",
    },
    {
      title: "Dos fases",
      text: "Primero la luz se captura y se convierte en energía química (fase luminosa). Después esa energía se usa para fabricar glucosa con el CO₂ (fase oscura o ciclo de Calvin).",
      deeper: "La fase luminosa ocurre en los tilacoides y rompe moléculas de agua, de donde sale el oxígeno. El ciclo de Calvin ocurre en el estroma y no necesita luz directamente, aunque usa los productos de la fase luminosa (ATP y NADPH).",
    },
    {
      title: "¿Por qué importa?",
      text: "La fotosíntesis es la base de casi todas las cadenas alimentarias y produce gran parte del oxígeno de la atmósfera.",
    },
  ],
  diagram: {
    id: "root",
    label: "Fotosíntesis",
    detail: "Luz → alimento",
    children: [
      {
        id: "in",
        label: "Entra",
        detail: "Lo que la planta toma",
        children: [
          { id: "luz", label: "Luz solar", detail: "Energía" },
          { id: "agua", label: "Agua (H₂O)", detail: "Por las raíces" },
          { id: "co2", label: "CO₂", detail: "Por los estomas" },
        ],
      },
      {
        id: "out",
        label: "Sale",
        detail: "Lo que produce",
        children: [
          { id: "glucosa", label: "Glucosa", detail: "Alimento de la planta" },
          { id: "o2", label: "Oxígeno (O₂)", detail: "Va al aire" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Sale el sol", narration: "La luz del sol llega a la hoja y la clorofila la atrapa.", scene: "☀️➡️🍃" },
    { title: "Las raíces beben", narration: "Las raíces absorben agua del suelo y la envían hasta las hojas.", scene: "💧⬆️🌿" },
    { title: "Las hojas respiran", narration: "Por los estomas entra dióxido de carbono del aire.", scene: "💨➡️🍃" },
    { title: "¡Comida y aire!", narration: "Con esa energía, la planta fabrica glucosa y libera oxígeno que nosotros respiramos.", scene: "🍬🌱💨😊" },
  ],
  analogies: {
    default: "Una hoja es como una cocina solar: la luz es la estufa, el agua y el CO₂ son los ingredientes, la glucosa es el plato y el oxígeno es el aroma que sale de la cocina.",
    cooking: "Es una receta: 6 tazas de CO₂ + 6 de agua, cocinadas con luz solar, dan 1 pastel de glucosa y 6 globos de oxígeno.",
    videogames: "La planta \"farmea\" energía del sol como un panel de recursos y la convierte en ítems: glucosa para subir de nivel y oxígeno como recompensa para todos.",
    sports: "Es como el entrenamiento de un atleta: sin energía (luz) no hay rendimiento, y sin nutrientes (agua y CO₂) no hay músculo (glucosa).",
    technology: "Es como un panel solar que, además de captar energía, la guarda en una batería química: la glucosa.",
    nature: "Cada bosque es una enorme fábrica de oxígeno: millones de hojas trabajando juntas con la luz del sol.",
  },
  glossary: [
    { term: "Clorofila", definition: "Pigmento verde que absorbe la luz." },
    { term: "Cloroplasto", definition: "Orgánulo donde ocurre la fotosíntesis." },
    { term: "Estoma", definition: "Poro de la hoja por donde entran y salen gases." },
    { term: "Glucosa", definition: "Azúcar que sirve de alimento y energía." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿De dónde crees que obtienen su alimento las plantas?",
      options: ["Del suelo, ya listo", "Lo fabrican ellas mismas", "De los insectos"],
      correctIndex: 1,
      explanation: "Las plantas fabrican su alimento. Del suelo toman agua y minerales, no comida ya hecha.",
      concept: "ingredientes",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Qué gas libera la planta durante la fotosíntesis?",
      options: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Hidrógeno"],
      correctIndex: 1,
      explanation: "La planta libera oxígeno y toma dióxido de carbono.",
      concept: "Productos",
    },
    {
      id: "q2",
      prompt: "¿Dónde ocurre la fotosíntesis dentro de la célula vegetal?",
      options: ["En el núcleo", "En las mitocondrias", "En los cloroplastos", "En la pared celular"],
      correctIndex: 2,
      explanation: "Los cloroplastos contienen clorofila y son la \"fábrica\" de la fotosíntesis.",
      concept: "Cloroplasto",
    },
    {
      id: "q3",
      prompt: "¿Por qué las hojas se ven verdes?",
      options: ["Porque absorben la luz verde", "Porque la clorofila refleja la luz verde", "Porque tienen agua", "Por el oxígeno"],
      correctIndex: 1,
      explanation: "La clorofila absorbe el rojo y el azul y refleja el verde, que es lo que llega a nuestros ojos.",
      concept: "Cloroplasto",
    },
    {
      id: "q4",
      prompt: "¿Cuáles son los ingredientes de la fotosíntesis?",
      options: ["Oxígeno y glucosa", "Agua, dióxido de carbono y luz", "Tierra y oxígeno", "Solo agua"],
      correctIndex: 1,
      explanation: "Agua + CO₂ + luz son los ingredientes; glucosa + O₂ son los productos.",
      concept: "Ingredientes",
    },
    {
      id: "q5",
      prompt: "¿Por qué la fotosíntesis es importante para los animales?",
      options: [
        "No es importante para ellos",
        "Porque produce oxígeno y es la base de las cadenas alimentarias",
        "Porque produce dióxido de carbono",
        "Porque calienta el planeta",
      ],
      correctIndex: 1,
      explanation: "Casi toda la energía de las cadenas alimentarias viene de organismos fotosintéticos.",
      concept: "Importancia",
    },
  ],
  explainPrompt: "Explica con tus palabras qué necesita una planta para fabricar su alimento y qué produce.",
  explainChecklist: ["luz", "agua", "dióxido de carbono", "glucosa", "oxígeno"],
  deeperResources: [
    { title: "Fotosíntesis (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Fotos%C3%ADntesis", kind: "reference", source: "Wikipedia" },
    { title: "Lecciones sobre fotosíntesis", url: "https://es.khanacademy.org/search?page_search_query=fotos%C3%ADntesis", kind: "interactive", source: "Khan Academy" },
    { title: "Videos educativos sobre la fotosíntesis", url: "https://www.youtube.com/results?search_query=fotos%C3%ADntesis+explicaci%C3%B3n+educativa", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [{ title: "Fotosíntesis", url: "https://es.wikipedia.org/wiki/Fotos%C3%ADntesis", kind: "reference", source: "Wikipedia" }],
  relatedTopicIds: ["water-cycle", "nervous-system"],
};
