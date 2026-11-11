import type { Lesson } from "../../../../domain/lesson";

export const humanNutrition: Lesson = {
  id: "nat-human-nutrition",
  title: "La nutrición humana y la alimentación sana",
  subjectId: "natural-sciences",
  emoji: "🥗",
  year: 2,
  keywords: ["digestión", "aparato digestivo", "nutrientes", "alimentación", "trompo de los alimentos", "vitaminas", "proteínas", "estómago", "intestino"],
  hook: "Una arepa que te comes en el desayuno termina convertida en energía para jugar, pensar y crecer. Pero antes recorre varios metros de tubo dentro de tu cuerpo. ¿Qué le pasa en ese viaje?",
  summary:
    "La nutrición es el conjunto de procesos con los que el cuerpo obtiene y usa los nutrientes de los alimentos. El aparato digestivo rompe los alimentos en partes pequeñas (digestión), las pasa a la sangre (absorción) y elimina lo que no sirve. Los nutrientes son carbohidratos, proteínas, lípidos (grasas), vitaminas, minerales y agua; cada uno cumple una función. Una alimentación sana combina alimentos variados en cantidades adecuadas, como propone el Trompo de los Alimentos venezolano.",
  keyPoints: [
    {
      title: "Los nutrientes y su función",
      text: "Carbohidratos (arroz, pan, arepa, plátano) y grasas dan energía; las proteínas (carne, pollo, huevo, caraotas) construyen y reparan tejidos; vitaminas y minerales (frutas y verduras) regulan el funcionamiento del cuerpo; y el agua participa en casi todo.",
      deeper: "Las caraotas negras con arroz, típicas del pabellón criollo, se complementan: juntas aportan proteínas vegetales más completas que cada una por separado.",
    },
    {
      title: "El recorrido del alimento",
      text: "Boca → faringe → esófago → estómago → intestino delgado → intestino grueso → ano. Además ayudan las glándulas anexas: glándulas salivales, hígado y páncreas.",
    },
    {
      title: "Digestión mecánica y química",
      text: "La digestión mecánica tritura y mezcla (dientes, lengua, movimientos del estómago). La química usa jugos con enzimas que rompen las moléculas grandes en pequeñas.",
      deeper: "La saliva contiene amilasa, que empieza a digerir el almidón. En el estómago, el ácido clorhídrico y la pepsina actúan sobre las proteínas. La bilis del hígado no es una enzima: separa las grasas en gotitas para que las enzimas del páncreas las digieran mejor.",
    },
    {
      title: "Absorción en el intestino delgado",
      text: "El intestino delgado mide unos 6 a 7 metros. Sus paredes tienen millones de pliegues diminutos (vellosidades) que pasan los nutrientes a la sangre, que los reparte a todas las células.",
      deeper: "En el intestino grueso se absorbe sobre todo agua y viven bacterias beneficiosas (microbiota) que ayudan a la digestión; lo que queda se elimina como heces.",
    },
    {
      title: "Comer sano",
      text: "El Trompo de los Alimentos, del Instituto Nacional de Nutrición de Venezuela, agrupa los alimentos por colores y recuerda que debemos comer variado, tomar agua y mantenernos activos. Conviene limitar los refrescos, chucherías y frituras.",
    },
  ],
  diagram: {
    id: "root",
    label: "Nutrición humana",
    detail: "Obtener y usar los nutrientes",
    children: [
      {
        id: "nutrientes",
        label: "Nutrientes",
        detail: "Lo que necesitamos",
        children: [
          { id: "energeticos", label: "Energéticos", detail: "Carbohidratos y grasas" },
          { id: "constructores", label: "Constructores", detail: "Proteínas" },
          { id: "reguladores", label: "Reguladores", detail: "Vitaminas, minerales y agua" },
        ],
      },
      {
        id: "digestivo",
        label: "Aparato digestivo",
        detail: "Cómo los obtenemos",
        children: [
          { id: "tubo", label: "Tubo digestivo", detail: "Boca, esófago, estómago, intestinos" },
          { id: "glandulas", label: "Glándulas anexas", detail: "Salivales, hígado y páncreas" },
        ],
      },
    ],
  },
  miniClass: [
    { title: "En la boca", narration: "Muerdes una arepa: los dientes la trituran y la saliva empieza a digerir el almidón. Se forma el bolo alimenticio.", scene: "🫓😋🦷" },
    { title: "Rumbo al estómago", narration: "El bolo baja por el esófago empujado por movimientos musculares. En el estómago se mezcla con jugos ácidos.", scene: "⬇️🫃🧪" },
    { title: "La gran absorción", narration: "En el intestino delgado, la bilis y los jugos del páncreas terminan la digestión y los nutrientes pasan a la sangre.", scene: "🌀🩸✨" },
    { title: "El final del viaje", narration: "En el intestino grueso se recupera el agua, y lo que no sirve se elimina. ¡Los nutrientes ya llegan a tus células!", scene: "💧🚽✅" },
  ],
  analogies: {
    default: "El aparato digestivo es como una planta de reciclaje: recibe material grande, lo tritura, lo separa en piezas útiles que se reparten y desecha lo que no sirve.",
    sports: "Los carbohidratos son el combustible para el partido, las proteínas son el entrenamiento que reconstruye el músculo y el agua es la hidratación sin la cual nadie aguanta los 90 minutos.",
    videogames: "Comer variado es como equilibrar tus estadísticas: energía (carbohidratos), defensa y construcción (proteínas) y bonificaciones que hacen que todo funcione bien (vitaminas y minerales).",
    cooking: "Tu cuerpo hace lo mismo que la cocina, pero al revés: en la cocina juntas ingredientes para hacer una hallaca; tu cuerpo la desarma en sus ingredientes más pequeños para aprovecharlos.",
    technology: "Es como una cadena de montaje funcionando en reversa: cada estación (boca, estómago, intestino) desmonta un poco más hasta dejar piezas que caben por los \"cables\" de la sangre.",
    animals: "Las vacas tienen un estómago con cuatro compartimentos para digerir la hierba; nosotros tenemos uno solo porque comemos alimentos más fáciles de digerir.",
  },
  glossary: [
    { term: "Nutriente", definition: "Sustancia de los alimentos que el cuerpo usa para obtener energía, crecer o funcionar." },
    { term: "Digestión", definition: "Transformación de los alimentos en sustancias pequeñas que el cuerpo puede absorber." },
    { term: "Enzima", definition: "Molécula que acelera una reacción química, como romper los alimentos." },
    { term: "Absorción", definition: "Paso de los nutrientes desde el intestino a la sangre." },
    { term: "Vellosidades intestinales", definition: "Pliegues diminutos del intestino delgado que aumentan la superficie de absorción." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "Antes de empezar: ¿dónde crees que empieza la digestión?",
      options: ["En la boca", "En el estómago", "En el intestino"],
      correctIndex: 0,
      explanation: "¡Bien! Empieza en la boca, con los dientes y la saliva.",
      concept: "tubo",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Qué nutriente sirve principalmente para construir y reparar los tejidos?",
      options: ["Los carbohidratos", "Las proteínas", "El agua", "Las grasas"],
      correctIndex: 1,
      explanation: "Las proteínas son los nutrientes constructores: forman músculos, piel y muchas otras estructuras.",
      concept: "Nutrientes",
    },
    {
      id: "q2",
      prompt: "¿En qué órgano se absorbe la mayor parte de los nutrientes?",
      options: ["El estómago", "El esófago", "El intestino delgado", "El intestino grueso"],
      correctIndex: 2,
      explanation: "Las vellosidades del intestino delgado pasan los nutrientes a la sangre.",
      concept: "Absorción",
    },
    {
      id: "q3",
      prompt: "¿Cuál es el orden correcto del recorrido del alimento?",
      options: [
        "Boca → estómago → esófago → intestino delgado",
        "Boca → esófago → estómago → intestino delgado → intestino grueso",
        "Boca → intestino grueso → estómago → intestino delgado",
        "Esófago → boca → estómago → intestino grueso",
      ],
      correctIndex: 1,
      explanation: "El alimento pasa por la boca, el esófago, el estómago, el intestino delgado y el intestino grueso.",
      concept: "Recorrido",
    },
    {
      id: "q4",
      prompt: "Masticar es un ejemplo de digestión…",
      options: ["Química", "Mecánica", "Celular", "Respiratoria"],
      correctIndex: 1,
      explanation: "Triturar y mezclar el alimento es digestión mecánica; las enzimas hacen la digestión química.",
      concept: "Digestión mecánica y química",
    },
    {
      id: "q5",
      prompt: "¿Qué función cumple la bilis que produce el hígado?",
      options: [
        "Digiere las proteínas",
        "Separa las grasas en gotitas pequeñas",
        "Absorbe el agua",
        "Produce la saliva",
      ],
      correctIndex: 1,
      explanation: "La bilis emulsiona las grasas para que las enzimas del páncreas puedan digerirlas.",
      concept: "Digestión mecánica y química",
    },
  ],
  explainPrompt: "Explica con tus palabras el viaje de una arepa desde que la muerdes hasta que sus nutrientes llegan a tus células.",
  explainChecklist: ["boca", "estómago", "intestino delgado", "nutrientes", "sangre"],
  deeperResources: [
    { title: "Aparato digestivo (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Aparato_digestivo", kind: "reference", source: "Wikipedia" },
    { title: "Lecciones sobre el sistema digestivo", url: "https://es.khanacademy.org/search?page_search_query=sistema%20digestivo", kind: "interactive", source: "Khan Academy" },
    { title: "Videos educativos sobre la digestión", url: "https://www.youtube.com/results?search_query=aparato+digestivo+y+digesti%C3%B3n+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
    { title: "Información de salud sobre nutrición", url: "https://medlineplus.gov/spanish/", kind: "article", source: "MedlinePlus (Biblioteca Nacional de Medicina de EE. UU.)" },
  ],
  sources: [
    { title: "Aparato digestivo", url: "https://es.wikipedia.org/wiki/Aparato_digestivo", kind: "reference", source: "Wikipedia" },
    { title: "Nutrición", url: "https://es.wikipedia.org/wiki/Nutrici%C3%B3n", kind: "reference", source: "Wikipedia" },
    { title: "MedlinePlus en español", url: "https://medlineplus.gov/spanish/", kind: "reference", source: "U.S. National Library of Medicine" },
  ],
  relatedTopicIds: ["nat-health-prevention", "nat-energy-transformations", "photosynthesis"],
};
