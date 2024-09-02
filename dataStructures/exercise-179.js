/*179. group employees by department 
and count how many are there for each department*/
const employees = [
  { name: "Alice", department: "HR" },
  { name: "Bob", department: "Engineering" },
  { name: "Charlie", department: "HR" },
  { name: "Dave", department: "Marketing" },
  { name: "Eve", department: "Engineering" },
];

const groupEmployees = (employees) => {
  const group = {};
  employees.forEach((employee) => {
    if (!group[employee.department]) {
      group[employee.department] = { count: 0, employees: [] };
    }
    group[employee.department].count += 1;
    group[employee.department].employees.push(employee);
  });

  return group;
};
console.log(groupEmployees(employees));
