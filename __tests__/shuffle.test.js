const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test('should return an array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffle(inputArray);
    expect(Array.isArray(result)).toBe(true);
  });
});

describe ("shuffle should ...", ()=>{
  test('should return an array of the same length as the input', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffle(inputArray);
    expect(result.length).toBe(inputArray.length);
  });
})
