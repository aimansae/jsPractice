//37. You have an array of integers.Find the biggest number and display it.
let numbers = [100, 4, 200, 1, 3, 2];

const sortedNum = (numbers) => {
  return numbers.sort((a, b) => b - a);
};

console.log(sortedNum(numbers));
