import capitalize from "./capitalize";

it("hello is Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

it("What's your name stays the same", () => {
  expect(capitalize("What's your name")).toBe("What's your name");
});

it("Empty string is empty string", () => {
  expect(capitalize("")).toBe("");
});
