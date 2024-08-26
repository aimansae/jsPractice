/*31. You have an array of products, each with a price and quantity property.
Calculate the total value of the inventory.
*/
const products = [
  { name: "A", price: 500, quantity: 12 },
  { name: "B", price: 100, quantity: 12 },
  { name: "C", price: 330, quantity: 99 },
  { name: "D", price: 900, quantity: 750 },
  { name: "E", price: 70, quantity: 650 },
];
// let totalInventory = 0;
// myProducts.forEach((product) => {
//   totalInventory += product.price * product.quantity;
// });
// console.log("Total is $:", totalInventory);

// With for loop

const productValue = (products) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    let singleProduct = products[i];
    total += singleProduct.price * singleProduct.quantity;
  }
  return total;
};
console.log(productValue(products));
