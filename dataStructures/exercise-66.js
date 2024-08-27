/*Write a function to find the missing number in a sequence of consecutive numbers from 1 to n.*/
const numbers = [1, 2, 4, 5, 6];
const findMissingNumber = () => {
  //find the max number
  const max = Math.max(...numbers);
  // create a set from numbers array
  console.log(max);

  const set = new Set(numbers);
  console.log(set);

  // loop through the number till max
  for (let i = 1; i <= max; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
};

console.log(findMissingNumber(numbers));
