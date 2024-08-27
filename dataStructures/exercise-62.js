/*62. Write a function that takes an array of numbers and returns the sum of all the elements.*/

const array = [1, 2, 3, 4, 5, 12, 1];
const total = (array) => {
  return array.reduce((initialValue, currentValue) => {
    return initialValue + currentValue;
  });
};
console.log(total(array));
