import type { Lesson } from "../../../../domain/lesson";

export const integers: Lesson = {
  id: "math-integers",
  title: "Números enteros",
  subjectId: "mathematics",
  emoji: "🌡️",
  year: 2,
  keywords: ["números enteros", "números negativos", "recta numérica", "valor absoluto", "ley de los signos", "suma de enteros", "positivos y negativos"],
  hook: "En la cima del Pico Bolívar la temperatura puede bajar de 0 °C, y en un estacionamiento subterráneo el ascensor marca el sótano como −1. Para esas situaciones necesitamos números con signo: los enteros.",
  summary:
    "Los números enteros (ℤ) están formados por los números naturales positivos (1, 2, 3…), el cero y los negativos (−1, −2, −3…). Sirven para expresar cantidades por encima o por debajo de una referencia: temperaturas bajo cero, deudas, pisos bajo tierra o alturas bajo el nivel del mar. Se ordenan en la recta numérica, donde un número es mayor cuanto más a la derecha está, y se operan con reglas de signos.",
  keyPoints: [
    {
      title: "La recta numérica",
      text: "El cero está en el centro, los positivos a la derecha y los negativos a la izquierda. Cuanto más a la derecha, mayor es el número: −2 es mayor que −8.",
    },
    {
      title: "Valor absoluto y opuestos",
      text: "El valor absoluto es la distancia de un número al cero, sin importar el signo: |−9| = 9 y |9| = 9. Los números 9 y −9 son opuestos.",
    },
    {
      title: "Sumar y restar",
      text: "Con el mismo signo, se suman los valores absolutos y se deja el signo: (−3) + (−4) = −7. Con signos distintos, se restan y se deja el signo del de mayor valor absoluto: (−5) + 8 = 3.",
      deeper: "Restar es sumar el opuesto: (−4) − 6 = (−4) + (−6) = −10, y 3 − (−2) = 3 + 2 = 5.",
    },
    {
      title: "Ley de los signos",
      text: "Al multiplicar o dividir: signos iguales dan positivo y signos distintos dan negativo. (−3) × (−7) = 21; (−12) ÷ 4 = −3.",
      deeper: "Con varios factores, cuenta los negativos: si hay una cantidad par, el resultado es positivo; si es impar, es negativo.",
    },
    {
      title: "Problemas cotidianos",
      text: "Si en la mañana hay −3 °C y en la tarde 5 °C, la temperatura subió 5 − (−3) = 8 °C.",
    },
  ],
  diagram: {
    id: "root",
    label: "Números enteros (ℤ)",
    detail: "Positivos, cero y negativos",
    children: [
      {
        id: "orden",
        label: "Orden",
        detail: "En la recta numérica",
        children: [
          { id: "recta", label: "Recta numérica", detail: "Mayor hacia la derecha" },
          { id: "abs", label: "Valor absoluto", detail: "Distancia al cero" },
        ],
      },
      {
        id: "ops",
        label: "Operaciones",
        detail: "Reglas de signos",
        children: [
          { id: "suma", label: "Sumar/restar", detail: "Restar es sumar el opuesto" },
          { id: "mult", label: "Multiplicar/dividir", detail: "Iguales +, distintos −" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "El ascensor", narration: "Un ascensor está en planta baja: el piso 0. Si sube 3 pisos llega al 3; si baja 2 desde planta baja llega al sótano −2.", scene: "🛗⬆️⬇️" },
    { title: "La recta", narration: "Pon los pisos en una línea horizontal: los negativos a la izquierda del 0 y los positivos a la derecha.", scene: "⬅️0️⃣➡️" },
    { title: "Moverse", narration: "Sumar un positivo es avanzar a la derecha; sumar un negativo es retroceder a la izquierda: (−5) + 8 = 3.", scene: "🚶➡️➡️🎯" },
    { title: "Signos al multiplicar", narration: "Menos por menos da más: (−3) × (−7) = 21. Signos distintos dan negativo.", scene: "➖✖️➖🟰➕" },
  ],
  analogies: {
    default: "Los enteros son como un ascensor: planta baja es el 0, los pisos de arriba son positivos y los sótanos son negativos.",
    sports: "En el fútbol, la diferencia de goles puede ser negativa: si un equipo anotó 4 y recibió 7, su diferencia es 4 − 7 = −3.",
    videogames: "Si un hechizo te quita 15 puntos de vida, eso es −15; si una poción te da 20, eso es +20. Tu vida cambia en (−15) + 20 = +5.",
    nature: "Bajo el nivel del mar las alturas son negativas: un buzo a 10 m de profundidad está a −10 m.",
    technology: "Los termómetros digitales y los congeladores muestran temperaturas negativas, como −18 °C.",
    cooking: "Si tienes Bs 50 y compras ingredientes por Bs 70, tu saldo queda en −20: le debes 20 bolívares a alguien.",
  },
  glossary: [
    { term: "Número entero", definition: "Número sin parte decimal que puede ser positivo, negativo o cero." },
    { term: "Recta numérica", definition: "Línea donde se ubican los números en orden, con el cero en el centro." },
    { term: "Valor absoluto", definition: "Distancia de un número al cero; siempre es positiva o cero." },
    { term: "Opuesto", definition: "Número con el mismo valor absoluto y signo contrario, como 5 y −5." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "Si el termómetro marca 2 °C y la temperatura baja 5 grados, ¿qué marca ahora?",
      options: ["7 °C", "−3 °C", "3 °C"],
      correctIndex: 1,
      explanation: "¡Bien! 2 − 5 = −3: tres grados bajo cero.",
      concept: "negativos",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Cuánto es (−5) + 8?",
      options: ["−13", "13", "3", "−3"],
      correctIndex: 2,
      explanation: "Signos distintos: 8 − 5 = 3 y queda el signo del 8 (positivo).",
      concept: "Sumar y restar",
    },
    {
      id: "q2",
      prompt: "¿Cuánto es (−4) − 6?",
      options: ["2", "−2", "10", "−10"],
      correctIndex: 3,
      explanation: "Restar 6 es sumar −6: (−4) + (−6) = −10.",
      concept: "Sumar y restar",
    },
    {
      id: "q3",
      prompt: "¿Cuánto es (−3) × (−7)?",
      options: ["21", "−21", "−10", "10"],
      correctIndex: 0,
      explanation: "Signos iguales dan positivo: 3 × 7 = 21.",
      concept: "Ley de los signos",
    },
    {
      id: "q4",
      prompt: "¿Cuál es el valor absoluto de −9?",
      options: ["−9", "0", "9", "1/9"],
      correctIndex: 2,
      explanation: "El valor absoluto es la distancia al cero: |−9| = 9.",
      concept: "Valor absoluto y opuestos",
    },
    {
      id: "q5",
      prompt: "¿Cuál número es mayor: −2 o −8?",
      options: ["−8", "−2", "Son iguales", "No se pueden comparar"],
      correctIndex: 1,
      explanation: "En la recta numérica −2 está más a la derecha que −8, así que −2 es mayor.",
      concept: "La recta numérica",
    },
  ],
  explainPrompt: "Explica con tus palabras qué son los números enteros, cómo sabes cuál de dos negativos es mayor y cuánto da (−6) × 3.",
  explainChecklist: ["positivos y negativos", "recta numérica", "valor absoluto", "ley de los signos"],
  deeperResources: [
    { title: "Número entero (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/N%C3%BAmero_entero", kind: "reference", source: "Wikipedia" },
    { title: "Ejercicios de números negativos", url: "https://es.khanacademy.org/search?page_search_query=n%C3%BAmeros+negativos", kind: "interactive", source: "Khan Academy" },
    { title: "Videos educativos sobre números enteros", url: "https://www.youtube.com/results?search_query=n%C3%BAmeros+enteros+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [{ title: "Número entero", url: "https://es.wikipedia.org/wiki/N%C3%BAmero_entero", kind: "reference", source: "Wikipedia" }],
  relatedTopicIds: ["math-natural-numbers", "math-rational-numbers", "math-linear-equations"],
};
