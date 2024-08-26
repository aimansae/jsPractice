/*35. Scenario: You have an array of products, each with a name and price.
Remove all products below a certain threshold.
*/

let limit = 50;
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 150 },
  { name: "USB Cable", price: 10 },
];

const productWithLimit = (products) => {
  return products
    .filter((product) => product.price >= limit)
    .map((product) => ({ item: product.name }));
};

console.log(productWithLimit(products));
