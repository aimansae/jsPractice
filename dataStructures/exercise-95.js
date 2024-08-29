/*95. Update an employee's salary based on their id.
 */
let employees = [
  { id: 1, name: "Alice", position: "Developer", salary: 60000 },
  { id: 2, name: "Bob", position: "Designer", salary: 50000 },
  { id: 3, name: "Charlie", position: "Manager", salary: 70000 },
  { id: 3, name: "Sara", position: "Developer", salary: 70000 },
];
const updateEmployee = (id, newData) => {
  return employees.map((employee) => {
    if (employee.id === id) {
      return { ...employee, ...newData };
    }
    return employee;
  });
};

console.log(updateEmployee(1, { salary: 100000 }));
