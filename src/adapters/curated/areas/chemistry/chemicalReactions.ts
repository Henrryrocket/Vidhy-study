import type { Lesson } from "../../../../domain/lesson";

export const chemicalReactions: Lesson = {
  id: "chem-chemical-reactions",
  title: "Reacciones y ecuaciones químicas",
  subjectId: "chemistry",
  emoji: "🔥",
  year: 4,
  keywords: ["reacciones químicas", "ecuación química", "reactivos", "productos", "balancear ecuaciones", "conservación de la masa", "tipos de reacciones"],
  hook: "Cuando enciendes la cocina, cuando un clavo se oxida o cuando se hornea una torta, las sustancias se transforman en otras nuevas. Eso es una reacción química.",
  summary:
    "Una reacción química es un proceso en el que unas sustancias (reactivos) se transforman en otras diferentes (productos) porque sus átomos se reorganizan. Se representa con una ecuación química, como 2H₂ + O₂ → 2H₂O. Según la ley de conservación de la masa de Lavoisier, en una reacción los átomos no se crean ni se destruyen: la masa de los reactivos es igual a la de los productos. Por eso las ecuaciones deben estar balanceadas.",
  keyPoints: [
    {
      title: "Reactivos y productos",
      text: "Los reactivos se escriben a la izquierda de la flecha y los productos a la derecha. La flecha se lee 'produce' o 'se transforma en'.",
    },
    {
      title: "Señales de una reacción",
      text: "Cambio de color, desprendimiento de gas (burbujas), formación de un sólido (precipitado), o liberación o absorción de calor y luz.",
      deeper: "Un cambio de estado, como derretir hielo, es un cambio físico: el agua sigue siendo agua (H₂O).",
    },
    {
      title: "Conservación de la masa",
      text: "En 2H₂ + O₂ → 2H₂O, 4 g de hidrógeno reaccionan con 32 g de oxígeno y forman 36 g de agua: la masa total no cambia.",
    },
    {
      title: "Balancear ecuaciones",
      text: "Se colocan coeficientes delante de las fórmulas para que haya el mismo número de átomos de cada elemento a ambos lados. Ejemplo: N₂ + 3H₂ → 2NH₃.",
      deeper: "Nunca se cambian los subíndices de una fórmula, porque eso cambiaría la sustancia: H₂O es agua, pero H₂O₂ es agua oxigenada.",
    },
    {
      title: "Tipos de reacciones",
      text: "Síntesis (A + B → AB), descomposición (AB → A + B), sustitución simple, doble sustitución y combustión. Ejemplo de combustión: el metano del gas natural, CH₄ + 2O₂ → CO₂ + 2H₂O.",
      deeper: "Según la energía, las reacciones pueden ser exotérmicas (liberan calor, como la combustión) o endotérmicas (absorben calor).",
    },
  ],
  diagram: {
    id: "root",
    label: "Reacción química",
    detail: "Reactivos → productos",
    children: [
      {
        id: "ecuacion",
        label: "Ecuación química",
        detail: "Cómo se escribe",
        children: [
          { id: "reactivos", label: "Reactivos", detail: "Sustancias iniciales (izquierda)" },
          { id: "productos", label: "Productos", detail: "Sustancias nuevas (derecha)" },
          { id: "coef", label: "Coeficientes", detail: "Balancean los átomos" },
        ],
      },
      {
        id: "tipos",
        label: "Tipos",
        detail: "Cómo se reorganizan los átomos",
        children: [
          { id: "sintesis", label: "Síntesis", detail: "A + B → AB" },
          { id: "descomp", label: "Descomposición", detail: "AB → A + B" },
          { id: "combustion", label: "Combustión", detail: "Con oxígeno, libera energía" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Piezas que se reorganizan", narration: "Imagina que los átomos son piezas de construcción: en una reacción se desarman unas figuras y se arman otras nuevas.", scene: "🧱🔄🏠" },
    { title: "Hidrógeno y oxígeno", narration: "Dos moléculas de hidrógeno y una de oxígeno se combinan y forman dos moléculas de agua: 2H₂ + O₂ → 2H₂O.", scene: "💨➕💨➡️💧" },
    { title: "Contar átomos", narration: "Antes: 4 átomos de H y 2 de O. Después: 4 de H y 2 de O. ¡No se perdió ninguno!", scene: "🔢⚖️✅" },
    { title: "En la cocina", narration: "Al encender la hornilla, el gas reacciona con el oxígeno del aire y libera calor y luz: es una combustión.", scene: "🍳🔥💨" },
  ],
  analogies: {
    default: "Una reacción química es como armar algo nuevo con las mismas piezas de un juego de bloques: las piezas (átomos) son las mismas, pero la figura (sustancia) cambia.",
    cooking: "Hornear una torta es una reacción química: la harina, los huevos y el polvo de hornear se transforman en algo nuevo que no puedes volver a separar.",
    videogames: "Es como el sistema de crafteo: combinas materiales (reactivos) y obtienes un objeto nuevo (producto), sin que aparezcan materiales de la nada.",
    sports: "Tus músculos obtienen energía de reacciones químicas: la glucosa reacciona con el oxígeno y libera la energía que usas al correr.",
    nature: "La fotosíntesis de las plantas y la oxidación de una cerca de hierro son reacciones químicas que ocurren a nuestro alrededor.",
    technology: "La batería de tu celular funciona gracias a reacciones químicas que producen corriente eléctrica.",
  },
  glossary: [
    { term: "Reactivo", definition: "Sustancia inicial que se transforma en una reacción química." },
    { term: "Producto", definition: "Sustancia nueva que se forma en una reacción química." },
    { term: "Ecuación química", definition: "Representación escrita de una reacción con fórmulas, coeficientes y una flecha." },
    { term: "Coeficiente", definition: "Número delante de una fórmula que indica cuántas moléculas o unidades participan." },
    { term: "Combustión", definition: "Reacción de una sustancia con oxígeno que libera calor y, a menudo, luz." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Cuál de estos es un cambio químico?",
      options: ["Derretir hielo", "Quemar un papel", "Cortar una hoja"],
      correctIndex: 1,
      explanation: "¡Bien! Al quemar papel se forman sustancias nuevas (cenizas, gases); los otros son cambios físicos.",
      concept: "cambio químico",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "En la ecuación 2H₂ + O₂ → 2H₂O, ¿cuáles son los reactivos?",
      options: ["H₂O", "H₂ y O₂", "Solo O₂", "H₂ y H₂O"],
      correctIndex: 1,
      explanation: "Los reactivos están a la izquierda de la flecha: hidrógeno (H₂) y oxígeno (O₂).",
      concept: "Reactivos y productos",
    },
    {
      id: "q2",
      prompt: "¿Qué coeficiente balancea N₂ + __H₂ → 2NH₃?",
      options: ["1", "2", "3", "6"],
      correctIndex: 2,
      explanation: "A la derecha hay 2 × 3 = 6 átomos de H, así que se necesitan 3 moléculas de H₂ (3 × 2 = 6).",
      concept: "Balancear ecuaciones",
    },
    {
      id: "q3",
      prompt: "CaCO₃ → CaO + CO₂ es una reacción de…",
      options: ["Síntesis", "Descomposición", "Combustión", "Doble sustitución"],
      correctIndex: 1,
      explanation: "Un solo compuesto se separa en dos sustancias más simples: es una descomposición.",
      concept: "Tipos de reacciones",
    },
    {
      id: "q4",
      prompt: "Según la ley de conservación de la masa, en una reacción química…",
      options: [
        "La masa de los productos es mayor",
        "La masa de los reactivos es igual a la de los productos",
        "Los átomos desaparecen",
        "Se crean átomos nuevos",
      ],
      correctIndex: 1,
      explanation: "Los átomos solo se reorganizan, así que la masa total se conserva (Lavoisier).",
      concept: "Conservación de la masa",
    },
    {
      id: "q5",
      prompt: "¿Cuál de estas NO es una señal de reacción química?",
      options: ["Aparecen burbujas de gas", "Cambia el color", "El hielo se derrite", "Se forma un sólido (precipitado)"],
      correctIndex: 2,
      explanation: "Derretir hielo es un cambio de estado (físico): el agua sigue siendo H₂O.",
      concept: "Señales de una reacción",
    },
  ],
  explainPrompt: "Explica con tus palabras qué ocurre en una reacción química y por qué hay que balancear la ecuación 2H₂ + O₂ → 2H₂O.",
  explainChecklist: ["reactivos", "productos", "átomos", "conservación de la masa", "balancear"],
  deeperResources: [
    { title: "Reacción química (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Reacci%C3%B3n_qu%C3%ADmica", kind: "reference", source: "Wikipedia" },
    { title: "Ejercicios de balanceo de ecuaciones químicas", url: "https://es.khanacademy.org/search?page_search_query=balanceo+de+ecuaciones+qu%C3%ADmicas", kind: "interactive", source: "Khan Academy" },
    { title: "Videos educativos sobre reacciones químicas", url: "https://www.youtube.com/results?search_query=reacciones+qu%C3%ADmicas+y+balanceo+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Reacción química", url: "https://es.wikipedia.org/wiki/Reacci%C3%B3n_qu%C3%ADmica", kind: "reference", source: "Wikipedia" },
    { title: "Ley de conservación de la materia", url: "https://es.wikipedia.org/wiki/Ley_de_conservaci%C3%B3n_de_la_materia", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["chem-atomic-structure", "chem-chemical-bonds", "chem-stoichiometry", "chem-matter-properties"],
};
