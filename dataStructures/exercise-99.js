//97. Sort users by age, ascending order from given array object*/
const users = [
  { id: 1, name: "Sara", isActive: true, age: 55 },
  { id: 2, name: "Luke", isActive: false, age: 18 },
  { id: 3, name: "John", isActive: true, age: 22 },
];

const sortByAge = (users) => {
  let sorted = users.sort((a, b) => a.age - b.age);
  return sorted.map((user) => user.name);
};

console.log(sortByAge(users));
console.log(var1);

var var1 = 1;
