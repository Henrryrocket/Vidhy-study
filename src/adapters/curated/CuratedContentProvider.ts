import type { Lesson, Subject, TopicSummary } from "../../domain/lesson";
import type { StudentProfile } from "../../domain/profile";
import { searchTopics } from "../../domain/search";
import type { ContentProvider } from "../../ports";
import { fractions } from "./articles/fractions";
import { nervousSystem } from "./articles/nervousSystem";
import { photosynthesis } from "./articles/photosynthesis";
import { waterCycle } from "./articles/waterCycle";
import { SUBJECTS } from "./subjects";

const ARTICLES: Lesson[] = [nervousSystem, photosynthesis, fractions, waterCycle];

function toSummary({ id, title, subjectId, keywords, emoji, minGrade }: Lesson): TopicSummary {
  return { id, title, subjectId, keywords, emoji, minGrade };
}

/** The built-in encyclopedia: hand-written articles reviewed against reliable sources. */
export class CuratedContentProvider implements ContentProvider {
  readonly name = "Enciclopedia";

  constructor(private readonly articles: Lesson[] = ARTICLES) {}

  async listSubjects(): Promise<Subject[]> {
    return SUBJECTS;
  }

  async listTopics(): Promise<TopicSummary[]> {
    return this.articles.map(toSummary);
  }

  async search(query: string): Promise<TopicSummary[]> {
    return searchTopics(this.articles, query).map(toSummary);
  }

  async getLesson(topicId: string, _profile: StudentProfile): Promise<Lesson | null> {
    return this.articles.find((a) => a.id === topicId) ?? null;
  }
}
