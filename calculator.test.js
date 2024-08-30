import calculator from "./calculator";

const calc = calculator();

it("1 plus 2 is 3", () => {
  expect(calc.add(1, 2)).toBe(3);
});

it("0 plus 0 is 0", () => {
  expect(calc.add(0, 0)).toBe(0);
});

it("1 plus -3 is -2", () => {
  expect(calc.add(1, -3)).toBe(-2);
});

it("4 minus 3 is 1", () => {
  expect(calc.sub(4, 3)).toBe(1);
});

it("0 minus 2 is -2", () => {
  expect(calc.sub(0, 2)).toBe(-2);
});

it("3 times 4 is 12", () => {
  expect(calc.mult(3, 4)).toBe(12);
});

it("2 times 1 is 2", () => {
  expect(calc.mult(2, 1)).toBe(2);
});

it("0 times anything is 0", () => {
  expect(calc.mult(4, 0)).toBe(0);
});

it("6 divided by 3 is 2", () => {
  expect(calc.div(6, 3)).toBe(2);
});

it("divided by 0 is infitity", () => {
  expect(calc.div(4, 0)).toBe(Infinity);
});

it("0 divided by anything is 0", () => {
  expect(calc.div(0, 5)).toBe(0);
});
