/*34. : You have an array of objects representing employees,
each with a firstName and lastName.
Create a new array containing the email addresses in the format firstname.lastname@company.com.
*/

const data = [
  {
    firstName: "Sara",
    lastName: "Smith",
  },
  {
    firstName: "Jack",
    lastName: "Jones",
  },

  {
    firstName: "Jane",
    lastName: "White",
  },
];
const createEmail = (data) => {
  let domain = "@company.com";
  return (emailFromFullName = data.map((employee) => {
    let email = `${employee.firstName.toLowerCase()}${employee.lastName.toLowerCase()}${domain}`;
    return email;
  }));
};
console.log(createEmail(data));
