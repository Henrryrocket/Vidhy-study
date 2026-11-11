import type { Lesson } from "../../../../domain/lesson";

export const assertiveCommunication: Lesson = {
  id: "guide-assertive-communication",
  title: "La comunicación asertiva",
  subjectId: "guidance",
  emoji: "💬",
  year: 2,
  keywords: ["asertividad", "comunicación asertiva", "asertivo", "pasivo", "agresivo", "decir que no", "expresarse", "respeto", "escucha activa"],
  hook: "Un amigo te pide copiar tu tarea y no quieres. Puedes quedarte callado y dársela, responderle de mala manera… o decirle que no con respeto y sin perder la amistad. Eso último se llama ser asertivo.",
  summary:
    "La comunicación asertiva es la forma de expresar lo que piensas, sientes y necesitas de manera clara, honesta y respetuosa, respetando también los derechos de los demás. Se ubica entre dos extremos: el estilo pasivo, en el que callas lo que quieres para evitar problemas, y el estilo agresivo, en el que impones tu opinión ofendiendo o atacando. Ser asertivo se aprende con práctica: usar mensajes en primera persona, cuidar el tono y el lenguaje corporal, escuchar al otro y saber decir que no.",
  keyPoints: [
    {
      title: "Tres estilos de comunicación",
      text: "Pasivo: no expresas lo que quieres y dejas que otros decidan por ti. Agresivo: dices lo que quieres atacando o humillando. Asertivo: dices lo que quieres con claridad y respeto.",
      deeper: "El estilo pasivo suele acumular frustración; el agresivo daña las relaciones. El asertivo protege tanto tu bienestar como la relación con los demás.",
    },
    {
      title: "Mensajes en primera persona",
      text: "Habla de lo que tú sientes y necesitas: \"Me siento incómodo cuando…, ¿podrías…?\". Evita las acusaciones y las generalizaciones como \"siempre\" o \"nunca\".",
      deeper: "Una fórmula útil es: hecho + sentimiento + petición. Por ejemplo: \"Cuando hablas mientras expongo (hecho), me pongo nervioso (sentimiento); ¿podrías esperar a que termine? (petición)\".",
    },
    {
      title: "Saber decir que no",
      text: "Tienes derecho a decir que no sin sentirte culpable. Puedes decirlo de forma breve y amable, explicar tu razón si quieres y, si hace falta, repetirlo con calma.",
      deeper: "La técnica del \"disco rayado\" consiste en repetir tu respuesta con tranquilidad, sin discutir, cuando alguien insiste: \"Entiendo, pero no voy a hacerlo\". Es útil ante la presión de grupo.",
    },
    {
      title: "Lo que no se dice con palabras",
      text: "El tono de voz, la mirada y la postura también comunican. Mirar a los ojos, hablar con voz tranquila y mantener una postura relajada hacen que tu mensaje sea más claro.",
      deeper: "Ser asertivo también implica escuchar: prestar atención, no interrumpir y aceptar que la otra persona puede pensar distinto.",
    },
  ],
  diagram: {
    id: "root",
    label: "Estilos de comunicación",
    detail: "Cómo expresamos lo que queremos",
    children: [
      { id: "pasivo", label: "Pasivo", detail: "Callo lo que quiero para evitar problemas" },
      {
        id: "asertivo",
        label: "Asertivo",
        detail: "Me expreso con claridad y respeto",
        children: [
          { id: "yo", label: "Mensajes \"yo\"", detail: "Hecho + sentimiento + petición" },
          { id: "no", label: "Decir que no", detail: "Breve, amable y firme" },
          { id: "corporal", label: "Lenguaje corporal", detail: "Mirada, tono y postura tranquilos" },
        ],
      },
      { id: "agresivo", label: "Agresivo", detail: "Impongo mi opinión atacando" },
    ],
  },
  miniClass: [
    { title: "La petición", narration: "Carlos le pide a María copiar su tarea de matemática. María no quiere.", scene: "📒🙏😕" },
    { title: "Dos caminos que no funcionan", narration: "Si se la da sin querer, se siente mal (pasivo). Si le grita \"¡qué flojo eres!\", lo ofende (agresivo).", scene: "😶😡❌" },
    { title: "La respuesta asertiva", narration: "María dice con calma: \"No te la voy a pasar, pero si quieres te explico cómo resolverla en el recreo\".", scene: "🙂🗣️💡" },
    { title: "Todos ganan", narration: "María cuida sus derechos y la amistad. Carlos aprende el tema.", scene: "🤝📚✅" },
  ],
  analogies: {
    default: "Ser asertivo es como manejar con el volumen justo: ni tan bajo que nadie te oiga (pasivo) ni tan alto que moleste a todos (agresivo).",
    sports: "Es como un buen capitán de equipo: dice con claridad lo que el equipo necesita, sin gritar ni humillar a nadie, y también escucha a sus compañeros.",
    videogames: "Es como el chat en un juego en línea: puedes pedir ayuda o decir que no a una estrategia sin insultar a nadie, y así el equipo funciona mejor.",
    music: "Es como cantar en un coro: tu voz debe escucharse clara, pero sin tapar a las demás.",
    art: "Es como elegir los colores de un dibujo: ni tan pálidos que no se vean ni tan fuertes que tapen todo lo demás.",
    animals: "Muchos animales comunican sus límites con señales claras, como un gato que mueve la cola para avisar que no quiere más caricias, sin necesidad de atacar.",
  },
  glossary: [
    { term: "Asertividad", definition: "Capacidad de expresar lo que piensas y sientes con claridad y respeto." },
    { term: "Estilo pasivo", definition: "Forma de comunicarse en la que no se expresan las propias necesidades." },
    { term: "Estilo agresivo", definition: "Forma de comunicarse que impone la propia opinión atacando o humillando." },
    { term: "Lenguaje corporal", definition: "Mensajes que transmitimos con gestos, postura, mirada y tono de voz." },
    { term: "Presión de grupo", definition: "Influencia que ejercen otras personas para que actúes como ellas quieren." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "Si no quieres hacer algo que te piden tus amigos, ¿tienes derecho a decir que no?",
      options: ["Sí, con respeto", "No, debo hacer lo que dice el grupo"],
      correctIndex: 0,
      explanation: "Todos tenemos derecho a decir que no. La clave está en hacerlo con respeto.",
      concept: "no",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Pedro nunca dice lo que piensa para no tener problemas. ¿Qué estilo de comunicación usa?",
      options: ["Asertivo", "Pasivo", "Agresivo", "Mediador"],
      correctIndex: 1,
      explanation: "Callar las propias necesidades para evitar conflictos es el estilo pasivo.",
      concept: "Estilos de comunicación",
    },
    {
      id: "q2",
      prompt: "¿Cuál de estas respuestas es asertiva ante una invitación que no quieres aceptar?",
      options: [
        "\"¡Qué plan tan aburrido!\"",
        "\"Gracias por invitarme, pero esta vez no voy a ir\"",
        "Aceptar aunque no quieras",
        "No responder el mensaje",
      ],
      correctIndex: 1,
      explanation: "Es una respuesta clara, honesta y amable, que respeta a ambos.",
      concept: "Decir que no",
    },
    {
      id: "q3",
      prompt: "¿Qué tres partes tiene la fórmula de un mensaje asertivo?",
      options: [
        "Insulto, queja y amenaza",
        "Hecho, sentimiento y petición",
        "Pregunta, respuesta y castigo",
        "Saludo, chiste y despedida",
      ],
      correctIndex: 1,
      explanation: "Describir el hecho, decir cómo te sientes y pedir lo que necesitas.",
      concept: "Mensajes en primera persona",
    },
    {
      id: "q4",
      prompt: "Alguien insiste varias veces para que hagas algo que no quieres. ¿Qué técnica asertiva puedes usar?",
      options: ["Gritar más fuerte", "El disco rayado: repetir tu respuesta con calma", "Ceder para que deje de insistir", "Ignorarlo para siempre"],
      correctIndex: 1,
      explanation: "Repetir tu respuesta con tranquilidad, sin discutir, ayuda a mantener tu decisión.",
      concept: "Decir que no",
    },
    {
      id: "q5",
      prompt: "Además de las palabras, ¿qué más comunica tu mensaje?",
      options: ["Solo la ropa", "El tono de voz, la mirada y la postura", "Nada más", "La hora del día"],
      correctIndex: 1,
      explanation: "El lenguaje corporal acompaña a las palabras y puede reforzar o contradecir tu mensaje.",
      concept: "Lenguaje corporal",
    },
  ],
  explainPrompt: "Explica con tus palabras la diferencia entre ser pasivo, agresivo y asertivo, y da un ejemplo de respuesta asertiva.",
  explainChecklist: ["pasivo", "agresivo", "asertivo", "respeto", "decir que no"],
  deeperResources: [
    { title: "Asertividad", url: "https://es.wikipedia.org/wiki/Asertividad", kind: "reference", source: "Wikipedia" },
    { title: "Videos sobre comunicación asertiva", url: "https://www.youtube.com/results?search_query=comunicaci%C3%B3n+asertiva+para+adolescentes", kind: "video", source: "YouTube (búsqueda)" },
    { title: "UNICEF: infancia y adolescencia", url: "https://www.unicef.org/es", kind: "article", source: "UNICEF" },
  ],
  sources: [
    { title: "Asertividad", url: "https://es.wikipedia.org/wiki/Asertividad", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["guide-conflict-resolution", "guide-friendship", "guide-emotions"],
};
