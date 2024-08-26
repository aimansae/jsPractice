/*3. Given an array of numbers, find the maximum and minimum values,
then create a new array that contains only the unique
numbers in ascending order.*/

const calculateMaxAndMin = (arr) => {
  const maxValue = Math.max(...arr);
  console.log(maxValue);

  const minValue = Math.min(...arr);
  console.log(minValue);
  const sortedArray = arr.sort((a, b) => a - b);
  console.log(sortedArray);
};
const array = [5, 8, 1, 2, 3, 4, 5];
calculateMaxAndMin(array);
