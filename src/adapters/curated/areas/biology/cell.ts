import type { Lesson } from "../../../../domain/lesson";

export const cell: Lesson = {
  id: "bio-cell",
  title: "La célula: unidad de la vida",
  subjectId: "biology",
  emoji: "🦠",
  year: 3,
  keywords: ["célula", "células", "teoría celular", "orgánulos", "organelos", "núcleo", "membrana celular", "procariota", "eucariota", "mitocondria"],
  hook: "Tu cuerpo tiene billones de células, y cada una es tan pequeña que necesitas un microscopio para verla. Aun así, cada célula respira, se alimenta y fabrica lo que necesita. ¿Cómo cabe tanta vida en algo tan diminuto?",
  summary:
    "La célula es la unidad más pequeña que tiene vida: todos los seres vivos están formados por una o muchas células. La teoría celular resume tres ideas: todo ser vivo está formado por células, la célula es la unidad de estructura y función, y toda célula proviene de otra célula. Hay células procariotas (sin núcleo definido, como las bacterias) y eucariotas (con núcleo, como las de animales, plantas y hongos). Dentro de las eucariotas hay orgánulos que cumplen funciones específicas.",
  keyPoints: [
    {
      title: "La teoría celular",
      text: "Todo ser vivo está formado por células; la célula es la unidad básica de estructura y función; y toda célula nace de otra célula.",
      deeper: "Robert Hooke observó en 1665 celdillas en un trozo de corcho y las llamó \"células\". En el siglo XIX, Schleiden (plantas) y Schwann (animales) propusieron que todos los seres vivos están hechos de células, y Virchow agregó que toda célula proviene de otra.",
    },
    {
      title: "Procariotas y eucariotas",
      text: "Las procariotas no tienen núcleo: su material genético está libre en el citoplasma (bacterias). Las eucariotas tienen un núcleo rodeado de membrana y muchos orgánulos (animales, plantas, hongos, protistas).",
      deeper: "Las células procariotas suelen ser mucho más pequeñas (alrededor de 1 a 10 micrómetros) que las eucariotas (alrededor de 10 a 100 micrómetros).",
    },
    {
      title: "Las tres partes básicas",
      text: "Toda célula tiene membrana plasmática (controla lo que entra y sale), citoplasma (el medio interno donde ocurren reacciones) y material genético (ADN), que contiene las instrucciones.",
    },
    {
      title: "Orgánulos con trabajo propio",
      text: "El núcleo guarda el ADN; las mitocondrias obtienen energía de los nutrientes (respiración celular); los ribosomas fabrican proteínas; el retículo endoplasmático y el aparato de Golgi procesan y empacan sustancias.",
      deeper: "Los ribosomas también existen en las procariotas, pero son más pequeños. Las mitocondrias tienen su propio ADN, una pista de que hace mucho tiempo fueron bacterias que pasaron a vivir dentro de otras células (teoría endosimbiótica).",
    },
    {
      title: "Célula animal y célula vegetal",
      text: "La célula vegetal tiene pared celular de celulosa, cloroplastos para la fotosíntesis y una vacuola grande. La célula animal no tiene pared ni cloroplastos y su forma es más variable.",
    },
  ],
  diagram: {
    id: "root",
    label: "Célula",
    detail: "Unidad básica de la vida",
    children: [
      {
        id: "procariota",
        label: "Procariota",
        detail: "Sin núcleo definido",
        children: [{ id: "bacterias", label: "Bacterias", detail: "ADN libre en el citoplasma" }],
      },
      {
        id: "eucariota",
        label: "Eucariota",
        detail: "Con núcleo y orgánulos",
        children: [
          { id: "animal", label: "Animal", detail: "Sin pared celular ni cloroplastos" },
          { id: "vegetal", label: "Vegetal", detail: "Pared de celulosa, cloroplastos y vacuola grande" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Bajo el microscopio", narration: "Raspas con cuidado el interior de tu mejilla y lo miras al microscopio: aparecen células planas con un punto oscuro, el núcleo.", scene: "🔬👀🦠" },
    { title: "La frontera", narration: "La membrana plasmática rodea la célula y decide qué entra (nutrientes, agua) y qué sale (desechos).", scene: "🚪🧱✅" },
    { title: "Las fábricas", narration: "En el citoplasma, las mitocondrias producen energía y los ribosomas arman proteínas siguiendo las órdenes del ADN.", scene: "🏭⚡🧬" },
    { title: "Una hoja de cerca", narration: "Ahora miras una hoja de planta: células con forma de ladrillo, pared rígida y puntitos verdes: los cloroplastos.", scene: "🍃🔬🟩" },
  ],
  analogies: {
    default: "La célula es como una ciudad: la membrana es la frontera con aduana, el núcleo es la alcaldía con los planos, las mitocondrias son las plantas eléctricas y los ribosomas son las fábricas.",
    sports: "La célula es como un club deportivo: el núcleo es la directiva con el reglamento, las mitocondrias son los preparadores físicos que dan energía y la membrana es el portero que decide quién entra al estadio.",
    videogames: "Es como tu base en un juego de construcción: el núcleo guarda los planos, las mitocondrias son generadores de energía, los ribosomas son talleres que fabrican objetos y la membrana es la muralla con puerta.",
    music: "Es como una orquesta: el núcleo tiene la partitura (ADN), los ribosomas son los músicos que la tocan y las mitocondrias aportan la energía para que todo suene.",
    cooking: "Es como la cocina de un restaurante: el recetario está en el núcleo, los ribosomas son los cocineros, el aparato de Golgi empaca los pedidos y la membrana es la puerta de entrada de los ingredientes.",
    technology: "Es como una computadora: el ADN en el núcleo es el disco duro con los programas, las mitocondrias son la fuente de poder y los ribosomas son impresoras 3D que fabrican piezas.",
    nature: "Una planta del Parque Nacional Canaima y un jaguar de los llanos son muy distintos, pero ambos están hechos de células con núcleo: la vida usa los mismos ladrillos.",
  },
  glossary: [
    { term: "Célula", definition: "Unidad estructural y funcional más pequeña de los seres vivos." },
    { term: "Orgánulo (organelo)", definition: "Estructura dentro de la célula que cumple una función específica." },
    { term: "Procariota", definition: "Célula sin núcleo definido, como las bacterias." },
    { term: "Eucariota", definition: "Célula con núcleo rodeado de membrana y con orgánulos." },
    { term: "Mitocondria", definition: "Orgánulo que obtiene energía de los nutrientes mediante la respiración celular." },
    { term: "Cloroplasto", definition: "Orgánulo de las células vegetales donde ocurre la fotosíntesis." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "Antes de empezar: ¿una bacteria está formada por cuántas células?",
      options: ["Por una sola célula", "Por miles de células", "No tiene células"],
      correctIndex: 0,
      explanation: "¡Exacto! Las bacterias son organismos unicelulares.",
      concept: "procariota",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Cuál de estas ideas forma parte de la teoría celular?",
      options: [
        "Solo los animales tienen células",
        "Toda célula proviene de otra célula",
        "Las células se forman a partir del polvo",
        "Los virus son células",
      ],
      correctIndex: 1,
      explanation: "La teoría celular afirma que toda célula nace de otra célula preexistente.",
      concept: "Teoría celular",
    },
    {
      id: "q2",
      prompt: "¿Qué diferencia principal tiene una célula procariota frente a una eucariota?",
      options: ["No tiene membrana", "No tiene núcleo definido", "Es siempre más grande", "No tiene material genético"],
      correctIndex: 1,
      explanation: "En las procariotas el ADN está libre en el citoplasma, sin un núcleo rodeado de membrana.",
      concept: "Procariotas y eucariotas",
    },
    {
      id: "q3",
      prompt: "¿Qué orgánulo obtiene energía de los nutrientes?",
      options: ["El ribosoma", "La mitocondria", "La pared celular", "La vacuola"],
      correctIndex: 1,
      explanation: "La mitocondria realiza la respiración celular y libera la energía de los nutrientes.",
      concept: "Orgánulos",
    },
    {
      id: "q4",
      prompt: "¿Qué estructuras tiene una célula vegetal que no tiene una célula animal?",
      options: ["Núcleo y membrana", "Pared celular y cloroplastos", "Mitocondrias y ribosomas", "Citoplasma y ADN"],
      correctIndex: 1,
      explanation: "La pared de celulosa y los cloroplastos son propios de las células vegetales.",
      concept: "Animal y vegetal",
    },
    {
      id: "q5",
      prompt: "¿Qué función cumple la membrana plasmática?",
      options: [
        "Fabricar proteínas",
        "Guardar el ADN",
        "Controlar lo que entra y sale de la célula",
        "Realizar la fotosíntesis",
      ],
      correctIndex: 2,
      explanation: "La membrana es selectiva: deja pasar unas sustancias y otras no.",
      concept: "Partes básicas",
    },
  ],
  explainPrompt: "Explica con tus palabras, como si fuera un recorrido turístico, qué encontrarías al entrar en una célula animal y qué hace cada parte.",
  explainChecklist: ["membrana", "citoplasma", "núcleo", "mitocondria", "ribosoma"],
  deeperResources: [
    { title: "Célula (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/C%C3%A9lula", kind: "reference", source: "Wikipedia" },
    { title: "Teoría celular", url: "https://es.wikipedia.org/wiki/Teor%C3%ADa_celular", kind: "reference", source: "Wikipedia" },
    { title: "Lecciones y ejercicios sobre la célula", url: "https://es.khanacademy.org/search?page_search_query=estructura%20de%20la%20c%C3%A9lula", kind: "interactive", source: "Khan Academy" },
    { title: "Videos educativos sobre la célula", url: "https://www.youtube.com/results?search_query=la+c%C3%A9lula+y+sus+partes+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Célula", url: "https://es.wikipedia.org/wiki/C%C3%A9lula", kind: "reference", source: "Wikipedia" },
    { title: "Teoría celular", url: "https://es.wikipedia.org/wiki/Teor%C3%ADa_celular", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["bio-cell-division", "bio-biomolecules", "photosynthesis"],
};
