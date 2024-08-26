/*1. Write a function that takes an array of numbers and
returns a new array with the numbers in reverse order.
*/
const reverseArray = (arr) => {
  const newArray = arr.reverse();
  return newArray;
};
const myArray = [1, , 5, 2, 2, 3, 4, 5];
console.log(reverseArray(myArray));
