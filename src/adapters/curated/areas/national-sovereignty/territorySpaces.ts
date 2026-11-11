import type { Lesson } from "../../../../domain/lesson";

export const territorySpaces: Lesson = {
  id: "sov-territory-spaces",
  title: "El territorio venezolano y sus espacios",
  subjectId: "national-sovereignty",
  emoji: "🗺️",
  year: 4,
  keywords: ["territorio", "espacio geográfico", "espacio terrestre", "espacio acuático", "espacio marítimo", "espacio aéreo", "mar territorial", "zona económica exclusiva", "plataforma continental"],
  hook: "El territorio de un país no termina en la playa ni en la copa de los árboles. Venezuela también tiene mar, fondo marino y cielo. ¿Hasta dónde llegan esos espacios?",
  summary:
    "El territorio es el espacio geográfico sobre el cual un Estado ejerce su soberanía, es decir, su autoridad. Según la Constitución de 1999, el espacio geográfico venezolano incluye el espacio terrestre (continental e insular), el espacio acuático (ríos, lagos, aguas interiores y espacios marítimos) y el espacio aéreo que está encima de ellos, además del suelo y subsuelo. Los espacios marítimos se miden desde la costa en millas náuticas, siguiendo reglas del derecho internacional.",
  keyPoints: [
    {
      title: "Territorio y soberanía",
      text: "El territorio, la población y el gobierno son elementos del Estado. La soberanía es la capacidad del Estado de decidir y aplicar sus leyes dentro de su territorio sin depender de otros Estados.",
      deeper: "La Constitución de 1999 establece que el territorio de Venezuela es el que correspondía a la Capitanía General de Venezuela antes de la transformación política iniciada el 19 de abril de 1810, con las modificaciones resultantes de los tratados válidamente celebrados.",
    },
    {
      title: "Espacio terrestre",
      text: "Es la tierra firme: la parte continental y las islas. La superficie continental e insular de Venezuela es de unos 916.000 km². El país limita con Colombia al oeste, Brasil al sur y Guyana al este.",
      deeper: "Venezuela mantiene una reclamación sobre el territorio Esequibo, situado al oeste del río Esequibo; el tema se trata en instancias internacionales. Las dependencias federales son islas del Caribe bajo administración nacional, como Los Roques e Isla de Aves.",
    },
    {
      title: "Espacio acuático y marítimo",
      text: "Incluye ríos, lagos y aguas interiores, y los espacios marítimos: el mar territorial (hasta 12 millas náuticas desde la costa), la zona contigua (hasta 24), la zona económica exclusiva (hasta 200) y la plataforma continental (el fondo marino junto a la costa).",
      deeper: "En el mar territorial el Estado tiene soberanía plena. En la zona económica exclusiva tiene derechos para explorar y aprovechar los recursos (pesca, minerales, energía). Una milla náutica equivale a 1.852 metros.",
    },
    {
      title: "Espacio aéreo",
      text: "Es la columna de aire que está sobre el territorio terrestre y el mar territorial. Los aviones de otros países necesitan permisos y deben seguir reglas internacionales para usarlo.",
      deeper: "El espacio aéreo tiene un límite superior: el espacio ultraterrestre (donde orbitan los satélites) no pertenece a ningún país, según el derecho internacional.",
    },
  ],
  diagram: {
    id: "root",
    label: "Espacio geográfico venezolano",
    detail: "Donde el Estado ejerce su soberanía",
    children: [
      {
        id: "terrestre",
        label: "Terrestre",
        detail: "Tierra firme",
        children: [
          { id: "continental", label: "Continental", detail: "Territorio en el continente" },
          { id: "insular", label: "Insular", detail: "Islas y dependencias federales" },
        ],
      },
      {
        id: "acuatico",
        label: "Acuático",
        detail: "Aguas interiores y mar",
        children: [
          { id: "interiores", label: "Aguas interiores", detail: "Ríos y lagos" },
          { id: "mar-territorial", label: "Mar territorial", detail: "Hasta 12 millas náuticas" },
          { id: "zee", label: "Zona económica exclusiva", detail: "Hasta 200 millas náuticas" },
        ],
      },
      { id: "aereo", label: "Aéreo", detail: "Aire sobre la tierra y el mar territorial" },
    ],
  },
  miniClass: [
    { title: "La tierra firme", narration: "Empieza en tierra: montañas, llanos, selvas e islas forman el espacio terrestre de Venezuela.", scene: "🏔️🌴🏝️" },
    { title: "Hacia el mar", narration: "Desde la costa se cuentan 12 millas náuticas de mar territorial, donde el Estado tiene soberanía plena.", scene: "🏖️🌊📏" },
    { title: "Más lejos en el mar", narration: "Hasta 200 millas náuticas se extiende la zona económica exclusiva, donde el país aprovecha la pesca y otros recursos.", scene: "🚢🐟⛽" },
    { title: "Mira hacia arriba", narration: "Sobre la tierra y el mar territorial está el espacio aéreo. Los aviones extranjeros necesitan permiso para cruzarlo.", scene: "✈️☁️🛰️" },
  ],
  analogies: {
    default: "El territorio es como tu casa: incluye el terreno, el patio con su piscina (el espacio acuático) y el techo y el aire de arriba (el espacio aéreo). Dentro de ella aplican las reglas de la familia.",
    sports: "Es como una cancha: tiene el piso, las líneas que marcan hasta dónde llega y el espacio de arriba por donde vuela el balón. Fuera de las líneas aplican otras reglas.",
    videogames: "Es como las zonas de un mapa: tu base, el lago y el cielo tienen límites marcados, y cada zona tiene reglas diferentes para quién puede entrar.",
    nature: "Piensa en un árbol: sus raíces bajo la tierra (subsuelo), su tronco (tierra firme) y su copa (espacio aéreo). Todo es parte del mismo árbol.",
    technology: "Es como capas de una aplicación de mapas: una capa de tierra, otra de agua y otra de aire, superpuestas sobre el mismo lugar.",
  },
  glossary: [
    { term: "Soberanía", definition: "Autoridad de un Estado para decidir y aplicar sus leyes dentro de su territorio." },
    { term: "Milla náutica", definition: "Unidad de distancia usada en el mar; equivale a 1.852 metros." },
    { term: "Mar territorial", definition: "Franja de mar de hasta 12 millas náuticas desde la costa, con soberanía plena del Estado." },
    { term: "Zona económica exclusiva", definition: "Franja de hasta 200 millas náuticas donde el Estado tiene derechos sobre los recursos." },
    { term: "Plataforma continental", definition: "Fondo marino y subsuelo que continúan el territorio bajo el mar." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Crees que el territorio de un país incluye también el aire que está encima?",
      options: ["Sí", "No"],
      correctIndex: 0,
      explanation: "¡Correcto! El espacio aéreo forma parte del espacio geográfico del Estado.",
      concept: "aereo",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Qué es la soberanía?",
      options: [
        "El número de habitantes de un país",
        "La autoridad del Estado para decidir y aplicar sus leyes en su territorio",
        "Un tipo de relieve",
        "Un tratado comercial",
      ],
      correctIndex: 1,
      explanation: "La soberanía es la autoridad propia del Estado dentro de su territorio.",
      concept: "Territorio y soberanía",
    },
    {
      id: "q2",
      prompt: "¿Hasta cuántas millas náuticas desde la costa se extiende el mar territorial?",
      options: ["12", "24", "100", "200"],
      correctIndex: 0,
      explanation: "El mar territorial llega hasta 12 millas náuticas. 24 corresponde a la zona contigua y 200 a la zona económica exclusiva.",
      concept: "Espacio marítimo",
    },
    {
      id: "q3",
      prompt: "¿Con qué países limita Venezuela por tierra?",
      options: ["Colombia, Brasil y Guyana", "Perú, Chile y Brasil", "Colombia, Ecuador y Panamá", "Brasil, Bolivia y Guyana"],
      correctIndex: 0,
      explanation: "Venezuela limita con Colombia al oeste, Brasil al sur y Guyana al este.",
      concept: "Espacio terrestre",
    },
    {
      id: "q4",
      prompt: "Un barco pesquero está a 150 millas náuticas de la costa venezolana. ¿En qué espacio se encuentra?",
      options: ["Mar territorial", "Aguas interiores", "Zona económica exclusiva", "Espacio aéreo"],
      correctIndex: 2,
      explanation: "Entre las 12 y las 200 millas náuticas se encuentra la zona económica exclusiva (las primeras 24 incluyen la zona contigua).",
      concept: "Espacio marítimo",
    },
    {
      id: "q5",
      prompt: "¿Qué parte del espacio geográfico incluye ríos y lagos como el Lago de Maracaibo?",
      options: ["Espacio aéreo", "Espacio acuático (aguas interiores)", "Espacio ultraterrestre", "Plataforma continental"],
      correctIndex: 1,
      explanation: "Los ríos y lagos son aguas interiores y forman parte del espacio acuático.",
      concept: "Espacio acuático",
    },
  ],
  explainPrompt: "Explica con tus palabras cuáles son los espacios que forman el territorio venezolano y da un ejemplo de cada uno.",
  explainChecklist: ["soberanía", "terrestre", "acuático", "aéreo", "millas"],
  deeperResources: [
    { title: "Geografía de Venezuela", url: "https://es.wikipedia.org/wiki/Geograf%C3%ADa_de_Venezuela", kind: "reference", source: "Wikipedia" },
    { title: "Mar territorial", url: "https://es.wikipedia.org/wiki/Mar_territorial", kind: "reference", source: "Wikipedia" },
    { title: "Zona económica exclusiva", url: "https://es.wikipedia.org/wiki/Zona_econ%C3%B3mica_exclusiva", kind: "reference", source: "Wikipedia" },
    { title: "Videos sobre los espacios del territorio venezolano", url: "https://www.youtube.com/results?search_query=espacio+geogr%C3%A1fico+venezolano+terrestre+acu%C3%A1tico+a%C3%A9reo", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Constitución de Venezuela de 1999", url: "https://es.wikipedia.org/wiki/Constituci%C3%B3n_de_Venezuela_de_1999", kind: "reference", source: "Wikipedia" },
    { title: "Convención de las Naciones Unidas sobre el Derecho del Mar", url: "https://es.wikipedia.org/wiki/Convenci%C3%B3n_de_las_Naciones_Unidas_sobre_el_Derecho_del_Mar", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["sov-borders", "sov-constitution-principles", "sov-natural-resources"],
};
