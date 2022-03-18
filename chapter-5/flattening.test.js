/*
  problem:
  -------
  transfrom an array of arrays into a single array.
  - inputs: array of array
  - output: single array
  - example: flatten([[2,3], [3,5,2]]) -> [2,3,3,5,2]
  - things to be aware of:
    - what if the input was: [], or invalid(not an array)
    - what if one of the nested arrays was empty
*/

function flatten(arr) {
  // short ciruit answers
  if (!Array.isArray(arr)) return "not an array";
  if (arr.length === 0) return [];
  // 1. loop through the array with reduce
  // 2. concatenate the nested arrays with concat
  // 3. return the final result of the reduce
  return arr.reduce((flat, currArr) => flat.concat(currArr));
}

// ============== TESTS ==============
describe("array with invalid inputs", () => {
  test("object", () => {
    expect(flatten({})).toEqual("not an array");
  });

  test("string", () => {
    expect(flatten("")).toEqual("not an array");
    expect(flatten("[2,4,6]")).toEqual("not an array");
  });

  test("boolean", () => {
    expect(flatten(false)).toEqual("not an array");
    expect(flatten(true)).toEqual("not an array");
  });

  test("null", () => {
    expect(flatten(null)).toEqual("not an array");
  });

  test("undefined", () => {
    expect(flatten(undefined)).toEqual("not an array");
  });

  test("number", () => {
    expect(flatten(7)).toEqual("not an array");
  });
});

// ==========[ VALID INPUT TESTS ]========== //

describe("array with valid inputs", () => {
  test("empty array", () => {
    expect(flatten([])).toEqual([]);
  });

  test('example from text', () => {
    const arrays1 = [[1, 2, 3], [4, 5], [6]];
    expect(flatten(arrays1)).toEqual([1, 2, 3, 4, 5, 6]);
  })
  test('multiple nested arrays', () => {
    const arrays2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9], [], [10, 11, 12], [13, 14], [15]];
    expect(flatten(arrays2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  })

  test('with one empty nested array', () => {
    const arrays2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9], [], [10, 11, 12], [13, 14], [15]];
    expect(flatten(arrays2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  })
});
