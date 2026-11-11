import type { Lesson } from "../../../../domain/lesson";

export const culturalHeritage: Lesson = {
  id: "art-cultural-heritage",
  title: "El patrimonio cultural y natural de Venezuela",
  subjectId: "art-heritage",
  emoji: "🏛️",
  year: 2,
  keywords: ["patrimonio", "patrimonio de la humanidad", "UNESCO", "Canaima", "Coro", "Ciudad Universitaria", "patrimonio inmaterial"],
  hook: "El Salto Ángel, las casas de bahareque de Coro y los Diablos Danzantes tienen algo en común: son tesoros que el mundo entero se comprometió a proteger.",
  summary:
    "El patrimonio es la herencia que recibimos de generaciones anteriores y que debemos cuidar para las que vienen. Puede ser natural (paisajes, ríos, montañas, especies) o cultural; y el cultural puede ser material o tangible (edificios, obras de arte, objetos) o inmaterial (fiestas, música, saberes y tradiciones). La UNESCO reconoce como Patrimonio de la Humanidad tres sitios venezolanos: Coro y su puerto (1993), el Parque Nacional Canaima (1994) y la Ciudad Universitaria de Caracas (2000).",
  keyPoints: [
    {
      title: "¿Qué es el patrimonio?",
      text: "Es todo aquello que heredamos y que tiene valor para una comunidad, un país o la humanidad: lo que nos da identidad y nos cuenta de dónde venimos.",
    },
    {
      title: "Patrimonio natural",
      text: "Paisajes y ecosistemas de valor excepcional. El Parque Nacional Canaima, en el estado Bolívar, tiene tepuyes (montañas de cima plana con rocas muy antiguas) y el Salto Ángel, la caída de agua ininterrumpida más alta del mundo, con unos 979 metros.",
    },
    {
      title: "Patrimonio cultural material",
      text: "Bienes que se pueden tocar. Coro y su puerto de La Vela conservan arquitectura colonial de tierra (bahareque y adobe). La Ciudad Universitaria de Caracas, diseñada por el arquitecto Carlos Raúl Villanueva, integra arquitectura y obras de arte, como las «Nubes» de Alexander Calder en el Aula Magna.",
      deeper: "Villanueva llamó a ese proyecto «síntesis de las artes»: murales, esculturas y vitrales de artistas venezolanos y extranjeros forman parte de los propios edificios.",
    },
    {
      title: "Patrimonio cultural inmaterial",
      text: "Tradiciones vivas que se transmiten de persona a persona. La UNESCO ha reconocido, entre otras, a los Diablos Danzantes de Corpus Christi (2012), la Parranda de San Pedro de Guarenas y Guatire (2013) y el Carnaval de El Callao (2016).",
    },
    {
      title: "¿Cómo se protege?",
      text: "Conociéndolo, visitándolo con respeto, no rayando ni dañando monumentos, no dejando basura en los parques y manteniendo vivas las tradiciones de tu comunidad.",
      deeper: "La Convención del Patrimonio Mundial de la UNESCO, de 1972, compromete a los países a identificar, proteger y conservar los sitios inscritos en su lista.",
    },
  ],
  diagram: {
    id: "root",
    label: "Patrimonio",
    detail: "Herencia que cuidamos",
    children: [
      {
        id: "natural",
        label: "Natural",
        detail: "Paisajes y ecosistemas",
        children: [{ id: "canaima", label: "Parque Nacional Canaima", detail: "Tepuyes y Salto Ángel" }],
      },
      {
        id: "cultural",
        label: "Cultural",
        detail: "Creado por las personas",
        children: [
          { id: "material", label: "Material", detail: "Coro y su puerto · Ciudad Universitaria" },
          { id: "inmaterial", label: "Inmaterial", detail: "Diablos Danzantes · Parranda de San Pedro" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Una herencia", narration: "Así como heredas el apellido de tu familia, un país hereda lugares, obras y tradiciones. Eso es el patrimonio.", scene: "👵🎁🧒" },
    { title: "La naturaleza", narration: "En Canaima, el agua cae casi un kilómetro desde lo alto del Auyantepuy: es el Salto Ángel.", scene: "⛰️💧🌳" },
    { title: "Lo construido", narration: "En Coro, las casas coloniales de tierra y madera nos muestran cómo se construía hace siglos.", scene: "🏘️🏜️☀️" },
    { title: "Lo que se vive", narration: "Con máscaras, música y baile, los Diablos Danzantes mantienen viva una tradición: patrimonio que no se toca, se practica.", scene: "👹🥁💃" },
  ],
  analogies: {
    default: "El patrimonio es como un álbum familiar: guarda la historia de quiénes somos y, si no lo cuidamos, se pierde para siempre.",
    sports: "Es como la camiseta histórica de un equipo: tiene valor porque representa a muchas generaciones de jugadores y aficionados.",
    videogames: "Es como un objeto legendario de tu inventario: es único, no se puede volver a fabricar y vale la pena protegerlo.",
    music: "Una canción tradicional como «Alma llanera» es patrimonio: nadie la «tiene», pero todos la heredamos y la seguimos cantando.",
    nature: "Los tepuyes son como libros de piedra: sus rocas están entre las más antiguas del planeta y guardan especies que no existen en otro lugar.",
    art: "La Ciudad Universitaria es como un museo al aire libre donde los edificios y las obras de arte se diseñaron para convivir.",
  },
  glossary: [
    { term: "Patrimonio", definition: "Conjunto de bienes y tradiciones heredados que tienen valor para una comunidad." },
    { term: "Patrimonio inmaterial", definition: "Tradiciones vivas: fiestas, música, danzas, saberes y técnicas." },
    { term: "Tepuy", definition: "Montaña de paredes verticales y cima plana, típica de la Guayana venezolana." },
    { term: "UNESCO", definition: "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura." },
    { term: "Bahareque", definition: "Técnica de construcción con una estructura de madera o caña rellena de barro." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Cuál de estos es un paisaje natural de Venezuela?",
      options: ["El Salto Ángel", "Un centro comercial", "Una autopista"],
      correctIndex: 0,
      explanation: "¡Exacto! El Salto Ángel es parte del patrimonio natural, dentro del Parque Nacional Canaima.",
      concept: "Patrimonio natural",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Qué tipo de patrimonio es una fiesta tradicional como la Parranda de San Pedro?",
      options: ["Natural", "Cultural material", "Cultural inmaterial", "No es patrimonio"],
      correctIndex: 2,
      explanation: "Es una tradición viva (música, baile, costumbres) que se transmite entre generaciones: patrimonio inmaterial.",
      concept: "Patrimonio inmaterial",
    },
    {
      id: "q2",
      prompt: "¿Qué sitio venezolano es Patrimonio de la Humanidad por su valor natural?",
      options: ["Coro y su puerto", "Parque Nacional Canaima", "Ciudad Universitaria de Caracas", "El Ávila"],
      correctIndex: 1,
      explanation: "Canaima fue inscrito en 1994 por sus tepuyes, cascadas y biodiversidad.",
      concept: "Patrimonio natural",
    },
    {
      id: "q3",
      prompt: "¿Quién diseñó la Ciudad Universitaria de Caracas?",
      options: ["Arturo Michelena", "Carlos Raúl Villanueva", "Jesús Soto", "Andrés Bello"],
      correctIndex: 1,
      explanation: "El arquitecto Carlos Raúl Villanueva la diseñó integrando arquitectura y obras de arte.",
      concept: "Patrimonio material",
    },
    {
      id: "q4",
      prompt: "¿Por qué Coro y su puerto es Patrimonio de la Humanidad?",
      options: [
        "Por sus tepuyes",
        "Por su arquitectura colonial de tierra",
        "Por sus rascacielos",
        "Por sus playas de arena blanca",
      ],
      correctIndex: 1,
      explanation: "Coro conserva construcciones coloniales de bahareque y adobe, un ejemplo excepcional de arquitectura de tierra.",
      concept: "Patrimonio material",
    },
    {
      id: "q5",
      prompt: "¿Cuál de estas acciones ayuda a proteger el patrimonio?",
      options: [
        "Rayar las paredes de un monumento",
        "Llevarse piedras de un parque nacional como recuerdo",
        "Aprender y practicar las tradiciones de tu comunidad",
        "Dejar basura en una plaza histórica",
      ],
      correctIndex: 2,
      explanation: "Mantener vivas las tradiciones protege el patrimonio inmaterial; las otras acciones lo dañan.",
      concept: "Protección",
    },
  ],
  explainPrompt: "Elige un lugar o una tradición de tu comunidad y explica por qué podría considerarse patrimonio, de qué tipo es y cómo lo cuidarías.",
  explainChecklist: ["herencia", "natural o cultural", "material o inmaterial", "proteger"],
  deeperResources: [
    { title: "Lista del Patrimonio Mundial", url: "https://whc.unesco.org/es/list/", kind: "reference", source: "UNESCO" },
    { title: "Ciudad Universitaria de Caracas", url: "https://es.wikipedia.org/wiki/Ciudad_Universitaria_de_Caracas", kind: "article", source: "Wikipedia" },
    { title: "Videos sobre el patrimonio de Venezuela", url: "https://www.youtube.com/results?search_query=patrimonio+de+la+humanidad+Venezuela", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Patrimonio de la Humanidad", url: "https://es.wikipedia.org/wiki/Patrimonio_de_la_Humanidad", kind: "reference", source: "Wikipedia" },
    { title: "Lista del Patrimonio Mundial", url: "https://whc.unesco.org/es/list/", kind: "reference", source: "UNESCO" },
  ],
  relatedTopicIds: ["art-traditional-festivities", "art-kinetic-art", "art-crafts"],
};
