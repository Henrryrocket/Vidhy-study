import type { QuizQuestion } from "./lesson";

export type Answers = Record<string, number>;
export type Mastery = "mastered" | "almost" | "review";

export interface QuizResult {
  correct: number;
  total: number;
  percent: number;
  weakConcepts: string[];
}

export function scoreQuiz(questions: QuizQuestion[], answers: Answers): QuizResult {
  const wrong = questions.filter((q) => answers[q.id] !== q.correctIndex);
  const correct = questions.length - wrong.length;
  return {
    correct,
    total: questions.length,
    percent: questions.length === 0 ? 0 : Math.round((correct / questions.length) * 100),
    weakConcepts: [...new Set(wrong.map((q) => q.concept))],
  };
}

export function masteryFor(percent: number): Mastery {
  if (percent >= 80) return "mastered";
  if (percent >= 50) return "almost";
  return "review";
}
