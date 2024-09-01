/*166. Given two arrays of objects, 
merge them into a single array without duplicates
based on a unique id property.*/
const array1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const array2 = [
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const merged = (arr1, arr2) => {
  const merged = [...arr1, ...arr2];
  console.log(merged);
  const newSet = new Set();

  return merged.filter((item) => {
    if (!newSet.has(item.id)) {
      newSet.add(item.id);
      return true;
    }
    return false;
  });
};
console.log(merged(array1, array2));
