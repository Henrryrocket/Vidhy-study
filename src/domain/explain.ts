import { normalizeText } from "./search";

export interface ExplanationReview {
  mentioned: string[];
  missing: string[];
  tooShort: boolean;
}

const MIN_WORDS = 12;

/** Supports the "explain it in your own words" step by checking which key ideas the student used. */
export function reviewExplanation(text: string, checklist: string[]): ExplanationReview {
  const normalized = normalizeText(text);
  const words = normalized.split(/[^a-z0-9ñ]+/).filter(Boolean);
  const mentions = (concept: string) => {
    const conceptWords = normalizeText(concept).split(" ");
    if (conceptWords.length > 1) return normalized.includes(conceptWords.join(" "));
    const stem = conceptWords[0].length > 5 ? conceptWords[0].slice(0, -1) : conceptWords[0];
    return words.some((w) => w.startsWith(stem));
  };
  const mentioned = checklist.filter(mentions);
  return {
    mentioned,
    missing: checklist.filter((c) => !mentioned.includes(c)),
    tooShort: words.length < MIN_WORDS,
  };
}
