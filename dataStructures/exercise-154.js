/*154. Given an object, remove properties that have a value of null or undefined*/
const product = {
  id: 1,
  name: "Laptop",
  price: null,
  description: "High-end gaming laptop",
  discount: undefined,
};
const removeObjects = (product) => {
  const toArray = Object.entries(product);
  console.log("Converted", toArray);
  const filtered = toArray.filter(
    ([key, value]) => value !== undefined && value !== null
  );
  const converted = Object.fromEntries(filtered);
  return converted;
};

console.log(removeObjects(product));
//
