import type { Lesson, SubjectId, TopicInfo } from "../../../domain/lesson";

/** One área de formación: its topic catalog per año and the lessons written so far. */
export interface CurriculumArea {
  subjectId: SubjectId;
  /** Every topic of the área, ordered by año. Lessons reuse the topic id. */
  topics: Omit<TopicInfo, "subjectId">[];
  lessons: Lesson[];
}
