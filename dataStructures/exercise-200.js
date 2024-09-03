/*200. Given an array of objects to represent employees, 
where each employee has an ID, name, department, and salary. 
Calculate the average salary  */

const employees = [
  { id: 1, name: "Alice", department: "Engineering", salary: 90000 },
  { id: 2, name: "Bob", department: "Marketing", salary: 60000 },
  { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
];

const calculateAverageSalary = (employees) => {
  let totalSalary = 0;
  employees.forEach((employee) => {
    console.log((totalSalary += employee.salary));
  });

  const average = totalSalary / employees.length;

  return average;
};
const averageSalary = calculateAverageSalary(employees);
console.log("Average Salary:", averageSalary);
