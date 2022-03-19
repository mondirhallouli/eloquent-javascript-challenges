/*
  differences:
  - with a while loop, we update the n value itself, however with the for loop we give the value of n to a new value inside the for loop and update that.
*/

// with while
function loopWhile(n, test, update, body) {
  let result = [];
  while (test(n)) {
    result.push(body(n));
    n = update(n);
  }
  return result;
};

// with for
function loopFor(n, test, update, body) {
  let result = [];
  for (let i = n; test(i); i = update(i)) {
    result.push(body(i));
  }
  return result;
};

// loopFor(3, n => n > 0, n => n - 1, console.log); // 3, 2, 1

// ==========[ TESTS ]==========
describe('loopWhile()', () => {
  test('example from text', () => {
    expect(loopWhile(3, n => n > 0, n => n - 1, n => n)).toEqual([3, 2, 1])
  })
})

describe('loopFor()', () => {
  test('example from text', () => {
    expect(loopFor(3, n => n > 0, n => n - 1, n => n)).toEqual([3, 2, 1])
  })
})