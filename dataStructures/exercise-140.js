/*140. iterate over an object*/

const user = { name: "Alice", age: 25, email: "alice@example.com" };

const iterateObj = (user) => {
  for (let key in user) {
    console.log(key, user[key]);
  }
};
iterateObj(user);
