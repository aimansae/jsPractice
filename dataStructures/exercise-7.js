/* 7. Calculate the total worth of each product an array of
objects displaying it alongside the product name
*/

const calculateTotalPrice = (products) => {
  const totalProductsValue = products.map((product) => {
    return {
      name: product.name,
      totalValue: product.count * product.price,
    };
  });
  console.log(totalProductsValue);

  totalProductsValue.forEach((item) =>
    console.log(`${item.name}: ${item.totalValue}`)
  );
};
const products = [
  { name: " laptop", count: 25, price: 1000 },
  { name: "hairDryer", count: 10, price: 50 },
  { name: "washingMachine", count: 2, price: 1500 },
];
calculateTotalPrice(products);
