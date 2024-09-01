/*149.  You have an employee directory where you manage employee details
you need to perform operations like adding and updating employee records.*/
let employees = {
  101: { name: "Alice", department: "HR", position: "Manager" },
  102: { name: "Bob", department: "IT", position: "Developer" },
};

const addEmployee = (id, employee) => {
  employees[id] = employee;
  console.log(`Employee with id ${id} added successfully`);
};
addEmployee(103, {
  name: "Charlie",
  department: "Finance",
  position: "Analyst",
});
console.log(employees);

// Update an employee

const updateEmployee = (id, key, newValue) => {
  if (employees[id]) {
    employees[id][key] = newValue;
    console.log(`Employee with ID ${id} modified`);
  }
};
updateEmployee(101, "position", "Senior Manager");
updateEmployee(102, "name", "BEN");
console.log(employees);
