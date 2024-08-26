/*20. You have an array of sales records, each with a product name and amount.
Calculate the total sales amount for each product.
*/

let sales = [
  { product: "Laptop", amount: 1000 },
  { product: "Mouse", amount: 50 },
  { product: "Keyboard", amount: 75 },
  { product: "Laptop", amount: 1200 },
  { product: "Mouse", amount: 30 },
];
const calculateTotalSales = (sales) => {
  const totalSales = {};

  sales.forEach((sale) => {
    if (totalSales[sale.product]) {
      totalSales[sale.product] += sale.amount;
    } else {
      totalSales[sale.product] = sale.amount;
    }
  });
  return totalSales;
};
console.log(calculateTotalSales(sales));
