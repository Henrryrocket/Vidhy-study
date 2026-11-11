import type { Lesson } from "../../../../domain/lesson";

export const mendelianGenetics: Lesson = {
  id: "bio-mendelian-genetics",
  title: "Genética y herencia: las leyes de Mendel",
  subjectId: "biology",
  emoji: "🧬",
  year: 5,
  keywords: ["genética", "herencia", "Mendel", "gen", "alelo", "dominante", "recesivo", "genotipo", "fenotipo", "cuadro de Punnett"],
  hook: "¿Por qué tienes los ojos de tu mamá pero la risa de tu abuelo? ¿Y por qué dos padres de ojos oscuros pueden tener un hijo de ojos claros? Un monje que cultivaba guisantes descubrió las reglas hace más de 150 años.",
  summary:
    "La genética estudia cómo se transmiten las características de padres a hijos. Las instrucciones están en los genes, segmentos de ADN ubicados en los cromosomas. Cada gen puede tener variantes llamadas alelos; recibimos un alelo de cada progenitor. Gregor Mendel, cruzando plantas de guisante, descubrió que algunos alelos son dominantes y otros recesivos, y formuló las leyes básicas de la herencia. Con el cuadro de Punnett podemos predecir las probabilidades de cada resultado.",
  keyPoints: [
    {
      title: "Genes, alelos y cromosomas",
      text: "Un gen es un fragmento de ADN con la información para una característica. Los alelos son las versiones de un gen (por ejemplo, para el color de la flor: morado o blanco). Los genes están en los cromosomas; los humanos tenemos 46, organizados en 23 pares.",
      deeper: "En cada par de cromosomas, uno viene de la madre y otro del padre. Por eso tenemos dos alelos de cada gen (salvo algunos genes de los cromosomas sexuales en los varones, que tienen X y Y).",
    },
    {
      title: "Dominante y recesivo",
      text: "Un alelo dominante (se escribe con mayúscula, A) se expresa aunque haya una sola copia. Un alelo recesivo (minúscula, a) solo se expresa si hay dos copias (aa).",
    },
    {
      title: "Genotipo y fenotipo",
      text: "El genotipo es la combinación de alelos (AA, Aa o aa). El fenotipo es la característica que se observa (por ejemplo, flor morada o blanca). AA y aa son homocigotos; Aa es heterocigoto.",
      deeper: "El fenotipo depende del genotipo y también del ambiente: la estatura, por ejemplo, depende de muchos genes y de la alimentación.",
    },
    {
      title: "Las leyes de Mendel",
      text: "1.ª ley (uniformidad): al cruzar dos razas puras distintas (AA × aa), todos los hijos son iguales (Aa). 2.ª ley (segregación): los dos alelos se separan al formar los gametos, así que en Aa × Aa reaparece el carácter recesivo. 3.ª ley (transmisión independiente): genes de caracteres distintos se heredan por separado.",
      deeper: "La 3.ª ley se cumple para genes en cromosomas diferentes; genes muy cercanos en el mismo cromosoma tienden a heredarse juntos (ligamiento).",
    },
    {
      title: "El cuadro de Punnett",
      text: "Es una tabla que combina los gametos de cada progenitor. En Aa × Aa salen 1 AA : 2 Aa : 1 aa; es decir, 3 de cada 4 muestran el carácter dominante y 1 de cada 4 el recesivo (proporción 3:1).",
    },
  ],
  diagram: {
    id: "root",
    label: "Herencia",
    detail: "Transmisión de características",
    children: [
      {
        id: "material",
        label: "Material genético",
        detail: "Dónde está la información",
        children: [
          { id: "cromosomas", label: "Cromosomas", detail: "46 en humanos (23 pares)" },
          { id: "genes", label: "Genes y alelos", detail: "Versiones de cada instrucción" },
        ],
      },
      {
        id: "expresion",
        label: "Expresión",
        detail: "Qué se ve",
        children: [
          { id: "genotipo", label: "Genotipo", detail: "AA, Aa o aa" },
          { id: "fenotipo", label: "Fenotipo", detail: "Característica observable" },
        ],
      },
      {
        id: "leyes",
        label: "Leyes de Mendel",
        detail: "Uniformidad, segregación y transmisión independiente",
      },
    ],
  },
  miniClass: [
    { title: "El jardín de Mendel", narration: "Gregor Mendel cruza plantas de guisante de flores moradas puras (AA) con plantas de flores blancas puras (aa).", scene: "👨‍🌾🌸🌱" },
    { title: "Primera generación", narration: "¡Todas las hijas tienen flores moradas! Son Aa: el alelo morado domina y el blanco queda escondido.", scene: "🌸🌸🌸" },
    { title: "Segunda generación", narration: "Mendel cruza esas plantas Aa entre sí. Reaparecen flores blancas: más o menos 1 de cada 4.", scene: "🌸🌸🌸🤍" },
    { title: "El cuadro de Punnett", narration: "Con una tabla de 2 × 2 combinamos A y a de cada progenitor: AA, Aa, Aa, aa. Así se explica la proporción 3:1.", scene: "🔲🧬📊" },
  ],
  analogies: {
    default: "Los genes son como recetas en un libro que heredas: recibes una copia de cada receta de tu mamá y otra de tu papá; los alelos son las versiones distintas de la misma receta.",
    sports: "Es como alinear a un equipo con dos jugadores por posición: si uno es titular indiscutible (dominante), juega él; el suplente (recesivo) solo entra si los dos de esa posición son suplentes.",
    videogames: "Es como crear un personaje combinando dos plantillas: por cada rasgo recibes una opción de cada una, y las opciones \"dominantes\" se muestran aunque la otra esté guardada en tu inventario.",
    music: "Imagina dos audífonos: si uno suena fuerte (dominante) y otro bajito (recesivo), oyes el fuerte. Solo oyes el bajito si ambos lados lo tocan.",
    animals: "En los perros, el pelaje negro suele dominar al marrón: dos perros negros portadores (Aa) pueden tener un cachorro marrón (aa).",
    cooking: "Si mezclas colorante rojo intenso con agua clara, domina el rojo; para obtener un vaso claro necesitas que ambos ingredientes sean claros.",
    nature: "Las orquídeas de distintos colores que crecen en los bosques de Venezuela muestran cómo variantes de los mismos genes producen flores diferentes.",
  },
  glossary: [
    { term: "Gen", definition: "Fragmento de ADN que contiene la información para una característica." },
    { term: "Alelo", definition: "Cada una de las versiones posibles de un gen." },
    { term: "Genotipo", definition: "Combinación de alelos que tiene un individuo para un gen." },
    { term: "Fenotipo", definition: "Característica observable que resulta del genotipo y del ambiente." },
    { term: "Homocigoto", definition: "Individuo con dos alelos iguales para un gen (AA o aa)." },
    { term: "Heterocigoto", definition: "Individuo con dos alelos distintos para un gen (Aa)." },
  ],
  warmUp: [
    {
      id: "w1",
      prompt: "Antes de empezar: ¿de quién heredas tus genes?",
      options: ["Solo de tu mamá", "Solo de tu papá", "La mitad de cada uno"],
      correctIndex: 2,
      explanation: "¡Correcto! Recibes un cromosoma de cada par de cada progenitor.",
      concept: "cromosomas",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "¿Cuántos cromosomas tiene una célula del cuerpo humano (no reproductora)?",
      options: ["23", "46", "48", "92"],
      correctIndex: 1,
      explanation: "Tenemos 46 cromosomas, organizados en 23 pares. Los óvulos y espermatozoides tienen 23.",
      concept: "Cromosomas",
    },
    {
      id: "q2",
      prompt: "Una planta tiene genotipo Aa. ¿Cómo se llama ese genotipo?",
      options: ["Homocigoto dominante", "Homocigoto recesivo", "Heterocigoto", "Fenotipo"],
      correctIndex: 2,
      explanation: "Heterocigoto significa que tiene dos alelos distintos para el mismo gen.",
      concept: "Genotipo",
    },
    {
      id: "q3",
      prompt: "Se cruzan AA × aa. ¿Qué genotipo tendrán todos los hijos?",
      options: ["AA", "Aa", "aa", "Mitad AA y mitad aa"],
      correctIndex: 1,
      explanation: "Cada hijo recibe A de un progenitor y a del otro: todos son Aa (1.ª ley de Mendel, uniformidad).",
      concept: "Leyes de Mendel",
    },
    {
      id: "q4",
      prompt: "En el cruce Aa × Aa, ¿qué proporción de los hijos mostrará el carácter recesivo?",
      options: ["Ninguno", "1 de cada 4", "2 de cada 4", "3 de cada 4"],
      correctIndex: 1,
      explanation: "El cuadro de Punnett da AA, Aa, Aa y aa: solo aa (1 de cada 4) muestra el carácter recesivo.",
      concept: "Cuadro de Punnett",
    },
    {
      id: "q5",
      prompt: "Una persona tiene un alelo para un carácter recesivo pero no lo manifiesta. ¿Cuál es su genotipo?",
      options: ["aa", "AA", "Aa", "No se puede tener ese alelo"],
      correctIndex: 2,
      explanation: "Con Aa el alelo dominante se expresa y el recesivo queda \"escondido\": es portador.",
      concept: "Dominante y recesivo",
    },
  ],
  explainPrompt: "Explica con tus palabras por qué dos padres que tienen un carácter dominante pueden tener un hijo con el carácter recesivo. Usa un cuadro de Punnett.",
  explainChecklist: ["alelo", "dominante", "recesivo", "heterocigoto", "Punnett"],
  deeperResources: [
    { title: "Leyes de Mendel (artículo enciclopédico)", url: "https://es.wikipedia.org/wiki/Leyes_de_Mendel", kind: "reference", source: "Wikipedia" },
    { title: "Lecciones y ejercicios de herencia mendeliana", url: "https://es.khanacademy.org/search?page_search_query=herencia%20mendeliana", kind: "interactive", source: "Khan Academy" },
    { title: "Videos educativos sobre las leyes de Mendel", url: "https://www.youtube.com/results?search_query=leyes+de+Mendel+explicaci%C3%B3n", kind: "video", source: "YouTube (búsqueda)" },
    { title: "Información de salud sobre genética", url: "https://medlineplus.gov/spanish/", kind: "article", source: "MedlinePlus (Biblioteca Nacional de Medicina de EE. UU.)" },
  ],
  sources: [
    { title: "Leyes de Mendel", url: "https://es.wikipedia.org/wiki/Leyes_de_Mendel", kind: "reference", source: "Wikipedia" },
    { title: "Genética", url: "https://es.wikipedia.org/wiki/Gen%C3%A9tica", kind: "reference", source: "Wikipedia" },
  ],
  relatedTopicIds: ["bio-dna-proteins", "bio-cell-division", "bio-evolution"],
};
