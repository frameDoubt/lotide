const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

let simulatedArray1 = [1, 5, 7, 9, 11];
let simulatedArray2 = [1, 5, 7, 9, 11, 18];
let simulatedArray3 = [1, 11];
let simulatedArray4 = [1];

assertArraysEqual(middle(simulatedArray1), [7]);
assertArraysEqual(middle(simulatedArray2), [7, 9]);
assertArraysEqual(middle(simulatedArray3), []);
assertArraysEqual(middle(simulatedArray4), []);