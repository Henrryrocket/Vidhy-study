import type { Lesson } from "../../../../domain/lesson";

export const visualElements: Lesson = {
  id: "art-visual-elements",
  title: "Los elementos del lenguaje visual",
  subjectId: "art-heritage",
  emoji: "🎨",
  year: 1,
  keywords: ["punto", "línea", "forma", "color", "textura", "elementos del arte", "lenguaje visual"],
  hook: "Toda imagen, desde un dibujo animado hasta una obra de Cruz-Diez, está hecha con las mismas piezas básicas: puntos, líneas, formas, colores y texturas.",
  summary:
    "El lenguaje visual es la manera en que las imágenes comunican ideas y emociones. Sus elementos básicos son el punto (la unidad más pequeña), la línea (un punto en movimiento), la forma (el área que encierra una línea), el color (la luz que reflejan los objetos), la textura (cómo se ve o se siente una superficie) y el espacio o volumen. Los artistas combinan estos elementos para crear composiciones con equilibrio, ritmo y contraste.",
  keyPoints: [
    {
      title: "El punto y la línea",
      text: "El punto es el elemento más simple. Si lo «movemos», se convierte en línea. Las líneas pueden ser rectas, curvas, quebradas u onduladas, y transmiten sensaciones: las horizontales dan calma y las diagonales, movimiento.",
      deeper: "El puntillismo es una técnica que construye toda la imagen con pequeños puntos de color que el ojo mezcla a distancia.",
    },
    {
      title: "La forma",
      text: "Es el área delimitada por una línea o por un cambio de color. Hay formas geométricas (círculo, cuadrado, triángulo) y orgánicas (las de una hoja, una nube o un animal).",
    },
    {
      title: "El color",
      text: "En la teoría tradicional de los pigmentos, los colores primarios son rojo, amarillo y azul; al mezclarlos de dos en dos salen los secundarios: naranja, verde y violeta. Los cálidos (rojos, naranjas) parecen acercarse y los fríos (azules, verdes) alejarse.",
      deeper: "En la luz (pantallas) los primarios son otros: rojo, verde y azul (RGB). En la imprenta se usan cian, magenta y amarillo (CMY).",
    },
    {
      title: "La textura",
      text: "Es la cualidad de la superficie. Puede ser táctil (se siente al tocar: la corteza de un árbol, una cesta tejida) o visual (se ve, pero es plana: el dibujo de la madera en una foto).",
    },
    {
      title: "Espacio y volumen",
      text: "El espacio es el lugar donde se ubican los elementos. Con el sombreado, la perspectiva y la superposición, un dibujo plano puede dar sensación de profundidad y volumen.",
    },
  ],
  diagram: {
    id: "root",
    label: "Lenguaje visual",
    detail: "Las piezas de una imagen",
    children: [
      {
        id: "basicos",
        label: "Elementos básicos",
        detail: "De lo simple a lo complejo",
        children: [
          { id: "punto", label: "Punto", detail: "Unidad mínima" },
          { id: "linea", label: "Línea", detail: "Punto en movimiento" },
          { id: "forma", label: "Forma", detail: "Área delimitada" },
        ],
      },
      {
        id: "cualidades",
        label: "Cualidades",
        detail: "Lo que da carácter",
        children: [
          { id: "color", label: "Color", detail: "Primarios, secundarios, cálidos, fríos" },
          { id: "textura", label: "Textura", detail: "Táctil o visual" },
          { id: "espacio", label: "Espacio y volumen", detail: "Profundidad" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Un punto", narration: "Todo empieza con un punto sobre la hoja en blanco.", scene: "📄⚫" },
    { title: "La línea", narration: "Si arrastras el lápiz, el punto viaja y se convierte en una línea.", scene: "✏️➖〰️" },
    { title: "La forma", narration: "Cuando la línea se cierra sobre sí misma, nace una forma: un círculo, un triángulo, una hoja.", scene: "⭕🔺🍃" },
    { title: "Color y textura", narration: "Ahora le damos color y textura, y la forma se convierte en un objeto lleno de vida.", scene: "🎨🖌️🌈" },
  ],
  analogies: {
    default: "Los elementos visuales son como las letras del abecedario: con pocas piezas se pueden escribir infinitas imágenes.",
    videogames: "Un videojuego en pixel art está hecho de puntos (píxeles) que forman líneas, formas y personajes completos.",
    music: "Así como una canción combina notas, ritmo y volumen, una imagen combina punto, línea, forma y color.",
    nature: "Una guacamaya es una lección de arte: formas orgánicas, colores primarios intensos y la textura de sus plumas.",
    technology: "Cada pantalla mezcla luz roja, verde y azul en millones de puntos diminutos para formar cualquier color.",
    cooking: "Un buen plato también se diseña: el color de los ingredientes, la textura crujiente o suave y la forma en que se sirven.",
  },
  glossary: [
    { term: "Punto", definition: "Elemento visual más simple; marca mínima sobre una superficie." },
    { term: "Línea", definition: "Sucesión de puntos; el rastro de un punto en movimiento." },
    { term: "Colores primarios", definition: "Colores que no se obtienen mezclando otros; en pigmentos tradicionales: rojo, amarillo y azul." },
    { term: "Textura", definition: "Cualidad de una superficie, que puede ser táctil o visual." },
    { term: "Composición", definition: "Forma en que se organizan los elementos dentro de una obra." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Cuál es el elemento visual más simple?",
      options: ["El punto", "El color", "El volumen"],
      correctIndex: 0,
      explanation: "¡Bien! El punto es la unidad mínima del lenguaje visual.",
      concept: "Punto",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Qué se obtiene al mezclar amarillo y azul?",
      options: ["Naranja", "Verde", "Violeta", "Marrón"],
      correctIndex: 1,
      explanation: "Amarillo + azul = verde, uno de los tres colores secundarios.",
      concept: "Color",
    },
    {
      id: "q2",
      prompt: "¿Qué tipo de línea transmite más sensación de movimiento?",
      options: ["Horizontal", "Diagonal", "Ninguna", "Todas igual"],
      correctIndex: 1,
      explanation: "Las líneas diagonales sugieren inestabilidad y movimiento; las horizontales, calma.",
      concept: "Línea",
    },
    {
      id: "q3",
      prompt: "La forma de una hoja de árbol es…",
      options: ["Geométrica", "Orgánica", "Primaria", "Plana"],
      correctIndex: 1,
      explanation: "Las formas de la naturaleza, irregulares y curvas, se llaman orgánicas.",
      concept: "Forma",
    },
    {
      id: "q4",
      prompt: "Una foto de la corteza de un árbol impresa en papel liso tiene textura…",
      options: ["Táctil", "Visual", "Primaria", "Sonora"],
      correctIndex: 1,
      explanation: "Se ve rugosa, pero al tocarla el papel es liso: es una textura visual.",
      concept: "Textura",
    },
    {
      id: "q5",
      prompt: "¿Cuál grupo está formado solo por colores cálidos?",
      options: ["Azul, verde, violeta", "Rojo, naranja, amarillo", "Azul, rojo, verde", "Blanco, gris, negro"],
      correctIndex: 1,
      explanation: "Rojo, naranja y amarillo son cálidos: recuerdan el fuego y el sol.",
      concept: "Color",
    },
  ],
  explainPrompt: "Observa una imagen que te guste (un afiche, una portada de álbum o una pintura) y describe qué puntos, líneas, formas, colores y texturas usa y qué sensación te producen.",
  explainChecklist: ["línea", "forma", "color", "textura"],
  deeperResources: [
    { title: "Teoría del color", url: "https://es.wikipedia.org/wiki/Teor%C3%ADa_del_color", kind: "reference", source: "Wikipedia" },
    { title: "Lecciones de arte e historia del arte", url: "https://es.khanacademy.org/search?page_search_query=elementos+del+arte", kind: "interactive", source: "Khan Academy" },
    { title: "Videos sobre los elementos del lenguaje visual", url: "https://www.youtube.com/results?search_query=elementos+del+lenguaje+visual+punto+l%C3%ADnea+forma", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Artes visuales", url: "https://es.wikipedia.org/wiki/Artes_visuales", kind: "reference", source: "Wikipedia" },
    { title: "Teoría del color", url: "https://es.wikipedia.org/wiki/Teor%C3%ADa_del_color", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["art-color-theory", "art-drawing-techniques", "art-kinetic-art"],
};
