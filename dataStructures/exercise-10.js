//10. Check if the person in an array of objects is > 18 years old

const people = [
  {
    name: "Sara",
    age: 12,
  },
  {
    name: "Luke",
    age: 18,
  },
  {
    name: "Mary",
    age: 21,
  },
  {
    name: "John",
    age: 33,
  },
];

const checkAge = (people) => {
  const isAnAdult = people.filter((person) => person.age >= 18);
  return isAnAdult;
};

console.log("Adults are:", checkAge(people));
