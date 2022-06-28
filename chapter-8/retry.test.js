/* 
  the function primitiveMultiply, multiplies two numbers 20% of the time, and the 80% of the time it throws an exception.

  wrap the function inside another one that keeps trying until a call succeeds;
*/

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) return a * b;
  else throw new MultiplicatorUnitFailure("klunk");
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      if (!(error instanceof MultiplicatorUnitFailure)) {
        throw error;
      }
    }
  }
}

// TESTS
test("primitiveMultiply throws an exception", () => {
  expect(() => primitiveMultiply(8, 8)).toThrow(Error);
});

test("retrying until the function returns a valid number", () => {
  expect(reliableMultiply(8, 8)).toEqual(64);
});
