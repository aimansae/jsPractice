/*14. Given a nested object representing a company’s employees,
write a function to get the name of an employee given their ID.*/

const company = {
  employees: {
    1: { name: "John Doe", position: "Developer" },
    2: { name: "Jane Smith", position: "Manager" },
    3: { name: "Emily Johnson", position: "Designer" },
  },
};

const getEmployeeName = (company, id) => {
  return company.employees[id]
    ? company.employees[id].name
    : "Employee not found";
};
console.log(getEmployeeName(company, 2));
