/*97. Get username from given array object*/

const users = [
  { id: 1, name: "Sara", isActive: true },
  { id: 2, name: "Luke", isActive: false },
  { id: 3, name: "John", isActive: true },
];

//
const getUserName = (users) => {
  return users.map((user) => user.name);
};
console.log(getUserName(users));

// with Forloop

// const nameWithLoop = (users) => {
//   const names = [];
//   for (let i = 0; i < users.length; i++) {
//     names.push(users[i].name);
//   }
//   return names;
// };

// console.log(nameWithLoop(users));
