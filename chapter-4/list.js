
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

module.exports = {arrayToList};
