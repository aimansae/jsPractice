/*93. You manage a list of employees where each employee has an id, name, position, and salary. You need to:
Add a new employee to the list.*/
let employees = [
  { id: 1, name: "Alice", position: "Developer", salary: 60000 },
  { id: 2, name: "Bob", position: "Designer", salary: 50000 },
  { id: 3, name: "Charlie", position: "Manager", salary: 70000 },
];

const addEmployee = (id, name, position, salary) => {
  const newEmployee = {
    id,
    name,
    position,
    salary,
  };
  employees.push(newEmployee);
  return `${newEmployee.name} added to the list`;
};

console.log(addEmployee(4, "Aiman", "Developer", 1500));
console.log(employees);
