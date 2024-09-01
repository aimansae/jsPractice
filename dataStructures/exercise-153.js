/*153. Given two objects representing different user data,
merge them and add a new calculated field (e.g., full name) and delete firstname and last name.*/
const userInfo1 = { firstName: "John", lastName: "Doe", age: 28 };
const userInfo2 = { email: "john.doe@example.com", location: "New York" };

const mergeObjects = (obj1, obj2) => {
  const merged = {
    ...obj1,
    ...obj2,
    fullName: `${obj1.firstName} ${obj1.lastName}`,
  };

  delete merged.firstName;
  merged.lastName;

  return merged;
};
console.log(mergeObjects(userInfo1, userInfo2));
