/*64. Write a function that takes an array and returns an object 
where the keys are the elements and the values are the number of times each 
element appears in the array.*/

const fruits = ["apple", "banana", "apple", "orange", "banana", "banana"];

const findOccurrences = (fruits) => {
  // outcome: {apple:1}
  // initialize empty object

  let object = {};
  fruits.forEach((fruit) => {
    if (object[fruit]) {
      object[fruit] += 1;
    } else {
      object[fruit] = 1;
    }
  });
  return object;
};
console.log(findOccurrences(fruits));
