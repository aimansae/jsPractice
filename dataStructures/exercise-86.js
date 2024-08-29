/*86.You have a list of products, each with a name, category, and price. 
Organize these products by category using an object. */

const products = [
  { name: "Laptop", category: "Electronics", price: 1000 },
  { name: "Smartphone", category: "Electronics", price: 700 },
  { name: "Table", category: "Furniture", price: 150 },
  { name: "Chair", category: "Furniture", price: 75 },
  { name: "T-Shirt", category: "Clothing", price: 20 },
];

const organizeByproduct = (products) => {
  const object = {};

  products.forEach((product) => {
    const { name, category, price } = product;
    if (!object[category]) {
      object[category] = [];
    }
    object[category].push(product);
  });
  return object;
};

console.log(organizeByproduct(products));
