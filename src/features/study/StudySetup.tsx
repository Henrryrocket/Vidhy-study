import { useState } from "react";
import { localIsoDate } from "../../domain/dates";
import type { Lesson } from "../../domain/lesson";
import { QuestionCard } from "./QuestionCard";

export type Purpose = "exam" | "homework" | "curiosity";

export interface StudyPlan {
  purpose: Purpose;
  examDate?: string;
  priorKnowledge: "none" | "some" | "good";
}

const PURPOSES: { id: Purpose; label: string; emoji: string }[] = [
  { id: "exam", label: "Tengo un examen", emoji: "📝" },
  { id: "homework", label: "Tengo una tarea", emoji: "📒" },
  { id: "curiosity", label: "Quiero aprender", emoji: "✨" },
];

const KNOWLEDGE: { id: StudyPlan["priorKnowledge"]; label: string }[] = [
  { id: "none", label: "Nada, es nuevo" },
  { id: "some", label: "Un poco" },
  { id: "good", label: "Bastante, quiero repasar" },
];

/**
 * Activates prior knowledge before studying: why the student is here,
 * what they already know, and a couple of warm-up questions (no grade).
 */
export function StudySetup({ lesson, onStart }: { lesson: Lesson; onStart: (plan: StudyPlan) => void }) {
  const [purpose, setPurpose] = useState<Purpose | null>(null);
  const [examDate, setExamDate] = useState("");
  const [knowledge, setKnowledge] = useState<StudyPlan["priorKnowledge"] | null>(null);
  const [warmUpDone, setWarmUpDone] = useState(0);
  const today = localIsoDate();
  const ready = purpose !== null && knowledge !== null && warmUpDone >= lesson.warmUp.length;

  return (
    <div className="stack">
      <div className="card">
        <div style={{ fontSize: "3rem" }} aria-hidden>
          {lesson.emoji}
        </div>
        <h1>{lesson.title}</h1>
        <p>{lesson.hook}</p>
      </div>

      <div className="card stack">
        <h2>Antes de empezar, unas preguntas rápidas</h2>
        <fieldset className="stack" style={{ border: 0, padding: 0, margin: 0 }}>
          <legend style={{ fontWeight: 800, marginBottom: 8 }}>1. ¿Para qué lo estudias?</legend>
          <div className="row">
            {PURPOSES.map((p) => (
              <button key={p.id} type="button" className="chip" aria-pressed={purpose === p.id} onClick={() => setPurpose(p.id)}>
                <span aria-hidden>{p.emoji}</span> {p.label}
              </button>
            ))}
          </div>
          {purpose === "exam" && (
            <label className="field">
              ¿Cuándo es el examen? (opcional)
              <input type="date" min={today} value={examDate} onChange={(e) => setExamDate(e.target.value)} />
            </label>
          )}
        </fieldset>

        <fieldset className="stack" style={{ border: 0, padding: 0, margin: 0 }}>
          <legend style={{ fontWeight: 800, marginBottom: 8 }}>2. ¿Cuánto sabes ya del tema?</legend>
          <div className="row">
            {KNOWLEDGE.map((k) => (
              <button key={k.id} type="button" className="chip" aria-pressed={knowledge === k.id} onClick={() => setKnowledge(k.id)}>
                {k.label}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="stack">
          <p style={{ fontWeight: 800, margin: 0 }}>3. Calentamiento (no cuenta para nota)</p>
          {lesson.warmUp.map((q) => (
            <QuestionCard key={q.id} question={q} onAnswered={() => setWarmUpDone((n) => n + 1)} />
          ))}
        </div>

        <button
          className="btn btn--block"
          disabled={!ready}
          onClick={() => purpose && knowledge && onStart({ purpose, priorKnowledge: knowledge, examDate: examDate || undefined })}
        >
          {ready ? "¡Vamos a aprender! →" : "Responde las preguntas para continuar"}
        </button>
      </div>
    </div>
  );
}
