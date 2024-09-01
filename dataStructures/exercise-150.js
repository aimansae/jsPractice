/*150.  You have an employee directory where you manage employee details
you need to remove employee records.*/
let employees = {
  101: { name: "Alice", department: "HR", position: "Manager" },
  102: { name: "Bob", department: "IT", position: "Developer" },
};

const removeEmployee = (id) => {
  delete employees[id];
  console.log(`Employee with ID ${id} removed`);
};
removeEmployee(102);
console.log(employees);

// Remove by converting ong inot array

const convertToArray = (id) => {
  const initialLength = Object.keys(employees).length;
  delete employees[id];

  // update to Array

  const toArray = Object.values(employees);
  if (initialLength > toArray.length) {
    console.log(`Employee with ID ${id} removed successfully.`);
  } else {
    console.log(`Error: Employee with ID ${id} not found.`);
  }
};
convertToArray(102);
console.log(employees);
