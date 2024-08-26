/*32. You have an array of strings representing different items sold in a store.
Find the item that appears most frequently in the array.
*/

let items = [
  "apple",
  "banana",
  "orange",
  "apple",
  "banana",
  "apple",
  "kiwi",
  "orange",
  "banana",
  "apple",
];
const findFrequentItem = (array) => {
  const countItems = {};
  array.forEach((item) => {
    countItems[item] = (countItems[item] || 0) + 1;
  });

  let mostFrequentItem = null;
  let highestCount = 0;
  for (let item in countItems) {
    if (countItems[item] > highestCount) {
      highestCount = countItems[item];
      mostFrequentItem = item;
    }
  }
  return mostFrequentItem;
};

console.log(findFrequentItem(items));
