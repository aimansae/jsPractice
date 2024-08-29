/*91. Given two arrays, 
find and return the elements that are present in both arrays.*/

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const commonNumbers = (arr1, arr2) => {
  return arr1.filter((number) => arr2.includes(number));
};
console.log(commonNumbers(array1, array2));
