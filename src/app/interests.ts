import type { Interest } from "../domain/lesson";

export const INTERESTS: { id: Interest; label: string; emoji: string }[] = [
  { id: "sports", label: "Deportes", emoji: "⚽" },
  { id: "videogames", label: "Videojuegos", emoji: "🎮" },
  { id: "music", label: "Música", emoji: "🎵" },
  { id: "art", label: "Arte y dibujo", emoji: "🎨" },
  { id: "animals", label: "Animales", emoji: "🐾" },
  { id: "technology", label: "Tecnología", emoji: "🤖" },
  { id: "cooking", label: "Cocina", emoji: "🍳" },
  { id: "nature", label: "Naturaleza", emoji: "🌿" },
];

export const GRADES: { value: number; label: string }[] = [
  { value: 5, label: "5.º grado" },
  { value: 6, label: "6.º grado" },
  { value: 7, label: "7.º grado (1.º secundaria)" },
  { value: 8, label: "8.º grado (2.º secundaria)" },
  { value: 9, label: "9.º grado (3.º secundaria)" },
  { value: 10, label: "10.º grado (4.º secundaria)" },
  { value: 11, label: "11.º grado (5.º secundaria)" },
  { value: 12, label: "12.º grado" },
];
