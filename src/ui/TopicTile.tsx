import { href } from "../app/router";
import type { Subject, TopicSummary } from "../domain/lesson";
import { yearLabel } from "./years";


export function TopicTile({ topic, subject, showYear = false }: { topic: TopicSummary; subject?: Subject; showYear?: boolean }) {
  const meta = [subject?.name, showYear ? yearLabel(topic.year) : null].filter(Boolean).join(" · ");

  if (!topic.hasLesson) {
    return (
      <div className="tile tile--soon" aria-label={`${topic.title}: próximamente`}>
        <span className="tile__emoji" aria-hidden>
          {topic.emoji}
        </span>
        <span className="tile__title">{topic.title}</span>
        {meta && <span className="small muted">{meta}</span>}
        <span className="badge">Próximamente</span>
      </div>
    );
  }

  return (
    <a className="tile" href={href({ name: "topic", topicId: topic.id })}>
      <span className="tile__emoji" aria-hidden>
        {topic.emoji}
      </span>
      <span className="tile__title">{topic.title}</span>
      {meta && <span className="small muted">{meta}</span>}
    </a>
  );
}
