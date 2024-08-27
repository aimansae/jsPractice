/*65. Write a function that takes two arrays and returns a new array 
containing elements that are
 in the first array but not in the second.*/
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const findUniques = (arr1, arr2) => {
  return arr1.filter((n) => !arr2.includes(n));
};

console.log(findUniques(arr1, arr2));
