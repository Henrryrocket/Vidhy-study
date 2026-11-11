import type { CurriculumArea } from "../types";
import { reliefNaturalRegions } from "./reliefNaturalRegions";
import { independence } from "./independence";
import { climateHydrography } from "./climateHydrography";
import { colonialVenezuela } from "./colonialVenezuela";

export const geographyHistoryCitizenship: CurriculumArea = {
  subjectId: "geography-history-citizenship",
  topics: [
    { id: "ghc-geographic-space", title: "El espacio geográfico y sus elementos", year: 1, emoji: "🌎", keywords: ["espacio geográfico", "paisaje", "elementos naturales", "elementos sociales", "geografía"] },
    { id: "ghc-maps-cartography", title: "Mapas, escalas y coordenadas geográficas", year: 1, emoji: "🧭", keywords: ["mapa", "escala", "latitud", "longitud", "coordenadas", "cartografía", "puntos cardinales"] },
    { id: "ghc-relief-natural-regions", title: "El relieve y las regiones naturales de Venezuela", year: 1, emoji: "⛰️", keywords: ["relieve", "regiones naturales", "Andes", "Llanos", "Guayana", "Pico Bolívar", "tepuyes"] },
    { id: "ghc-indigenous-peoples", title: "Los pueblos originarios de Venezuela", year: 1, emoji: "🪶", keywords: ["indígenas", "pueblos originarios", "aborígenes", "wayuu", "pemón", "warao", "caribes"] },
    { id: "ghc-family-community", title: "La familia, la comunidad y la convivencia ciudadana", year: 1, emoji: "🏘️", keywords: ["familia", "comunidad", "ciudadanía", "convivencia", "normas", "deberes"] },
    { id: "ghc-climate-hydrography", title: "Clima e hidrografía de Venezuela", year: 2, emoji: "🌦️", keywords: ["clima", "hidrografía", "ríos", "Orinoco", "cuencas", "lluvia", "sequía"] },
    { id: "ghc-ancient-civilizations", title: "Las civilizaciones antiguas", year: 2, emoji: "🏛️", keywords: ["Mesopotamia", "Egipto", "Grecia", "Roma", "civilizaciones", "antigüedad", "historia antigua"] },
    { id: "ghc-colonial-venezuela", title: "La Venezuela colonial", year: 2, emoji: "⛪", keywords: ["colonia", "conquista", "Capitanía General", "encomienda", "cacao", "sociedad colonial"] },
    { id: "ghc-population-venezuela", title: "La población venezolana", year: 2, emoji: "👥", keywords: ["población", "demografía", "censo", "mestizaje", "migración", "ciudades"] },
    { id: "ghc-local-government", title: "El municipio y el poder local", year: 2, emoji: "🏛️", keywords: ["municipio", "alcaldía", "concejo municipal", "parroquia", "poder local", "gobierno local"] },
    { id: "ghc-independence", title: "La Independencia de Venezuela (1810–1821)", year: 3, emoji: "⚔️", keywords: ["independencia", "19 de abril", "5 de julio", "Carabobo", "Bolívar", "emancipación", "Miranda"] },
    { id: "ghc-world-revolutions", title: "Las revoluciones del mundo moderno", year: 3, emoji: "🗽", keywords: ["Revolución Francesa", "Revolución Industrial", "independencia de Estados Unidos", "Ilustración", "revoluciones"] },
    { id: "ghc-gran-colombia", title: "La Gran Colombia y la separación de 1830", year: 3, emoji: "🗺️", keywords: ["Gran Colombia", "Congreso de Angostura", "Cúcuta", "1830", "Páez", "separación"] },
    { id: "ghc-economic-activities", title: "Las actividades económicas de Venezuela", year: 3, emoji: "🏭", keywords: ["economía", "sectores económicos", "agricultura", "industria", "servicios", "producción"] },
    { id: "ghc-environment-resources", title: "Los recursos naturales y el ambiente", year: 3, emoji: "🌳", keywords: ["recursos naturales", "ambiente", "renovables", "no renovables", "parques nacionales", "contaminación"] },
    { id: "ghc-19th-century-venezuela", title: "Venezuela en el siglo XIX: caudillismo y Guerra Federal", year: 4, emoji: "🐎", keywords: ["siglo XIX", "caudillismo", "Guerra Federal", "Guzmán Blanco", "abolición de la esclavitud", "república"] },
    { id: "ghc-oil-economy", title: "El petróleo y la Venezuela del siglo XX", year: 4, emoji: "🛢️", keywords: ["petróleo", "Zumaque", "economía petrolera", "renta petrolera", "OPEP", "siglo XX"] },
    { id: "ghc-world-wars", title: "Las guerras mundiales", year: 4, emoji: "🌐", keywords: ["Primera Guerra Mundial", "Segunda Guerra Mundial", "fascismo", "Holocausto", "ONU", "guerra"] },
    { id: "ghc-latin-america-geography", title: "Geografía de América Latina y el Caribe", year: 4, emoji: "🌎", keywords: ["América Latina", "Caribe", "regiones", "países", "Amazonía", "cordillera"] },
    { id: "ghc-constitution-state", title: "El Estado venezolano y la Constitución", year: 4, emoji: "📜", keywords: ["Estado", "Constitución", "poderes públicos", "república", "leyes", "ciudadanía"] },
    { id: "ghc-twentieth-century-politics", title: "Venezuela en el siglo XX: procesos políticos y sociales", year: 5, emoji: "🗳️", keywords: ["siglo XX", "democracia", "voto", "1958", "Constitución de 1961", "procesos políticos"] },
    { id: "ghc-globalization", title: "Globalización e integración regional", year: 5, emoji: "🌐", keywords: ["globalización", "integración", "comercio internacional", "bloques económicos", "Mercosur", "CAN"] },
    { id: "ghc-geopolitics", title: "Geopolítica y relaciones internacionales", year: 5, emoji: "🧭", keywords: ["geopolítica", "relaciones internacionales", "ONU", "organismos internacionales", "diplomacia"] },
    { id: "ghc-sustainable-development", title: "Desarrollo sustentable y cambio climático", year: 5, emoji: "♻️", keywords: ["desarrollo sustentable", "sostenible", "cambio climático", "calentamiento global", "ODS"] },
    { id: "ghc-citizen-participation", title: "Participación ciudadana y derechos", year: 5, emoji: "🙋", keywords: ["participación ciudadana", "derechos", "deberes", "voto", "consejos comunales", "democracia participativa"] },
  ],
  lessons: [reliefNaturalRegions, climateHydrography, colonialVenezuela, independence],
};
