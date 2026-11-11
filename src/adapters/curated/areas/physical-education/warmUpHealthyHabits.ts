import type { Lesson } from "../../../../domain/lesson";

export const warmUpHealthyHabits: Lesson = {
  id: "pe-warmup-healthy-habits",
  title: "El calentamiento y los hábitos de vida saludable",
  subjectId: "physical-education",
  emoji: "🔥",
  year: 1,
  keywords: ["calentamiento", "calentar", "hábitos saludables", "vida saludable", "estiramiento", "vuelta a la calma", "hidratación", "sueño", "actividad física"],
  hook: "Los atletas profesionales nunca empiezan un partido \"en frío\". Antes de correr, trotan, mueven las articulaciones y se preparan. ¿Por qué hacen eso? ¿Y qué más hacen para mantenerse sanos fuera de la cancha?",
  summary:
    "El calentamiento es un conjunto de ejercicios suaves y progresivos que se hacen antes de la actividad física para preparar el cuerpo: aumenta la temperatura de los músculos, acelera poco a poco el corazón y la respiración y moviliza las articulaciones. Así rendimos mejor y reducimos el riesgo de lesiones. Al terminar se hace la vuelta a la calma. Junto con esto, los hábitos de vida saludable, como moverse a diario, hidratarse, comer variado y dormir lo suficiente, ayudan a crecer con energía y bienestar.",
  keyPoints: [
    {
      title: "¿Para qué sirve calentar?",
      text: "Prepara el cuerpo para el esfuerzo: los músculos se calientan y se vuelven más elásticos, el corazón y la respiración se aceleran poco a poco y las articulaciones se mueven mejor. También ayuda a concentrarse.",
      deeper: "Un músculo caliente se contrae con más rapidez y se adapta mejor a los movimientos bruscos. Por eso el calentamiento ayuda a prevenir lesiones como tirones o desgarros.",
    },
    {
      title: "Cómo hacer un buen calentamiento",
      text: "Dura unos 10 a 15 minutos y va de menos a más. Empieza con movilidad articular (de la cabeza a los pies), sigue con trote suave y ejercicios generales, y termina con movimientos parecidos a los del deporte que vas a practicar.",
      deeper: "Se distingue el calentamiento general (para todo el cuerpo) y el específico (con gestos del deporte, como pases en fútbol o saltos en voleibol). La intensidad debe aumentar de forma gradual, sin llegar a cansarte.",
    },
    {
      title: "La vuelta a la calma",
      text: "Al final de la actividad, baja la intensidad poco a poco: camina, respira profundo y haz estiramientos suaves. Esto ayuda a que el corazón y la respiración vuelvan a su ritmo normal.",
      deeper: "Los estiramientos deben hacerse sin rebotes y sin llegar al dolor. Si algo duele de forma aguda durante el ejercicio, detente y avisa a tu docente.",
    },
    {
      title: "Hábitos de vida saludable",
      text: "Moverse cada día, tomar agua antes, durante y después del ejercicio, comer de forma variada, dormir lo suficiente y pasar menos tiempo sentado frente a pantallas son hábitos que cuidan tu salud.",
      deeper: "La Organización Mundial de la Salud recomienda que niños y adolescentes de 5 a 17 años hagan, en promedio, al menos 60 minutos diarios de actividad física moderada o intensa. Los adolescentes también necesitan, en general, entre 8 y 10 horas de sueño.",
    },
  ],
  diagram: {
    id: "root",
    label: "Cuerpo activo y sano",
    detail: "Antes, durante y después del ejercicio",
    children: [
      {
        id: "sesion",
        label: "Una sesión de ejercicio",
        detail: "Tres partes",
        children: [
          { id: "calentamiento", label: "Calentamiento", detail: "10–15 min, de menos a más" },
          { id: "principal", label: "Parte principal", detail: "El juego o deporte" },
          { id: "calma", label: "Vuelta a la calma", detail: "Caminar, respirar y estirar" },
        ],
      },
      {
        id: "habitos",
        label: "Hábitos saludables",
        detail: "Todos los días",
        children: [
          { id: "movimiento", label: "Moverse", detail: "Unos 60 minutos diarios" },
          { id: "agua", label: "Hidratarse", detail: "Agua antes, durante y después" },
          { id: "sueno", label: "Dormir bien", detail: "Entre 8 y 10 horas" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "Movilidad articular", narration: "Empieza moviendo con suavidad el cuello, los hombros, la cintura, las rodillas y los tobillos.", scene: "🙆🔄🦶" },
    { title: "Sube la temperatura", narration: "Trota suave unos minutos. Notarás que el corazón late más rápido y respiras más profundo.", scene: "🏃💓🌡️" },
    { title: "Ejercicios específicos", narration: "Haz movimientos del deporte que vas a practicar, como pases cortos o saltos suaves.", scene: "⚽🏐✨" },
    { title: "Vuelta a la calma", narration: "Al terminar, camina, respira profundo, estira con suavidad y toma agua.", scene: "🚶🧘💧" },
  ],
  analogies: {
    default: "Calentar es como precalentar el horno antes de hornear: si metes la torta con el horno frío, no queda bien.",
    sports: "Es lo que hacen los futbolistas antes del partido en el estadio: trotan, hacen pases y estiran. Nadie entra a jugar directo desde el banco sin prepararse.",
    videogames: "Es como el tutorial o la primera zona fácil de un juego: te prepara para los niveles difíciles sin que pierdas toda la vida al principio.",
    music: "Es como afinar el instrumento y hacer escalas antes del concierto: el músico se prepara para tocar mejor.",
    cooking: "Es como precalentar el horno o la plancha antes de cocinar: con la temperatura adecuada todo sale mejor.",
    animals: "Los gatos y los perros se estiran al despertarse antes de correr: ¡ellos también \"calientan\"!",
  },
  glossary: [
    { term: "Calentamiento", definition: "Ejercicios suaves y progresivos que preparan el cuerpo para la actividad física." },
    { term: "Movilidad articular", definition: "Ejercicios que mueven las articulaciones en todas sus direcciones." },
    { term: "Vuelta a la calma", definition: "Parte final de la sesión en la que se baja la intensidad poco a poco." },
    { term: "Hidratación", definition: "Reponer el agua que el cuerpo pierde, por ejemplo con el sudor." },
    { term: "Sedentarismo", definition: "Estilo de vida con muy poca actividad física." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "¿Qué crees que conviene hacer antes de un partido?",
      options: ["Empezar a correr a toda velocidad", "Calentar de forma suave y progresiva"],
      correctIndex: 1,
      explanation: "El calentamiento prepara al cuerpo y reduce el riesgo de lesiones.",
      concept: "calentamiento",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Cuál es uno de los objetivos principales del calentamiento?",
      options: [
        "Cansarse antes de empezar",
        "Preparar el cuerpo y reducir el riesgo de lesiones",
        "Reemplazar la actividad principal",
        "Bajar la temperatura de los músculos",
      ],
      correctIndex: 1,
      explanation: "Calentar eleva la temperatura muscular y prepara corazón, respiración y articulaciones.",
      concept: "Para qué sirve calentar",
    },
    {
      id: "q2",
      prompt: "¿Cómo debe ser la intensidad del calentamiento?",
      options: ["Máxima desde el inicio", "De menos a más, de forma progresiva", "Siempre igual de fuerte", "Cada vez más suave"],
      correctIndex: 1,
      explanation: "El calentamiento empieza suave y aumenta poco a poco, sin llegar al agotamiento.",
      concept: "Cómo calentar",
    },
    {
      id: "q3",
      prompt: "¿Qué parte de la sesión incluye caminar, respirar profundo y estirar con suavidad?",
      options: ["El calentamiento", "La parte principal", "La vuelta a la calma", "El descanso entre partidos"],
      correctIndex: 2,
      explanation: "La vuelta a la calma ayuda a que el cuerpo regrese a su estado normal.",
      concept: "Vuelta a la calma",
    },
    {
      id: "q4",
      prompt: "Según la OMS, ¿cuánta actividad física diaria se recomienda, en promedio, a adolescentes?",
      options: ["10 minutos", "Al menos 60 minutos", "Solo los fines de semana", "4 horas seguidas"],
      correctIndex: 1,
      explanation: "La OMS recomienda en promedio al menos 60 minutos diarios de actividad moderada o intensa entre los 5 y 17 años.",
      concept: "Hábitos saludables",
    },
    {
      id: "q5",
      prompt: "¿Cuándo conviene tomar agua al hacer ejercicio?",
      options: ["Solo cuando termines", "Nunca, para no pesar más", "Antes, durante y después", "Solo si te sientes mareado"],
      correctIndex: 2,
      explanation: "Hidratarse antes, durante y después repone el agua que se pierde al sudar.",
      concept: "Hidratación",
    },
  ],
  explainPrompt: "Explica con tus palabras cómo harías un calentamiento antes de jugar tu deporte favorito y qué hábitos te ayudan a estar sano.",
  explainChecklist: ["articulaciones", "trote", "progresivo", "vuelta a la calma", "agua"],
  deeperResources: [
    { title: "Actividad física", url: "https://es.wikipedia.org/wiki/Actividad_f%C3%ADsica", kind: "reference", source: "Wikipedia" },
    { title: "Organización Mundial de la Salud", url: "https://www.who.int/es", kind: "article", source: "OMS" },
    { title: "Videos de calentamiento para educación física", url: "https://www.youtube.com/results?search_query=calentamiento+educaci%C3%B3n+f%C3%ADsica+adolescentes", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Actividad física", url: "https://es.wikipedia.org/wiki/Actividad_f%C3%ADsica", kind: "reference", source: "Wikipedia" },
    { title: "Organización Mundial de la Salud", url: "https://www.who.int/es", kind: "reference", source: "OMS" },
  ],
  relatedTopicIds: ["pe-physical-capacities", "pe-hydration-nutrition", "pe-posture"],
};
