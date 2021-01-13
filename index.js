const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArraysEqual: asssertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
};