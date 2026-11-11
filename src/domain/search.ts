import type { TopicSummary } from "./lesson";

const STOP_WORDS = new Set([
  "el", "la", "los", "las", "un", "una", "de", "del", "y", "o", "en", "para", "por", "que", "sobre",
  "mi", "me", "examen", "tarea", "estudiar", "tema", "como", "a", "al", "con", "se", "es", "quiero",
]);

export function normalizeText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(text: string): string[] {
  return normalizeText(text)
    .split(/[^a-z0-9ñ]+/)
    .filter((t) => t.length > 1 && !STOP_WORDS.has(t));
}

/** Loose match so plurals and short prefixes still hit ("neuronas" → "neurona"). */
function wordMatches(queryToken: string, word: string): boolean {
  if (word === queryToken) return true;
  const shorter = queryToken.length < word.length ? queryToken : word;
  const longer = shorter === queryToken ? word : queryToken;
  return shorter.length >= 4 && longer.startsWith(shorter);
}

export function searchTopics<T extends TopicSummary>(topics: T[], query: string): T[] {
  const queryTokens = tokens(query);
  if (queryTokens.length === 0) return [];

  const scored = topics.map((topic) => {
    const titleWords = tokens(topic.title);
    const keywordWords = topic.keywords.flatMap(tokens);
    let score = 0;
    for (const q of queryTokens) {
      if (titleWords.some((w) => wordMatches(q, w))) score += 3;
      else if (keywordWords.some((w) => wordMatches(q, w))) score += 1;
    }
    return { topic, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.topic);
}
