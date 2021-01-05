const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(givenArray) {
  let tailOf = [];
  for (let i = 1; i < givenArray.length; i++) {
    tailOf.push(givenArray[i]);
  }
  return tailOf;
};

const words = ["array", "of", "words"];
tail(words);
assertEqual(words.length, 3);