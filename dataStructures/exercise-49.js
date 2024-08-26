/*49. You have an array of employee objects,
each with a name and yearsOfExperience.
Categorize employees into "Junior", "Mid-Level", and "Senior" based on their years of experience.
*/

let employees = [
  { name: "Alice", yearsOfExperience: 2 },
  { name: "Bob", yearsOfExperience: 5 },
  { name: "Charlie", yearsOfExperience: 8 },
  { name: "David", yearsOfExperience: 12 },
  { name: "Eve", yearsOfExperience: 1 },
];

const threshold = {
  junior: 3,
  midLevel: 7,
};

const categories = {
  junior: [],
  mid: [],
  senior: [],
};

const categorizeEmployees = (employees) => {
  employees.forEach((employee) => {
    if (employee.yearsOfExperience < threshold.junior) {
      categories.junior.push(employee);
    } else if (employee.yearsOfExperience <= threshold.midLevel) {
      categories.mid.push(employee);
    } else categories.senior.push(employee);
  });
  return categories;
};
console.log(categorizeEmployees(employees));
