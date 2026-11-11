export type SubjectId = "biology" | "math" | "earth-science" | "history" | "physics" | "language";

export interface Subject {
  id: SubjectId;
  name: string;
  emoji: string;
  color: string;
}

export interface TopicSummary {
  id: string;
  title: string;
  subjectId: SubjectId;
  keywords: string[];
  emoji: string;
  /** Lowest school grade (1-12) the article is written for. */
  minGrade: number;
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

export interface Lesson extends TopicSummary {
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
