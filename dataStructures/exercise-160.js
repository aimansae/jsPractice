/*160. Given two objects, merge them into a single object, 
ensuring that properties from the second object overwrite those from the first object 
if they have the same key.*/
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergeObjects = (obj1, obj2) => {
  const merged = { ...obj1, ...obj2 };
  return merged;
};
console.log(mergeObjects(obj1, obj2));
