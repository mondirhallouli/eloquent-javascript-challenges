const deepEqualModule = require('./deep-equal');
const deepEqual = deepEqualModule.deepEqual;

/*
  tests taken from: https://github.com/MarcusPlieninger/eloquent-js
*/

describe('inputs that are not objects', () => {
  test('Boolean', () => {
    expect(deepEqual(true, false)).toBe(false)
    expect(deepEqual(true, 3)).toBe(false)
  })
  test('null', () => {
    expect(deepEqual(null, null)).toBe(true)
    expect(deepEqual(null, 3)).toBe(false)
  })
  test('undefined', () => {
    expect(deepEqual(undefined, undefined)).toBe(true)
    expect(deepEqual(undefined, 'cat')).toBe(false)
  })
  test('number', () => {
    expect(deepEqual(3, 4)).toBe(false)
    expect(deepEqual(5, 5)).toBe(true)
  })
  test('string', () => {
    expect(deepEqual('cat', 'dog')).toBe(false)
    expect(deepEqual('cat', 'cat')).toBe(true)
  })
})

describe('inputs that are objects', () => {
  test('objects of unequal length', () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 2, b: 5, c: 4 })).toBe(false)
  })
  test('examples from text', () => {
    const obj = { here: { is: 'an' }, object: 2 }
    expect(deepEqual(obj, obj)).toBe(true)
    expect(deepEqual(obj, { here: 1, object: 2 })).toBe(false)
  })
  // use deep copy here to manipulate objects for test cases
  test('objects 1 to multiple layers deep', () => {
    const obj0 = { a: { babushka: 'doll' }, has: 'many' }
    const obj1 = JSON.parse(JSON.stringify(obj0))
    obj1.has = 'many dolls'
    const obj2 = JSON.parse(JSON.stringify(obj1))
    obj2.inside = { of: it } // 1 layer
    const obj3 = JSON.parse(JSON.stringify(obj2))
    obj3.inside.of = { other: 'dolls' } // 2 layers
    const obj4 = JSON.parse(JSON.stringify(obj3))
    obj4.inside.of.other = { dolls: 'inside' } // 3 layers
    const obj5 = JSON.parse(JSON.stringify(obj4))
    obj5.inside.of.other.dolls = { insideof: 'other dolls' } // 4 layers
    const obj6 = JSON.parse(JSON.stringify(obj5))
    obj6.inside.of.other.dolls.insideof = { otherdolls: 'adinfinitum' } // 5 layers
    expect(deepEqual(obj0, obj0)).toBe(true)
    expect(deepEqual(obj0, { a: 'babushka', has: 'dolls' })).toBe(false)
    expect(deepEqual(obj0, obj1)).toBe(false)
    expect(deepEqual(obj0, obj3)).toBe(false)
    expect(deepEqual(obj0, obj4)).toBe(false)
    expect(deepEqual(obj4, obj4)).toBe(true)
    expect(deepEqual(obj4, obj5)).toBe(false)
    expect(deepEqual(obj5, obj5)).toBe(true)
    expect(deepEqual(obj5, obj6)).toBe(false)
  })
})
