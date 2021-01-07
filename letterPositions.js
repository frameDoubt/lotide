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

const letterPositions = function(sentence) {
  let modifiedInput = sentence.replace(/ /g, "");
  const results = {};
  let index = 0;
  for (let letter of modifiedInput) {
    
    if (results[letter]) {
      results[letter].push(index);
      index++;
    } else {
      results[letter] = [index];
      index++;
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);