import { normalizeText, searchTopics } from "./search";
import type { TopicSummary } from "./lesson";

const topics: TopicSummary[] = [
  { id: "nervous-system", title: "El sistema nervioso", subjectId: "biology", keywords: ["neurona", "cerebro", "médula"], emoji: "🧠", minGrade: 6 },
  { id: "photosynthesis", title: "La fotosíntesis", subjectId: "biology", keywords: ["plantas", "clorofila"], emoji: "🌱", minGrade: 5 },
  { id: "fractions", title: "Fracciones", subjectId: "math", keywords: ["numerador", "denominador"], emoji: "🍕", minGrade: 5 },
];

describe("normalizeText", () => {
  it("lowercases and strips accents", () => {
    expect(normalizeText("  Fotosíntesis MÉDULA ")).toBe("fotosintesis medula");
  });
});

describe("searchTopics", () => {
  it("matches titles ignoring accents and case", () => {
    expect(searchTopics(topics, "fotosintesis").map((t) => t.id)).toEqual(["photosynthesis"]);
  });

  it("matches keywords", () => {
    expect(searchTopics(topics, "neuronas").map((t) => t.id)).toEqual(["nervous-system"]);
  });

  it("ranks title matches above keyword matches", () => {
    const extra: TopicSummary = { id: "brain-food", title: "Cerebro y nutrición", subjectId: "biology", keywords: [], emoji: "🥦", minGrade: 6 };
    expect(searchTopics([...topics, extra], "cerebro").map((t) => t.id)).toEqual(["brain-food", "nervous-system"]);
  });

  it("ignores filler words like 'el' or 'para'", () => {
    expect(searchTopics(topics, "examen del sistema nervioso").map((t) => t.id)).toEqual(["nervous-system"]);
  });

  it("returns nothing for an empty query", () => {
    expect(searchTopics(topics, "   ")).toEqual([]);
  });
});
