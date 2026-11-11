import type { Lesson } from "../../../../domain/lesson";

export const conflictResolution: Lesson = {
  id: "guide-conflict-resolution",
  title: "La resolución pacífica de conflictos",
  subjectId: "guidance",
  emoji: "🕊️",
  year: 2,
  keywords: ["conflictos", "resolución de conflictos", "resolución pacífica", "mediación", "negociación", "peleas", "discusión", "diálogo", "escucha activa"],
  hook: "Tu compañero usó tu cuaderno sin permiso y lo devolvió manchado. Puedes gritarle, ignorarlo para siempre… o resolverlo de una forma en la que ambos ganen. ¿Cuál eliges?",
  summary:
    "Un conflicto es una situación en la que dos o más personas tienen intereses, necesidades u opiniones que chocan. Los conflictos son normales en la convivencia; lo importante es cómo los enfrentamos. Resolverlos de forma pacífica significa usar el diálogo en lugar de la violencia: calmarse, escuchar al otro, expresar lo que sentimos sin ofender, buscar soluciones juntos y cumplir los acuerdos. Cuando dos personas no logran entenderse solas, puede ayudar un mediador, una persona neutral que facilita el diálogo.",
  keyPoints: [
    {
      title: "El conflicto es normal",
      text: "Convivimos con personas distintas, así que los desacuerdos son inevitables. Un conflicto bien manejado puede mejorar una relación y enseñarnos a entender otros puntos de vista.",
      deeper: "Ante un conflicto solemos reaccionar de cinco maneras: evitarlo, competir (querer ganar a toda costa), ceder (dejar que el otro gane), negociar a medias o colaborar (buscar una solución en la que ambos ganen). La colaboración suele dar los mejores resultados.",
    },
    {
      title: "Primero, la calma",
      text: "Con rabia es difícil pensar con claridad. Antes de hablar, respira profundo, cuenta hasta diez o aléjate un momento. Hablar en caliente suele empeorar las cosas.",
      deeper: "Calmarse no es ignorar el problema: es esperar el momento adecuado para tratarlo. Puedes decir: \"Estoy molesto, prefiero hablarlo en un rato\".",
    },
    {
      title: "Escuchar y hablar en primera persona",
      text: "La escucha activa consiste en prestar atención sin interrumpir y repetir con tus palabras lo que entendiste. Al hablar, usa mensajes \"yo\": \"Me sentí mal cuando…\" en lugar de \"Tú siempre…\".",
      deeper: "Los mensajes \"yo\" describen el hecho, cómo te sentiste y qué necesitas. Así la otra persona no se siente atacada y es más probable que quiera buscar una solución.",
    },
    {
      title: "Buscar soluciones y la mediación",
      text: "Propongan varias soluciones, elijan una que sea justa para ambos y comprométanse a cumplirla. Si no logran acuerdo, pidan ayuda a un mediador: un docente, un orientador o un compañero formado para ello.",
      deeper: "El mediador no decide quién tiene la razón ni impone castigos: ayuda a que las partes se escuchen y lleguen a su propio acuerdo. Si hay violencia o acoso, siempre hay que avisar a un adulto de confianza.",
    },
  ],
  diagram: {
    id: "root",
    label: "Resolver un conflicto",
    detail: "Diálogo en lugar de violencia",
    children: [
      {
        id: "pasos",
        label: "Pasos",
        detail: "Un camino ordenado",
        children: [
          { id: "calma", label: "1. Calmarse", detail: "Respirar antes de hablar" },
          { id: "escuchar", label: "2. Escuchar y expresarse", detail: "Escucha activa y mensajes \"yo\"" },
          { id: "acordar", label: "3. Buscar y cumplir acuerdos", detail: "Soluciones en las que ambos ganen" },
        ],
      },
      {
        id: "ayuda",
        label: "Si no funciona",
        detail: "Pedir apoyo",
        children: [
          { id: "mediacion", label: "Mediación", detail: "Una persona neutral facilita el diálogo" },
          { id: "adulto", label: "Adulto de confianza", detail: "Siempre si hay violencia o acoso" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "El choque", narration: "Luis devuelve el cuaderno de Ana manchado. Ana siente rabia y quiere gritarle.", scene: "📓😠💥" },
    { title: "La pausa", narration: "Ana respira profundo y decide hablar en el recreo, cuando esté más tranquila.", scene: "😮‍💨⏸️🙂" },
    { title: "El diálogo", narration: "Ana dice: \"Me molestó que tomaras mi cuaderno sin pedirlo\". Luis escucha y explica que se le cayó jugo.", scene: "🗣️👂🤝" },
    { title: "El acuerdo", narration: "Luis se disculpa y la ayuda a pasar en limpio las notas. Acuerdan pedir permiso la próxima vez.", scene: "✍️🤝✅" },
  ],
  analogies: {
    default: "Un conflicto es como un nudo en una cuerda: si jalas con fuerza se aprieta más; si lo aflojas con calma y paciencia, se deshace.",
    sports: "Es como un partido con árbitro: hay reglas para resolver los choques sin peleas. El mediador es como un árbitro que no juega para ningún equipo.",
    videogames: "Es como un juego cooperativo: si cada jugador va por su lado, pierden los dos; si se comunican y reparten tareas, pasan el nivel juntos.",
    music: "Es como dos músicos desafinados: en lugar de tocar más fuerte para tapar al otro, se escuchan y ajustan hasta sonar en armonía.",
    animals: "Muchos animales que viven en grupo, como los lobos o los chimpancés, tienen gestos para calmar a los demás y evitar peleas que dañen al grupo.",
    cooking: "Es como cocinar con alguien: si ambos quieren usar la misma olla, pueden pelear o turnarse y preparar la comida juntos.",
  },
  glossary: [
    { term: "Conflicto", definition: "Situación en la que chocan intereses, necesidades u opiniones de dos o más personas." },
    { term: "Escucha activa", definition: "Prestar atención completa al otro y comprobar que entendiste lo que dijo." },
    { term: "Mensaje \"yo\"", definition: "Forma de expresar lo que sientes y necesitas sin culpar al otro." },
    { term: "Negociación", definition: "Diálogo entre las partes para llegar a un acuerdo." },
    { term: "Mediación", definition: "Proceso en el que una persona neutral ayuda a las partes a dialogar y acordar." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Crees que los conflictos siempre son malos?",
      options: ["Sí, hay que evitarlos siempre", "No, son normales y pueden resolverse bien"],
      correctIndex: 1,
      explanation: "Los conflictos son parte de la convivencia. Bien manejados, ayudan a entendernos mejor.",
      concept: "pasos",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Cuál de estas frases es un mensaje \"yo\"?",
      options: [
        "\"Tú siempre arruinas todo\"",
        "\"Me sentí ignorado cuando no me dejaste hablar\"",
        "\"Eres un egoísta\"",
        "\"Nunca más te presto nada\"",
      ],
      correctIndex: 1,
      explanation: "El mensaje \"yo\" describe lo que sentiste y cuándo, sin atacar a la otra persona.",
      concept: "Mensajes \"yo\"",
    },
    {
      id: "q2",
      prompt: "¿Qué es lo primero que conviene hacer cuando estás muy enojado por un conflicto?",
      options: ["Gritar para desahogarte", "Calmarte antes de hablar", "Publicarlo en redes sociales", "Buscar quién te apoye para atacar"],
      correctIndex: 1,
      explanation: "Calmarse permite pensar con claridad y hablar sin empeorar la situación.",
      concept: "Calma",
    },
    {
      id: "q3",
      prompt: "¿Qué hace un mediador?",
      options: [
        "Decide quién tiene la razón y castiga al culpable",
        "Ayuda a las partes a dialogar para que lleguen a su propio acuerdo",
        "Defiende a su amigo",
        "Evita que las partes hablen",
      ],
      correctIndex: 1,
      explanation: "El mediador es neutral: facilita el diálogo, pero el acuerdo lo construyen las partes.",
      concept: "Mediación",
    },
    {
      id: "q4",
      prompt: "¿Qué forma de enfrentar un conflicto busca que ambas partes ganen?",
      options: ["Evitar", "Competir", "Colaborar", "Ceder siempre"],
      correctIndex: 2,
      explanation: "La colaboración busca una solución que satisfaga las necesidades de ambos.",
      concept: "Formas de enfrentar conflictos",
    },
    {
      id: "q5",
      prompt: "Un compañero te acosa de forma repetida en el liceo. ¿Qué debes hacer?",
      options: [
        "Aguantar en silencio",
        "Responder con violencia",
        "Contárselo a un adulto de confianza, como un docente u orientador",
        "Cambiar de liceo sin decir nada",
      ],
      correctIndex: 2,
      explanation: "El acoso no es un simple conflicto entre iguales: requiere la ayuda de un adulto de confianza.",
      concept: "Pedir ayuda",
    },
  ],
  explainPrompt: "Piensa en un conflicto común entre compañeros y explica, paso a paso, cómo lo resolverías de forma pacífica.",
  explainChecklist: ["calma", "escuchar", "mensaje yo", "solución", "acuerdo"],
  deeperResources: [
    { title: "Resolución de conflictos", url: "https://es.wikipedia.org/wiki/Resoluci%C3%B3n_de_conflictos", kind: "reference", source: "Wikipedia" },
    { title: "Asertividad", url: "https://es.wikipedia.org/wiki/Asertividad", kind: "reference", source: "Wikipedia" },
    { title: "Videos sobre resolución pacífica de conflictos", url: "https://www.youtube.com/results?search_query=resoluci%C3%B3n+pac%C3%ADfica+de+conflictos+para+adolescentes", kind: "video", source: "YouTube (búsqueda)" },
    { title: "UNICEF: infancia y adolescencia", url: "https://www.unicef.org/es", kind: "article", source: "UNICEF" },
  ],
  sources: [
    { title: "Resolución de conflictos", url: "https://es.wikipedia.org/wiki/Resoluci%C3%B3n_de_conflictos", kind: "reference", source: "Wikipedia" },
    { title: "UNICEF", url: "https://www.unicef.org/es", kind: "reference", source: "UNICEF" },
  ],
  relatedTopicIds: ["guide-assertive-communication", "guide-bullying-prevention", "guide-values"],
};
