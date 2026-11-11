import { useState } from "react";
import { INTERESTS } from "../../app/interests";
import type { Lesson } from "../../domain/lesson";
import { readingLevel, type StudentProfile } from "../../domain/profile";
import { ConceptMap } from "./ConceptMap";
import { MiniClass } from "./MiniClass";
import type { StudyPlan } from "./StudySetup";
import { TopicIllustration } from "./TopicIllustration";

type Tab = "summary" | "map" | "class" | "foryou" | "glossary";

const TABS: { id: Tab; label: string }[] = [
  { id: "summary", label: "📄 Resumen" },
  { id: "map", label: "🗺️ Esquema" },
  { id: "class", label: "🎬 Mini-clase" },
  { id: "foryou", label: "💡 Para ti" },
  { id: "glossary", label: "🔤 Glosario" },
];

export function LessonView({
  lesson,
  profile,
  plan,
  onContinue,
}: {
  lesson: Lesson;
  profile: StudentProfile;
  plan: StudyPlan;
  onContinue: () => void;
}) {
  const [tab, setTab] = useState<Tab>("summary");
  const [visited, setVisited] = useState<Set<Tab>>(() => new Set(["summary"]));
  const showDeeper = readingLevel(profile) === "advanced" || plan.priorKnowledge === "good";

  const open = (next: Tab) => {
    setTab(next);
    setVisited((v) => new Set(v).add(next));
  };

  const interest = profile.interests.find((i) => lesson.analogies[i]);
  const interestInfo = INTERESTS.find((i) => i.id === interest);
  const analogy = interest ? lesson.analogies[interest]! : lesson.analogies.default;

  return (
    <div>
      <h1>
        <span aria-hidden>{lesson.emoji}</span> {lesson.title}
      </h1>
      {plan.purpose === "exam" && (
        <p className="notice small">
          📝 Modo examen: lee el resumen, mira el esquema y la mini-clase. Al final te haremos preguntas tipo examen y un plan de repaso.
        </p>
      )}

      <div className="tabs" role="tablist" aria-label="Partes de la lección">
        {TABS.map((t) => (
          <button key={t.id} role="tab" type="button" className="chip" aria-selected={tab === t.id} aria-pressed={tab === t.id} onClick={() => open(t.id)}>
            {t.label}
            {visited.has(t.id) && tab !== t.id ? " ✓" : ""}
          </button>
        ))}
      </div>

      <section className="card" role="tabpanel">
        {tab === "summary" && (
          <>
            <TopicIllustration topicId={lesson.id} emoji={lesson.emoji} />
            <p style={{ fontSize: "1.05rem" }}>{lesson.summary}</p>
            <h2 style={{ marginTop: 20 }}>Ideas clave</h2>
            {lesson.keyPoints.map((point, i) => (
              <div className="keypoint" key={point.title}>
                <h3>
                  {i + 1}. {point.title}
                </h3>
                <p>{point.text}</p>
                {point.deeper && (
                  <details open={showDeeper}>
                    <summary>Profundizar</summary>
                    <p>{point.deeper}</p>
                  </details>
                )}
              </div>
            ))}
          </>
        )}

        {tab === "map" && (
          <>
            <h2>Esquema del tema</h2>
            <ConceptMap root={lesson.diagram} />
          </>
        )}

        {tab === "class" && (
          <>
            <h2>Mini-clase</h2>
            <p className="muted small">Un video corto animado. Activa 🔊 Voz para escuchar la narración.</p>
            <MiniClass steps={lesson.miniClass} />
          </>
        )}

        {tab === "foryou" && (
          <>
            <h2>Explicado con {interestInfo ? `${interestInfo.emoji} ${interestInfo.label.toLowerCase()}` : "un ejemplo"}</h2>
            <p style={{ fontSize: "1.1rem" }}>{analogy}</p>
            <p className="small muted">Las analogías ayudan a conectar ideas nuevas con cosas que ya conoces.</p>
          </>
        )}

        {tab === "glossary" && (
          <>
            <h2>Glosario</h2>
            <dl>
              {lesson.glossary.map((g) => (
                <div key={g.term} style={{ marginBottom: 12 }}>
                  <dt style={{ fontWeight: 800 }}>{g.term}</dt>
                  <dd style={{ margin: 0 }} className="muted">
                    {g.definition}
                  </dd>
                </div>
              ))}
            </dl>
          </>
        )}
      </section>

      <p className="small muted">Exploraste {visited.size} de {TABS.length} secciones.</p>
      <button className="btn btn--block" onClick={onContinue}>
        Ya lo revisé, ¡a comprobarlo! →
      </button>
    </div>
  );
}
