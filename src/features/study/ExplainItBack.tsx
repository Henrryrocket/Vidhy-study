import { useState } from "react";
import { reviewExplanation, type ExplanationReview } from "../../domain/explain";
import type { Lesson } from "../../domain/lesson";

/** Feynman technique: explaining in your own words reveals the gaps in what you understood. */
export function ExplainItBack({ lesson, onContinue }: { lesson: Lesson; onContinue: () => void }) {
  const [text, setText] = useState("");
  const [review, setReview] = useState<ExplanationReview | null>(null);

  return (
    <div className="card stack">
      <h1>✍️ Explícalo tú</h1>
      <p>{lesson.explainPrompt}</p>
      <label className="field">
        Tu explicación
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Escribe aquí con tus palabras…" />
      </label>
      <button className="btn btn--ghost" type="button" disabled={!text.trim()} onClick={() => setReview(reviewExplanation(text, lesson.explainChecklist))}>
        Revisar mi explicación
      </button>

      {review && (
        <div className="feedback is-correct" role="status">
          {review.tooShort && <p>Intenta escribir un poco más: al menos dos o tres oraciones.</p>}
          {review.mentioned.length > 0 && <p>✅ Usaste estas ideas clave: {review.mentioned.join(", ")}.</p>}
          {review.missing.length > 0 ? (
            <p style={{ margin: 0 }}>🔎 ¿Puedes incluir también: {review.missing.join(", ")}? Si no recuerdas qué son, vuelve al resumen.</p>
          ) : (
            <p style={{ margin: 0 }}>🌟 ¡Excelente! Incluiste todas las ideas clave.</p>
          )}
        </div>
      )}

      <button className="btn btn--block" onClick={onContinue}>
        {review ? "Ir a las preguntas →" : "Saltar e ir a las preguntas →"}
      </button>
    </div>
  );
}
