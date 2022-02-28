const list = require('./list');
const arrayToList = list.arrayToList;

describe('builds up a list structure', () => {
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

  test('empty array', () => {
    expect(arrayToList([])).toEqual({});
  });

  test('array with 1 value', () => {
    expect(arrayToList([3])).toEqual({ value: 3, rest: null });
  });
});
