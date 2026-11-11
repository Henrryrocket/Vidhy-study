import type { Lesson } from "../../../../domain/lesson";

export const uniformMotion: Lesson = {
  id: "phys-uniform-motion",
  title: "Movimiento rectilíneo uniforme (MRU)",
  subjectId: "physics",
  emoji: "🚗",
  year: 3,
  keywords: ["mru", "movimiento rectilíneo uniforme", "velocidad constante", "rapidez", "distancia", "tiempo", "cinemática"],
  hook: "Si un carro va siempre a 60 km/h por una autopista recta, ¿cuánto avanza en 3 horas? El MRU es el movimiento más sencillo de la física y la base de todos los demás.",
  summary:
    "El movimiento rectilíneo uniforme (MRU) es el de un cuerpo que se mueve en línea recta con velocidad constante: recorre distancias iguales en tiempos iguales y no tiene aceleración. Su ecuación principal es v = d / t (velocidad = distancia ÷ tiempo), de la que se obtienen d = v · t y t = d / v. En el Sistema Internacional la velocidad se mide en metros por segundo (m/s), aunque en la vida diaria usamos kilómetros por hora (km/h).",
  keyPoints: [
    {
      title: "Qué es el MRU",
      text: "Trayectoria recta y velocidad constante: el cuerpo no acelera ni frena, y avanza la misma distancia en cada segundo.",
    },
    {
      title: "La ecuación v = d / t",
      text: "Si un ciclista recorre 100 m en 20 s, su velocidad es 100 ÷ 20 = 5 m/s. Despejando: d = v · t y t = d / v.",
      deeper: "La ecuación de posición es x = x₀ + v · t, donde x₀ es la posición inicial. Si x₀ = 0, queda d = v · t.",
    },
    {
      title: "Unidades y conversiones",
      text: "Para pasar de km/h a m/s se divide entre 3,6; para pasar de m/s a km/h se multiplica por 3,6. Ejemplo: 72 km/h = 20 m/s.",
      deeper: "El 3,6 sale de que 1 km = 1000 m y 1 h = 3600 s, y 3600 ÷ 1000 = 3,6.",
    },
    {
      title: "Las gráficas del MRU",
      text: "En la gráfica posición-tiempo el MRU es una recta inclinada (la pendiente es la velocidad). En la gráfica velocidad-tiempo es una recta horizontal.",
      deeper: "El área bajo la recta de la gráfica velocidad-tiempo es igual a la distancia recorrida: base (t) × altura (v).",
    },
    {
      title: "Rapidez y velocidad",
      text: "La rapidez solo dice qué tan rápido (por ejemplo 20 m/s). La velocidad es un vector: además indica dirección y sentido (20 m/s hacia el este).",
    },
  ],
  diagram: {
    id: "root",
    label: "MRU",
    detail: "Línea recta, velocidad constante",
    children: [
      {
        id: "formulas",
        label: "Fórmulas",
        detail: "Un triángulo d-v-t",
        children: [
          { id: "v", label: "v = d / t", detail: "Velocidad" },
          { id: "d", label: "d = v · t", detail: "Distancia" },
          { id: "t", label: "t = d / v", detail: "Tiempo" },
        ],
      },
      {
        id: "graficas",
        label: "Gráficas",
        detail: "Cómo se ve",
        children: [
          { id: "xt", label: "Posición-tiempo", detail: "Recta inclinada" },
          { id: "vt", label: "Velocidad-tiempo", detail: "Recta horizontal" },
        ],
      },
      {
        id: "unidades",
        label: "Unidades",
        detail: "m/s y km/h",
        children: [{ id: "conv", label: "÷ 3,6 / × 3,6", detail: "km/h ↔ m/s" }],
      },
    ],
  },
  miniClass: [
    { title: "Un carro en la autopista", narration: "Un carro avanza por una recta y el velocímetro marca siempre 60 km/h. No acelera ni frena.", scene: "🚗🛣️" },
    { title: "Distancias iguales", narration: "En la primera hora recorre 60 km, en la segunda otros 60 km y en la tercera otros 60 km.", scene: "🚗➡️➡️➡️" },
    { title: "La fórmula", narration: "Distancia = velocidad × tiempo: 60 km/h × 3 h = 180 km.", scene: "✖️⏱️🟰📏" },
    { title: "La gráfica", narration: "Si dibujamos la posición en cada hora, los puntos forman una línea recta. ¡Así se ve un MRU!", scene: "📈📏✅" },
  ],
  analogies: {
    default: "El MRU es como una escalera mecánica: avanza siempre al mismo ritmo, sin acelerar ni frenar.",
    sports: "Un maratonista que mantiene un ritmo constante en una recta está haciendo, aproximadamente, un MRU.",
    videogames: "En muchos juegos, cuando mantienes presionada una dirección, el personaje avanza a velocidad constante: eso es un MRU.",
    music: "Un metrónomo marca pulsos a ritmo constante, igual que un móvil en MRU recorre distancias iguales en tiempos iguales.",
    technology: "Una cinta transportadora de un aeropuerto mueve las maletas en línea recta y a velocidad constante.",
    nature: "La luz en el vacío viaja en línea recta a velocidad constante (unos 300 000 km/s): es el MRU más rápido que existe.",
  },
  glossary: [
    { term: "Trayectoria", definition: "Camino que sigue un cuerpo al moverse." },
    { term: "Velocidad", definition: "Magnitud vectorial que indica la distancia recorrida por unidad de tiempo, con su dirección y sentido." },
    { term: "Rapidez", definition: "Valor numérico de la velocidad, sin dirección." },
    { term: "Aceleración", definition: "Cambio de la velocidad en el tiempo; en el MRU es cero." },
    { term: "m/s", definition: "Metros por segundo, unidad de velocidad del Sistema Internacional." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Qué significa que un carro va a 60 km/h?",
      options: ["Que recorre 60 km en una hora", "Que pesa 60 kg", "Que recorre 1 km en 60 horas"],
      correctIndex: 0,
      explanation: "¡Exacto! 60 km/h significa 60 kilómetros cada hora.",
      concept: "velocidad",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Un ciclista recorre 100 m en 20 s con velocidad constante. ¿Cuál es su velocidad?",
      options: ["2 000 m/s", "0,2 m/s", "5 m/s", "120 m/s"],
      correctIndex: 2,
      explanation: "v = d / t = 100 m ÷ 20 s = 5 m/s.",
      concept: "La ecuación v = d / t",
    },
    {
      id: "q2",
      prompt: "Un autobús va a 60 km/h constantes durante 3 horas. ¿Qué distancia recorre?",
      options: ["20 km", "63 km", "180 km", "200 km"],
      correctIndex: 2,
      explanation: "d = v · t = 60 km/h × 3 h = 180 km.",
      concept: "La ecuación v = d / t",
    },
    {
      id: "q3",
      prompt: "Un patinador va a 10 m/s. ¿Cuánto tarda en recorrer 500 m?",
      options: ["50 s", "5 000 s", "0,02 s", "510 s"],
      correctIndex: 0,
      explanation: "t = d / v = 500 m ÷ 10 m/s = 50 s.",
      concept: "La ecuación v = d / t",
    },
    {
      id: "q4",
      prompt: "¿A cuántos m/s equivalen 36 km/h?",
      options: ["129,6 m/s", "10 m/s", "36 m/s", "3,6 m/s"],
      correctIndex: 1,
      explanation: "Para pasar de km/h a m/s se divide entre 3,6: 36 ÷ 3,6 = 10 m/s.",
      concept: "Unidades y conversiones",
    },
    {
      id: "q5",
      prompt: "En un MRU, ¿cómo es la gráfica velocidad-tiempo?",
      options: ["Una parábola", "Una recta horizontal", "Una recta que sube", "Un círculo"],
      correctIndex: 1,
      explanation: "La velocidad no cambia con el tiempo, así que la gráfica v-t es una recta horizontal.",
      concept: "Las gráficas del MRU",
    },
  ],
  explainPrompt: "Explica con tus palabras qué es un movimiento rectilíneo uniforme y cómo calcularías cuánto tarda un carro en recorrer 120 km a 60 km/h.",
  explainChecklist: ["línea recta", "velocidad constante", "v = d / t", "unidades"],
  deeperResources: [
    { title: "Movimiento rectilíneo uniforme (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Movimiento_rectil%C3%ADneo_uniforme", kind: "reference", source: "Wikipedia" },
    { title: "Ejercicios de velocidad y desplazamiento", url: "https://es.khanacademy.org/search?page_search_query=velocidad+y+rapidez", kind: "interactive", source: "Khan Academy" },
    { title: "Videos educativos sobre el MRU", url: "https://www.youtube.com/results?search_query=movimiento+rectil%C3%ADneo+uniforme+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Movimiento rectilíneo uniforme", url: "https://es.wikipedia.org/wiki/Movimiento_rectil%C3%ADneo_uniforme", kind: "reference", source: "Wikipedia" },
    { title: "Velocidad", url: "https://es.wikipedia.org/wiki/Velocidad", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["phys-magnitudes-units", "phys-vectors", "phys-accelerated-motion", "math-functions"],
};
