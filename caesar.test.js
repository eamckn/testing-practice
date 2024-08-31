import caesar from "./caesar";

it("abc => def with 3", () => {
  expect(caesar("abc", 3)).toBe("def");
});

it("XYZ => FGH with 8", () => {
  expect(caesar("XYZ", 8)).toBe("FGH");
});

it("Punctuation is preserved", () => {
  expect(caesar("bye!", 5)).toBe("gdj!");
});

it("Capitalization is preserved", () => {
  expect(caesar("HeLLo", 3)).toBe("KhOOr");
});

it("Shifting wraps correctly", () => {
  expect(caesar("abba yay", 4)).toBe("effe cec");
});
