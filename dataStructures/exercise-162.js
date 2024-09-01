/*162.  Given an array of objects, count the occurrences of each value for a specified property.*/
const items = [
  { type: "fruit", name: "apple" },
  { type: "fruit", name: "banana" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "apple" },
];
const findOccurrences = (items, property) => {
  const obj = {};

  items.forEach((item) => {
    const value = item[property];

    if (obj[value]) {
      obj[value]++;
    } else obj[value] = 1;
  });
  return obj;
};
console.log(findOccurrences(items, "type"));
