import type { Lesson } from "../../../../domain/lesson";

export const linearEquations: Lesson = {
  id: "math-linear-equations",
  title: "Ecuaciones de primer grado",
  subjectId: "mathematics",
  emoji: "⚖️",
  year: 2,
  keywords: ["ecuaciones", "ecuación de primer grado", "despejar", "incógnita", "ecuaciones lineales", "resolver ecuaciones", "transposición de términos"],
  hook: "Si 3 empanadas y un jugo de 10 Bs cuestan 70 Bs, ¿cuánto cuesta cada empanada? Una ecuación es la herramienta para descubrir ese número escondido.",
  summary:
    "Una ecuación de primer grado es una igualdad con una incógnita (normalmente x) elevada a la potencia 1, como 2x + 5 = 17. Resolverla es encontrar el valor de x que hace verdadera la igualdad. Para lograrlo, se aplican las mismas operaciones a ambos lados, como en una balanza que debe quedar equilibrada, hasta dejar la x sola. En el ejemplo, x = 6, porque 2 · 6 + 5 = 17.",
  keyPoints: [
    {
      title: "La balanza",
      text: "Una ecuación es como una balanza en equilibrio: lo que hagas en un lado (sumar, restar, multiplicar o dividir) debes hacerlo también en el otro.",
    },
    {
      title: "Despejar la incógnita",
      text: "Para dejar la x sola, se 'deshacen' las operaciones con la operación contraria: si suma, se resta; si multiplica, se divide. Ejemplo: 2x + 5 = 17 → 2x = 12 → x = 6.",
      deeper: "A esto se le suele llamar 'transposición de términos': un término que pasa al otro lado cambia su operación (el +5 pasa como −5, el ×2 pasa como ÷2).",
    },
    {
      title: "Incógnitas en ambos lados",
      text: "Primero se agrupan los términos con x en un lado y los números en el otro. Ejemplo: 5x + 3 = 2x + 12 → 5x − 2x = 12 − 3 → 3x = 9 → x = 3.",
    },
    {
      title: "Comprobar la solución",
      text: "Siempre puedes verificar sustituyendo el valor en la ecuación original: si x = 3, entonces 5 · 3 + 3 = 18 y 2 · 3 + 12 = 18. ¡Coinciden!",
    },
    {
      title: "Plantear problemas",
      text: "Para resolver un problema, llama x a lo que no conoces, escribe la ecuación con los datos y resuélvela. Ejemplo: 3x + 10 = 70 → x = 20 Bs por empanada.",
      deeper: "Algunas ecuaciones no tienen solución (por ejemplo x + 1 = x + 2) y otras se cumplen para cualquier valor (como 2x + 2 = 2(x + 1)).",
    },
  ],
  diagram: {
    id: "root",
    label: "Ecuación ax + b = c",
    detail: "Igualdad con una incógnita",
    children: [
      {
        id: "partes",
        label: "Partes",
        detail: "Qué tiene una ecuación",
        children: [
          { id: "incognita", label: "Incógnita (x)", detail: "El valor que buscamos" },
          { id: "miembros", label: "Miembros", detail: "Lado izquierdo y lado derecho del =" },
        ],
      },
      {
        id: "pasos",
        label: "Pasos para resolver",
        detail: "Mantener la balanza en equilibrio",
        children: [
          { id: "agrupar", label: "Agrupar", detail: "x de un lado, números del otro" },
          { id: "despejar", label: "Despejar", detail: "Operación contraria" },
          { id: "comprobar", label: "Comprobar", detail: "Sustituir en la original" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "La balanza", narration: "Imagina una balanza: a la izquierda hay 2 cajas misteriosas y 5 pesas; a la derecha, 17 pesas. Está equilibrada: 2x + 5 = 17.", scene: "⚖️📦📦" },
    { title: "Quitar lo mismo", narration: "Quitamos 5 pesas de cada lado. Sigue equilibrada: 2x = 12.", scene: "➖5️⃣⚖️" },
    { title: "Repartir", narration: "Si 2 cajas pesan 12, cada caja pesa 12 ÷ 2 = 6. Entonces x = 6.", scene: "📦➗2️⃣🟰6️⃣" },
    { title: "Comprobar", narration: "Volvemos al inicio: 2 · 6 + 5 = 17. ¡La balanza confirma la respuesta!", scene: "✅⚖️🎉" },
  ],
  analogies: {
    default: "Resolver una ecuación es como abrir una caja fuerte: deshaces cada paso en orden contrario hasta que la x queda libre.",
    sports: "Si un equipo tiene 2 victorias de x puntos más 5 puntos de bonificación y suma 17, la ecuación 2x + 5 = 17 te dice cuánto vale cada victoria.",
    videogames: "Si compraste 3 espadas iguales y una poción de 10 monedas y gastaste 70, la ecuación 3x + 10 = 70 te dice que cada espada costó 20 monedas.",
    cooking: "Si una receta pide el doble de harina que de azúcar más 1 taza extra y usas 5 tazas de harina, 2x + 1 = 5 te dice que necesitas 2 tazas de azúcar.",
    music: "Si una canción dura 4 estrofas iguales más un intro de 20 segundos y en total dura 180 segundos, 4x + 20 = 180 te dice que cada estrofa dura 40 segundos.",
    technology: "Si tu plan de datos cuesta una cuota fija más un monto por cada GB, una ecuación te dice cuántos GB puedes usar con tu presupuesto.",
  },
  glossary: [
    { term: "Ecuación", definition: "Igualdad matemática que contiene al menos una incógnita." },
    { term: "Incógnita", definition: "Valor desconocido que se busca, generalmente representado con una letra como x." },
    { term: "Miembro", definition: "Cada uno de los dos lados de una ecuación, separados por el signo =." },
    { term: "Despejar", definition: "Dejar la incógnita sola en un lado de la ecuación." },
    { term: "Solución", definition: "Valor de la incógnita que hace verdadera la igualdad." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Qué número sumado a 4 da 10?",
      options: ["14", "6", "40"],
      correctIndex: 1,
      explanation: "¡Bien! 4 + 6 = 10. Acabas de resolver la ecuación x + 4 = 10.",
      concept: "incógnita",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Resuelve: x + 7 = 15",
      options: ["x = 22", "x = 8", "x = 7", "x = 15"],
      correctIndex: 1,
      explanation: "Restamos 7 en ambos lados: x = 15 − 7 = 8.",
      concept: "Despejar",
    },
    {
      id: "q2",
      prompt: "Resuelve: 3x = 21",
      options: ["x = 7", "x = 18", "x = 24", "x = 63"],
      correctIndex: 0,
      explanation: "Dividimos ambos lados entre 3: x = 21 ÷ 3 = 7.",
      concept: "Despejar",
    },
    {
      id: "q3",
      prompt: "Resuelve: 2x − 4 = 10",
      options: ["x = 3", "x = 5", "x = 7", "x = 12"],
      correctIndex: 2,
      explanation: "Sumamos 4: 2x = 14. Dividimos entre 2: x = 7.",
      concept: "Despejar",
    },
    {
      id: "q4",
      prompt: "Resuelve: 5x + 3 = 2x + 12",
      options: ["x = 3", "x = 5", "x = 9", "x = 15/7"],
      correctIndex: 0,
      explanation: "Agrupamos: 5x − 2x = 12 − 3 → 3x = 9 → x = 3. Comprobación: 18 = 18.",
      concept: "Incógnitas en ambos lados",
    },
    {
      id: "q5",
      prompt: "3 cuadernos iguales y un lápiz de 10 Bs cuestan 70 Bs. ¿Cuánto cuesta cada cuaderno?",
      options: ["Bs 30", "Bs 20", "Bs 60", "Bs 23"],
      correctIndex: 1,
      explanation: "3x + 10 = 70 → 3x = 60 → x = 20 Bs.",
      concept: "Plantear problemas",
    },
  ],
  explainPrompt: "Explica con tus palabras cómo resolverías 4x − 6 = 18 y cómo comprobarías que tu respuesta es correcta.",
  explainChecklist: ["incógnita", "misma operación en ambos lados", "despejar", "comprobar"],
  deeperResources: [
    { title: "Ecuación de primer grado (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Ecuaci%C3%B3n_de_primer_grado", kind: "reference", source: "Wikipedia" },
    { title: "Ejercicios de ecuaciones lineales", url: "https://es.khanacademy.org/search?page_search_query=ecuaciones+lineales", kind: "interactive", source: "Khan Academy" },
    { title: "Videos educativos sobre ecuaciones de primer grado", url: "https://www.youtube.com/results?search_query=ecuaciones+de+primer+grado+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Ecuación de primer grado", url: "https://es.wikipedia.org/wiki/Ecuaci%C3%B3n_de_primer_grado", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["math-integers", "math-systems-equations", "math-proportionality"],
};
