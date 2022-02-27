// range function returns array of numbers from start(inclusive) to end(inclusive)
const range = (start, end, step = 1) => {
  let result = [];

  if (step > 0) {
    for (let i = start; i < end + 1; i += step) {
      result.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i > end - 1; i += step) {
      result.push(i);
    }
  }

  return result;
};

// example inputs and outputs
// console.log(range(1, 10)); // outputs [1,2,3,4,5,6,7,8,9,10]
// console.log(range(1, 10, 2)); // outputs [1,3,5,7,9]
// console.log(range(5, 2, -1)); // outputs [5,4,3,2]
// console.log(range(10, 2, -2)); // outputs [10,8,6,4,2]

// ==========================================================================

// sum function takes an array of numbers(range) and returns the total sum of the range
const sum = (numArr) => {
  let total = 0;
  for (let number of numArr) {
    total += number;
  }
  return total;
};

// example inputs and outputs
// console.log(sum(range(1, 10))); // outputs 55
// console.log(sum(range(1, 10, 2))); // outputs 25
// console.log(sum(range(5, 2, -1))); // outputs 14
// console.log(sum(range(10, 2, -2))); // outputs 30
// console.log(sum(range(1, 100))); // outputs 5050
// console.log(sum(range(1, 75))); // outputs 2850

module.exports = { range, sum };