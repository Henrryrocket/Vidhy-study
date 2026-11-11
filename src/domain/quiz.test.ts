import { scoreQuiz, masteryFor } from "./quiz";
import type { QuizQuestion } from "./lesson";

const questions: QuizQuestion[] = [
  { id: "q1", prompt: "A?", options: ["a", "b"], correctIndex: 0, explanation: "", concept: "c1" },
  { id: "q2", prompt: "B?", options: ["a", "b"], correctIndex: 1, explanation: "", concept: "c2" },
  { id: "q3", prompt: "C?", options: ["a", "b"], correctIndex: 1, explanation: "", concept: "c2" },
];

describe("scoreQuiz", () => {
  it("counts correct answers and percentage", () => {
    const result = scoreQuiz(questions, { q1: 0, q2: 0, q3: 1 });
    expect(result.correct).toBe(2);
    expect(result.total).toBe(3);
    expect(result.percent).toBe(67);
  });

  it("lists concepts to reinforce without duplicates", () => {
    const result = scoreQuiz(questions, { q1: 1, q2: 0, q3: 0 });
    expect(result.weakConcepts).toEqual(["c1", "c2"]);
  });

  it("treats unanswered questions as wrong", () => {
    expect(scoreQuiz(questions, {}).correct).toBe(0);
  });
});

describe("masteryFor", () => {
  it.each([
    [100, "mastered"],
    [80, "mastered"],
    [79, "almost"],
    [50, "almost"],
    [49, "review"],
  ] as const)("%i%% → %s", (percent, level) => {
    expect(masteryFor(percent)).toBe(level);
  });
});
