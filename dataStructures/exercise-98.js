//97. Get all active users from given array object*/
const users = [
  { id: 1, name: "Sara", isActive: true },
  { id: 2, name: "Luke", isActive: false },
  { id: 3, name: "John", isActive: true },
];

const isActive = (users) => {
  return users.filter((user) => user.isActive).map((user) => user.name);
};

console.log(isActive(users));
