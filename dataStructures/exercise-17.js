//17. Use filter to remove duplicates in an array

let array = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicates = (array) => {
  const filtered = array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
  return filtered;
};
console.log(removeDuplicates(array));
