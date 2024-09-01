/*Given an object, remove properties 
that have an empty string as their value.*/
const product = {
  id: 123,
  name: "",
  price: 299.99,
  description: "",
  category: "Electronics",
};

const removeEmptyValues = (product) => {
  //convert to Array
  const toArray = Object.entries(product);
  console.log(toArray);

  //filter empty values

  const filtered = toArray.filter(([key, value]) => value !== "");
  return Object.fromEntries(filtered);
};

console.log(removeEmptyValues(product));
