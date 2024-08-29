/* From the products list, find the most expensive product.*/
const products = [
  { name: "Laptop", category: "Electronics", price: 1000 },
  { name: "Smartphone", category: "Electronics", price: 700 },
  { name: "Table", category: "Furniture", price: 150 },
  { name: "Chair", category: "Furniture", price: 75 },
  { name: "T-Shirt", category: "Clothing", price: 20 },
];

const mostExpensiveProduct = (products) => {
  const sorted = [...products].sort((a, b) => b.price - a.price);
  return sorted[0];
};
let mostExpensive = mostExpensiveProduct(products);
console.log(
  `The most expensive product is ${mostExpensive.name} with a price of $${mostExpensive.price}`
);

// with reduce
const expensiveProduct = (products) => {
  return products.reduce((total, price) => (total > price ? price : total));
};
let withReduce = expensiveProduct(products);
console.log("With reduce", withReduce);
