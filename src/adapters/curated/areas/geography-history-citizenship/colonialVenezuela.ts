import type { Lesson } from "../../../../domain/lesson";

export const colonialVenezuela: Lesson = {
  id: "ghc-colonial-venezuela",
  title: "La Venezuela colonial",
  subjectId: "geography-history-citizenship",
  emoji: "⛪",
  year: 2,
  keywords: ["colonia", "conquista", "Capitanía General de Venezuela", "1777", "encomienda", "cacao", "sociedad colonial", "criollos", "pardos", "Compañía Guipuzcoana"],
  hook: "¿Por qué el país se llama Venezuela? ¿Por qué el cacao venezolano es famoso en el mundo? Las respuestas empiezan hace más de 500 años, cuando llegaron los europeos y comenzó la época colonial.",
  summary:
    "La época colonial es el período, de casi tres siglos, en que el territorio venezolano estuvo bajo el dominio de la Corona española. Comenzó con la llegada de los europeos a fines del siglo XV y la conquista, que transformó la vida de los pueblos indígenas. Los españoles fundaron ciudades como Coro (1527) y Caracas (1567), organizaron una economía basada en la agricultura de exportación, especialmente el cacao, y crearon una sociedad dividida en grupos según su origen. En 1777 las provincias se unieron en la Capitanía General de Venezuela, base del territorio del país actual.",
  keyPoints: [
    {
      title: "La llegada de los europeos",
      text: "En 1498, en su tercer viaje, Cristóbal Colón llegó a las costas de Paria, primer contacto europeo con la tierra firme del continente. En 1499, una expedición vio en el Lago de Maracaibo viviendas sobre el agua (palafitos) que recordaron a Venecia; de allí vendría el nombre de Venezuela.",
      deeper: "En esa expedición participaban Alonso de Ojeda y Américo Vespucio. Venezuela significaría \"pequeña Venecia\".",
    },
    {
      title: "La conquista y la fundación de ciudades",
      text: "La conquista fue un proceso largo y violento: muchos pueblos indígenas resistieron, como los liderados por el cacique Guaicaipuro en la región de Caracas. Los españoles fundaron ciudades como Coro (1527) y Santiago de León de Caracas (1567).",
      deeper: "La población indígena se redujo mucho por la guerra, el trabajo forzado y las enfermedades traídas de Europa, contra las que no tenía defensas.",
    },
    {
      title: "La economía colonial",
      text: "La economía se basó en la agricultura y la ganadería. El cacao fue el principal producto de exportación durante buena parte de la colonia; también se producían tabaco, añil, cuero y, más tarde, café.",
      deeper: "Se usaron formas de trabajo como la encomienda (grupos indígenas asignados a un español) y la esclavitud de personas africanas traídas a la fuerza. En 1728 se creó la Compañía Guipuzcoana, que controló gran parte del comercio de la provincia de Venezuela con España.",
    },
    {
      title: "La sociedad y la Capitanía General",
      text: "La sociedad estaba dividida en grupos con derechos desiguales: blancos peninsulares (nacidos en España), blancos criollos (nacidos en América), pardos (mezcla de orígenes), indígenas y personas esclavizadas. En 1777 se creó la Capitanía General de Venezuela, que unió varias provincias bajo un mismo gobierno militar y político.",
      deeper: "Los peninsulares ocupaban los cargos más altos; los criollos tenían tierras y riqueza pero menos poder político, algo que años después influyó en el proceso de independencia.",
    },
  ],
  diagram: {
    id: "root",
    label: "Venezuela colonial",
    detail: "Casi tres siglos bajo dominio español",
    children: [
      {
        id: "inicio",
        label: "Llegada y conquista",
        detail: "Siglos XV y XVI",
        children: [
          { id: "1498", label: "1498", detail: "Colón en las costas de Paria" },
          { id: "ciudades", label: "Fundación de ciudades", detail: "Coro (1527), Caracas (1567)" },
        ],
      },
      {
        id: "vida",
        label: "Vida colonial",
        detail: "Economía y sociedad",
        children: [
          { id: "economia", label: "Economía", detail: "Cacao, tabaco, añil, ganado" },
          { id: "sociedad", label: "Sociedad", detail: "Peninsulares, criollos, pardos, indígenas, esclavizados" },
        ],
      },
      { id: "1777", label: "Capitanía General (1777)", detail: "Unión de las provincias" },
    ],
  },
  miniClass: [
    { title: "Barcos en el horizonte", narration: "En 1498 Colón llega a las costas de Paria. Un año después, en el Lago de Maracaibo, los europeos ven casas sobre el agua.", scene: "⛵🏝️🛖" },
    { title: "La conquista", narration: "Los pueblos indígenas resisten, pero la guerra y las enfermedades reducen mucho su población.", scene: "🪶⚔️🦠" },
    { title: "Haciendas de cacao", narration: "Surgen haciendas que producen cacao para exportar a Europa. El trabajo recae en indígenas y personas esclavizadas.", scene: "🍫🌳🚢" },
    { title: "Una sola capitanía", narration: "En 1777 las provincias se unen en la Capitanía General de Venezuela: el mapa del país empieza a tomar forma.", scene: "🗺️📜🏛️" },
  ],
  analogies: {
    default: "La colonia fue como una casa administrada a distancia por un dueño que vivía al otro lado del mar: las decisiones importantes se tomaban en España.",
    sports: "La sociedad colonial era como un equipo donde los puestos no dependían del talento sino del lugar de nacimiento: los peninsulares siempre eran titulares y los demás, suplentes.",
    videogames: "Es como un juego de estrategia: España fundaba ciudades, creaba rutas de comercio y unía provincias, como construir y conectar bases en un mapa.",
    cooking: "El cacao era el ingrediente estrella: Venezuela lo producía y Europa lo consumía como chocolate, igual que hoy exportamos un buen producto.",
    art: "Muchas iglesias y casas coloniales que aún vemos en Coro o Caracas son como cuadros de esa época: nos muestran cómo se vivía.",
  },
  glossary: [
    { term: "Colonia", definition: "Territorio gobernado por un país extranjero que controla su economía y su política." },
    { term: "Encomienda", definition: "Sistema en el que un grupo de indígenas era asignado a un español, que cobraba su trabajo o tributo." },
    { term: "Criollo", definition: "Persona nacida en América de ascendencia europea." },
    { term: "Pardo", definition: "Persona con mezcla de orígenes europeo, indígena y africano en la sociedad colonial." },
    { term: "Capitanía General", definition: "Unidad de gobierno militar y político del imperio español; la de Venezuela se creó en 1777." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Qué producto venezolano fue muy importante en la colonia y hoy sigue siendo famoso?",
      options: ["El petróleo", "El cacao", "El trigo"],
      correctIndex: 1,
      explanation: "El cacao fue el principal producto de exportación durante buena parte de la colonia. El petróleo fue importante mucho después.",
      concept: "economia",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿En qué año llegó Cristóbal Colón a las costas de Paria?",
      options: ["1492", "1498", "1567", "1777"],
      correctIndex: 1,
      explanation: "En 1498, en su tercer viaje, Colón llegó a Paria. En 1492 había llegado a islas del Caribe.",
      concept: "Llegada de los europeos",
    },
    {
      id: "q2",
      prompt: "¿De dónde vendría el nombre \"Venezuela\"?",
      options: [
        "De un cacique indígena",
        "De las viviendas sobre el agua que recordaron a Venecia",
        "De un río de España",
        "De una palabra africana",
      ],
      correctIndex: 1,
      explanation: "Los palafitos del Lago de Maracaibo recordaron a Venecia: \"pequeña Venecia\".",
      concept: "Llegada de los europeos",
    },
    {
      id: "q3",
      prompt: "¿Qué grupo social ocupaba los cargos más altos en la colonia?",
      options: ["Los criollos", "Los pardos", "Los blancos peninsulares", "Los indígenas"],
      correctIndex: 2,
      explanation: "Los peninsulares, nacidos en España, tenían los cargos de mayor poder.",
      concept: "Sociedad colonial",
    },
    {
      id: "q4",
      prompt: "¿Qué se creó en 1777?",
      options: ["La ciudad de Caracas", "La Capitanía General de Venezuela", "La Compañía Guipuzcoana", "La primera Constitución"],
      correctIndex: 1,
      explanation: "En 1777 se unieron varias provincias en la Capitanía General de Venezuela.",
      concept: "Capitanía General",
    },
    {
      id: "q5",
      prompt: "¿Por qué disminuyó tanto la población indígena durante la conquista?",
      options: [
        "Por la guerra, el trabajo forzado y las enfermedades traídas de Europa",
        "Porque todos emigraron a Europa",
        "Por un terremoto",
        "No disminuyó",
      ],
      correctIndex: 0,
      explanation: "La violencia, el trabajo forzado y enfermedades como la viruela causaron una gran pérdida de población.",
      concept: "Conquista",
    },
  ],
  explainPrompt: "Explica con tus palabras cómo era la sociedad colonial venezolana y en qué se basaba su economía.",
  explainChecklist: ["España", "cacao", "criollos", "peninsulares", "1777"],
  deeperResources: [
    { title: "Capitanía General de Venezuela", url: "https://es.wikipedia.org/wiki/Capitan%C3%ADa_General_de_Venezuela", kind: "reference", source: "Wikipedia" },
    { title: "Historia de Venezuela", url: "https://es.wikipedia.org/wiki/Historia_de_Venezuela", kind: "reference", source: "Wikipedia" },
    { title: "Videos sobre la Venezuela colonial", url: "https://www.youtube.com/results?search_query=Venezuela+colonial+historia+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Capitanía General de Venezuela", url: "https://es.wikipedia.org/wiki/Capitan%C3%ADa_General_de_Venezuela", kind: "reference", source: "Wikipedia" },
    { title: "Historia de Venezuela", url: "https://es.wikipedia.org/wiki/Historia_de_Venezuela", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["ghc-indigenous-peoples", "ghc-independence", "ghc-population-venezuela"],
};
