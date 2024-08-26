//16. Merge two arrays—one with keys and one with values—into an object.

let keys = ["name", "age", "location"];
let values = ["Alice", 30, "New York"];

function mergeArraysToObject(keys, values) {
  let obj = {};
  keys.forEach((key, index) => {
    obj[key] = values[index];
  });
  return obj;
}
console.log(mergeArraysToObject(keys, values));
