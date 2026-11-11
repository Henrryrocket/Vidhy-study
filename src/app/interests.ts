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

/** Venezuelan naming: 7.º grado is 1.er año of Educación Media General. */
export const GRADES: { value: number; label: string }[] = [
  { value: 5, label: "5.º grado (primaria)" },
  { value: 6, label: "6.º grado (primaria)" },
  { value: 7, label: "1.er año" },
  { value: 8, label: "2.º año" },
  { value: 9, label: "3.er año" },
  { value: 10, label: "4.º año" },
  { value: 11, label: "5.º año" },
  { value: 12, label: "Ya me gradué / otro" },
];
