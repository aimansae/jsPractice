/*159. Given an array of objects with firstName and lastName, transform them into an array of objects with fullName property.*/
const people = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
];

const getFullName = (people) => {
  return people.map((name) => ({
    fullName: `${name.firstName} ${name.lastName}`,
  }));
};
console.log(getFullName(people));
