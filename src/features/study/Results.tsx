import { href } from "../../app/router";
import type { Lesson, Resource, TopicSummary } from "../../domain/lesson";
import type { Mastery, QuizResult } from "../../domain/quiz";
import { TopicTile } from "../../ui/TopicTile";

const MESSAGES: Record<Mastery, { title: string; text: string; emoji: string }> = {
  mastered: { emoji: "🏆", title: "¡Lo dominas!", text: "Entendiste muy bien el tema. Repasa en los días indicados para que no se te olvide." },
  almost: { emoji: "💪", title: "¡Vas muy bien!", text: "Ya entiendes gran parte. Refuerza los conceptos marcados y vuelve a intentarlo." },
  review: { emoji: "🌱", title: "Sigamos practicando", text: "Equivocarse es parte de aprender. Vuelve al resumen y a la mini-clase, y luego intenta de nuevo." },
};

const KIND_ICON: Record<Resource["kind"], string> = { article: "📰", video: "🎬", interactive: "🕹️", reference: "📚" };

const dateFormat = new Intl.DateTimeFormat("es", { weekday: "long", day: "numeric", month: "long" });

export function Results({
  lesson,
  result,
  mastery,
  reviewDates,
  related,
  onRetryQuiz,
  onBackToLesson,
}: {
  lesson: Lesson;
  result: QuizResult;
  mastery: Mastery;
  reviewDates: Date[];
  related: TopicSummary[];
  onRetryQuiz: () => void;
  onBackToLesson: () => void;
}) {
  const message = MESSAGES[mastery];
  const circumference = 2 * Math.PI * 54;

  return (
    <div>
      <section className="card center">
        <svg className="score-ring" viewBox="0 0 120 120" role="img" aria-label={`${result.correct} de ${result.total} correctas`}>
          <circle cx="60" cy="60" r="54" fill="none" stroke="var(--border)" strokeWidth="12" />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - result.percent / 100)}
            transform="rotate(-90 60 60)"
          />
          <text x="60" y="68" textAnchor="middle" fontSize="26" fontWeight="900" fill="currentColor">
            {result.percent}%
          </text>
        </svg>
        <h1>
          {message.emoji} {message.title}
        </h1>
        <p>
          {result.correct} de {result.total} respuestas correctas. {message.text}
        </p>
        <div className="row" style={{ justifyContent: "center" }}>
          <button className="btn" onClick={onRetryQuiz}>
            ↺ Intentar de nuevo
          </button>
          <button className="btn btn--ghost" onClick={onBackToLesson}>
            📄 Volver a la lección
          </button>
        </div>
      </section>

      {result.weakConcepts.length > 0 && (
        <section className="card">
          <h2>🎯 Para reforzar</h2>
          <ul>
            {result.weakConcepts.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>
      )}

      {reviewDates.length > 0 && (
        <section className="card">
          <h2>🗓️ Tu plan de repaso</h2>
          <p className="muted small">Repasar en días separados (repaso espaciado) ayuda a recordar mucho más que estudiar todo de una vez.</p>
          <ol className="timeline">
            {reviewDates.map((d) => (
              <li key={d.toISOString()}>
                <span className="badge">🔁</span> {dateFormat.format(d)}
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className="card">
        <h2>🚀 Para profundizar</h2>
        {lesson.deeperResources.map((r) => (
          <a key={r.url} className="resource" href={r.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="resource__icon" aria-hidden>
              {KIND_ICON[r.kind]}
            </span>
            <span>
              <strong style={{ color: "var(--primary)" }}>{r.title}</strong>
              <br />
              <span className="small muted">{r.source}</span>
            </span>
          </a>
        ))}
      </section>

      <section className="card">
        <h2>💡 Consejos para estudiar mejor</h2>
        <ul>
          <li><strong>Ponte a prueba:</strong> recordar sin mirar el texto fortalece la memoria más que releer.</li>
          <li><strong>Enséñaselo a alguien:</strong> si puedes explicarlo con palabras simples, lo entendiste.</li>
          <li><strong>Mezcla temas:</strong> alternar asignaturas al repasar te ayuda a distinguir conceptos.</li>
          <li><strong>Dibuja:</strong> hacer tu propio esquema combina palabras e imágenes y ayuda a recordar.</li>
        </ul>
      </section>

      {related.length > 0 && (
        <>
          <h2 className="section-title">Temas relacionados</h2>
          <div className="grid">
            {related.map((t) => (
              <TopicTile key={t.id} topic={t} />
            ))}
          </div>
        </>
      )}

      <section className="small muted" style={{ marginTop: 24 }}>
        <strong>Fuentes consultadas:</strong>{" "}
        {lesson.sources.map((s, i) => (
          <span key={s.url}>
            {i > 0 && " · "}
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              {s.title} ({s.source})
            </a>
          </span>
        ))}
      </section>

      <p className="center" style={{ marginTop: 24 }}>
        <a className="btn btn--ghost" href={href({ name: "home" })}>
          🏠 Estudiar otro tema
        </a>
      </p>
    </div>
  );
}
