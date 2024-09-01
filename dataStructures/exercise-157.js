/*157. Given an array of user objects, add a new property 
isActive with a value of true to each object.*/
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const addValue = (users) => {
  const toArray = Object.entries(users);
  console.log("Converted to Array", toArray);
  const added = toArray.map((user) => ({
    ...user,
    isActive: "true",
  }));

  return added;
};

console.log(addValue(users));
