//44. Create an array, based on user who have the full information.
let users = [
  { name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
  { name: "Bob", email: "", phone: "987-654-3210" },
  { name: "Charlie", email: "charlie@example.com", phone: "" },
  { name: "David", email: "david@example.com", phone: "555-555-5555" },
  { name: "Eve", email: null, phone: "222-333-4444" },
  { name: "Frank", email: "frank@example.com", phone: null },
];

const userWithFullInfo = (users) => {
  return users.filter((user) => user.phone !== "" && user.email !== "");
};

console.log(userWithFullInfo(users));
