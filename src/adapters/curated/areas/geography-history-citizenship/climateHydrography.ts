import type { Lesson } from "../../../../domain/lesson";

export const climateHydrography: Lesson = {
  id: "ghc-climate-hydrography",
  title: "Clima e hidrografía de Venezuela",
  subjectId: "geography-history-citizenship",
  emoji: "🌦️",
  year: 2,
  keywords: ["clima", "hidrografía", "ríos", "Orinoco", "cuencas", "vertientes", "lluvia", "sequía", "pisos térmicos", "Lago de Valencia"],
  hook: "En Venezuela no hay invierno con nieve en las ciudades ni otoño con hojas cayendo. Aquí hablamos de \"época de lluvia\" y \"época de sequía\". ¿Por qué? ¿Y hacia dónde va toda esa agua de lluvia?",
  summary:
    "Venezuela está en la zona intertropical, cerca del ecuador, por eso recibe mucho sol todo el año y sus temperaturas varían poco entre meses. En lugar de cuatro estaciones tiene dos: la época de lluvia y la época de sequía. La temperatura depende sobre todo de la altura: hace más calor en las costas y llanuras y más frío en las montañas (pisos térmicos). La hidrografía estudia las aguas: los ríos venezolanos drenan hacia el mar Caribe, hacia el océano Atlántico (sobre todo por el Orinoco) o hacia el Lago de Valencia, una cuenca cerrada.",
  keyPoints: [
    {
      title: "Un país intertropical",
      text: "Por estar cerca del ecuador, los rayos del sol llegan casi verticales durante todo el año. Por eso la temperatura cambia poco de un mes a otro y no hay las cuatro estaciones de otros países.",
      deeper: "Los vientos alisios, que soplan desde el noreste, traen humedad del océano. Cuando chocan con las montañas, el aire sube, se enfría y produce lluvias.",
    },
    {
      title: "Lluvia y sequía",
      text: "En gran parte del país la época de lluvia va aproximadamente de mayo a octubre o noviembre, y la sequía de diciembre a abril. Las fechas exactas cambian según la región.",
      deeper: "Algunas zonas son muy lluviosas, como el sur de Guayana y la Amazonía, mientras otras son secas casi todo el año, como la península de Paraguaná o partes de Lara y Falcón.",
    },
    {
      title: "Los pisos térmicos",
      text: "A mayor altura, menor temperatura. Por eso en una misma región puedes pasar del calor del valle al frío del páramo en pocas horas de viaje.",
      deeper: "Los geógrafos suelen distinguir pisos como el cálido (tierras bajas), el templado, el frío y el páramo, en las zonas más altas de los Andes.",
    },
    {
      title: "Las vertientes y el Orinoco",
      text: "Una vertiente es el conjunto de ríos que desembocan en un mismo lugar. En Venezuela hay tres: la del mar Caribe, la del océano Atlántico y la del Lago de Valencia. El Orinoco, uno de los ríos más largos y caudalosos de América del Sur, recoge el agua de gran parte del país y desemboca en el Atlántico a través del Delta.",
      deeper: "Afluentes importantes del Orinoco son el Apure, que recoge aguas de los Llanos, y el Caroní, en Guayana, donde se aprovecha la fuerza del agua para producir electricidad en la represa de Guri. El Lago de Valencia es una cuenca endorreica: sus ríos no llegan al mar.",
    },
  ],
  diagram: {
    id: "root",
    label: "Clima e hidrografía",
    detail: "El tiempo atmosférico y las aguas de Venezuela",
    children: [
      {
        id: "clima",
        label: "Clima",
        detail: "Intertropical",
        children: [
          { id: "estaciones", label: "Lluvia y sequía", detail: "Dos épocas en lugar de cuatro estaciones" },
          { id: "pisos", label: "Pisos térmicos", detail: "Más altura, menos temperatura" },
        ],
      },
      {
        id: "hidrografia",
        label: "Hidrografía",
        detail: "Tres vertientes",
        children: [
          { id: "caribe", label: "Mar Caribe", detail: "Incluye la cuenca del Lago de Maracaibo" },
          { id: "atlantico", label: "Océano Atlántico", detail: "Orinoco y sus afluentes" },
          { id: "valencia", label: "Lago de Valencia", detail: "Cuenca cerrada (endorreica)" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "El sol casi vertical", narration: "Venezuela está cerca del ecuador: el sol calienta casi igual todo el año.", scene: "☀️🌎🇻🇪" },
    { title: "Llegan las nubes", narration: "Los vientos alisios traen humedad del mar. Al chocar con las montañas, se forman nubes y llueve.", scene: "🌬️⛰️🌧️" },
    { title: "Los ríos se llenan", narration: "En época de lluvia, ríos como el Apure crecen y llevan el agua hacia el Orinoco.", scene: "🌧️🏞️➡️" },
    { title: "Al océano", narration: "El Orinoco se divide en muchos caños en el Delta y desemboca en el océano Atlántico.", scene: "🌊🛶🌴" },
  ],
  analogies: {
    default: "Una vertiente es como un techo inclinado: toda el agua que cae en un lado termina en la misma canal.",
    sports: "El Orinoco es como el mediocampista que recibe pases de todo el equipo (sus afluentes) y los lleva al mismo arco: el océano Atlántico.",
    videogames: "Los pisos térmicos son como los niveles de altura en un mapa: mientras más subes la montaña, más frío es el entorno y cambian los enemigos y la vegetación.",
    nature: "Un río con sus afluentes es como un árbol al revés: muchas ramas pequeñas se unen en un tronco grande que llega al mar.",
    cooking: "Los pisos térmicos son como los estantes de una nevera: el de abajo es la tierra caliente y el congelador de arriba es el páramo.",
    technology: "Una cuenca hidrográfica es como una red de cables que llevan datos hacia un mismo servidor: todos los ríos llevan su agua al mismo destino.",
  },
  glossary: [
    { term: "Clima", definition: "Condiciones atmosféricas típicas de un lugar durante muchos años." },
    { term: "Zona intertropical", definition: "Franja de la Tierra entre los trópicos de Cáncer y Capricornio." },
    { term: "Vertiente", definition: "Conjunto de ríos y cuencas que desembocan en un mismo mar, océano o lago." },
    { term: "Afluente", definition: "Río que desemboca en otro río más grande." },
    { term: "Cuenca endorreica", definition: "Cuenca cuyas aguas no llegan al mar, como la del Lago de Valencia." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Cuántas épocas del año se distinguen en la mayor parte de Venezuela?",
      options: ["Cuatro estaciones", "Dos: lluvia y sequía", "Una sola"],
      correctIndex: 1,
      explanation: "Por estar en la zona intertropical, se distinguen la época de lluvia y la de sequía.",
      concept: "estaciones",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Por qué la temperatura en Venezuela cambia poco de un mes a otro?",
      options: [
        "Porque está cerca del polo norte",
        "Porque está en la zona intertropical, cerca del ecuador",
        "Porque no tiene montañas",
        "Porque siempre llueve",
      ],
      correctIndex: 1,
      explanation: "Cerca del ecuador el sol llega casi vertical todo el año, así que la temperatura varía poco.",
      concept: "Clima intertropical",
    },
    {
      id: "q2",
      prompt: "Subes desde un valle hasta un páramo andino. ¿Qué pasa con la temperatura?",
      options: ["Sube", "Baja", "No cambia", "Depende del día de la semana"],
      correctIndex: 1,
      explanation: "A mayor altura, menor temperatura: es el principio de los pisos térmicos.",
      concept: "Pisos térmicos",
    },
    {
      id: "q3",
      prompt: "¿Hacia dónde desemboca el río Orinoco?",
      options: ["Mar Caribe", "Lago de Valencia", "Océano Atlántico", "Océano Pacífico"],
      correctIndex: 2,
      explanation: "El Orinoco desemboca en el océano Atlántico a través del Delta del Orinoco.",
      concept: "Vertientes",
    },
    {
      id: "q4",
      prompt: "¿Qué tiene de especial la cuenca del Lago de Valencia?",
      options: [
        "Es la más grande del país",
        "Es una cuenca cerrada: sus aguas no llegan al mar",
        "Desemboca en el Orinoco",
        "Es de agua salada como el mar",
      ],
      correctIndex: 1,
      explanation: "El Lago de Valencia forma una cuenca endorreica: sus ríos terminan en el lago y no en el mar.",
      concept: "Vertientes",
    },
    {
      id: "q5",
      prompt: "¿En qué río de Guayana se encuentra la represa de Guri, que produce electricidad?",
      options: ["Apure", "Caroní", "Tuy", "Chama"],
      correctIndex: 1,
      explanation: "La represa de Guri está en el río Caroní, afluente del Orinoco.",
      concept: "Afluentes del Orinoco",
    },
  ],
  explainPrompt: "Explica con tus palabras por qué en Venezuela hay época de lluvia y de sequía en lugar de cuatro estaciones, y nombra las tres vertientes hidrográficas.",
  explainChecklist: ["ecuador", "lluvia", "sequía", "altura", "Orinoco"],
  deeperResources: [
    { title: "Río Orinoco", url: "https://es.wikipedia.org/wiki/R%C3%ADo_Orinoco", kind: "reference", source: "Wikipedia" },
    { title: "Lago de Valencia", url: "https://es.wikipedia.org/wiki/Lago_de_Valencia", kind: "reference", source: "Wikipedia" },
    { title: "Clima y tiempo (búsqueda)", url: "https://es.khanacademy.org/search?page_search_query=clima", kind: "interactive", source: "Khan Academy" },
    { title: "Videos sobre el clima y los ríos de Venezuela", url: "https://www.youtube.com/results?search_query=clima+e+hidrograf%C3%ADa+de+Venezuela", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Geografía de Venezuela", url: "https://es.wikipedia.org/wiki/Geograf%C3%ADa_de_Venezuela", kind: "reference", source: "Wikipedia" },
    { title: "Río Orinoco", url: "https://es.wikipedia.org/wiki/R%C3%ADo_Orinoco", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["ghc-relief-natural-regions", "ghc-environment-resources", "ghc-population-venezuela"],
};
