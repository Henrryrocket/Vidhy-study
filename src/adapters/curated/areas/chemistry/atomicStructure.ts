import type { Lesson } from "../../../../domain/lesson";

export const atomicStructure: Lesson = {
  id: "chem-atomic-structure",
  title: "El átomo y su estructura",
  subjectId: "chemistry",
  emoji: "⚛️",
  year: 3,
  keywords: ["átomo", "protones", "neutrones", "electrones", "número atómico", "número másico", "isótopos", "modelo atómico"],
  hook: "Todo lo que ves —el agua del Lago de Maracaibo, tu celular, tu propio cuerpo— está hecho de átomos tan pequeños que en un punto de lápiz caben miles de millones. ¿Qué hay dentro de ellos?",
  summary:
    "El átomo es la unidad más pequeña de un elemento químico que conserva sus propiedades. Tiene un núcleo muy pequeño en el centro, formado por protones (carga positiva) y neutrones (sin carga), y alrededor una nube de electrones (carga negativa). El número de protones se llama número atómico (Z) e identifica al elemento; la suma de protones y neutrones es el número másico (A). En un átomo neutro, el número de electrones es igual al de protones.",
  keyPoints: [
    {
      title: "Las partículas del átomo",
      text: "Protones (+) y neutrones (sin carga) forman el núcleo; los electrones (−) se mueven alrededor. Casi toda la masa está en el núcleo.",
      deeper: "Un protón tiene una masa unas 1836 veces mayor que la de un electrón; el neutrón tiene una masa muy parecida a la del protón.",
    },
    {
      title: "Número atómico (Z)",
      text: "Es el número de protones. Cada elemento tiene el suyo: el hidrógeno tiene Z = 1, el carbono Z = 6 y el oxígeno Z = 8.",
    },
    {
      title: "Número másico (A)",
      text: "Es la suma de protones y neutrones: A = Z + N. Por eso, neutrones = A − Z. El sodio (Z = 11, A = 23) tiene 23 − 11 = 12 neutrones.",
    },
    {
      title: "Iones",
      text: "Un átomo que gana electrones queda con carga negativa (anión) y uno que los pierde queda con carga positiva (catión). El Na⁺ tiene 11 protones y 10 electrones.",
    },
    {
      title: "Isótopos",
      text: "Son átomos del mismo elemento (igual Z) con distinto número de neutrones. El carbono-12 tiene 6 neutrones y el carbono-14 tiene 8.",
      deeper: "Los modelos atómicos evolucionaron: Dalton (esfera indivisible), Thomson (electrones en una masa positiva), Rutherford (núcleo pequeño y denso) y Bohr (electrones en niveles de energía).",
    },
  ],
  diagram: {
    id: "root",
    label: "Átomo",
    detail: "Unidad básica de los elementos",
    children: [
      {
        id: "nucleo",
        label: "Núcleo",
        detail: "Centro pequeño y denso",
        children: [
          { id: "protones", label: "Protones (+)", detail: "Definen el elemento (Z)" },
          { id: "neutrones", label: "Neutrones (0)", detail: "Varían en los isótopos" },
        ],
      },
      {
        id: "corteza",
        label: "Corteza",
        detail: "Nube de electrones",
        children: [{ id: "electrones", label: "Electrones (−)", detail: "Se ganan o pierden en los iones" }],
      },
      {
        id: "numeros",
        label: "Números clave",
        detail: "Cómo se describe",
        children: [
          { id: "z", label: "Z", detail: "Número de protones" },
          { id: "a", label: "A", detail: "Protones + neutrones" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Dividir y dividir", narration: "Si partes un trozo de cobre por la mitad una y otra vez, llegarías a la parte más pequeña que sigue siendo cobre: un átomo.", scene: "🔪🟫🔬" },
    { title: "El núcleo", narration: "En el centro está el núcleo con protones positivos y neutrones neutros. Es diminuto, pero tiene casi toda la masa.", scene: "🔴⚪🎯" },
    { title: "Los electrones", narration: "Alrededor se mueven los electrones, con carga negativa. Si el átomo fuera un estadio, el núcleo sería una canica en el centro.", scene: "🏟️🔵⚛️" },
    { title: "La identidad", narration: "El número de protones decide qué elemento es: 6 protones, carbono; 8 protones, oxígeno.", scene: "6️⃣🪨8️⃣💨" },
  ],
  analogies: {
    default: "El átomo es como un estadio: el núcleo es una canica en el centro de la cancha y los electrones se mueven por las gradas. ¡Casi todo es espacio vacío!",
    sports: "Los protones son como la camiseta de un equipo: el número de protones dice a qué 'equipo' (elemento) pertenece el átomo.",
    videogames: "Los elementos son como personajes con distintas 'estadísticas': el número atómico es su ID único y los neutrones son variantes (isótopos) del mismo personaje.",
    music: "Igual que todas las canciones se construyen con unas pocas notas, toda la materia se construye con unas pocas partículas: protones, neutrones y electrones.",
    cooking: "Así como con harina, huevos y azúcar se hacen muchas recetas, con protones, neutrones y electrones se forman todos los elementos.",
    art: "Un mosaico está hecho de piececitas diminutas; la materia está hecha de átomos.",
  },
  glossary: [
    { term: "Átomo", definition: "Unidad más pequeña de un elemento químico que conserva sus propiedades." },
    { term: "Protón", definition: "Partícula con carga positiva ubicada en el núcleo." },
    { term: "Neutrón", definition: "Partícula sin carga ubicada en el núcleo." },
    { term: "Electrón", definition: "Partícula con carga negativa que se mueve alrededor del núcleo." },
    { term: "Número atómico (Z)", definition: "Cantidad de protones de un átomo; identifica al elemento." },
    { term: "Isótopo", definition: "Átomo de un mismo elemento con diferente número de neutrones." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿De qué está hecha toda la materia?",
      options: ["De átomos", "Solo de agua", "De energía eléctrica"],
      correctIndex: 0,
      explanation: "¡Correcto! Toda la materia está formada por átomos.",
      concept: "átomo",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Qué partícula del átomo tiene carga negativa?",
      options: ["Protón", "Neutrón", "Electrón", "Núcleo"],
      correctIndex: 2,
      explanation: "El electrón tiene carga negativa; el protón es positivo y el neutrón no tiene carga.",
      concept: "Las partículas del átomo",
    },
    {
      id: "q2",
      prompt: "El oxígeno tiene Z = 8. ¿Cuántos electrones tiene un átomo neutro de oxígeno?",
      options: ["16", "8", "4", "0"],
      correctIndex: 1,
      explanation: "En un átomo neutro, electrones = protones = Z = 8.",
      concept: "Número atómico (Z)",
    },
    {
      id: "q3",
      prompt: "Un átomo de sodio tiene Z = 11 y A = 23. ¿Cuántos neutrones tiene?",
      options: ["11", "23", "34", "12"],
      correctIndex: 3,
      explanation: "Neutrones = A − Z = 23 − 11 = 12.",
      concept: "Número másico (A)",
    },
    {
      id: "q4",
      prompt: "Los isótopos de un mismo elemento se diferencian en el número de…",
      options: ["Protones", "Neutrones", "Electrones de un átomo neutro", "Núcleos"],
      correctIndex: 1,
      explanation: "Tienen el mismo número de protones (mismo elemento) pero distinto número de neutrones.",
      concept: "Isótopos",
    },
    {
      id: "q5",
      prompt: "El cloro (Z = 17) gana un electrón y forma el ion Cl⁻. ¿Cuántos electrones tiene ahora?",
      options: ["16", "17", "18", "35"],
      correctIndex: 2,
      explanation: "Un átomo neutro de cloro tiene 17 electrones; al ganar uno queda con 18 y carga −1.",
      concept: "Iones",
    },
  ],
  explainPrompt: "Explica con tus palabras cómo está formado un átomo y qué te dicen su número atómico y su número másico.",
  explainChecklist: ["núcleo", "protones", "neutrones", "electrones", "número atómico"],
  deeperResources: [
    { title: "Átomo (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/%C3%81tomo", kind: "reference", source: "Wikipedia" },
    { title: "Ejercicios sobre la estructura del átomo", url: "https://es.khanacademy.org/search?page_search_query=estructura+del+%C3%A1tomo", kind: "interactive", source: "Khan Academy" },
    { title: "Videos educativos sobre el átomo", url: "https://www.youtube.com/results?search_query=estructura+del+%C3%A1tomo+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Átomo", url: "https://es.wikipedia.org/wiki/%C3%81tomo", kind: "reference", source: "Wikipedia" },
    { title: "Número atómico", url: "https://es.wikipedia.org/wiki/N%C3%BAmero_at%C3%B3mico", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["chem-matter-properties", "chem-periodic-table", "chem-chemical-bonds"],
};
