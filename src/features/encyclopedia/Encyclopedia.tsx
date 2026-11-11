import { href } from "../../app/router";
import { useServices } from "../../app/services";
import { TopicTile } from "../../ui/TopicTile";
import { useAsync } from "../../ui/useAsync";

export function Encyclopedia({ subjectId }: { subjectId?: string }) {
  const { content } = useServices();
  const { data } = useAsync(async () => {
    const [subjects, topics] = await Promise.all([content.listSubjects(), content.listTopics()]);
    return { subjects, topics };
  }, []);

  if (!data) return <p className="muted">Cargando…</p>;

  const visibleSubjects = subjectId ? data.subjects.filter((s) => s.id === subjectId) : data.subjects;

  return (
    <>
      <h1>📖 Enciclopedia</h1>
      <p className="muted">Artículos escritos para estudiantes y revisados con fuentes confiables.</p>
      {subjectId && (
        <p>
          <a href={href({ name: "encyclopedia" })}>← Todas las asignaturas</a>
        </p>
      )}
      {visibleSubjects.map((subject) => {
        const topics = data.topics.filter((t) => t.subjectId === subject.id);
        return (
          <section key={subject.id} aria-labelledby={`subject-${subject.id}`}>
            <h2 id={`subject-${subject.id}`} className="section-title">
              <span aria-hidden>{subject.emoji}</span> {subject.name}
            </h2>
            {topics.length > 0 ? (
              <div className="grid">
                {topics.map((t) => (
                  <TopicTile key={t.id} topic={t} />
                ))}
              </div>
            ) : (
              <p className="muted card">Estamos preparando artículos de {subject.name.toLowerCase()}. ¡Muy pronto!</p>
            )}
          </section>
        );
      })}
    </>
  );
}
