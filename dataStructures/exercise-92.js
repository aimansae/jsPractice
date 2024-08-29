/*92. Remove Duplicates from an Array*/
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

// Write a function to remove duplicates from the array.
const removeDuplicates = (arrayWithDuplicates) => {
  const set = new Set([...arrayWithDuplicates]);
  return set;
};

console.log(removeDuplicates(arrayWithDuplicates));
