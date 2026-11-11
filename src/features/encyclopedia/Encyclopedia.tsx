import { useState } from "react";
import { href } from "../../app/router";
import { useServices } from "../../app/services";
import { yearsOf, type SchoolYear, type Subject, type TopicSummary } from "../../domain/lesson";
import { STUDY_FOCUS } from "../../app/focus";
import type { StudentProfile } from "../../domain/profile";
import { TopicTile } from "../../ui/TopicTile";
import { yearLabel, yearRange } from "../../ui/years";
import { useAsync } from "../../ui/useAsync";

const STUDY_PLAN_URL = "http://gacetaoficial-ve.blogspot.com/2017/08/resolucion-n-dm0033-plan-de-estudio.html";

export function Encyclopedia({ subjectId }: { subjectId?: string; profile?: StudentProfile }) {
  const { content } = useServices();
  const { data } = useAsync(async () => {
    const [subjects, topics] = await Promise.all([content.listSubjects(), content.listTopics()]);
    return { subjects, topics };
  }, []);

  if (!data) return <p className="muted">Cargando…</p>;

  const subject = subjectId ? data.subjects.find((s) => s.id === subjectId) : undefined;
  if (subject) {
    return <AreaPage subject={subject} topics={data.topics.filter((t) => t.subjectId === subject.id)} />;
  }

  return (
    <>
      <h1>📖 Enciclopedia</h1>
      <p className="muted">
        Enfocada en el {yearLabel(STUDY_FOCUS.mainYear)} del plan de estudio de Educación Media General de Venezuela (
        <a href={STUDY_PLAN_URL} target="_blank" rel="noopener noreferrer">
          Resolución DM/0033
        </a>
        ), con los temas del año anterior para repasar.
      </p>
      <div className="grid">
        {data.subjects.map((s) => {
          const topics = data.topics.filter((t) => t.subjectId === s.id);
          const lessons = topics.filter((t) => t.hasLesson).length;
          return (
            <a key={s.id} className="tile" href={href({ name: "encyclopedia", subjectId: s.id })} style={{ borderTop: `5px solid ${s.color}` }}>
              <span className="tile__emoji" aria-hidden>
                {s.emoji}
              </span>
              <span className="tile__title">{s.name}</span>
              <span className="small muted">{yearRange(s)}</span>
              <span className="small muted">
                {topics.length} temas · {lessons} {lessons === 1 ? "lección" : "lecciones"}
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
}

function AreaPage({ subject, topics }: { subject: Subject; topics: TopicSummary[] }) {
  const years = yearsOf(subject);
  const isReview = (y: SchoolYear) => STUDY_FOCUS.reviewYears.includes(y);
  const [year, setYear] = useState<SchoolYear>(years.includes(STUDY_FOCUS.mainYear) ? STUDY_FOCUS.mainYear : years[years.length - 1]);
  const visible = topics.filter((t) => t.year === year);

  return (
    <>
      <p>
        <a href={href({ name: "encyclopedia" })}>← Todas las áreas</a>
      </p>
      <h1>
        <span aria-hidden>{subject.emoji}</span> {subject.name}
      </h1>
      <p className="muted">{subject.description}</p>

      <div className="tabs" role="tablist" aria-label="Año">
        {years.map((y) => (
          <button key={y} type="button" role="tab" className="chip" aria-selected={y === year} aria-pressed={y === year} onClick={() => setYear(y)}>
            {isReview(y) ? `🔁 ${yearLabel(y)} · Repaso` : `⭐ ${yearLabel(y)}`}
          </button>
        ))}
      </div>
      <p className="small muted">
        {isReview(year)
          ? "Temas del año anterior: repásalos si necesitas reforzar las bases."
          : `${subject.hoursByYear[year]} horas semanales en ${yearLabel(year)}.`}
      </p>

      <div className="grid">
        {visible.map((t) => (
          <TopicTile key={t.id} topic={t} />
        ))}
      </div>

      <p className="small muted" style={{ marginTop: 20 }}>
        Los temas siguen la progresión habitual de cada año. Las lecciones marcadas como “Próximamente” se irán agregando.
      </p>
    </>
  );
}
