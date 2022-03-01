const list = require('./list');
const arrayToList = list.arrayToList;
const listToArray = list.listToArray;

// tests for the arrayToList function
describe('builds up a list structure', () => {
  test('when given an empty array', () => {
    expect(arrayToList([])).toStrictEqual({});
  });

  test('when given an array with 1 value', () => {
    expect(arrayToList([3])).toStrictEqual({ value: 3, rest: null });
  });

  test('when given [1, 2, 3]', () => {
    expect(arrayToList([1,2,3])).toStrictEqual({
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }
    });
  });
});

// tests for the listToArray function
describe('produces an array from a list', () => {
  test('when given an empty list', () => {
    expect(listToArray({})).toStrictEqual([]);
  });

  test('when given a list with 1 value', () => {
    expect(listToArray({value: 1, rest: null})).toStrictEqual([1]);
  });

  test('when given a list', () => {
    expect(listToArray({
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }
    })).toStrictEqual([1,2,3]);
  });
});
