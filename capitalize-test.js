import capitalize from "./capitalize";

test("hello is Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("What's your name stays the same", () => {
  expect(capitalize("What's your name")).toBe("What's your name");
});

test("Empty string is empty string", () => {
  expect(capitalize("")).toBe("");
});
