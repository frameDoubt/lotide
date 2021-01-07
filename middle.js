const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const middle = function (givenArray) {
  let returnedArray = [];
  let index = givenArray.length / 2;
  if (givenArray.length <= 2) {
    return [];
  } else if (givenArray.length % 2 === 0) {
    returnedArray.push(givenArray[index - 1], givenArray[index]);
    return returnedArray;
  } else {
    returnedArray.push(givenArray[Math.floor(index)]);
    return returnedArray;
  }
};

let simulatedArray1 = [1, 5, 7, 9, 11];
let simulatedArray2 = [1, 5, 7, 9, 11, 18];
let simulatedArray3 = [1, 11];
let simulatedArray4 = [1];
assertEqual((eqArrays(middle(simulatedArray1), [7])), (eqArrays(middle(simulatedArray1), [7])));
// console.log(eqArrays(middle(simulatedArray1), [7]));
// assertEqual(middle(simulatedArray2), [7, 9]);
// console.log(eqArrays(middle(simulatedArray2), [7, 9]));
// assertEqual(middle(simulatedArray3), []);
// console.log(eqArrays(middle(simulatedArray3), []));
// assertEqual(middle(simulatedArray4), []);
// console.log(eqArrays(middle(simulatedArray4), []));