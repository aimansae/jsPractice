/*15. Write a function to flatten a nested array into a
 single-level array.*/

let arr = [1, [2, [3, 4], 5], 6, [7, 8]];

let flattenedArray = (arr) => {
  const flattenedArray = arr.flat(Infinity);
  return flattenedArray;
};
console.log(flattenedArray(arr));
