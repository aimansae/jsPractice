/*Write a function that takes an array of numbers and returns the smallest number in the array.*/
const numbers = [5, 3, 9, 2];
// with Math.min()

const findSmallest = (numbers) => {
  return Math.min(...numbers);
};
console.log(findSmallest(numbers));

const findSmallNumber = (numbers) => {
  let smallest = numbers[0];
  for (let n of numbers) {
    if (n < smallest) {
      smallest = n;
    }
  }
  return smallest;
};
console.log(findSmallNumber(numbers));
