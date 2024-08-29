/*90. You have two arrays of objects representing two different datasets. Merge them into a single array while avoiding duplicates based 
on a unique identifier.*/

const array1 = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

const array2 = [
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const mergeArrays = (arr1, arr2) => {
  const combined = arr1.concat(arr2); // Combine both arrays

  // or combined = [...arr1, ...arr2]

  return combined.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id) // Check if the item is the first occurrence of its id
  );
};

console.log(mergeArrays(array1, array2));
