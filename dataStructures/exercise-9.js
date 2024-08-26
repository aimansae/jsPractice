// 9. Filter an array with only the even numbers

const arr = [1, 2, 3, 4, 5, 6];
const calculateEvenNumbers = (arr) => {
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  return evenNumbers;
};

console.log(calculateEvenNumbers(arr));
