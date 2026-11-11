import { useState } from "react";
import type { Answers } from "../../domain/quiz";
import type { QuizQuestion } from "../../domain/lesson";
import { QuestionCard } from "./QuestionCard";

/** Retrieval practice: one question at a time with immediate feedback. */
export function Quiz({ questions, onFinish }: { questions: QuizQuestion[]; onFinish: (answers: Answers) => void }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const question = questions[index];
  const answered = question.id in answers;
  const last = index === questions.length - 1;

  return (
    <div className="card stack">
      <div className="progress-steps" aria-hidden>
        {questions.map((q, i) => (
          <span key={q.id} className={i < index || (i === index && answered) ? "is-done" : ""} />
        ))}
      </div>
      <h1>🧠 ¿Lo entendiste?</h1>
      <QuestionCard
        key={question.id}
        heading={`Pregunta ${index + 1} de ${questions.length}`}
        question={question}
        onAnswered={(choice) => setAnswers((a) => ({ ...a, [question.id]: choice }))}
      />
      {answered && (
        <button className="btn btn--block" onClick={() => (last ? onFinish(answers) : setIndex((i) => i + 1))}>
          {last ? "Ver mis resultados →" : "Siguiente →"}
        </button>
      )}
    </div>
  );
}
