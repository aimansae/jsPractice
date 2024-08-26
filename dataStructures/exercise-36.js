/*36. You have an array of employees, each with a name and hireDate.
Sort the employees by their hire date in ascending order.
*/

const employees = [
  { name: "Jane", hireDate: "22-11-1999" },
  { name: "Sara", hireDate: "02-05-2022" },
  { name: "Jack", hireDate: "12-12-2000" },
  { name: "jules", hireDate: "02-05-2003" },
];

const sortByHireDate = (employees) => {
  return employees.sort((a, b) => new Date(a.hireDate) - new Date(b.hireDate));
};
console.log(sortByHireDate(employees));
