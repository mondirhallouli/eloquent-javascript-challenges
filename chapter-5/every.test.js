/*
  everySome explanation:
  ---------------------
  - the some() array method goes through the array elements and checks if they pass the test function(meaning if they return true), if they do, then some() would just return true at the first element that it finds truthy without checking the rest of the elements.
  
  - This is why the not(!) operator is used inside the some() method's callback function (assuming we have an array in which all elements pass the callback function, we want to still check all of them, so we flip the return value of each truthy element to false in order to continue checking).

  - now when we go through all elements and they are all true, their truthiness is flipped to false, therefore the some() method doesn't find any element that return "true" so it returns false. This is where the second not(!) operator outside comes in, it flips the false result of the some() method back to true and we return it.

  - the other case is if the some() method goes through an array and finds an element that is falsy. it gets flipped to true(by the not(!) operator inside the callback), then the some() returns true and stops checking. which is then flipped to false by the outside not(!) operator and returned.
*/

function everyLoop(arr, test) {
  for (let el of arr) {
    if (!test(el)) {
      return false;
    }
  }
  return true;
}

function everySome(arr, test) {
  return !arr.some(n => !test(n));
}

// ==========[ TESTS ]==========
describe('everyLoop()', () => {
  test('examples from text', () => {
    expect(everyLoop([1, 3, 5], n => n < 10)).toEqual(true)
    expect(everyLoop([2, 4, 16], n => n < 10)).toEqual(false)
    expect(everyLoop([], n => n < 10)).toEqual(true)
  })
})

describe('everySome()', () => {
  test('examples from text', () => {
    expect(everySome([1, 3, 5], n => n < 10)).toEqual(true)
    expect(everySome([2, 4, 16], n => n < 10)).toEqual(false)
    expect(everySome([], n => n < 10)).toEqual(true)
  })
})