const reversingArray = require('./reversing-array');
const reverseArray = reversingArray.reverseArray;
const reverseInPlace = reversingArray.reverseInPlace;


test('new array that with originl array elemens in reverse order', () => {
  expect(reverseArray([1, 2, 3, 4, 5, 6])).toStrictEqual([6, 5, 4, 3, 2, 1]);
});

describe('modify the array by reversing it elements', () => {
  test('Array of numbers', () => {
    expect(reverseInPlace([1,2,3,4])).toStrictEqual([4,3,2,1]);
  });

  test('Array of strings', () => {
    expect(reverseInPlace(['A', 'B', 'C', 'D'])).toStrictEqual(['D', 'C', 'B', 'A']);
  });

  test('Array of mixed elements', () => {
    expect(reverseInPlace(['A', 1, 'B', 2, 'C', 3, 'D', false])).toStrictEqual([false, 'D', 3, 'C', 2, 'B', 1, 'A']);
  });
})
