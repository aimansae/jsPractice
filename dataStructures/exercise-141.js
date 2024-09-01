/*141. Clone an oject without affecting original object*/

const user = { name: "Alice", age: 25, email: "alice@example.com" };

const clonedObject = (user) => {
  return { ...user, age: 10 };
};
const cloned = clonedObject(user);
console.log("Updated without affecting original obj", cloned);
console.log("Original object", user);
