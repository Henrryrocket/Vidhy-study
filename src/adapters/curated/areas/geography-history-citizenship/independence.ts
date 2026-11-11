import type { Lesson } from "../../../../domain/lesson";

export const independence: Lesson = {
  id: "ghc-independence",
  title: "La Independencia de Venezuela (1810–1821)",
  subjectId: "geography-history-citizenship",
  emoji: "⚔️",
  year: 3,
  keywords: ["independencia", "19 de abril de 1810", "5 de julio de 1811", "Batalla de Carabobo", "Bolívar", "Miranda", "emancipación", "Primera República"],
  hook: "Cada 19 de abril, 5 de julio y 24 de junio hay feriado en Venezuela. ¿Sabes qué pasó en esas fechas? Juntas cuentan cómo Venezuela dejó de ser una colonia española.",
  summary:
    "La Independencia de Venezuela fue el proceso por el cual el territorio dejó de depender de la Corona española. Comenzó el 19 de abril de 1810, cuando el Cabildo de Caracas desconoció la autoridad del capitán general y formó una Junta Suprema. El 5 de julio de 1811 un Congreso declaró la independencia absoluta. Siguieron años de guerra, con repúblicas que se perdieron y se recuperaron, hasta que la Batalla de Carabobo, el 24 de junio de 1821, decidió la independencia en el territorio venezolano.",
  keyPoints: [
    {
      title: "Las causas",
      text: "Influyeron ideas de la Ilustración (libertad, igualdad, soberanía del pueblo), el ejemplo de la independencia de Estados Unidos y de la Revolución Francesa, el descontento de los criollos por las restricciones al comercio y a los cargos públicos, y la crisis de España, invadida por Napoleón en 1808.",
      deeper: "Hubo antecedentes como la conspiración de Gual y España (1797) y la expedición de Francisco de Miranda en 1806, en la que se izó por primera vez en tierra venezolana la bandera tricolor.",
    },
    {
      title: "19 de abril de 1810",
      text: "En Caracas, el Cabildo y un grupo de vecinos desconocieron al capitán general Vicente Emparan, que renunció. Se formó una Junta Suprema que gobernó en nombre del rey Fernando VII, entonces prisionero de Napoleón.",
      deeper: "Aunque la Junta todavía decía actuar en nombre del rey, en la práctica fue el primer gobierno autónomo de Venezuela, por eso se considera el inicio del proceso independentista.",
    },
    {
      title: "5 de julio de 1811",
      text: "El Congreso reunido en Caracas firmó el Acta de la Declaración de Independencia: Venezuela se proclamó libre de España. En diciembre de ese año se aprobó la primera Constitución.",
      deeper: "Ese período se conoce como Primera República. Cayó en 1812, afectada por la guerra y por el terremoto del 26 de marzo de 1812. Después hubo una Segunda República (1813–1814), tras la Campaña Admirable de Simón Bolívar.",
    },
    {
      title: "La guerra y la Batalla de Carabobo",
      text: "La guerra fue larga y dura para toda la población. Desde 1817 los patriotas se organizaron en Angostura (hoy Ciudad Bolívar). El 24 de junio de 1821, el ejército dirigido por Simón Bolívar venció a las fuerzas realistas en la Batalla de Carabobo, en el actual estado Carabobo.",
      deeper: "En Carabobo participaron figuras como José Antonio Páez; allí murieron Ambrosio Plaza y Pedro Camejo, conocido como \"Negro Primero\". Los últimos combates fueron la Batalla Naval del Lago de Maracaibo (24 de julio de 1823) y la toma de Puerto Cabello (noviembre de 1823).",
    },
  ],
  diagram: {
    id: "root",
    label: "Independencia de Venezuela",
    detail: "De colonia a república (1810–1823)",
    children: [
      {
        id: "causas",
        label: "Causas",
        detail: "Por qué ocurrió",
        children: [
          { id: "ideas", label: "Ideas de la Ilustración", detail: "Libertad, igualdad, soberanía popular" },
          { id: "crisis", label: "Crisis de España", detail: "Invasión de Napoleón en 1808" },
        ],
      },
      {
        id: "hitos",
        label: "Fechas clave",
        detail: "Momentos decisivos",
        children: [
          { id: "1810", label: "19 de abril de 1810", detail: "Junta Suprema de Caracas" },
          { id: "1811", label: "5 de julio de 1811", detail: "Declaración de Independencia" },
          { id: "1821", label: "24 de junio de 1821", detail: "Batalla de Carabobo" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "España en crisis", narration: "En 1808 Napoleón invade España y el rey queda prisionero. En las colonias muchos se preguntan: ¿quién gobierna ahora?", scene: "👑⛓️🇪🇸" },
    { title: "Un Jueves Santo en Caracas", narration: "El 19 de abril de 1810, el Cabildo de Caracas desconoce al capitán general Emparan y forma una Junta Suprema.", scene: "🏛️🗣️📜" },
    { title: "¡Independencia!", narration: "El 5 de julio de 1811, el Congreso firma el Acta de la Declaración de Independencia.", scene: "✍️📜🇻🇪" },
    { title: "Años de guerra", narration: "Vienen años difíciles: repúblicas que caen y se recuperan, y mucho sufrimiento para la población.", scene: "⚔️🐎🔥" },
    { title: "Carabobo", narration: "El 24 de junio de 1821, la victoria en la Batalla de Carabobo decide la independencia en territorio venezolano.", scene: "🏇🎖️🌄" },
  ],
  analogies: {
    default: "La Independencia fue como un proceso de mudanza larga: primero decides que quieres irte (1810), luego lo anuncias formalmente (1811) y al final, tras muchos obstáculos, por fin te instalas (1821).",
    sports: "Es como un campeonato largo: hubo partidos perdidos (la caída de la Primera y Segunda República) antes de ganar la final en Carabobo.",
    videogames: "Es como un juego por niveles: el nivel 1 fue el 19 de abril, el nivel 2 la declaración del 5 de julio, y el jefe final fue la Batalla de Carabobo.",
    music: "Es como una canción con estrofas que suben de intensidad: comienza suave con la Junta de 1810, sube con la declaración de 1811 y llega al clímax en Carabobo.",
    technology: "Es como cambiar de sistema operativo: primero se instala una versión de prueba (la Junta que aún nombraba al rey) y luego el sistema nuevo y definitivo.",
  },
  glossary: [
    { term: "Cabildo", definition: "Ayuntamiento o gobierno de una ciudad en la época colonial." },
    { term: "Criollo", definition: "Persona nacida en América, de ascendencia europea, durante la colonia." },
    { term: "Realista", definition: "Partidario de mantener el dominio de la Corona española." },
    { term: "Patriota", definition: "Partidario de la independencia durante la guerra." },
    { term: "Acta de Independencia", definition: "Documento firmado el 5 de julio de 1811 que declaró a Venezuela libre de España." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Qué país gobernaba Venezuela antes de la Independencia?",
      options: ["Francia", "España", "Inglaterra"],
      correctIndex: 1,
      explanation: "Venezuela fue colonia de España. Su territorio formaba la Capitanía General de Venezuela.",
      concept: "causas",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Qué ocurrió el 19 de abril de 1810?",
      options: [
        "Se firmó el Acta de Independencia",
        "El Cabildo de Caracas desconoció al capitán general y formó una Junta Suprema",
        "Se libró la Batalla de Carabobo",
        "Se aprobó la Constitución de 1999",
      ],
      correctIndex: 1,
      explanation: "El 19 de abril de 1810 se formó la Junta Suprema de Caracas tras la salida de Vicente Emparan.",
      concept: "19 de abril de 1810",
    },
    {
      id: "q2",
      prompt: "¿En qué fecha se declaró la independencia de Venezuela?",
      options: ["24 de junio de 1821", "19 de abril de 1810", "5 de julio de 1811", "12 de octubre de 1492"],
      correctIndex: 2,
      explanation: "El Congreso firmó el Acta de la Declaración de Independencia el 5 de julio de 1811.",
      concept: "5 de julio de 1811",
    },
    {
      id: "q3",
      prompt: "¿Qué batalla, librada el 24 de junio de 1821, decidió la independencia en territorio venezolano?",
      options: ["Batalla de Boyacá", "Batalla de Carabobo", "Batalla de Ayacucho", "Batalla de La Victoria"],
      correctIndex: 1,
      explanation: "La Batalla de Carabobo fue la victoria decisiva en Venezuela. Boyacá (1819) fue en la actual Colombia y Ayacucho (1824) en Perú.",
      concept: "Batalla de Carabobo",
    },
    {
      id: "q4",
      prompt: "¿Qué hecho en Europa ayudó a desencadenar el proceso de 1810?",
      options: [
        "La invasión de España por Napoleón en 1808",
        "La caída del Imperio romano",
        "La Primera Guerra Mundial",
        "El descubrimiento de América",
      ],
      correctIndex: 0,
      explanation: "Con el rey Fernando VII prisionero de Napoleón, en América surgieron juntas que asumieron el gobierno.",
      concept: "Causas",
    },
    {
      id: "q5",
      prompt: "¿Cómo se llama el período iniciado con la declaración de 1811 y que cayó en 1812?",
      options: ["La Gran Colombia", "La Primera República", "La Segunda República", "La Colonia"],
      correctIndex: 1,
      explanation: "La Primera República duró de 1811 a 1812. La Segunda República fue de 1813 a 1814.",
      concept: "Primera República",
    },
  ],
  explainPrompt: "Explica con tus palabras, en orden, las tres fechas clave de la Independencia de Venezuela y qué pasó en cada una.",
  explainChecklist: ["19 de abril", "Junta", "5 de julio", "Acta", "Carabobo"],
  deeperResources: [
    { title: "Independencia de Venezuela (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Independencia_de_Venezuela", kind: "reference", source: "Wikipedia" },
    { title: "Batalla de Carabobo (1821)", url: "https://es.wikipedia.org/wiki/Batalla_de_Carabobo_(1821)", kind: "reference", source: "Wikipedia" },
    { title: "Videos sobre la Independencia de Venezuela", url: "https://www.youtube.com/results?search_query=independencia+de+Venezuela+1810+1821+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Independencia de Venezuela", url: "https://es.wikipedia.org/wiki/Independencia_de_Venezuela", kind: "reference", source: "Wikipedia" },
    { title: "Batalla de Carabobo (1821)", url: "https://es.wikipedia.org/wiki/Batalla_de_Carabobo_(1821)", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["ghc-colonial-venezuela", "ghc-world-revolutions", "ghc-gran-colombia"],
};
