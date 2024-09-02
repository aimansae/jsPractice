/*174. Given an array of products, add a discount property with a 
value of 10 to each product.
 */

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];

const addProperty = (products) => {
  return products.map((product) => ({ ...product, discount: 10 }));
};
console.log(addProperty(products));
