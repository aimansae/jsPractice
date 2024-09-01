/*Checking for a Property, if it exists in an object*/

const user = { name: "Alice", age: 25 };

const isAvailable = (property) => {
  return property in user;
};
console.log(isAvailable("name"));
console.log(isAvailable("Profession"));
