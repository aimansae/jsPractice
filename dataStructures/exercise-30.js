/*30.  You have an array of user objects.
You need to filter out the users who are inactive.
Print the names of the Active users
*/

const users = [
  { name: "Jack", isActive: true },
  { name: "Mara", isActive: false },
  { name: "Luke", isActive: true },
  { name: "Mike", isActive: false },
];
const findActiveUsers = (users) => {
  const activeUsers = users.filter((user) => user.isActive).map((u) => u.name);

  return activeUsers;
};
console.log(findActiveUsers(users));
