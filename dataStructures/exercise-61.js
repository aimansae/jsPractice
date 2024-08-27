/*61. Write a function that takes an array of numbers 
and returns a new array with all duplicates removed.*/
const array = [1, 2, 2, 3, 4, 4, 5];

// with Set, create a set and covert it to an array
const removeDuplicatesWithSet = (array) => {
  return new Set([...array]);
};
console.log(removeDuplicatesWithSet(array));

const removeDuplicates = (array) => {
  // filter through the array
  // find the index so it is not included
  return array.filter((number, index) => {
    return array.indexOf(number) === index;
  });
};
console.log(removeDuplicates(array));
