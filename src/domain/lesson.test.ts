import { yearsOf } from "./lesson";

it("yearsOf lists the años an área is taught, in order", () => {
  expect(yearsOf({ id: "x", name: "X", emoji: "", color: "", description: "", hoursByYear: { 5: 4, 3: 4, 4: 4 } })).toEqual([3, 4, 5]);
});
