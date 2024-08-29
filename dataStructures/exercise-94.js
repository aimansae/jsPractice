/*94. You manage a list of employees where each employee has an id, name, position, and salary. You need to:
Find employee by position*/
let employees = [
  { id: 1, name: "Alice", position: "Developer", salary: 60000 },
  { id: 2, name: "Bob", position: "Designer", salary: 50000 },
  { id: 3, name: "Charlie", position: "Manager", salary: 70000 },
  { id: 3, name: "Sara", position: "Developer", salary: 70000 },
];

const findEmployeeByPosition = (position) => {
  const find = employees.filter((employee) => employee.position === position);
  return find;
};
console.log(findEmployeeByPosition("Developer"));
