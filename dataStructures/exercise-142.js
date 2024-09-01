/*142. Clone nested object*/
const user = {
  name: "Alice",
  address: {
    city: "Wonderland",
    postalCode: "12345",
  },
  hobbies: ["reading", "cycling"],
};

const cloneObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
console.log(cloneObject(user));
