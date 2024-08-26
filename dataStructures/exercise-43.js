//43 .Flatten a nested array and remove duplicates

let nestedArray = [
  [1, 2, 3],
  [4, 5, 2],
  [6, [7, 8]],
  [1, 9, [10, 10]],
];

const flattenArray = (nestedArray) => {
  let flat = nestedArray.flat(Infinity);
  return flat.filter((n, index) => flat.indexOf(n) === index);

  // // or with Set
  // let flatWithSet = [...new Set(flat)];
  // console.log("remove duplicates wit Set", flatWithSet);
};

console.log(flattenArray(nestedArray));
