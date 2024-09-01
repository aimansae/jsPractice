/*138. Add or Updat object Properties*/
const user = { name: "Alice", age: 25 };

const updateName = (user, newUserName) => {
  user.name = newUserName;
  return user;
};

const updatedUser = updateName(user, "Sara");
console.log("Name Updated:", updatedUser);

// add email property
const addUserEmail = (user, email) => {
  user.email = email;
  return user;
};

const addedEmail = addUserEmail(user, "jhon.d@gmail.com");
console.log("Email added:", addedEmail);

// delete age

const deleteProperty = (user) => {
  delete user.age;
  return user;
};

const userUpdated = deleteProperty(user);
console.log("Age deleted:", userUpdated);
