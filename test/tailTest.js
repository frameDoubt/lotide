const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["array", "of", "words"];
tail(words);
assertEqual(words.length, 3);