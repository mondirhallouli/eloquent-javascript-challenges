// reverse array without mutating the original one(given as argument)
const reverseArray = (arr) => {
  let reversed = [];
  // loop through the original array and add its values to the new Array
  for (let item of arr) {
    reversed.unshift(item);
  }

  return reversed;
};

// reverse original array by mutation(reversing its elements)
const reverseInPlace = (arr) => {
  // copy the original order of the array
  let copy = [...arr];
  // loop the copy because it has elements in originl order
  for(let item of copy) {
    // on each iteration of the loop add the item in queue(from the copy array) to the front of the array we want to reverse
    arr.unshift(item);
    // on each iteration, remove the last element in the array we want to reverse
    arr.pop();
  }

  // return the modified array
  return arr;
};

module.exports = { reverseArray, reverseInPlace };
