const { expect } = require('@jest/globals');
const sumOfRange = require('./sum-of-range');
const range = sumOfRange.range;
const sum = sumOfRange.sum;

// range function tests
test('returns array of numbers in a range', () => {
  expect(range(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

// test range with a step
test('returns array of numbers in range with a step', () => {
  expect(range(1, 10, 2)).toStrictEqual([1, 3, 5, 7, 9]);
});

// test range with a negative step
test('returns array of numbers in range with a negative step', () => {
  expect(range(5, 2, -1)).toStrictEqual([5, 4, 3, 2]);
});

// sum function test
test('returns the sum of numbers in an array', () => {
  expect(sum(range(1, 10))).toBe(55);
  expect(sum(range(1, 10, 2))).toBe(25);
  expect(sum(range(5, 2, -1))).toBe(14);
  expect(sum(range(10, 2, -2))).toBe(30);
});