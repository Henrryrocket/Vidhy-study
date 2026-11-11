import type { CurriculumArea } from "../types";
import { fractions } from "./fractions";
import { integers } from "./integers";
import { linearEquations } from "./linearEquations";
import { trigonometricRatios } from "./trigonometricRatios";

export const mathematics: CurriculumArea = {
  subjectId: "mathematics",
  topics: [
    // 1.º año
    { id: "math-natural-numbers", title: "Números naturales y sus operaciones", year: 1, emoji: "🔢", keywords: ["números naturales", "suma", "resta", "multiplicación", "división", "jerarquía de operaciones"] },
    { id: "math-divisibility", title: "Divisibilidad: MCD y mcm", year: 1, emoji: "🧩", keywords: ["divisibilidad", "números primos", "máximo común divisor", "mínimo común múltiplo", "mcd", "mcm"] },
    { id: "fractions", title: "Fracciones", year: 1, emoji: "🍕", keywords: fractions.keywords },
    { id: "math-decimals", title: "Números decimales", year: 1, emoji: "💯", keywords: ["decimales", "coma decimal", "redondear", "operaciones con decimales", "décimas", "centésimas"] },
    { id: "math-geometry-basics", title: "Rectas, ángulos y polígonos", year: 1, emoji: "📏", keywords: ["ángulos", "rectas paralelas", "rectas perpendiculares", "polígonos", "triángulos", "transportador"] },
    { id: "math-statistics-intro", title: "Tablas y gráficos estadísticos", year: 1, emoji: "📊", keywords: ["estadística", "tabla de frecuencias", "gráfico de barras", "gráfico circular", "datos", "frecuencia"] },
    // 2.º año
    { id: "math-integers", title: "Números enteros", year: 2, emoji: "🌡️", keywords: integers.keywords },
    { id: "math-rational-numbers", title: "Números racionales", year: 2, emoji: "➗", keywords: ["números racionales", "fracciones", "decimales periódicos", "operaciones con racionales", "recta numérica"] },
    { id: "math-linear-equations", title: "Ecuaciones de primer grado", year: 2, emoji: "⚖️", keywords: linearEquations.keywords },
    { id: "math-proportionality", title: "Razones, proporciones y porcentajes", year: 2, emoji: "🧮", keywords: ["razón", "proporción", "regla de tres", "porcentaje", "proporcionalidad directa", "proporcionalidad inversa"] },
    { id: "math-area-perimeter", title: "Perímetros y áreas", year: 2, emoji: "🟦", keywords: ["perímetro", "área", "superficie", "círculo", "triángulo", "rectángulo"] },
    { id: "math-central-tendency", title: "Media, mediana y moda", year: 2, emoji: "📈", keywords: ["media", "promedio", "mediana", "moda", "medidas de tendencia central", "estadística"] },
    // 3.º año
    { id: "math-real-numbers", title: "Números reales y radicales", year: 3, emoji: "♾️", keywords: ["números reales", "números irracionales", "raíz cuadrada", "radicales", "potencias", "notación científica"] },
    { id: "math-polynomials", title: "Polinomios y productos notables", year: 3, emoji: "🔣", keywords: ["polinomios", "monomios", "productos notables", "binomio al cuadrado", "expresiones algebraicas"] },
    { id: "math-factoring", title: "Factorización", year: 3, emoji: "🧱", keywords: ["factorizar", "factor común", "diferencia de cuadrados", "trinomio", "casos de factorización"] },
    { id: "math-systems-equations", title: "Sistemas de ecuaciones lineales", year: 3, emoji: "✖️", keywords: ["sistemas de ecuaciones", "dos incógnitas", "sustitución", "igualación", "reducción", "método gráfico"] },
    { id: "math-pythagorean-theorem", title: "Teorema de Pitágoras", year: 3, emoji: "📐", keywords: ["pitágoras", "hipotenusa", "catetos", "triángulo rectángulo", "teorema"] },
    { id: "math-similarity", title: "Semejanza y Teorema de Tales", year: 3, emoji: "🔺", keywords: ["semejanza", "triángulos semejantes", "teorema de tales", "escala", "proporcionalidad de segmentos"] },
    // 4.º año
    { id: "math-functions", title: "Funciones y sus gráficas", year: 4, emoji: "📉", keywords: ["funciones", "dominio", "rango", "función lineal", "función afín", "gráfica", "pendiente"] },
    { id: "math-quadratic-equations", title: "Ecuación de segundo grado y función cuadrática", year: 4, emoji: "🎢", keywords: ["ecuación cuadrática", "segundo grado", "resolvente", "discriminante", "parábola", "función cuadrática"] },
    { id: "math-inequalities", title: "Inecuaciones", year: 4, emoji: "↔️", keywords: ["inecuaciones", "desigualdades", "intervalos", "mayor que", "menor que"] },
    { id: "math-trigonometric-ratios", title: "Razones trigonométricas", year: 4, emoji: "📐", keywords: trigonometricRatios.keywords },
    { id: "math-vectors", title: "Vectores en el plano", year: 4, emoji: "➡️", keywords: ["vectores", "módulo", "dirección", "sentido", "suma de vectores", "componentes"] },
    { id: "math-probability", title: "Probabilidad", year: 4, emoji: "🎲", keywords: ["probabilidad", "azar", "eventos", "espacio muestral", "regla de laplace"] },
    // 5.º año
    { id: "math-exponential-log", title: "Funciones exponencial y logarítmica", year: 5, emoji: "🚀", keywords: ["exponencial", "logaritmo", "logaritmos", "propiedades de los logaritmos", "crecimiento exponencial"] },
    { id: "math-trig-identities", title: "Identidades y ecuaciones trigonométricas", year: 5, emoji: "🔄", keywords: ["identidades trigonométricas", "ecuaciones trigonométricas", "seno", "coseno", "círculo trigonométrico"] },
    { id: "math-analytic-geometry", title: "Geometría analítica: la recta y las cónicas", year: 5, emoji: "⭕", keywords: ["geometría analítica", "ecuación de la recta", "circunferencia", "parábola", "elipse", "hipérbola", "cónicas"] },
    { id: "math-sequences", title: "Sucesiones y progresiones", year: 5, emoji: "🔁", keywords: ["sucesiones", "progresión aritmética", "progresión geométrica", "término general", "series"] },
    { id: "math-combinatorics", title: "Combinatoria", year: 5, emoji: "🔀", keywords: ["combinatoria", "permutaciones", "combinaciones", "variaciones", "factorial", "principio de multiplicación"] },
    { id: "math-limits", title: "Introducción a los límites", year: 5, emoji: "🎯", keywords: ["límites", "límite de una función", "continuidad", "tendencia", "cálculo"] },
  ],
  lessons: [fractions, integers, linearEquations, trigonometricRatios],
};
