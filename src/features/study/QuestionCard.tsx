import { useState } from "react";
import type { QuizQuestion } from "../../domain/lesson";

interface Props {
  question: QuizQuestion;
  onAnswered: (choice: number) => void;
  heading?: string;
}

/** Multiple-choice question with immediate, explained feedback. */
export function QuestionCard({ question, onAnswered, heading }: Props) {
  const [choice, setChoice] = useState<number | null>(null);
  const answered = choice !== null;
  const correct = choice === question.correctIndex;

  const pick = (index: number) => {
    if (answered) return;
    setChoice(index);
    onAnswered(index);
  };

  return (
    <div className="stack" style={{ gap: 8 }}>
      {heading && <p className="small muted" style={{ margin: 0 }}>{heading}</p>}
      <p style={{ fontWeight: 700, margin: 0 }}>{question.prompt}</p>
      {question.options.map((option, index) => {
        const state = !answered ? "" : index === question.correctIndex ? " is-correct" : index === choice ? " is-wrong" : "";
        return (
          <button key={index} type="button" className={`option${state}`} disabled={answered} onClick={() => pick(index)}>
            {option}
          </button>
        );
      })}
      {answered && (
        <div className={`feedback ${correct ? "is-correct" : "is-wrong"}`} role="status">
          <strong>{correct ? "¡Correcto! 🎉 " : "Casi… 💡 "}</strong>
          {question.explanation}
        </div>
      )}
    </div>
  );
}
