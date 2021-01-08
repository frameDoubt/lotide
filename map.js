// functions for testing map
const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (firstArray, secondArray) {
  console.log(eqArrays(firstArray, secondArray));
};

// actual map code
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);

assertArraysEqual(map(words, (word) => word[word.length - 1]), ["d", "l", "o", "r", "m"]);