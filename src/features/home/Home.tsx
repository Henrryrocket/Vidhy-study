import { useState, type FormEvent } from "react";
import { href, navigate } from "../../app/router";
import { useServices } from "../../app/services";
import { localIsoDate } from "../../domain/dates";
import { lookupTopic, type LookupResult } from "../../application/topicLookup";
import type { Subject } from "../../domain/lesson";
import type { Settings, StudentProfile } from "../../domain/profile";
import { TopicTile } from "../../ui/TopicTile";
import { useAsync } from "../../ui/useAsync";

const SUGGESTIONS = ["Sistema nervioso", "Fotosíntesis", "Fracciones", "Ciclo del agua"];


export function Home({ profile, settings }: { profile: StudentProfile; settings: Settings }) {
  const services = useServices();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<LookupResult | null>(null);
  const [searching, setSearching] = useState(false);

  const { data } = useAsync(async () => {
    const [subjects, topics] = await Promise.all([services.content.listSubjects(), services.content.listTopics()]);
    return { subjects, topics };
  }, []);

  const subjectById = new Map(data?.subjects.map((s) => [s.id, s]));
  const topicById = new Map(data?.topics.map((t) => [t.id, t]));
  const progress = services.progress.list();
  const dueReviews = progress.filter((p) => p.nextReviews?.some((d) => d <= localIsoDate()));
  const recent = [...progress].sort((a, b) => b.lastStudiedAt.localeCompare(a.lastStudiedAt)).slice(0, 4);

  const search = async (text: string) => {
    if (!text.trim()) return;
    setSearching(true);
    const found = await lookupTopic({
      query: text,
      content: services.content,
      profile,
      superpowers: settings.superpowers,
      generator: services.generator,
    });
    setSearching(false);
    if (found.kind === "matches" && found.topics.length === 1) {
      navigate({ name: "topic", topicId: found.topics[0].id });
      return;
    }
    if (found.kind === "generated") {
      services.generatedLessons.set(found.lesson.id, found.lesson);
      navigate({ name: "topic", topicId: found.lesson.id });
      return;
    }
    setResult(found);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    void search(query);
  };

  return (
    <>
      <section className="hero">
        <p style={{ margin: 0, opacity: 0.9 }}>¡Hola, {profile.name}! 👋</p>
        <h1>¿Qué estudiaremos hoy?</h1>
        <form className="search" role="search" onSubmit={onSubmit}>
          <input
            aria-label="Tema que quieres estudiar"
            placeholder="Ej.: el sistema nervioso"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            enterKeyHint="search"
          />
          <button className="btn" type="submit" disabled={searching}>
            {searching ? "…" : "Buscar"}
          </button>
        </form>
        <div className="row" style={{ marginTop: 12 }}>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              className="chip"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", borderColor: "rgba(255,255,255,0.35)", minHeight: 36 }}
              onClick={() => {
                setQuery(s);
                void search(s);
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {result && <SearchResult result={result} query={query} topicSubjects={subjectById} />}

      {dueReviews.length > 0 && (
        <section className="card" aria-labelledby="due-title">
          <h2 id="due-title">🔁 Toca repasar hoy</h2>
          <p className="muted small">Repasar en días distintos ayuda a que lo aprendido no se olvide.</p>
          <div className="grid">
            {dueReviews.map((p) => {
              const topic = topicById.get(p.topicId);
              return topic ? <TopicTile key={p.topicId} topic={topic} /> : null;
            })}
          </div>
        </section>
      )}

      {recent.length > 0 && (
        <>
          <h2 className="section-title">Tu progreso</h2>
          <div className="card stack">
            {recent.map((p) => {
              const topic = topicById.get(p.topicId);
              if (!topic) return null;
              return (
                <a key={p.topicId} href={href({ name: "topic", topicId: p.topicId })} className="row" style={{ textDecoration: "none", color: "inherit" }}>
                  <span style={{ fontSize: "1.6rem" }} aria-hidden>
                    {topic.emoji}
                  </span>
                  <span style={{ flex: 1, fontWeight: 700 }}>{topic.title}</span>
                  <span className="badge">{p.bestPercent}%</span>
                </a>
              );
            })}
          </div>
        </>
      )}

      <h2 className="section-title">Explora la enciclopedia</h2>
      <div className="grid">
        {data?.subjects.map((subject) => {
          const count = data.topics.filter((t) => t.subjectId === subject.id).length;
          return (
            <a key={subject.id} className="tile" href={href({ name: "encyclopedia", subjectId: subject.id })} style={{ borderTop: `5px solid ${subject.color}` }}>
              <span className="tile__emoji" aria-hidden>
                {subject.emoji}
              </span>
              <span className="tile__title">{subject.name}</span>
              <span className="small muted">{count > 0 ? `${count} ${count === 1 ? "tema" : "temas"}` : "Próximamente"}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}

function SearchResult({
  result,
  query,
  topicSubjects,
}: {
  result: LookupResult;
  query: string;
  topicSubjects: Map<string, Subject>;
}) {
  if (result.kind === "matches") {
    return (
      <section className="card" aria-live="polite">
        <h2>Encontramos estos temas</h2>
        <div className="grid">
          {result.topics.map((t) => (
            <TopicTile key={t.id} topic={t} subject={topicSubjects.get(t.subjectId)} />
          ))}
        </div>
      </section>
    );
  }
  if (result.kind === "superpowers-unavailable") {
    return (
      <section className="notice" aria-live="polite">
        <strong>⚡ Superpoderes activados, pero aún no conectados.</strong>
        <p style={{ margin: "6px 0 0" }}>
          “{query}” todavía no está en la enciclopedia y el generador con IA aún no está configurado. Mientras tanto, explora los temas disponibles.
        </p>
      </section>
    );
  }
  return (
    <section className="notice" aria-live="polite">
      <strong>Aún no tenemos “{query}” en la enciclopedia.</strong>
      <p style={{ margin: "6px 0 0" }}>
        Prueba con otra palabra (por ejemplo, “neuronas” o “plantas”) o explora por asignatura. Cuando los <a href={href({ name: "profile" })}>Superpoderes ⚡</a> estén disponibles, podrás estudiar cualquier tema.
      </p>
    </section>
  );
}
