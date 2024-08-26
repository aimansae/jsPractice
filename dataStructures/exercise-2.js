/*2. Write a function that takes an array of strings and
returns an object where the keys are the strings and
the values are the number of times each string appears in the array.*/

const calculateOccurrences = (arr) => {
  let occurrences = {};
  arr.forEach((item) => {
    occurrences[item] = (occurrences[item] || 0) + 1;
  });
  return occurrences;
};
const arrayOfStrings = ["a", "b", "c", "d", "d"];
console.log(calculateOccurrences(arrayOfStrings));
