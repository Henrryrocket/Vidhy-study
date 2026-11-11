/** Año de Educación Media General (Venezuela): 1.º to 5.º año. */
export type SchoolYear = 1 | 2 | 3 | 4 | 5;

export const SCHOOL_YEARS: SchoolYear[] = [1, 2, 3, 4, 5];

export type SubjectId = string;

/** An "área de formación" of the official study plan. */
export interface Subject {
  id: SubjectId;
  name: string;
  emoji: string;
  color: string;
  description: string;
  /** Weekly hours per año, per the official plan. Años not listed are not taught. */
  hoursByYear: Partial<Record<SchoolYear, number>>;
}

export interface TopicInfo {
  id: string;
  title: string;
  subjectId: SubjectId;
  /** Año where the topic is taught. */
  year: SchoolYear;
  keywords: string[];
  emoji: string;
}

export interface TopicSummary extends TopicInfo {
  /** False for catalog entries whose lesson is not written yet ("Próximamente"). */
  hasLesson: boolean;
}

export interface KeyPoint {
  title: string;
  text: string;
  /** Extra depth shown to advanced readers or on demand. */
  deeper?: string;
}

export interface DiagramNode {
  id: string;
  label: string;
  detail: string;
  children?: DiagramNode[];
}

export interface MiniClassStep {
  title: string;
  narration: string;
  /** Name of the illustration rendered by the UI. */
  scene: string;
}

export type Interest = "sports" | "videogames" | "music" | "art" | "animals" | "technology" | "cooking" | "nature";

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  concept: string;
}

export interface Resource {
  title: string;
  url: string;
  kind: "article" | "video" | "interactive" | "reference";
  source: string;
}

export interface Lesson extends TopicInfo {
  hook: string;
  summary: string;
  keyPoints: KeyPoint[];
  diagram: DiagramNode;
  miniClass: MiniClassStep[];
  analogies: Partial<Record<Interest, string>> & { default: string };
  glossary: { term: string; definition: string }[];
  warmUp: QuizQuestion[];
  quiz: QuizQuestion[];
  explainPrompt: string;
  explainChecklist: string[];
  deeperResources: Resource[];
  sources: Resource[];
  relatedTopicIds: string[];
}
