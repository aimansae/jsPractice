//27. Multiply array numbers by 5

let multiple = 5;
const array = [10, 11, 12, 13, 14, 15];

const multiplyArray = (array, multiple) => {
  return array.map((n) => {
    const result = n * multiple;
    console.log(`${n} * ${multiple} = ${result}`);
    return result;
  });
};

const newArray = multiplyArray(array, multiple);
console.log("New array:", newArray);
