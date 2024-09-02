/*168. : Given an array of objects with a numerical property, find the 
object with the maximum value for that property, use reduce.
*/

const items = [
  { name: "Item1", price: 30 },
  { name: "Item2", price: 50 },
  { name: "Item3", price: 20 },
];

const findMax = (items, property) => {
  return items.reduce((currentMax, item) => {
    return item[property] > currentMax[property] ? item : currentMax;
  }, items[0]);
};
console.log(findMax(items, "price"));
