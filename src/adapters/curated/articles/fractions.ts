import type { Lesson } from "../../../domain/lesson";

export const fractions: Lesson = {
  id: "fractions",
  title: "Fracciones",
  subjectId: "math",
  emoji: "🍕",
  minGrade: 4,
  keywords: ["numerador", "denominador", "fracciones equivalentes", "simplificar", "sumar fracciones", "quebrados", "partes de un entero"],
  hook: "Si una pizza tiene 8 porciones y te comes 3, ¿qué parte te comiste? Las fracciones son el idioma para hablar de partes.",
  summary:
    "Una fracción representa partes de un entero que se dividió en partes iguales. Se escribe con dos números: el denominador (abajo) dice en cuántas partes iguales se dividió el entero, y el numerador (arriba) dice cuántas partes tomamos. Por ejemplo, 3/8 significa 3 de 8 partes iguales.",
  keyPoints: [
    {
      title: "Numerador y denominador",
      text: "En 3/4, el 4 (denominador) indica que el entero se partió en 4 partes iguales y el 3 (numerador) indica que tomamos 3.",
    },
    {
      title: "Fracciones equivalentes",
      text: "Representan la misma cantidad: 1/2 = 2/4 = 4/8. Se obtienen multiplicando o dividiendo el numerador y el denominador por el mismo número.",
      deeper: "Dos fracciones a/b y c/d son equivalentes si a × d = b × c (productos cruzados).",
    },
    {
      title: "Simplificar",
      text: "Simplificar es dividir numerador y denominador por un mismo número hasta que no se pueda más: 6/8 → 3/4.",
      deeper: "Para hacerlo en un solo paso, divide ambos por su máximo común divisor (MCD).",
    },
    {
      title: "Sumar y restar",
      text: "Con el mismo denominador, se suman los numeradores: 1/5 + 2/5 = 3/5. Con distinto denominador, primero se buscan fracciones equivalentes con un denominador común.",
      deeper: "Ejemplo: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. El denominador común más práctico es el mínimo común múltiplo (mcm).",
    },
    {
      title: "Multiplicar y dividir",
      text: "Para multiplicar, se multiplican numeradores entre sí y denominadores entre sí: 2/3 × 1/4 = 2/12 = 1/6.",
      deeper: "Para dividir, se multiplica por la fracción inversa: 2/3 ÷ 1/4 = 2/3 × 4/1 = 8/3.",
    },
  ],
  diagram: {
    id: "root",
    label: "Fracción a/b",
    detail: "Partes de un entero",
    children: [
      {
        id: "partes",
        label: "Partes",
        detail: "Cómo se lee",
        children: [
          { id: "num", label: "Numerador (a)", detail: "Partes que tomo" },
          { id: "den", label: "Denominador (b)", detail: "Partes iguales del entero" },
        ],
      },
      {
        id: "ops",
        label: "Operaciones",
        detail: "Qué puedo hacer",
        children: [
          { id: "eq", label: "Equivalentes", detail: "×÷ arriba y abajo por igual" },
          { id: "suma", label: "Sumar/restar", detail: "Mismo denominador" },
          { id: "mult", label: "Multiplicar/dividir", detail: "En línea / por la inversa" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Un entero", narration: "Aquí tenemos una pizza entera. Eso es 1.", scene: "🍕" },
    { title: "Partes iguales", narration: "La cortamos en 4 partes iguales. El 4 será el denominador.", scene: "🍕🔪4️⃣" },
    { title: "Tomamos partes", narration: "Si te comes 3 porciones, te comiste tres cuartos: 3/4.", scene: "😋3️⃣➗4️⃣" },
    { title: "Lo mismo, distinto nombre", narration: "Si cortamos cada porción a la mitad, 3/4 se convierte en 6/8. ¡Es la misma cantidad de pizza!", scene: "3️⃣➗4️⃣🟰6️⃣➗8️⃣" },
  ],
  analogies: {
    default: "Una fracción es como una pizza: el denominador dice en cuántas porciones se cortó y el numerador cuántas te comiste.",
    sports: "Un partido de 90 minutos tiene dos tiempos: cada tiempo es 1/2 del partido. Si van 30 minutos, se jugó 1/3.",
    music: "En música, las figuras son fracciones: una blanca dura 1/2 de una redonda y una negra 1/4.",
    videogames: "Tu barra de vida tiene 10 bloques: si te quedan 7, tienes 7/10 de vida.",
    cooking: "Las recetas usan fracciones: 1/2 taza de leche, 3/4 de taza de harina.",
    technology: "Si tu celular tiene la batería al 50 %, le queda 1/2 de carga.",
  },
  glossary: [
    { term: "Numerador", definition: "Número de arriba: cuántas partes se toman." },
    { term: "Denominador", definition: "Número de abajo: en cuántas partes iguales se divide el entero." },
    { term: "Fracción equivalente", definition: "Fracción que representa la misma cantidad que otra." },
    { term: "mcm", definition: "Mínimo común múltiplo: el menor múltiplo que comparten dos números." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "Si parto una barra de chocolate en 2 partes iguales, cada parte es…",
      options: ["Un medio (1/2)", "Un tercio (1/3)", "Dos enteros"],
      correctIndex: 0,
      explanation: "¡Eso es! Cada parte es 1/2.",
      concept: "partes",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "En la fracción 5/7, ¿qué indica el 7?",
      options: ["Las partes que tomo", "En cuántas partes iguales se dividió el entero", "El resultado", "Nada"],
      correctIndex: 1,
      explanation: "El 7 es el denominador: el entero se dividió en 7 partes iguales.",
      concept: "Numerador y denominador",
    },
    {
      id: "q2",
      prompt: "¿Cuál fracción es equivalente a 2/3?",
      options: ["3/4", "4/6", "2/6", "3/2"],
      correctIndex: 1,
      explanation: "2/3 × 2/2 = 4/6.",
      concept: "Equivalentes",
    },
    {
      id: "q3",
      prompt: "Simplifica 8/12.",
      options: ["4/6", "2/3", "1/2", "3/4"],
      correctIndex: 1,
      explanation: "El MCD de 8 y 12 es 4: 8÷4 = 2 y 12÷4 = 3 → 2/3.",
      concept: "Simplificar",
    },
    {
      id: "q4",
      prompt: "¿Cuánto es 1/2 + 1/4?",
      options: ["2/6", "3/4", "1/6", "2/4"],
      correctIndex: 1,
      explanation: "1/2 = 2/4, entonces 2/4 + 1/4 = 3/4.",
      concept: "Sumar",
    },
    {
      id: "q5",
      prompt: "¿Cuánto es 2/5 × 3/4?",
      options: ["6/20 = 3/10", "5/9", "8/15", "6/9"],
      correctIndex: 0,
      explanation: "Numeradores 2×3 = 6, denominadores 5×4 = 20 → 6/20 = 3/10.",
      concept: "Multiplicar",
    },
  ],
  explainPrompt: "Explica con tus palabras qué significa 3/4 y cómo sabrías si 6/8 es la misma cantidad.",
  explainChecklist: ["partes iguales", "numerador", "denominador", "equivalente"],
  deeperResources: [
    { title: "Fracción (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Fracci%C3%B3n", kind: "reference", source: "Wikipedia" },
    { title: "Ejercicios de fracciones", url: "https://es.khanacademy.org/search?page_search_query=fracciones", kind: "interactive", source: "Khan Academy" },
    { title: "Videos educativos sobre fracciones", url: "https://www.youtube.com/results?search_query=fracciones+explicaci%C3%B3n+educativa", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [{ title: "Fracción", url: "https://es.wikipedia.org/wiki/Fracci%C3%B3n", kind: "reference", source: "Wikipedia" }],
  relatedTopicIds: [],
};
