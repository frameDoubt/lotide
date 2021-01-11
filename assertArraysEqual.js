
const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, '3']);