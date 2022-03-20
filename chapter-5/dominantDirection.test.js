/*
write a function that computes the dominant script in a string, and returns the writing dircetion of the dominant script.
- input: a string
- output: writing direction
*/

// the scripts array we need to find the matching script to a character
const SCRIPTS = require("./scripts");

// this function takes in a character code and returns the related script from an array of scripts, if no match is found it returns null.
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(range => code >= range[0] && code < range[1])) {
      return script;
    }
  }
  return null;
}

// this function takes an iterable items parameter, iterates through it, creates groups according to a specific name(created by groupName parameter) and then counts the number of items belonging to each group. these groups are then kept in an array which is returned in the end.
function countBy(items, groupName) {
  // frequency list (groups list)
  let frequency = [];
  for (let item of items) {
    // this one returns a value that we use as a name
    let direction = groupName(item);
    // this one gets us the index of the item with the same name, or -1 if it's not in the frequency array
    let isKnown = frequency.findIndex(s => s.direction == direction);
    // this line checks if the item is not in the frequency array and adds it
    if (isKnown == -1) {
      frequency.push({ direction, count: 1 });
    } else {
      frequency[isKnown].count += 1;
    }
  }
  // return the final frequency array
  return frequency;
}

function dominantDirection(str) {
  /* 
  it iterates through the characters in a string, then searches for its matching script, 
    - if it found one, it creates a group of that script's direction if there isn't one, or adds 1 to its count property if it already exists.
    - if it didn't find a matching script, it returns none and creates a group of the characters that didn't match with any script
  the countBy function returns an array of groups(groups examples below):
    - {direction: "rtl", count:...}
    - {direction: "ltr", count:...}
    - {direction: "ttb", count:...}
    - {direction: "none", count:...}
  we then filter out the group with the direction of none, and assign the final array to a binding (called directions in this case)
  */
  let directions = countBy(str, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ direction }) => direction != "none");

  // check if the directions group list is empty
  if (directions.length === 0) return "String not valid";

  /* reduce the array of groups to a single group with the biggest count */
  let dominant = directions.reduce((a, b) => a.count > b.count ? a : b);

  // return the direction property of the group object
  return dominant.direction;
}

/*============
    TESTS
=============*/

describe("test from exercise", () => {
  test("single script", () => {
    expect(dominantDirection("Hello!")).toBe("ltr");
  });

  test("multiple scripts", () => {
    expect(dominantDirection("Hey, مساء الخير")).toBe("rtl");
  });

  test("string of a space character", () => {
    expect(dominantDirection(" ")).toBe("String not valid");
  });
});