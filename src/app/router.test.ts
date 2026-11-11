import { href, parseHash } from "./router";

describe("router", () => {
  it.each([
    ["", { name: "home" }],
    ["#/", { name: "home" }],
    ["#/enciclopedia", { name: "encyclopedia", subjectId: undefined }],
    ["#/enciclopedia/biology", { name: "encyclopedia", subjectId: "biology" }],
    ["#/tema/nervous-system", { name: "topic", topicId: "nervous-system" }],
    ["#/tema", { name: "home" }],
    ["#/perfil", { name: "profile" }],
    ["#/nada", { name: "home" }],
  ])("parses %s", (hash, route) => {
    expect(parseHash(hash)).toEqual(route);
  });

  it("round-trips routes", () => {
    expect(parseHash(href({ name: "topic", topicId: "water-cycle" }))).toEqual({ name: "topic", topicId: "water-cycle" });
  });
});
