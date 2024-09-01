/*151.convert object into array */
let employees = {
  101: { name: "Alice", department: "HR", position: "Manager" },
  102: { name: "Bob", department: "IT", position: "Developer" },
};

// Convert object to an array with ID as key and employee object as value
const convertToArrayWithID = () => {
  return Object.entries(employees).map(([id, employee]) => ({
    id,
    ...employee,
  }));
};

const employeeArray = convertToArrayWithID();
console.log(employeeArray);
