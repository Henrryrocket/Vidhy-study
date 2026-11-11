import type { Lesson, Subject, TopicSummary } from "../../domain/lesson";
import type { StudentProfile } from "../../domain/profile";
import { searchTopics } from "../../domain/search";
import type { ContentProvider } from "../../ports";
import { AREAS } from "./areas";
import type { CurriculumArea } from "./areas/types";
import { SUBJECTS } from "./subjects";

/** The built-in encyclopedia: the official áreas, their topic catalog per año and hand-written lessons. */
export class CuratedContentProvider implements ContentProvider {
  readonly name = "Enciclopedia";
  private readonly topics: TopicSummary[];
  private readonly lessons: Map<string, Lesson>;

  constructor(
    areas: CurriculumArea[] = AREAS,
    private readonly subjects: Subject[] = SUBJECTS,
  ) {
    this.lessons = new Map(areas.flatMap((a) => a.lessons).map((l) => [l.id, l]));
    this.topics = areas.flatMap((area) =>
      area.topics.map((topic) => ({ ...topic, subjectId: area.subjectId, hasLesson: this.lessons.has(topic.id) })),
    );
  }

  async listSubjects(): Promise<Subject[]> {
    return this.subjects;
  }

  async listTopics(): Promise<TopicSummary[]> {
    return this.topics;
  }

  /** Ranked matches; topics with a written lesson come before "Próximamente" ones. */
  async search(query: string): Promise<TopicSummary[]> {
    const ranked = searchTopics(this.topics, query);
    return [...ranked.filter((t) => t.hasLesson), ...ranked.filter((t) => !t.hasLesson)];
  }

  async getLesson(topicId: string, _profile: StudentProfile): Promise<Lesson | null> {
    return this.lessons.get(topicId) ?? null;
  }
}
