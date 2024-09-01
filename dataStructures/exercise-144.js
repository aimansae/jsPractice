/* Update the price in a a given array of objects*/
const products = [
  { id: 1, name: "Laptop", price: 999.99, stock: 10 },
  { id: 2, name: "Smartphone", price: 499.99, stock: 20 },
  { id: 3, name: "Tablet", price: 299.99, stock: 15 },
];

const updatePrice = (products, id, newPrice) => {
  const product = products.find((p) => p.id === id);

  if (product) {
    product.price = newPrice;
    console.log(`Product ${product.name} updated price $${product.price}`);
  } else {
    console.log(`Product with id ${id} not found`);
  }
};
updatePrice(products, 1, 500.0);
console.log(products);
