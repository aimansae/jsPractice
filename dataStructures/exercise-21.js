/*21. You have an array of user objects, each with a first name and last name.
Transform this data to create full names.
*/

let users = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Jim", lastName: "Brown" },
];
const createFullName = (users) => {
  const fullName = users.map((user) => {
    return `${user.firstName} ${user.lastName}`;
  });
  return fullName;
};

console.log(createFullName(users));
