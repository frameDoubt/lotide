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

module.exports = middle;