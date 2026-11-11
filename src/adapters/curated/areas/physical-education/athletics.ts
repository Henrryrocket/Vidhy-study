import type { Lesson } from "../../../../domain/lesson";

export const athletics: Lesson = {
  id: "pe-athletics",
  title: "Atletismo: carreras, saltos y lanzamientos",
  subjectId: "physical-education",
  emoji: "🏃",
  year: 2,
  keywords: ["atletismo", "carreras", "velocidad", "relevos", "salto largo", "salto de longitud", "salto alto", "lanzamiento de bala", "pruebas de pista", "pruebas de campo"],
  hook: "Correr, saltar y lanzar son movimientos que hacemos desde niños. El atletismo los convirtió en deporte, y es tan antiguo que ya se practicaba en los Juegos Olímpicos de la Antigua Grecia.",
  summary:
    "El atletismo es un deporte que reúne pruebas basadas en movimientos naturales: correr, saltar y lanzar. Se divide en pruebas de pista (carreras de velocidad, medio fondo, fondo, vallas y relevos) y pruebas de campo (saltos y lanzamientos). También existen las pruebas combinadas, como el decatlón y el heptatlón, y las de ruta, como la maratón. En educación física se practican versiones adaptadas para aprender la técnica básica de cada prueba de forma segura.",
  keyPoints: [
    {
      title: "Pruebas de pista: las carreras",
      text: "Se corren en una pista ovalada de 400 metros. Hay carreras de velocidad (100, 200 y 400 m), de medio fondo (800 y 1.500 m), de fondo (5.000 y 10.000 m), con vallas y de relevos (4 × 100 y 4 × 400 m).",
      deeper: "En las carreras de velocidad se usa la salida baja con tacos; en las de medio fondo y fondo, la salida alta. En los relevos, el testigo debe entregarse dentro de una zona marcada.",
    },
    {
      title: "Pruebas de campo: los saltos",
      text: "Los saltos horizontales son el salto de longitud y el triple salto; los verticales, el salto de altura y el salto con pértiga. El salto de longitud tiene cuatro fases: carrera de impulso, batida (impulso con un pie), vuelo y caída.",
      deeper: "En el salto de longitud la batida debe hacerse antes de la línea de la tabla; si el pie la pisa por delante, el salto es nulo. La distancia se mide hasta la marca más cercana que deja el cuerpo en la arena.",
    },
    {
      title: "Pruebas de campo: los lanzamientos",
      text: "Son el lanzamiento de bala (o peso), disco, jabalina y martillo. Por seguridad, en clase se usan implementos livianos o adaptados y nadie debe estar en la zona de caída.",
      deeper: "En el lanzamiento de bala, la bala se empuja desde el cuello, no se lanza con el brazo estirado como una pelota. El atleta debe salir del círculo por la mitad de atrás para que el lanzamiento sea válido.",
    },
    {
      title: "Valores y seguridad",
      text: "El atletismo enseña constancia y superación personal: competir contra tu propia marca es tan importante como ganar. Antes de cualquier prueba hay que calentar, y en los lanzamientos se siguen siempre las indicaciones del docente.",
      deeper: "Venezuela tiene atletas de nivel olímpico, como Yulimar Rojas, campeona olímpica de triple salto en Tokio 2020, la primera mujer venezolana en ganar un oro olímpico.",
    },
  ],
  diagram: {
    id: "root",
    label: "Atletismo",
    detail: "Correr, saltar y lanzar",
    children: [
      {
        id: "pista",
        label: "Pruebas de pista",
        detail: "Carreras",
        children: [
          { id: "velocidad", label: "Velocidad", detail: "100, 200 y 400 m" },
          { id: "fondo", label: "Medio fondo y fondo", detail: "De 800 m a 10.000 m" },
          { id: "relevos", label: "Vallas y relevos", detail: "Obstáculos y testigo" },
        ],
      },
      {
        id: "campo",
        label: "Pruebas de campo",
        detail: "Saltos y lanzamientos",
        children: [
          { id: "saltos", label: "Saltos", detail: "Longitud, triple, altura, pértiga" },
          { id: "lanzamientos", label: "Lanzamientos", detail: "Bala, disco, jabalina, martillo" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Carrera de impulso", narration: "En el salto de longitud corres acelerando por el pasillo hasta la tabla de batida.", scene: "🏃💨📏" },
    { title: "La batida", narration: "Te impulsas con un solo pie antes de la línea. Si la pisas por delante, el salto es nulo.", scene: "🦶⬆️🚫" },
    { title: "El vuelo", narration: "En el aire llevas los brazos y las piernas hacia adelante para alargar el salto.", scene: "🕊️🙌➡️" },
    { title: "La caída", narration: "Caes en la arena con los pies hacia adelante. Se mide hasta la marca más cercana a la tabla.", scene: "🏖️👣📐" },
  ],
  analogies: {
    default: "El atletismo es como el abecedario del deporte: correr, saltar y lanzar son las letras con las que se \"escriben\" muchos otros deportes.",
    sports: "En el béisbol corres entre bases, en el baloncesto saltas para rebotear y en el fútbol lanzas un saque de banda: todos usan movimientos del atletismo.",
    videogames: "Es como un juego de carreras y retos: cada prueba es un modo distinto y tu objetivo es superar tu propio récord en cada partida.",
    music: "Un relevo es como una canción hecha entre varios músicos: cada uno toca su parte y le pasa el turno al siguiente sin perder el ritmo.",
    animals: "El guepardo sería campeón de 100 metros, el canguro de salto de longitud y el caballo de resistencia en carreras largas.",
    nature: "Los movimientos del atletismo vienen de la naturaleza: nuestros antepasados corrían, saltaban arroyos y lanzaban piedras para sobrevivir.",
  },
  glossary: [
    { term: "Pruebas de pista", definition: "Carreras que se realizan en la pista de atletismo." },
    { term: "Pruebas de campo", definition: "Saltos y lanzamientos que se realizan en zonas especiales del estadio." },
    { term: "Testigo", definition: "Tubo que se pasan los corredores en las carreras de relevos." },
    { term: "Batida", definition: "Impulso final con un pie antes de despegar en un salto." },
    { term: "Salto nulo", definition: "Intento que no cuenta por incumplir una regla, como pisar por delante de la línea de batida." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Cuáles son los tres movimientos básicos del atletismo?",
      options: ["Nadar, pedalear y remar", "Correr, saltar y lanzar", "Patear, driblar y atajar"],
      correctIndex: 1,
      explanation: "El atletismo agrupa pruebas de carreras, saltos y lanzamientos.",
      concept: "pista",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Cuánto mide una vuelta a la pista de atletismo estándar?",
      options: ["100 metros", "200 metros", "400 metros", "1.000 metros"],
      correctIndex: 2,
      explanation: "La pista de atletismo estándar mide 400 metros por el carril interior.",
      concept: "Pruebas de pista",
    },
    {
      id: "q2",
      prompt: "¿Cuál de estas es una prueba de campo?",
      options: ["Carrera de 100 m", "Relevo 4 × 100", "Salto de longitud", "Carrera de 1.500 m"],
      correctIndex: 2,
      explanation: "Los saltos y lanzamientos son pruebas de campo; las carreras son de pista.",
      concept: "Pruebas de campo",
    },
    {
      id: "q3",
      prompt: "¿Cuál es el orden correcto de las fases del salto de longitud?",
      options: [
        "Vuelo, batida, carrera, caída",
        "Carrera de impulso, batida, vuelo, caída",
        "Batida, caída, vuelo, carrera",
        "Caída, carrera, vuelo, batida",
      ],
      correctIndex: 1,
      explanation: "Primero se corre, luego se impulsa con un pie, se vuela y se cae en la arena.",
      concept: "Saltos",
    },
    {
      id: "q4",
      prompt: "¿Qué se pasan los corredores en una carrera de relevos?",
      options: ["Una pelota", "Un testigo", "Una bandera", "Una jabalina"],
      correctIndex: 1,
      explanation: "El testigo es un tubo que se entrega dentro de una zona marcada.",
      concept: "Relevos",
    },
    {
      id: "q5",
      prompt: "¿Qué regla de seguridad es fundamental en los lanzamientos en clase?",
      options: [
        "Lanzar hacia donde están los compañeros",
        "Que nadie esté en la zona de caída y seguir las indicaciones del docente",
        "Usar el implemento más pesado posible",
        "Lanzar sin calentar",
      ],
      correctIndex: 1,
      explanation: "La zona de caída debe estar despejada y se lanza solo cuando el docente lo indica.",
      concept: "Seguridad",
    },
  ],
  explainPrompt: "Explica con tus palabras cómo se divide el atletismo y describe las fases del salto de longitud.",
  explainChecklist: ["pista", "campo", "carreras", "saltos", "lanzamientos"],
  deeperResources: [
    { title: "Atletismo", url: "https://es.wikipedia.org/wiki/Atletismo", kind: "reference", source: "Wikipedia" },
    { title: "Yulimar Rojas", url: "https://es.wikipedia.org/wiki/Yulimar_Rojas", kind: "reference", source: "Wikipedia" },
    { title: "Videos sobre la técnica del salto de longitud", url: "https://www.youtube.com/results?search_query=t%C3%A9cnica+salto+de+longitud+educaci%C3%B3n+f%C3%ADsica", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Atletismo", url: "https://es.wikipedia.org/wiki/Atletismo", kind: "reference", source: "Wikipedia" },
    { title: "World Athletics", url: "https://worldathletics.org", kind: "reference", source: "World Athletics" },
  ],
  relatedTopicIds: ["pe-physical-capacities", "pe-warmup-healthy-habits", "pe-coordination-balance"],
};
