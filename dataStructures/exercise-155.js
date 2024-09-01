/*Working with object.entries, filter out the age if <18*/
const person = { name: "Alice", age: 17, city: "New York" };

const filterAge = (person) => {
  const toArray = Object.entries(person);
  console.log("Original array:", toArray);

  const removedAge = toArray.filter(
    ([key, value]) => key !== "age" || value >= 18
  );

  if (toArray.length > removedAge.length) {
    console.log("Age removed");
  }

  // Convert the filtered array back to an object
  const result = Object.fromEntries(removedAge);
  return result;
};

console.log(filterAge(person)); // Call the function and print the result
console.log(person);
