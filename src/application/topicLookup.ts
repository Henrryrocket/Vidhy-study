import type { Lesson, TopicSummary } from "../domain/lesson";
import type { StudentProfile } from "../domain/profile";
import type { ContentProvider, LessonGenerator } from "../ports";

export type LookupResult =
  | { kind: "matches"; topics: TopicSummary[] }
  | { kind: "generated"; lesson: Lesson }
  | { kind: "superpowers-unavailable" }
  | { kind: "not-found" };

interface LookupInput {
  query: string;
  content: ContentProvider;
  profile: StudentProfile;
  superpowers: boolean;
  generator?: LessonGenerator | null;
}

/**
 * Encyclopedia first. Only when nothing matches and the superpowers switch is on,
 * fall back to the (optional) AI lesson generator.
 */
export async function lookupTopic({ query, content, profile, superpowers, generator }: LookupInput): Promise<LookupResult> {
  const topics = await content.search(query);
  if (topics.length > 0) return { kind: "matches", topics };
  if (!superpowers) return { kind: "not-found" };
  if (!generator) return { kind: "superpowers-unavailable" };
  return { kind: "generated", lesson: await generator.generate(query, profile) };
}
