import analyze from "./analyze";

it("Ordered array", () => {
  expect(analyze([2, 4, 6, 8])).toEqual({
    average: 5,
    min: 2,
    max: 8,
    length: 4,
  });
});

it("Unordered array", () => {
  expect(analyze([3, 5, 1, 2, 9, 7])).toEqual({
    average: 4,
    min: 1,
    max: 9,
    length: 6,
  });
});

it("Single element array", () => {
  expect(analyze([8])).toEqual({
    average: 8,
    min: 8,
    max: 8,
    length: 1,
  });
});

it("Empty array", () => {
  expect(analyze([])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  });
});
