//8. Convert a string of numbers, into an array

const array = ["1", "2", "3", "4"];
const convertString = (array) => {
  const stringToArray = array.map((item) => Number(item));
  return stringToArray;
};

console.log(convertString(array));
