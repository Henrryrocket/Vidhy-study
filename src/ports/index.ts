import type { Lesson, Subject, TopicSummary } from "../domain/lesson";
import type { Settings, StudentProfile } from "../domain/profile";

/**
 * Where study content comes from. The curated encyclopedia implements it today;
 * an AI adapter ("superpowers") can implement it later without touching the UI.
 */
export interface ContentProvider {
  readonly name: string;
  listSubjects(): Promise<Subject[]>;
  listTopics(): Promise<TopicSummary[]>;
  search(query: string): Promise<TopicSummary[]>;
  getLesson(topicId: string, profile: StudentProfile): Promise<Lesson | null>;
}

/** Optional generator used when superpowers are on and a topic is not in the encyclopedia. */
export interface LessonGenerator {
  readonly name: string;
  generate(query: string, profile: StudentProfile): Promise<Lesson>;
}

export interface ProfileRepository {
  load(): StudentProfile | null;
  save(profile: StudentProfile): void;
  clear(): void;
}

export interface SettingsRepository {
  load(): Settings;
  save(settings: Settings): void;
}

export interface ProgressEntry {
  topicId: string;
  bestPercent: number;
  attempts: number;
  lastStudiedAt: string;
  nextReviews?: string[];
}

export interface ProgressRepository {
  list(): ProgressEntry[];
  record(attempt: { topicId: string; percent: number; completedAt: string; nextReviews?: string[] }): void;
}
