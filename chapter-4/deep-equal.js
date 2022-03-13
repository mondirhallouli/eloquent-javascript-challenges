/*
  +========+
  | NOTES: |
  +========+
    - the first if statement is a shortcut way to check if values are equal or not, and returns true so we don't go through all the checks.

    - the second if statement takes into consideration that the typeof null returns "object" and makes sure that if one of our arguments' value is null it is treated as the other values(number, string, undefined), at the same time it makes sure that if their value is not null, it also isn't an object. And since we already know both arguments are not equal (because the first if statement's condition evaluated to false) we return false.

    - if none of the conditions inside the first two if statements are true, then we are sure both arguments are objects, now all we have to do is compare their equality. a quick way to check if they are not equal is if they don't have the same number of properties. However, if they do have the same number of properties, we need to check if those have the same names and values.

    - at the end if none of the cases apply we return true because both arguments are empty objects
*/

const deepEqual = function (x, y) {

  // check if both values are equal
  if (x === y) return true;

  // if they are not equal then make sure they are either null or anything other than objects and return false
  if (x === null || typeof x !== "object" ||
    y === null || typeof y !== "object") return false;

  // if none of the above is true then both values are objects, so we extract arrays of their properties' names
  let keysX = Object.keys(x), keysY = Object.keys(y);

  // easiest way to check if they are not equal is the length of their properties' names arrays
  if (keysX.length !== keysY.length) return false;

  // we use one of them as a reference to make sure their properties have the same names and values
  for (let key of keysX) {
    // if the property name from the first argument (x) is not a property name in the second argument (y) then return false, but if it is then we use recursion to make sure both properties have the same value(if not then we return false) 
    if (!(key in keysY) || !deepEqual(x[key], y[key])) return false;
  }

  return true;
};

module.exports = { deepEqual };
