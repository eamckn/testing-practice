import reverseString from "./reverseString.js";

it("hello = olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});

it("oh no = on oh", () => {
  expect(reverseString("oh no")).toBe("on ho");
});

it("la la LA!!! === !!!AL al al", () => {
  expect(reverseString("la la LA!!!")).toBe("!!!AL al al");
});

it("empty string return empty", () => {
  expect(reverseString("")).toBe("");
});
