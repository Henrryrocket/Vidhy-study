import type { Lesson } from "../../../../domain/lesson";

export const partsOfSpeech: Lesson = {
  id: "spa-parts-of-speech",
  title: "Las categorías gramaticales",
  subjectId: "spanish-language",
  emoji: "🧩",
  year: 1,
  keywords: ["sustantivo", "adjetivo", "verbo", "clases de palabras", "artículo", "adverbio", "pronombre"],
  hook: "En la frase «El perro negro corre rápido» cada palabra tiene un trabajo distinto. Si descubres qué trabajo hace cada una, entenderás cómo funciona todo el idioma.",
  summary:
    "Las categorías gramaticales (o clases de palabras) agrupan las palabras según lo que expresan y cómo funcionan en la oración. Las principales son: el sustantivo (nombra seres, objetos o ideas), el adjetivo (dice cómo es el sustantivo), el artículo (acompaña al sustantivo), el pronombre (lo sustituye), el verbo (expresa acciones o estados), el adverbio (indica modo, lugar, tiempo o cantidad), la preposición y la conjunción (unen palabras) y la interjección (expresa emociones).",
  keyPoints: [
    {
      title: "El sustantivo",
      text: "Nombra personas, animales, cosas, lugares o ideas: Simón, araguaney, mesa, Mérida, alegría. Puede ser común (perro) o propio (Caracas), y tiene género y número.",
      deeper: "Los sustantivos propios se escriben con mayúscula inicial. Los abstractos nombran lo que no se percibe con los sentidos: amistad, libertad, miedo.",
    },
    {
      title: "El adjetivo y el artículo",
      text: "El adjetivo dice cómo es el sustantivo (casa grande, cielo azul) y concuerda con él en género y número. El artículo lo presenta: el, la, los, las (determinados) o un, una, unos, unas (indeterminados).",
    },
    {
      title: "El verbo",
      text: "Expresa acciones, estados o procesos: correr, ser, crecer. Se conjuga: cambia según la persona, el número y el tiempo (yo canto, ellos cantaron).",
      deeper: "Es el núcleo del predicado. Su forma sin conjugar se llama infinitivo y termina en -ar, -er o -ir.",
    },
    {
      title: "El pronombre",
      text: "Sustituye al sustantivo para no repetirlo: «María llegó. Ella trajo arepas». Los personales son yo, tú, él, ella, nosotros, ustedes, ellos.",
    },
    {
      title: "Palabras que modifican y enlazan",
      text: "El adverbio modifica al verbo, al adjetivo o a otro adverbio (corre rápido, muy alto, aquí, mañana). La preposición (a, con, de, en, para, por…) y la conjunción (y, o, pero, porque…) unen palabras u oraciones. La interjección expresa emociones: ¡ay!, ¡epa!",
      deeper: "Los adverbios no cambian de género ni de número: «ellas corren rápido», no «rápidas» cuando modifica al verbo.",
    },
  ],
  diagram: {
    id: "root",
    label: "Categorías gramaticales",
    detail: "Clases de palabras",
    children: [
      {
        id: "variables",
        label: "Variables",
        detail: "Cambian de forma",
        children: [
          { id: "sust", label: "Sustantivo", detail: "Nombra" },
          { id: "adj", label: "Adjetivo", detail: "Califica o determina" },
          { id: "art", label: "Artículo", detail: "Presenta al sustantivo" },
          { id: "pron", label: "Pronombre", detail: "Sustituye al sustantivo" },
          { id: "verb", label: "Verbo", detail: "Acción o estado" },
        ],
      },
      {
        id: "invariables",
        label: "Invariables",
        detail: "No cambian de forma",
        children: [
          { id: "adv", label: "Adverbio", detail: "Modo, lugar, tiempo, cantidad" },
          { id: "prep", label: "Preposición", detail: "Enlaza palabras" },
          { id: "conj", label: "Conjunción", detail: "Enlaza palabras u oraciones" },
          { id: "interj", label: "Interjección", detail: "Expresa emociones" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "La oración", narration: "Mira esta oración: «El perro negro corre rápido». Vamos a darle a cada palabra su etiqueta.", scene: "🐕⚫🏃💨" },
    { title: "Quién", narration: "«Perro» nombra a un animal: es un sustantivo. «El» lo presenta: es un artículo.", scene: "🏷️🐕" },
    { title: "Cómo es", narration: "«Negro» nos dice cómo es el perro: es un adjetivo.", scene: "🐕🎨⚫" },
    { title: "Qué hace y cómo", narration: "«Corre» es la acción: un verbo. «Rápido» dice cómo corre: un adverbio.", scene: "🏃💨⏱️" },
  ],
  analogies: {
    default: "Las categorías gramaticales son como los puestos de un equipo: cada palabra juega en una posición distinta, y juntas forman la oración.",
    sports: "En un equipo de béisbol, el sustantivo es el jugador, el verbo es la jugada (batear, correr) y el adverbio dice cómo fue la jugada (rápido, fuerte).",
    videogames: "Tu personaje es el sustantivo, sus atributos (fuerte, veloz) son adjetivos, y los comandos que ejecuta (saltar, atacar) son verbos.",
    music: "En una banda, el sustantivo es el instrumento, el verbo es lo que hace (sonar, vibrar) y el adverbio cómo suena (suave, fuerte).",
    cooking: "En una receta, los ingredientes son sustantivos (harina, queso), las acciones son verbos (amasar, freír) y «bien», «despacio» son adverbios.",
    animals: "«La guacamaya colorida vuela alto»: guacamaya (sustantivo), colorida (adjetivo), vuela (verbo), alto (adverbio).",
  },
  glossary: [
    { term: "Sustantivo", definition: "Palabra que nombra seres, objetos, lugares o ideas." },
    { term: "Adjetivo", definition: "Palabra que expresa cualidades del sustantivo o lo determina." },
    { term: "Verbo", definition: "Palabra que expresa acciones, estados o procesos y se conjuga." },
    { term: "Adverbio", definition: "Palabra invariable que modifica al verbo, al adjetivo o a otro adverbio." },
    { term: "Pronombre", definition: "Palabra que sustituye al sustantivo." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "En «Mi gato duerme», ¿qué palabra nombra a un animal?",
      options: ["Mi", "gato", "duerme"],
      correctIndex: 1,
      explanation: "¡Muy bien! «Gato» nombra a un animal: es un sustantivo.",
      concept: "Sustantivo",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "En «La montaña alta brilla», ¿qué categoría es «alta»?",
      options: ["Sustantivo", "Adjetivo", "Verbo", "Adverbio"],
      correctIndex: 1,
      explanation: "«Alta» dice cómo es la montaña y concuerda con ella en género y número: es un adjetivo.",
      concept: "Adjetivo",
    },
    {
      id: "q2",
      prompt: "¿Cuál de estas palabras es un verbo?",
      options: ["Felicidad", "Rápidamente", "Escribimos", "Hermoso"],
      correctIndex: 2,
      explanation: "«Escribimos» expresa una acción y está conjugado (nosotros, presente).",
      concept: "Verbo",
    },
    {
      id: "q3",
      prompt: "En «Pedro llegó tarde», ¿qué categoría es «tarde»?",
      options: ["Adverbio de tiempo", "Sustantivo", "Adjetivo", "Preposición"],
      correctIndex: 0,
      explanation: "«Tarde» indica cuándo llegó Pedro: modifica al verbo, así que es un adverbio de tiempo.",
      concept: "Adverbio",
    },
    {
      id: "q4",
      prompt: "En «Ana ganó. Ella estaba feliz», ¿qué hace «ella»?",
      options: ["Califica a Ana", "Sustituye a Ana", "Une dos oraciones", "Expresa una emoción"],
      correctIndex: 1,
      explanation: "«Ella» es un pronombre personal: sustituye a «Ana» para no repetirla.",
      concept: "Pronombre",
    },
    {
      id: "q5",
      prompt: "¿Cuál es un sustantivo propio?",
      options: ["río", "Orinoco", "grande", "nadar"],
      correctIndex: 1,
      explanation: "«Orinoco» es el nombre de un río en particular; por eso es propio y va con mayúscula.",
      concept: "Sustantivo",
    },
  ],
  explainPrompt: "Inventa una oración sobre tu lugar favorito y señala el sustantivo, el adjetivo, el verbo y el adverbio. Explica por qué cada uno pertenece a esa categoría.",
  explainChecklist: ["sustantivo", "adjetivo", "verbo", "adverbio"],
  deeperResources: [
    { title: "Diccionario de la lengua española", url: "https://dle.rae.es/", kind: "reference", source: "Real Academia Española" },
    { title: "Sustantivo (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Sustantivo", kind: "reference", source: "Wikipedia" },
    { title: "Videos sobre las categorías gramaticales", url: "https://www.youtube.com/results?search_query=categor%C3%ADas+gramaticales+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Sustantivo", url: "https://es.wikipedia.org/wiki/Sustantivo", kind: "reference", source: "Wikipedia" },
    { title: "Verbo", url: "https://es.wikipedia.org/wiki/Verbo", kind: "reference", source: "Wikipedia" },
    { title: "Real Academia Española", url: "https://www.rae.es/", kind: "reference", source: "RAE" },
  ],
  relatedTopicIds: ["spa-sentence", "spa-verb"],
};
