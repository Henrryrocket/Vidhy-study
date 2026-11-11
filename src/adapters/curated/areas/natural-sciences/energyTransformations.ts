import type { Lesson } from "../../../../domain/lesson";

export const energyTransformations: Lesson = {
  id: "nat-energy-transformations",
  title: "La energía y sus transformaciones",
  subjectId: "natural-sciences",
  emoji: "⚡",
  year: 2,
  keywords: ["energía", "energia cinética", "energía potencial", "transformación de la energía", "conservación de la energía", "joule", "energías renovables", "hidroeléctrica"],
  hook: "Cuando enciendes un bombillo en casa, es muy probable que esa luz haya empezado como agua cayendo en una represa del río Caroní. ¿Cómo viaja la energía de una forma a otra sin perderse?",
  summary:
    "La energía es la capacidad de un cuerpo o sistema para producir cambios: mover algo, calentarlo, iluminarlo o hacerlo sonar. Existe en muchas formas (cinética, potencial, térmica, eléctrica, química, luminosa, sonora) y se transforma constantemente de una en otra. La ley de conservación de la energía dice que la energía no se crea ni se destruye, solo se transforma. Se mide en julios (J).",
  keyPoints: [
    {
      title: "¿Qué es la energía?",
      text: "Es la capacidad de producir cambios. Sin energía nada se movería, no habría luz ni calor. En el Sistema Internacional se mide en julios (J).",
      deeper: "Un julio es la energía que se usa al empujar algo con una fuerza de 1 newton a lo largo de 1 metro. Los alimentos suelen medirse en kilocalorías: 1 kcal ≈ 4.184 J.",
    },
    {
      title: "Energía cinética y potencial",
      text: "La energía cinética es la del movimiento: más rápido y más masa, más energía. La energía potencial gravitatoria es la que se guarda por estar a cierta altura.",
      deeper: "Se calculan así: Ec = ½ · m · v² y Ep = m · g · h, donde m es la masa (kg), v la rapidez (m/s), g ≈ 9,8 m/s² y h la altura (m). Si duplicas la rapidez, la energía cinética se multiplica por cuatro.",
    },
    {
      title: "Otras formas de energía",
      text: "Térmica (calor), eléctrica (corriente), química (guardada en alimentos, pilas y combustibles), luminosa (luz), sonora (sonido) y nuclear (en el núcleo de los átomos).",
    },
    {
      title: "La energía se transforma",
      text: "En la central hidroeléctrica de Guri, en el estado Bolívar, el agua del río Caroní cae desde lo alto (potencial), se mueve con fuerza (cinética), hace girar turbinas y los generadores la convierten en electricidad.",
      deeper: "En tu cuerpo ocurre algo parecido: la energía química de los alimentos se transforma en energía cinética al moverte y en energía térmica que mantiene tu temperatura.",
    },
    {
      title: "Se conserva, pero se \"degrada\"",
      text: "La energía total no se crea ni se destruye. Pero en cada transformación una parte se convierte en calor que ya no aprovechamos; por eso ninguna máquina es 100 % eficiente.",
      deeper: "Las fuentes renovables (sol, viento, agua) se reponen de forma natural; las no renovables (petróleo, gas, carbón) tardan millones de años en formarse y se agotan.",
    },
  ],
  diagram: {
    id: "root",
    label: "Energía",
    detail: "Capacidad de producir cambios",
    children: [
      {
        id: "mecanica",
        label: "Mecánica",
        detail: "Movimiento y posición",
        children: [
          { id: "cinetica", label: "Cinética", detail: "Energía del movimiento" },
          { id: "potencial", label: "Potencial", detail: "Energía guardada por la altura" },
        ],
      },
      {
        id: "otras",
        label: "Otras formas",
        detail: "Se transforman entre sí",
        children: [
          { id: "termica", label: "Térmica", detail: "Calor" },
          { id: "electrica", label: "Eléctrica", detail: "Corriente en los cables" },
          { id: "quimica", label: "Química", detail: "En alimentos, pilas y combustibles" },
          { id: "luminosa", label: "Luminosa y sonora", detail: "Luz y sonido" },
        ],
      },
      {
        id: "conservacion",
        label: "Conservación",
        detail: "No se crea ni se destruye, solo se transforma",
      },
    ],
  },
  miniClass: [
    { title: "Agua en lo alto", narration: "El agua del río Caroní se acumula en la represa de Guri. Por estar en alto, guarda energía potencial.", scene: "🏞️💧⬆️" },
    { title: "La caída", narration: "Al abrir las compuertas, el agua cae y gana velocidad: la energía potencial se vuelve cinética.", scene: "💧⬇️💨" },
    { title: "Giran las turbinas", narration: "El agua en movimiento hace girar turbinas conectadas a generadores, que producen electricidad.", scene: "🌀⚙️⚡" },
    { title: "Llega a tu casa", narration: "Por los cables, la energía eléctrica llega a tu bombillo y se transforma en luz… y un poco de calor.", scene: "🏠💡🔥" },
  ],
  analogies: {
    default: "La energía es como el dinero en distintas monedas: puedes cambiar bolívares por dólares, pero el valor total se conserva (aunque siempre se pierde algo en la comisión, que sería el calor).",
    sports: "Un clavadista en el trampolín tiene energía potencial; al caer, esa energía se vuelve cinética; y al entrar al agua, se convierte en salpicadura, sonido y calor.",
    videogames: "Es como la barra de energía de tu personaje: puedes gastarla corriendo, saltando o lanzando un poder, pero lo que gastas en una acción ya no está para otra.",
    music: "En un parlante, la energía eléctrica se transforma en movimiento de la membrana y ese movimiento en energía sonora que llega a tus oídos.",
    technology: "La batería de tu teléfono guarda energía química; al usarlo se transforma en eléctrica, luz en la pantalla, sonido y el calorcito que sientes al jugar mucho.",
    cooking: "En la cocina a gas, la energía química del gas se transforma en energía térmica que cocina las arepas.",
    nature: "El Sol es la gran fuente: su energía luminosa la capturan las plantas como energía química, y tú la obtienes al comerlas.",
  },
  glossary: [
    { term: "Energía", definition: "Capacidad de un cuerpo o sistema para producir cambios." },
    { term: "Energía cinética", definition: "Energía que tiene un cuerpo por estar en movimiento." },
    { term: "Energía potencial", definition: "Energía almacenada por la posición, por ejemplo por la altura." },
    { term: "Julio (J)", definition: "Unidad de energía del Sistema Internacional." },
    { term: "Fuente renovable", definition: "Fuente de energía que se repone de forma natural, como el sol, el viento o el agua de los ríos." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "Antes de empezar: ¿de dónde sale la energía que usas para correr?",
      options: ["De los alimentos que comes", "Del aire que respiras solamente", "De la nada"],
      correctIndex: 0,
      explanation: "¡Bien! Los alimentos guardan energía química que tu cuerpo transforma en movimiento.",
      concept: "quimica",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Un balón que rueda por la cancha tiene sobre todo energía…",
      options: ["Potencial", "Cinética", "Nuclear", "Química"],
      correctIndex: 1,
      explanation: "La energía cinética es la que tiene un cuerpo por estar en movimiento.",
      concept: "Energía cinética",
    },
    {
      id: "q2",
      prompt: "En una central hidroeléctrica como Guri, ¿cuál es la transformación principal?",
      options: [
        "Química → luminosa",
        "Potencial del agua → cinética → eléctrica",
        "Eléctrica → química",
        "Nuclear → térmica",
      ],
      correctIndex: 1,
      explanation: "El agua en alto (potencial) cae y se mueve (cinética), hace girar turbinas y el generador produce electricidad.",
      concept: "Transformaciones",
    },
    {
      id: "q3",
      prompt: "¿Qué dice la ley de conservación de la energía?",
      options: [
        "La energía se gasta y desaparece",
        "La energía no se crea ni se destruye, solo se transforma",
        "Solo el Sol puede crear energía",
        "La energía siempre se convierte en luz",
      ],
      correctIndex: 1,
      explanation: "La energía total se mantiene; lo que cambia es su forma.",
      concept: "Conservación",
    },
    {
      id: "q4",
      prompt: "¿Cuál de estas fuentes de energía es renovable?",
      options: ["El petróleo", "El gas natural", "El viento", "El carbón"],
      correctIndex: 2,
      explanation: "El viento se repone de forma natural. Petróleo, gas y carbón tardan millones de años en formarse.",
      concept: "Fuentes de energía",
    },
    {
      id: "q5",
      prompt: "Un bombillo encendido se calienta. ¿Por qué?",
      options: [
        "Porque crea energía nueva",
        "Porque parte de la energía eléctrica se transforma en calor y no en luz",
        "Porque absorbe calor del aire",
        "Porque la electricidad es fría",
      ],
      correctIndex: 1,
      explanation: "En cada transformación una parte de la energía termina como calor. Por eso ninguna máquina es 100 % eficiente.",
      concept: "Conservación",
    },
  ],
  explainPrompt: "Explica con tus palabras cómo la energía del agua del río Caroní termina encendiendo un bombillo en tu casa.",
  explainChecklist: ["potencial", "cinética", "turbina", "eléctrica", "transforma"],
  deeperResources: [
    { title: "Energía (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Energ%C3%ADa_(f%C3%ADsica)", kind: "reference", source: "Wikipedia" },
    { title: "Lecciones y ejercicios sobre energía", url: "https://es.khanacademy.org/search?page_search_query=energ%C3%ADa%20cin%C3%A9tica%20y%20potencial", kind: "interactive", source: "Khan Academy" },
    { title: "Videos educativos sobre las transformaciones de la energía", url: "https://www.youtube.com/results?search_query=transformaciones+de+la+energ%C3%ADa+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [
    { title: "Energía (física)", url: "https://es.wikipedia.org/wiki/Energ%C3%ADa_(f%C3%ADsica)", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["photosynthesis", "nat-heat-temperature", "nat-force-motion"],
};
