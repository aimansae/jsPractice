/*51. You have an array of product objects, each with a name, price, and inStock property.
Create a list of products that are currently in stock.
*/

let products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Smartphone", price: 800, inStock: false },
  { name: "Tablet", price: 600, inStock: true },
  { name: "Monitor", price: 300, inStock: false },
  { name: "Keyboard", price: 100, inStock: true },
];

let inStockProducts = products.filter((p) => p.inStock);
console.log(inStockProducts);
