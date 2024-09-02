/*170. Convert Array of Key-Value Pairs to Object
Objective: Given an array of key-value pairs, convert it to an object.
*/

const pairs = [
  ["name", "Alice"],
  ["age", 25],
  ["city", "New York"],
];

const toObject = () => {
  return Object.fromEntries(pairs);
};

console.log(toObject(pairs));
