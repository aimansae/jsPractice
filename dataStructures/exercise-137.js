/*137. Write a function to merge two objects. If they have the same key, the value from the second object should overwrite the value from the first.
 */
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 20, a: 1, d: 4 };

const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
console.log(mergeObjects(obj1, obj2));
