import { SCHOOL_YEARS, type Lesson, type SchoolYear, type Subject, type TopicSummary } from "../../domain/lesson";
import type { StudentProfile } from "../../domain/profile";
import { searchTopics } from "../../domain/search";
import type { ContentProvider } from "../../ports";
import { AREAS } from "./areas";
import type { CurriculumArea } from "./areas/types";
import { SUBJECTS } from "./subjects";

export interface CuratedOptions {
  /** Años the app shows. Content of other años stays in the catalog but is hidden. */
  visibleYears?: SchoolYear[];
}

function keepYears(subject: Subject, years: SchoolYear[]): Subject {
  const hoursByYear = Object.fromEntries(years.filter((y) => subject.hoursByYear[y]).map((y) => [y, subject.hoursByYear[y]]));
  return { ...subject, hoursByYear };
}

/** The built-in encyclopedia: the official áreas, their topic catalog per año and hand-written lessons. */
export class CuratedContentProvider implements ContentProvider {
  readonly name = "Enciclopedia";
  private readonly subjects: Subject[];
  private readonly topics: TopicSummary[];
  private readonly lessons: Map<string, Lesson>;

  constructor(areas: CurriculumArea[] = AREAS, subjects: Subject[] = SUBJECTS, { visibleYears = SCHOOL_YEARS }: CuratedOptions = {}) {
    const visible = (year: SchoolYear) => visibleYears.includes(year);
    this.subjects = subjects.map((s) => keepYears(s, visibleYears)).filter((s) => Object.keys(s.hoursByYear).length > 0);
    this.lessons = new Map(
      areas
        .flatMap((a) => a.lessons)
        .filter((l) => visible(l.year))
        .map((l) => [l.id, l]),
    );
    this.topics = areas.flatMap((area) =>
      area.topics
        .filter((topic) => visible(topic.year))
        .map((topic) => ({ ...topic, subjectId: area.subjectId, hasLesson: this.lessons.has(topic.id) })),
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
