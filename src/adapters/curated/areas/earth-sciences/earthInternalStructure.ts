import type { Lesson } from "../../../../domain/lesson";

export const earthInternalStructure: Lesson = {
  id: "earth-internal-structure",
  title: "La estructura interna de la Tierra",
  subjectId: "earth-sciences",
  emoji: "🌍",
  year: 5,
  keywords: ["capas de la Tierra", "corteza", "manto", "núcleo", "litosfera", "astenosfera", "ondas sísmicas", "geosfera", "Mohorovičić"],
  hook: "El pozo más profundo que ha perforado la humanidad llegó a unos 12 km. El centro de la Tierra está a unos 6.371 km. Entonces, ¿cómo sabemos qué hay allá abajo si nadie lo ha visto?",
  summary:
    "La Tierra está formada por capas concéntricas. Según su composición se distinguen la corteza (delgada y rocosa), el manto (rocas muy calientes que fluyen lentamente) y el núcleo (sobre todo hierro y níquel), con un núcleo externo líquido y uno interno sólido. Según su comportamiento mecánico se habla de litosfera rígida y astenosfera más plástica. Conocemos estas capas principalmente estudiando cómo viajan las ondas sísmicas de los terremotos a través del planeta.",
  keyPoints: [
    {
      title: "La corteza",
      text: "Es la capa más externa y delgada. La corteza oceánica mide unos 5 a 10 km de espesor y está hecha de rocas como el basalto; la continental es más gruesa (unos 30 a 70 km, más bajo las grandes montañas) y más variada, con mucho granito.",
      deeper: "El límite entre la corteza y el manto se llama discontinuidad de Mohorovičić (o \"Moho\"), en honor al sismólogo croata que la detectó en 1909.",
    },
    {
      title: "El manto",
      text: "Llega hasta unos 2.900 km de profundidad y es la capa más voluminosa. Está formado por rocas sólidas pero tan calientes que, a lo largo de millones de años, fluyen muy lentamente.",
      deeper: "Esas corrientes de convección del manto ayudan a mover las placas tectónicas. El límite entre el manto y el núcleo es la discontinuidad de Gutenberg.",
    },
    {
      title: "El núcleo",
      text: "Está formado principalmente por hierro y níquel. El núcleo externo (de unos 2.900 a 5.150 km) es líquido; el núcleo interno (de unos 5.150 a 6.371 km) es sólido por la enorme presión, aunque su temperatura supera los 5.000 °C.",
      deeper: "El movimiento del hierro líquido del núcleo externo genera el campo magnético terrestre, que nos protege del viento solar y orienta las brújulas.",
    },
    {
      title: "Litosfera y astenosfera",
      text: "Si miramos cómo se comportan las capas, la litosfera (corteza + parte superior del manto, unos 100 km) es rígida y está rota en placas. Debajo, la astenosfera es más plástica y permite que las placas se deslicen.",
    },
    {
      title: "¿Cómo lo sabemos? Las ondas sísmicas",
      text: "Los terremotos producen ondas que atraviesan el planeta. Las ondas P viajan por sólidos y líquidos; las ondas S solo por sólidos. Como las ondas S no atraviesan el núcleo externo, sabemos que es líquido.",
      deeper: "Al pasar de una capa a otra, las ondas cambian de velocidad y se desvían (refracción). Las estaciones sismológicas de todo el mundo registran esos cambios y con ellos se reconstruye el interior de la Tierra.",
    },
  ],
  diagram: {
    id: "root",
    label: "Interior de la Tierra",
    detail: "Radio aproximado: 6.371 km",
    children: [
      {
        id: "composicion",
        label: "Por composición",
        detail: "De qué están hechas",
        children: [
          { id: "corteza", label: "Corteza", detail: "5–70 km; oceánica y continental" },
          { id: "manto", label: "Manto", detail: "Hasta ~2.900 km; roca caliente que fluye lento" },
          { id: "nucleo", label: "Núcleo", detail: "Hierro y níquel; externo líquido, interno sólido" },
        ],
      },
      {
        id: "mecanica",
        label: "Por comportamiento",
        detail: "Cómo se mueven",
        children: [
          { id: "litosfera", label: "Litosfera", detail: "Rígida, dividida en placas" },
          { id: "astenosfera", label: "Astenosfera", detail: "Plástica, permite el movimiento de las placas" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Un viaje imposible", narration: "Imagina que bajas desde el pico Bolívar, en los Andes venezolanos, hacia el centro de la Tierra. Primero atraviesas la corteza continental, más gruesa bajo las montañas.", scene: "🏔️⬇️🪨" },
    { title: "El manto", narration: "Pasas el Moho y entras en el manto: roca sólida, pero tan caliente que se deforma lentamente, como plastilina tibia.", scene: "🔥🪨🌀" },
    { title: "Hierro líquido", narration: "A unos 2.900 km llegas al núcleo externo: hierro y níquel fundidos que, al moverse, crean el campo magnético.", scene: "🧲🌊🔥" },
    { title: "El centro", narration: "Por fin, el núcleo interno: más caliente que la superficie del Sol en algunas estimaciones, pero sólido por la presión gigantesca.", scene: "⚪💥🌍" },
  ],
  analogies: {
    default: "La Tierra es como un durazno: la piel fina es la corteza, la pulpa gruesa es el manto y la semilla dura del centro es el núcleo.",
    sports: "Es como una pelota de béisbol: una cubierta fina (corteza), un relleno grueso de hilo (manto) y un centro de corcho y goma (núcleo).",
    videogames: "Es como un mapa con niveles subterráneos: cada capa más profunda tiene más calor y presión, y para \"ver\" los niveles usas un radar: las ondas sísmicas.",
    cooking: "Es como un huevo duro: la cáscara delgada es la corteza, la clara es el manto y la yema es el núcleo.",
    technology: "Los sismólogos estudian la Tierra como un médico usa una ecografía: mandan ondas y, por cómo rebotan y cambian, ven lo que hay dentro sin abrir.",
    nature: "En los Andes venezolanos la corteza es más gruesa que bajo el mar Caribe, como las raíces de un árbol grande que se hunden más que las de una hierba.",
  },
  glossary: [
    { term: "Corteza", definition: "Capa más externa y delgada de la Tierra; puede ser oceánica o continental." },
    { term: "Manto", definition: "Capa intermedia de roca muy caliente que llega hasta unos 2.900 km de profundidad." },
    { term: "Núcleo", definition: "Parte central de la Tierra, formada sobre todo por hierro y níquel." },
    { term: "Litosfera", definition: "Capa rígida formada por la corteza y la parte superior del manto, dividida en placas." },
    { term: "Astenosfera", definition: "Zona del manto superior, más plástica, sobre la que se desplazan las placas." },
    { term: "Onda sísmica", definition: "Vibración que se propaga por el interior de la Tierra, generalmente producida por un terremoto." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "Antes de empezar: ¿qué crees que hay en el centro de la Tierra?",
      options: ["Un hueco vacío", "Metales muy calientes, sobre todo hierro", "Agua"],
      correctIndex: 1,
      explanation: "¡Así es! El núcleo está formado principalmente por hierro y níquel.",
      concept: "nucleo",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Cuál es la capa más delgada de la Tierra?",
      options: ["El manto", "El núcleo externo", "La corteza", "El núcleo interno"],
      correctIndex: 2,
      explanation: "La corteza mide entre unos 5 y 70 km, muy poco comparado con los 6.371 km del radio terrestre.",
      concept: "Corteza",
    },
    {
      id: "q2",
      prompt: "¿Qué parte del interior terrestre está en estado líquido?",
      options: ["La corteza oceánica", "El núcleo externo", "El núcleo interno", "La litosfera"],
      correctIndex: 1,
      explanation: "El núcleo externo es de hierro y níquel fundidos. El interno es sólido por la presión.",
      concept: "Núcleo",
    },
    {
      id: "q3",
      prompt: "¿Por qué sabemos que el núcleo externo es líquido?",
      options: [
        "Porque se ha perforado hasta allí",
        "Porque las ondas S no lo atraviesan",
        "Porque los volcanes expulsan hierro",
        "Porque es la capa más fría",
      ],
      correctIndex: 1,
      explanation: "Las ondas S solo viajan por sólidos. Su \"sombra\" al otro lado del planeta revela un núcleo externo líquido.",
      concept: "Ondas sísmicas",
    },
    {
      id: "q4",
      prompt: "¿Qué forman juntas la corteza y la parte superior del manto?",
      options: ["La astenosfera", "La litosfera", "La atmósfera", "La discontinuidad de Gutenberg"],
      correctIndex: 1,
      explanation: "La litosfera es la capa rígida que está dividida en placas tectónicas.",
      concept: "Litosfera y astenosfera",
    },
    {
      id: "q5",
      prompt: "¿Qué genera el campo magnético de la Tierra?",
      options: [
        "Las rocas de la corteza",
        "El movimiento del hierro líquido del núcleo externo",
        "La atmósfera",
        "Las corrientes marinas",
      ],
      correctIndex: 1,
      explanation: "Las corrientes de metal fundido en el núcleo externo funcionan como una gran dinamo natural.",
      concept: "Núcleo",
    },
  ],
  explainPrompt: "Explica con tus palabras cuáles son las capas de la Tierra y cómo los científicos las conocen sin haber llegado hasta allí.",
  explainChecklist: ["corteza", "manto", "núcleo", "ondas", "líquido"],
  deeperResources: [
    { title: "Estructura interna de la Tierra (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Estructura_interna_de_la_Tierra", kind: "reference", source: "Wikipedia" },
    { title: "Lecciones sobre las capas de la Tierra", url: "https://es.khanacademy.org/search?page_search_query=capas%20de%20la%20Tierra", kind: "interactive", source: "Khan Academy" },
    { title: "Videos educativos sobre la estructura interna de la Tierra", url: "https://www.youtube.com/results?search_query=estructura+interna+de+la+Tierra+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
    { title: "Servicio Geológico de los Estados Unidos", url: "https://www.usgs.gov/", kind: "article", source: "USGS" },
  ],
  sources: [
    { title: "Estructura interna de la Tierra", url: "https://es.wikipedia.org/wiki/Estructura_interna_de_la_Tierra", kind: "reference", source: "Wikipedia" },
    { title: "U.S. Geological Survey", url: "https://www.usgs.gov/", kind: "reference", source: "USGS" },
  ],
  relatedTopicIds: ["earth-plate-tectonics", "earth-rocks-minerals"],
};
