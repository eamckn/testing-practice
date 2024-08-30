export default function analyzeArray(array) {
  if (array.length === 0)
    return {
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    };

  let total = array.reduce((sum, curr) => curr + sum, 0);

  const length = array.length;
  const average = Math.floor(total / length);

  let min = array[0];
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }

  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return { average, min, max, length };
}
