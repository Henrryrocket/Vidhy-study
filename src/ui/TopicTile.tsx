import { href } from "../app/router";
import type { Subject, TopicSummary } from "../domain/lesson";

export function TopicTile({ topic, subject }: { topic: TopicSummary; subject?: Subject }) {
  return (
    <a className="tile" href={href({ name: "topic", topicId: topic.id })}>
      <span className="tile__emoji" aria-hidden>
        {topic.emoji}
      </span>
      <span className="tile__title">{topic.title}</span>
      {subject && <span className="small muted">{subject.name}</span>}
    </a>
  );
}
