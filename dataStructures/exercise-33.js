/*33. You have two arrays of employee objects.
One array contains the id and name,
and the other array contains the id and department.
Merge these arrays based on the id to create a new array with id, name, and department.
*/

const employees = [
  {
    id: 1,
    name: "Luke",
  },
  {
    id: 2,
    name: "Jack",
  },
  {
    id: 3,
    name: "Mark",
  },
];
const department = [
  {
    id: 1,
    department: "Finance",
  },
  {
    id: 2,
    department: "Ops",
  },
  {
    id: 3,
    department: "It",
  },
];

const mergedData = (employees, department) => {
  return employees.map((employee) => {
    let depId = department.find((dep) => dep.id === employee.id);
    return {
      name: employee.name,
      id: employee.id,
      department: depId ? depId.department : null,
    };
  });
};
console.log(mergedData(employees, department));
