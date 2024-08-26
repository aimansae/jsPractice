//42. You have two arrays of product IDs. Find the product IDs that appear in both arrays.

let array1 = [101, 102, 103, 104, 105];
let array2 = [103, 104, 106, 107];

const findCommonItem = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};

console.log(findCommonItem(array1, array2));
