/*152. Given an array of user objects
filter out users older than 30 and return their names capitalized.
*/
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 32 },
  { name: "David", age: 28 },
];

const olderThan30 = 30;

const filterUsers = (users) => {
  const filtered = users
    .filter((user) => user.age > olderThan30)
    .map((user) => ({
      ...user,
      name: user.name.toUpperCase(),
    }));

  console.log(filtered);
};
filterUsers(users);
