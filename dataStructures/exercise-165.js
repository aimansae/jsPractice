/*Given an object, 
rename a specified property to a new name.*/
const person = { name: "Alice", age: 25, city: "New York" };

const renameKey = (person, oldKey, newKey) => {
  const copyPerson = { ...person };
  if (oldKey in copyPerson) {
    copyPerson[newKey] = copyPerson[oldKey];
    delete copyPerson[oldKey];
  }
  return copyPerson;
};

const renamed = renameKey(person, "city", "location");
console.log(renamed);
