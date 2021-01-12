
const tail = function(givenArray) {
  let tailOf = [];
  for (let i = 1; i < givenArray.length; i++) {
    tailOf.push(givenArray[i]);
  }
  return tailOf;
};

module.exports = tail;