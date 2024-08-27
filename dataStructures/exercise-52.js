//52. Find if "Sara" is in the array

const names = ["Sara", "Julie", "Mary", "Max"];

const findName = (array) => {
  const result = array.findIndex((el) => el === "Sara");
  return result;
};

console.log(findName(names));
