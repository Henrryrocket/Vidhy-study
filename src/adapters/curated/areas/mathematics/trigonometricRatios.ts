import type { Lesson } from "../../../../domain/lesson";

export const trigonometricRatios: Lesson = {
  id: "math-trigonometric-ratios",
  title: "Razones trigonométricas",
  subjectId: "mathematics",
  emoji: "📐",
  year: 4,
  keywords: ["trigonometría", "seno", "coseno", "tangente", "razones trigonométricas", "triángulo rectángulo", "soh cah toa"],
  hook: "¿Cómo se puede medir la altura de un edificio o de un tepuy sin subirlo? Con un ángulo, una distancia y la trigonometría.",
  summary:
    "Las razones trigonométricas relacionan los ángulos de un triángulo rectángulo con las longitudes de sus lados. Para un ángulo agudo α: el seno es cateto opuesto ÷ hipotenusa, el coseno es cateto adyacente ÷ hipotenusa y la tangente es cateto opuesto ÷ cateto adyacente. Como dependen solo del ángulo y no del tamaño del triángulo, sirven para calcular distancias y alturas que no se pueden medir directamente.",
  keyPoints: [
    {
      title: "Los lados según el ángulo",
      text: "En un triángulo rectángulo, la hipotenusa es el lado opuesto al ángulo recto (el más largo). Respecto a un ángulo agudo α, el cateto opuesto está enfrente de α y el cateto adyacente lo forma junto con la hipotenusa.",
    },
    {
      title: "Seno, coseno y tangente",
      text: "sen α = opuesto / hipotenusa; cos α = adyacente / hipotenusa; tan α = opuesto / adyacente. Un truco para recordarlo es 'SOH-CAH-TOA'.",
      deeper: "También existen las razones inversas: cosecante (1/sen), secante (1/cos) y cotangente (1/tan).",
    },
    {
      title: "Un ejemplo con el triángulo 3-4-5",
      text: "Si los catetos miden 3 y 4, la hipotenusa mide 5. Para el ángulo opuesto al lado 3: sen = 3/5 = 0,6; cos = 4/5 = 0,8; tan = 3/4 = 0,75.",
    },
    {
      title: "Ángulos notables",
      text: "Conviene memorizar: sen 30° = 1/2, cos 60° = 1/2, tan 45° = 1, sen 90° = 1 y cos 0° = 1.",
      deeper: "sen 45° = cos 45° = √2/2 ≈ 0,707 y sen 60° = cos 30° = √3/2 ≈ 0,866. Además, siempre se cumple sen²α + cos²α = 1.",
    },
    {
      title: "Calcular alturas",
      text: "Si estás a 20 m de un edificio y ves la azotea con un ángulo de elevación de 30°, la altura es 20 · tan 30° ≈ 20 · 0,577 ≈ 11,5 m (medida desde tus ojos).",
    },
  ],
  diagram: {
    id: "root",
    label: "Triángulo rectángulo",
    detail: "Un ángulo recto y dos agudos",
    children: [
      {
        id: "lados",
        label: "Lados",
        detail: "Vistos desde el ángulo α",
        children: [
          { id: "hip", label: "Hipotenusa", detail: "Frente al ángulo recto" },
          { id: "op", label: "Cateto opuesto", detail: "Frente a α" },
          { id: "ady", label: "Cateto adyacente", detail: "Junto a α" },
        ],
      },
      {
        id: "razones",
        label: "Razones",
        detail: "Cocientes entre lados",
        children: [
          { id: "sen", label: "Seno", detail: "Opuesto / hipotenusa" },
          { id: "cos", label: "Coseno", detail: "Adyacente / hipotenusa" },
          { id: "tan", label: "Tangente", detail: "Opuesto / adyacente" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "La rampa", narration: "Una rampa forma un triángulo rectángulo con el suelo y la pared. La rampa es la hipotenusa.", scene: "🛹📐" },
    { title: "Elegir el ángulo", narration: "Miramos el ángulo α que forma la rampa con el suelo. La altura es el cateto opuesto y el suelo es el adyacente.", scene: "👀📐↗️" },
    { title: "Comparar lados", narration: "Si dividimos altura entre largo de la rampa obtenemos el seno de α. Mientras más empinada, mayor es el seno.", scene: "📏➗📏" },
    { title: "Medir sin subir", narration: "Con un ángulo y una distancia, la tangente nos da la altura de un árbol o un edificio sin necesidad de escalarlo.", scene: "🌳📐🏢" },
  ],
  analogies: {
    default: "Las razones trigonométricas son como la 'receta' de un ángulo: no importa si el triángulo es grande o pequeño, la proporción entre sus lados es siempre la misma.",
    sports: "En el béisbol, el ángulo con que sale la pelota decide cuánto sube y cuánto avanza: el seno mide la parte vertical y el coseno la horizontal.",
    videogames: "Los videojuegos usan seno y coseno para mover personajes en diagonal y calcular hacia dónde apunta un disparo.",
    nature: "Los topógrafos usan ángulos y trigonometría para estimar la altura de montañas y cascadas como el Salto Ángel, el salto de agua más alto del mundo.",
    technology: "Los GPS y las antenas usan trigonometría para calcular posiciones y distancias.",
    art: "Los artistas usan la perspectiva, que se basa en ángulos y proporciones, para que un dibujo plano parezca tener profundidad.",
  },
  glossary: [
    { term: "Hipotenusa", definition: "Lado opuesto al ángulo recto en un triángulo rectángulo; es el lado más largo." },
    { term: "Cateto", definition: "Cada uno de los dos lados que forman el ángulo recto." },
    { term: "Seno", definition: "Razón entre el cateto opuesto y la hipotenusa." },
    { term: "Coseno", definition: "Razón entre el cateto adyacente y la hipotenusa." },
    { term: "Tangente", definition: "Razón entre el cateto opuesto y el cateto adyacente." },
    { term: "Ángulo de elevación", definition: "Ángulo entre la horizontal y la línea de visión hacia un objeto más alto." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "En un triángulo rectángulo, ¿cuál es la hipotenusa?",
      options: ["El lado más corto", "El lado opuesto al ángulo recto", "Cualquier cateto"],
      correctIndex: 1,
      explanation: "¡Correcto! La hipotenusa está frente al ángulo recto y es el lado más largo.",
      concept: "hipotenusa",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "El seno de un ángulo agudo α es:",
      options: ["Adyacente / hipotenusa", "Opuesto / adyacente", "Opuesto / hipotenusa", "Hipotenusa / opuesto"],
      correctIndex: 2,
      explanation: "sen α = cateto opuesto ÷ hipotenusa (la 'SOH' de SOH-CAH-TOA).",
      concept: "Seno, coseno y tangente",
    },
    {
      id: "q2",
      prompt: "Un triángulo rectángulo tiene catetos de 6 y 8 e hipotenusa 10. Para el ángulo opuesto al lado 6, ¿cuánto vale el coseno?",
      options: ["0,6", "0,75", "0,8", "1,33"],
      correctIndex: 2,
      explanation: "El cateto adyacente es 8: cos = 8/10 = 0,8.",
      concept: "Seno, coseno y tangente",
    },
    {
      id: "q3",
      prompt: "¿Cuánto vale tan 45°?",
      options: ["0", "0,5", "1", "No existe"],
      correctIndex: 2,
      explanation: "En un ángulo de 45° los dos catetos son iguales, así que opuesto/adyacente = 1.",
      concept: "Ángulos notables",
    },
    {
      id: "q4",
      prompt: "¿Cuánto vale sen 30°?",
      options: ["1/2", "√3/2", "1", "√2/2"],
      correctIndex: 0,
      explanation: "sen 30° = 1/2 = 0,5: el cateto opuesto a 30° mide la mitad de la hipotenusa.",
      concept: "Ángulos notables",
    },
    {
      id: "q5",
      prompt: "Una escalera de 10 m se apoya en una pared formando 30° con el suelo. ¿A qué altura llega?",
      options: ["5 m", "8,66 m", "10 m", "20 m"],
      correctIndex: 0,
      explanation: "altura = 10 · sen 30° = 10 · 0,5 = 5 m.",
      concept: "Calcular alturas",
    },
  ],
  explainPrompt: "Explica con tus palabras qué son el seno, el coseno y la tangente, y cómo usarías una de ellas para calcular la altura de un árbol.",
  explainChecklist: ["triángulo rectángulo", "cateto opuesto", "cateto adyacente", "hipotenusa", "ángulo"],
  deeperResources: [
    { title: "Trigonometría (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Trigonometr%C3%ADa", kind: "reference", source: "Wikipedia" },
    { title: "Ejercicios de razones trigonométricas", url: "https://es.khanacademy.org/search?page_search_query=razones+trigonom%C3%A9tricas", kind: "interactive", source: "Khan Academy" },
    { title: "Videos educativos sobre seno, coseno y tangente", url: "https://www.youtube.com/results?search_query=razones+trigonom%C3%A9tricas+seno+coseno+tangente", kind: "video", source: "YouTube (búsqueda)" },
  ],
  sources: [{ title: "Trigonometría", url: "https://es.wikipedia.org/wiki/Trigonometr%C3%ADa", kind: "reference", source: "Wikipedia" }],
  relatedTopicIds: ["math-pythagorean-theorem", "math-similarity", "math-trig-identities"],
};
