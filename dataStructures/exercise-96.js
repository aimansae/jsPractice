/*96. You manage a list of employees where each employee has an id, name, position, and salary. You need to:
Remove an employee based on their id.*/

let employees = [
  { id: 1, name: "Alice", position: "Developer", salary: 60000 },
  { id: 2, name: "Bob", position: "Designer", salary: 50000 },
  { id: 3, name: "Charlie", position: "Manager", salary: 70000 },
];

const deleteEmployee = (id) => {
  const filtered = employees.filter((employee) => employee.id !== id);
  if (filtered.length === employees.length) {
    return `Employee with id ${id} not found.`;
  }
  employees = filtered;
  return `Employee with id ${id} removed.`;
};

console.log(deleteEmployee(1));
console.log(employees);
