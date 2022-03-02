
// array to list
const arrayToList = (arr) => {

  // create our list Object
  let list = {};
  // create binding for the null value at the end of the list
  let rest = null;

  // loop through the array from the end to the start
  for(let i = arr.length - 1; i >= 0; i--) {
    // add a value property to the curret list object;
    list.value = arr[i];
    // add a rest property to the current list object and set it equal to our rest variable
    list.rest = rest;
    // update the rest variable with a new object containing our list object;
    rest = Object.assign({}, list);
  }
  return list;
};

// list to array
const listToArray = (list) => {
  // create our output array
  const arr = [];
  // check if the object is empty return an empty array
  if(Object.keys(list).length === 0) return arr;
  /* loop through the object and
    1- create a binding to the list object
    2- check if it has a valid value(an object)
    3- push the value in the object's value property to our array
    4- update the binding we created to point to the rest porperty of the current object, because it has our next value
    5- start over from step 2

    - once the binding inside the for loop evaluates to a falsy value(null in this case), we break out of the loop and return our updated array
  */
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
};

// prepend function
const prepend = (list, elem) => {
  // adds element to the front of the list
  return {value: elem, rest: list};
};

// nth function
const nth = (list, idx) => {
  let newList = listToArray(list);
  return newList[idx] ? newList[idx] : undefined;
};

module.exports = {arrayToList, listToArray, prepend, nth};
