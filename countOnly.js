const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const countOnly = function (allItems, itemsToCount) {
//   let objCounter = {};
//   for (let i = 1; i < allItems.length; i++) {
//     for (allItems[i] in itemsToCount) {
//       if (itemsToCount.hasOwnProperty(allItems[i]) && !objCounter.hasOwnProperty(allItems[i])) {
//         objCounter[allItems[i]] = 1;
//       } else if (itemsToCount.hasOwnProperty(allItems[i]) && objCounter.hasOwnProperty(allItems[i])) {
//         objCounter[allItems[i]] += 1;
//       }
//     }
//   }
//   console.log(objCounter);
//   return objCounter;
// };

const countOnly = function(allItems, itemsToCount) {
  // empty object for storing our results
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);