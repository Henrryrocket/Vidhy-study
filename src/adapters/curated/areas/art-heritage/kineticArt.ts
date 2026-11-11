import type { Lesson } from "../../../../domain/lesson";

export const kineticArt: Lesson = {
  id: "art-kinetic-art",
  title: "El arte cinético venezolano",
  subjectId: "art-heritage",
  emoji: "🌀",
  year: 2,
  keywords: ["arte cinético", "Jesús Soto", "Carlos Cruz-Diez", "op art", "arte óptico", "penetrables"],
  hook: "Si alguna vez caminaste por el piso de colores del aeropuerto de Maiquetía, ya estuviste dentro de una obra de arte cinético venezolano.",
  summary:
    "El arte cinético es un movimiento artístico del siglo XX en el que las obras se mueven de verdad o parecen moverse cuando el espectador cambia de posición. Venezuela es uno de los países más importantes de este movimiento gracias a artistas como Jesús Soto (Ciudad Bolívar, 1923-2005) y Carlos Cruz-Diez (Caracas, 1923-2019). Sus obras usan líneas, repeticiones, color y luz para crear vibraciones visuales e invitan al público a participar.",
  keyPoints: [
    {
      title: "¿Qué es el arte cinético?",
      text: "«Cinético» viene del griego y se relaciona con el movimiento. En estas obras el movimiento puede ser real (piezas que se mueven con el aire o con motores) o virtual (ilusiones ópticas que aparecen cuando el espectador camina).",
      deeper: "Se relaciona con el op art (arte óptico), que juega con la manera en que el ojo y el cerebro perciben líneas y colores.",
    },
    {
      title: "Jesús Soto",
      text: "Nacido en Ciudad Bolívar, creó obras con varillas y líneas que parecen vibrar. Sus «Penetrables» son instalaciones de hilos colgantes por donde el público puede caminar y sentir la obra con todo el cuerpo.",
    },
    {
      title: "Carlos Cruz-Diez",
      text: "Nacido en Caracas, investigó el color como un acontecimiento que cambia con la luz y el movimiento. Sus «Fisicromías» cambian de color según desde dónde las mires, y su obra en el piso del aeropuerto de Maiquetía es una de las imágenes más conocidas del país.",
      deeper: "Esa obra se llama «Cromointerferencia de color aditivo». Cruz-Diez trabajó buena parte de su vida en París, donde murió en 2019.",
    },
    {
      title: "El espectador participa",
      text: "En el arte cinético la obra no está «completa» si nadie la mira: el movimiento de quien observa forma parte de la experiencia.",
    },
  ],
  diagram: {
    id: "root",
    label: "Arte cinético",
    detail: "Movimiento real o aparente",
    children: [
      {
        id: "movimiento",
        label: "Tipos de movimiento",
        detail: "¿Cómo se mueve?",
        children: [
          { id: "real", label: "Real", detail: "Piezas que se mueven" },
          { id: "virtual", label: "Virtual", detail: "Ilusión óptica" },
        ],
      },
      {
        id: "artistas",
        label: "Artistas venezolanos",
        detail: "Referentes mundiales",
        children: [
          { id: "soto", label: "Jesús Soto", detail: "Vibraciones y Penetrables" },
          { id: "cruzdiez", label: "Carlos Cruz-Diez", detail: "Color, Fisicromías, Maiquetía" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Líneas quietas", narration: "Imagina muchas líneas finas pintadas una junto a otra. Están quietas…", scene: "📏📏📏" },
    { title: "Te mueves tú", narration: "…pero cuando caminas frente a ellas, ¡parecen vibrar! Ese es el movimiento virtual.", scene: "🚶👀〰️" },
    { title: "Entrar en la obra", narration: "En un Penetrable de Soto, caminas entre miles de hilos: tú estás dentro de la obra.", scene: "🧵🚶✨" },
    { title: "Color que cambia", narration: "En una Fisicromía de Cruz-Diez, el color cambia según desde dónde la mires.", scene: "🌈👁️🔄" },
  ],
  analogies: {
    default: "Una obra cinética es como una de esas láminas que cambian de imagen al inclinarlas: el movimiento lo pones tú.",
    videogames: "Es como un mapa que se revela a medida que tu personaje avanza: lo que ves depende de dónde estás.",
    technology: "Funciona como un efecto de animación: imágenes fijas que, combinadas con el movimiento, engañan al ojo.",
    music: "Así como una canción no existe hasta que alguien la escucha, una obra cinética necesita al espectador para «sonar».",
    sports: "Es como ver un partido desde distintas tribunas: el mismo juego se ve diferente según tu lugar.",
    nature: "Como el reflejo del sol sobre el río, que cambia de brillo y color cuando caminas por la orilla.",
  },
  glossary: [
    { term: "Arte cinético", definition: "Arte que incorpora movimiento real o aparente." },
    { term: "Op art", definition: "Arte óptico: usa líneas y colores para crear ilusiones visuales." },
    { term: "Penetrable", definition: "Instalación de Jesús Soto hecha de hilos por la que el público puede caminar." },
    { term: "Fisicromía", definition: "Serie de obras de Carlos Cruz-Diez cuyo color cambia según la posición del espectador." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Con qué se relaciona la palabra «cinético»?",
      options: ["Con el movimiento", "Con el cine", "Con el silencio"],
      correctIndex: 0,
      explanation: "¡Exacto! Cinético se relaciona con el movimiento.",
      concept: "Definición",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Qué artista venezolano creó los «Penetrables»?",
      options: ["Carlos Cruz-Diez", "Jesús Soto", "Armando Reverón", "Arturo Michelena"],
      correctIndex: 1,
      explanation: "Los Penetrables son obras de Jesús Soto, nacido en Ciudad Bolívar.",
      concept: "Jesús Soto",
    },
    {
      id: "q2",
      prompt: "¿Dónde está la famosa obra de piso de Carlos Cruz-Diez?",
      options: ["En el Salto Ángel", "En el aeropuerto de Maiquetía", "En la plaza de Coro", "En el Pico Bolívar"],
      correctIndex: 1,
      explanation: "La «Cromointerferencia de color aditivo» cubre el piso del aeropuerto internacional de Maiquetía.",
      concept: "Carlos Cruz-Diez",
    },
    {
      id: "q3",
      prompt: "¿Qué es el movimiento virtual en el arte cinético?",
      options: [
        "Piezas que giran con un motor",
        "Una ilusión de movimiento que aparece al cambiar de posición",
        "Un video proyectado",
        "Una obra que se rompe",
      ],
      correctIndex: 1,
      explanation: "La obra está quieta, pero parece moverse por cómo el ojo percibe líneas y colores cuando el espectador se desplaza.",
      concept: "Movimiento",
    },
    {
      id: "q4",
      prompt: "¿Qué papel tiene el espectador en el arte cinético?",
      options: ["Ninguno", "Solo debe mirar desde lejos", "Participa: su movimiento forma parte de la obra", "Debe pintar la obra"],
      correctIndex: 2,
      explanation: "En el arte cinético el movimiento del público completa la experiencia de la obra.",
      concept: "Participación",
    },
    {
      id: "q5",
      prompt: "¿Qué investigó principalmente Carlos Cruz-Diez?",
      options: ["El color y la luz", "La escultura en mármol", "El retrato realista", "La caricatura"],
      correctIndex: 0,
      explanation: "Cruz-Diez dedicó su obra a investigar el color como algo que cambia con la luz y el movimiento.",
      concept: "Carlos Cruz-Diez",
    },
  ],
  explainPrompt: "Explica con tus palabras qué hace que una obra sea «cinética» y por qué Soto y Cruz-Diez son importantes para Venezuela. Si tuvieras que diseñar una obra cinética, ¿cómo sería?",
  explainChecklist: ["movimiento", "espectador", "Soto", "Cruz-Diez"],
  deeperResources: [
    { title: "Arte cinético", url: "https://es.wikipedia.org/wiki/Arte_cin%C3%A9tico", kind: "reference", source: "Wikipedia" },
    { title: "Jesús Soto", url: "https://es.wikipedia.org/wiki/Jes%C3%BAs_Soto", kind: "article", source: "Wikipedia" },
    { title: "Videos sobre arte cinético venezolano", url: "https://www.youtube.com/results?search_query=arte+cin%C3%A9tico+venezolano+Soto+Cruz-Diez", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Arte cinético", url: "https://es.wikipedia.org/wiki/Arte_cin%C3%A9tico", kind: "reference", source: "Wikipedia" },
    { title: "Carlos Cruz-Diez", url: "https://es.wikipedia.org/wiki/Carlos_Cruz-Diez", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["art-visual-elements", "art-venezuelan-painters", "art-cultural-heritage"],
};
