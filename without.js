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

const without = function (source, itemsToRemove) {
  const returnedArray = [...source];
  if (!eqArrays(returnedArray, itemsToRemove)) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      for (let j = 0; j < returnedArray.length; j++) {
        if (itemsToRemove[i] === returnedArray[j]) {
          returnedArray.splice(j, 1);
        }
      } 
    }
  }
  return returnedArray;
};
const myArray = [6, 7, 8, 9, 10];
assertArraysEqual(without(myArray, [7]), [6, 8, 9, 10]);
console.log(myArray);
// assertArraysEqual(without([1, 2, 3, 4, 5], [2, 4]), [1, 3, 5]);