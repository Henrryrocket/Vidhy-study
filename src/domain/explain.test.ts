import { reviewExplanation } from "./explain";

describe("reviewExplanation", () => {
  const checklist = ["receptor", "neurona", "médula", "músculo"];

  it("detects mentioned concepts ignoring accents, case and plurals", () => {
    const review = reviewExplanation("Los RECEPTORES mandan la señal por una neurona a la medula", checklist);
    expect(review.mentioned).toEqual(["receptor", "neurona", "médula"]);
    expect(review.missing).toEqual(["músculo"]);
  });

  it("asks for more when the explanation is too short", () => {
    expect(reviewExplanation("neurona", checklist).tooShort).toBe(true);
  });

  it("matches multi-word concepts", () => {
    expect(reviewExplanation("las plantas toman dióxido de carbono del aire y agua", ["dióxido de carbono"]).mentioned).toEqual([
      "dióxido de carbono",
    ]);
  });
});
