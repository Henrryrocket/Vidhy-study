import type { Lesson } from "../../../../domain/lesson";

export const waterCycle: Lesson = {
  id: "water-cycle",
  title: "El ciclo del agua",
  subjectId: "natural-sciences",
  emoji: "💧",
  year: 1,
  keywords: ["ciclo hidrológico", "evaporación", "condensación", "precipitación", "lluvia", "nubes", "infiltración", "escorrentía", "transpiración"],
  hook: "El agua que bebes hoy pudo haber estado en una nube, en el océano o incluso en un glaciar hace miles de años. El agua de la Tierra está siempre viajando.",
  summary:
    "El ciclo del agua (o ciclo hidrológico) es el movimiento continuo del agua en la Tierra. Impulsada por la energía del Sol y por la gravedad, el agua cambia de estado (líquido, gas y sólido) y se mueve entre océanos, atmósfera, suelo y seres vivos. Sus etapas principales son evaporación, condensación, precipitación y acumulación (escorrentía e infiltración).",
  keyPoints: [
    {
      title: "Evaporación",
      text: "El Sol calienta el agua de mares, ríos y lagos, y una parte se convierte en vapor que sube a la atmósfera.",
      deeper: "Las plantas también liberan vapor de agua por sus hojas (transpiración). A la suma de ambos procesos se le llama evapotranspiración.",
    },
    {
      title: "Condensación",
      text: "Al subir, el vapor se enfría y se convierte en gotitas diminutas que forman las nubes.",
    },
    {
      title: "Precipitación",
      text: "Cuando las gotas se juntan y pesan demasiado, caen como lluvia, nieve o granizo.",
    },
    {
      title: "Escorrentía e infiltración",
      text: "El agua que cae corre por la superficie hacia ríos y mares (escorrentía) o se filtra en el suelo (infiltración) y forma aguas subterráneas.",
      deeper: "Las aguas subterráneas se guardan en acuíferos, de donde se extrae agua para consumo mediante pozos.",
    },
    {
      title: "El motor del ciclo",
      text: "La energía del Sol hace que el agua se evapore y la gravedad la hace caer y fluir cuesta abajo.",
    },
  ],
  diagram: {
    id: "root",
    label: "Ciclo del agua",
    detail: "Movimiento continuo",
    children: [
      { id: "evap", label: "Evaporación", detail: "Líquido → vapor (Sol)" },
      { id: "cond", label: "Condensación", detail: "Vapor → nubes (frío)" },
      { id: "prec", label: "Precipitación", detail: "Lluvia, nieve, granizo" },
      {
        id: "acum",
        label: "Acumulación",
        detail: "El agua regresa",
        children: [
          { id: "esc", label: "Escorrentía", detail: "Corre hacia ríos y mares" },
          { id: "inf", label: "Infiltración", detail: "Entra al suelo" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "El Sol calienta", narration: "El Sol calienta el océano y el agua se evapora.", scene: "☀️🌊⬆️" },
    { title: "Nacen las nubes", narration: "Arriba hace frío: el vapor se condensa y forma nubes.", scene: "💨❄️☁️" },
    { title: "¡Llueve!", narration: "Las gotas crecen y caen como lluvia o nieve.", scene: "☁️🌧️🏔️" },
    { title: "De vuelta al mar", narration: "El agua corre por los ríos o se filtra en la tierra, y vuelve a empezar.", scene: "🏞️➡️🌊🔁" },
  ],
  analogies: {
    default: "El ciclo del agua es como una olla con tapa: el agua caliente se evapora, se condensa en la tapa y vuelve a caer en gotas.",
    cooking: "Cuando cocinas con la olla tapada, ves gotitas en la tapa: es una mini condensación y precipitación en tu cocina.",
    sports: "Cuando haces ejercicio, sudas; el sudor se evapora y te refresca. ¡Tu cuerpo participa en el ciclo del agua!",
    videogames: "Es como un loop infinito en un juego: el agua pasa por cada etapa y vuelve al inicio sin perderse.",
    nature: "Los bosques son parte del ciclo: sus hojas liberan vapor que ayuda a formar nubes y lluvia.",
    animals: "Los animales beben agua y la devuelven al ambiente al respirar, sudar y orinar: también son parte del ciclo.",
  },
  glossary: [
    { term: "Evaporación", definition: "Paso del agua de líquido a gas por el calor." },
    { term: "Condensación", definition: "Paso del vapor a líquido al enfriarse." },
    { term: "Precipitación", definition: "Caída de agua desde las nubes (lluvia, nieve, granizo)." },
    { term: "Infiltración", definition: "Entrada del agua en el suelo." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿De dónde crees que viene el agua de la lluvia?",
      options: ["Aparece en el cielo", "Del agua que se evaporó antes", "Solo de los ríos"],
      correctIndex: 1,
      explanation: "El agua de lluvia es agua que antes se evaporó de mares, lagos, suelos y plantas.",
      concept: "ciclo",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Cómo se llama el paso del vapor de agua a gotitas que forman nubes?",
      options: ["Evaporación", "Condensación", "Infiltración", "Precipitación"],
      correctIndex: 1,
      explanation: "La condensación ocurre cuando el vapor se enfría.",
      concept: "Condensación",
    },
    {
      id: "q2",
      prompt: "¿Qué fuente de energía impulsa la evaporación?",
      options: ["El viento", "La Luna", "El Sol", "Los volcanes"],
      correctIndex: 2,
      explanation: "El Sol calienta el agua y provoca su evaporación.",
      concept: "Motor del ciclo",
    },
    {
      id: "q3",
      prompt: "El agua que se filtra en el suelo y forma aguas subterráneas es…",
      options: ["Escorrentía", "Infiltración", "Transpiración", "Condensación"],
      correctIndex: 1,
      explanation: "La infiltración lleva agua al subsuelo y a los acuíferos.",
      concept: "Escorrentía e infiltración",
    },
    {
      id: "q4",
      prompt: "¿Cuál es una forma de precipitación?",
      options: ["Nube", "Vapor", "Granizo", "Río"],
      correctIndex: 2,
      explanation: "La lluvia, la nieve y el granizo son formas de precipitación.",
      concept: "Precipitación",
    },
    {
      id: "q5",
      prompt: "¿Qué hace la gravedad en el ciclo del agua?",
      options: ["Evapora el agua", "Hace caer la lluvia y que el agua fluya cuesta abajo", "Forma las nubes", "Nada"],
      correctIndex: 1,
      explanation: "La gravedad hace caer la precipitación y mueve el agua hacia ríos y mares.",
      concept: "Motor del ciclo",
    },
  ],
  explainPrompt: "Cuenta la historia de una gota de agua que sale del mar y vuelve a él. ¿Por qué etapas pasa?",
  explainChecklist: ["evapora", "nube", "condensa", "lluvia", "río"],
  deeperResources: [
    { title: "Ciclo hidrológico (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Ciclo_hidrol%C3%B3gico", kind: "reference", source: "Wikipedia" },
    { title: "Escuela de Ciencias del Agua", url: "https://www.usgs.gov/special-topics/water-science-school", kind: "article", source: "USGS (Servicio Geológico de EE. UU.)" },
    { title: "Videos educativos sobre el ciclo del agua", url: "https://www.youtube.com/results?search_query=ciclo+del+agua+explicaci%C3%B3n+educativa", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Ciclo hidrológico", url: "https://es.wikipedia.org/wiki/Ciclo_hidrol%C3%B3gico", kind: "reference", source: "Wikipedia" },
    { title: "Water Science School", url: "https://www.usgs.gov/special-topics/water-science-school", kind: "reference", source: "USGS" },
  ],
  relatedTopicIds: ["photosynthesis"],
};
