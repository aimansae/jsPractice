/*58. Given two arrays of numbers, return a new array 
that contains only the elements that are present in both arrays 
(the intersection).*/

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const findIntersection = (arr1, arr2) => {
  return arr1.filter((number) => arr2.includes(number));
};

console.log(findIntersection(array1, array2));
