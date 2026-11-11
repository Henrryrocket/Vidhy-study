import type { Lesson } from "../../../../domain/lesson";

export const reliefNaturalRegions: Lesson = {
  id: "ghc-relief-natural-regions",
  title: "El relieve y las regiones naturales de Venezuela",
  subjectId: "geography-history-citizenship",
  emoji: "⛰️",
  year: 1,
  keywords: ["relieve", "regiones naturales", "Andes", "Llanos", "Guayana", "Pico Bolívar", "tepuyes", "montañas", "geografía de Venezuela"],
  hook: "En un mismo país puedes ver nieve en el Pico Bolívar, sabanas inmensas en los Llanos, tepuyes de cima plana en Guayana y playas en Margarita. ¿Cómo cabe tanta variedad en Venezuela? La respuesta está en su relieve.",
  summary:
    "El relieve es el conjunto de formas que tiene la superficie terrestre: montañas, llanuras, mesetas, valles y depresiones. Venezuela tiene un relieve muy variado, y por eso los geógrafos la dividen en regiones naturales con características parecidas de forma, clima y vegetación: la región andina, el sistema montañoso de la Costa, el sistema coriano (Lara-Falcón), la depresión del Lago de Maracaibo, los Llanos, Guayana, el Delta del Orinoco y la región insular. Conocerlas ayuda a entender dónde vive la gente, qué se cultiva y qué riesgos naturales existen.",
  keyPoints: [
    {
      title: "¿Qué es el relieve?",
      text: "Son las formas de la superficie terrestre. Las principales son montañas (elevaciones altas), llanuras (terrenos planos y bajos), mesetas (terrenos planos y elevados), valles y depresiones (zonas hundidas).",
      deeper: "El relieve se forma por fuerzas internas de la Tierra (movimiento de placas, que levanta montañas) y se modela por fuerzas externas como el agua, el viento y los cambios de temperatura (erosión).",
    },
    {
      title: "Las montañas: Andes, Costa y sistema coriano",
      text: "La Cordillera de los Andes, al occidente, tiene las mayores alturas del país; allí está el Pico Bolívar, el más alto de Venezuela (cerca de 4.978 m). La Cordillera de la Costa recorre el norte, donde están ciudades como Caracas. El sistema coriano (Lara-Falcón) une ambas zonas con montañas más bajas y clima seco.",
      deeper: "En los Andes el clima cambia con la altura: abajo hace calor y arriba está el páramo, un ecosistema frío con frailejones. Esta variación se conoce como pisos térmicos.",
    },
    {
      title: "Las tierras bajas: Llanos, Lago de Maracaibo y Delta",
      text: "Los Llanos son una gran llanura en el centro del país, con sabanas, ríos y temporadas de lluvia y sequía bien marcadas. La depresión del Lago de Maracaibo es una zona baja y cálida que rodea uno de los lagos más grandes de América del Sur. El Delta del Orinoco es una red de caños y bosques inundables donde el río llega al mar.",
      deeper: "En los Llanos se practica la ganadería y la agricultura. En el Delta vive el pueblo warao, adaptado a la vida en el agua, con viviendas sobre pilotes llamadas palafitos.",
    },
    {
      title: "Guayana: la región más antigua y extensa",
      text: "Al sur del río Orinoco está Guayana, la región natural más grande del país. Allí están los tepuyes, mesetas altas de paredes verticales, y el Salto Ángel, la cascada más alta del mundo (cerca de 979 m).",
      deeper: "Las rocas del Macizo Guayanés están entre las más antiguas de la Tierra. Los tepuyes se formaron porque la erosión desgastó durante millones de años la roca que los rodeaba.",
    },
    {
      title: "La región insular",
      text: "Venezuela tiene numerosas islas en el mar Caribe. La más poblada es Margarita, en el estado Nueva Esparta; también están Coche, Cubagua y el archipiélago de Los Roques, entre otras.",
      deeper: "Las islas tienen clima cálido y generalmente seco. Su relieve es bajo, aunque Margarita tiene algunos cerros. Los arrecifes de coral de Los Roques forman parte de un parque nacional.",
    },
  ],
  diagram: {
    id: "root",
    label: "Regiones naturales de Venezuela",
    detail: "Zonas con relieve, clima y vegetación parecidos",
    children: [
      {
        id: "montanosas",
        label: "Montañosas",
        detail: "Relieve alto",
        children: [
          { id: "andes", label: "Los Andes", detail: "Pico Bolívar, páramos y pisos térmicos" },
          { id: "costa", label: "Sistema de la Costa", detail: "Montañas del norte, cerca del mar" },
          { id: "coriano", label: "Sistema coriano", detail: "Lara y Falcón, clima seco" },
        ],
      },
      {
        id: "bajas",
        label: "Tierras bajas",
        detail: "Llanuras y depresiones",
        children: [
          { id: "llanos", label: "Los Llanos", detail: "Sabanas y ríos en el centro del país" },
          { id: "maracaibo", label: "Depresión del Lago de Maracaibo", detail: "Zona baja y cálida" },
          { id: "delta", label: "Delta del Orinoco", detail: "Caños y bosques inundables" },
        ],
      },
      {
        id: "otras",
        label: "Otras regiones",
        detail: "Mesetas antiguas e islas",
        children: [
          { id: "guayana", label: "Guayana", detail: "Tepuyes y Salto Ángel" },
          { id: "insular", label: "Insular", detail: "Margarita, Coche, Cubagua, Los Roques" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Empieza en la montaña", narration: "Imagina que sales de Mérida, en los Andes. Hace frío arriba y ves el Pico Bolívar, el punto más alto del país.", scene: "🏔️❄️🧭" },
    { title: "Bajas a los Llanos", narration: "Viajas hacia el este y el terreno se vuelve plano: son los Llanos, con sabanas, ganado y ríos anchos.", scene: "🌾🐄🌅" },
    { title: "Cruzas el Orinoco", narration: "Al sur del Orinoco llegas a Guayana: tepuyes de cima plana y el Salto Ángel, la cascada más alta del mundo.", scene: "🛶🏞️💦" },
    { title: "Terminas en el mar", narration: "Desde el norte tomas un ferri hasta Margarita, en la región insular. ¡Recorriste varias regiones naturales!", scene: "⛴️🏝️☀️" },
  ],
  analogies: {
    default: "Las regiones naturales son como los barrios de una ciudad muy grande: cada barrio tiene su estilo, pero todos forman el mismo país.",
    sports: "Es como un estadio con zonas distintas: la tribuna alta (los Andes), la cancha plana (los Llanos) y las gradas del fondo (Guayana). Todo es parte del mismo estadio.",
    videogames: "Es como el mapa de un videojuego de mundo abierto: cada zona tiene su propio terreno, clima y desafíos, desde montañas nevadas hasta islas.",
    nature: "Piensa en un viaje de un río: nace en la montaña, atraviesa llanuras y termina en un delta junto al mar. Ese recorrido pasa por varias regiones naturales.",
    cooking: "Venezuela es como una arepa rellena de muchos ingredientes: cada región aporta un sabor distinto, pero todo está dentro de la misma arepa.",
    art: "El relieve es como una escultura: las fuerzas internas de la Tierra dan la forma grande y el agua y el viento la van puliendo con el tiempo.",
  },
  glossary: [
    { term: "Relieve", definition: "Conjunto de formas de la superficie terrestre: montañas, llanuras, mesetas, valles." },
    { term: "Región natural", definition: "Zona con características parecidas de relieve, clima, vegetación y suelos." },
    { term: "Tepuy", definition: "Meseta alta de paredes casi verticales y cima plana, típica de Guayana." },
    { term: "Páramo", definition: "Ecosistema frío de alta montaña, con plantas como el frailejón." },
    { term: "Erosión", definition: "Desgaste del relieve causado por el agua, el viento o los cambios de temperatura." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "Antes de empezar: ¿dónde crees que está el punto más alto de Venezuela?",
      options: ["En los Llanos", "En los Andes", "En Margarita"],
      correctIndex: 1,
      explanation: "¡Bien! El Pico Bolívar está en la Cordillera de los Andes, en el estado Mérida.",
      concept: "andes",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Cómo se llama la forma de relieve plana y baja, como la de los Llanos?",
      options: ["Montaña", "Llanura", "Meseta", "Cordillera"],
      correctIndex: 1,
      explanation: "Una llanura es un terreno plano y bajo. La meseta también es plana, pero elevada.",
      concept: "Formas de relieve",
    },
    {
      id: "q2",
      prompt: "¿En qué región natural se encuentran los tepuyes y el Salto Ángel?",
      options: ["Los Andes", "Los Llanos", "Guayana", "La región insular"],
      correctIndex: 2,
      explanation: "Los tepuyes y el Salto Ángel están en Guayana, al sur del río Orinoco.",
      concept: "Guayana",
    },
    {
      id: "q3",
      prompt: "En los Andes, al subir la montaña, el clima se vuelve más frío. ¿Cómo se llama esa variación?",
      options: ["Pisos térmicos", "Estaciones", "Erosión", "Sequía"],
      correctIndex: 0,
      explanation: "Los pisos térmicos son las franjas de clima que cambian con la altura: a mayor altura, menor temperatura.",
      concept: "Los Andes",
    },
    {
      id: "q4",
      prompt: "¿Qué región natural está formada por caños y bosques inundables donde el Orinoco llega al mar?",
      options: ["El sistema coriano", "El Delta del Orinoco", "La Cordillera de la Costa", "Los Llanos"],
      correctIndex: 1,
      explanation: "El Delta del Orinoco es una red de caños donde el río se divide antes de desembocar en el océano Atlántico.",
      concept: "Tierras bajas",
    },
    {
      id: "q5",
      prompt: "¿Cuál es la isla más poblada de Venezuela?",
      options: ["Cubagua", "Coche", "Margarita", "Los Roques"],
      correctIndex: 2,
      explanation: "Margarita, en el estado Nueva Esparta, es la isla más poblada del país.",
      concept: "Región insular",
    },
  ],
  explainPrompt: "Explica con tus palabras, como si se lo contaras a un amigo de otro país, cómo es el relieve de Venezuela y nombra al menos tres regiones naturales.",
  explainChecklist: ["relieve", "Andes", "Llanos", "Guayana", "región"],
  deeperResources: [
    { title: "Geografía de Venezuela (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Geograf%C3%ADa_de_Venezuela", kind: "reference", source: "Wikipedia" },
    { title: "Salto Ángel", url: "https://es.wikipedia.org/wiki/Salto_%C3%81ngel", kind: "reference", source: "Wikipedia" },
    { title: "Videos sobre las regiones naturales de Venezuela", url: "https://www.youtube.com/results?search_query=regiones+naturales+de+Venezuela", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Geografía de Venezuela", url: "https://es.wikipedia.org/wiki/Geograf%C3%ADa_de_Venezuela", kind: "reference", source: "Wikipedia" },
    { title: "Pico Bolívar", url: "https://es.wikipedia.org/wiki/Pico_Bol%C3%ADvar", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["ghc-maps-cartography", "ghc-climate-hydrography", "ghc-environment-resources"],
};
