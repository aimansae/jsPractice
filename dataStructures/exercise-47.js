/*47.  You have an array of sales records, each with a date and amount.
Generate a report that summarizes total sales for each month.
*/

let sales = [
  { date: "2024-01-15", amount: 200 },
  { date: "2024-01-22", amount: 150 },
  { date: "2024-02-05", amount: 300 },
  { date: "2024-02-25", amount: 100 },
  { date: "2024-03-10", amount: 400 },
  { date: "2024-03-15", amount: 200 },
];
const findSales = (sales) => {
  let salesByMonth = {};
  sales.forEach((sale) => {
    let date = new Date(sale.date);
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let key = `${year}-${month}`;

    if (!salesByMonth[key]) {
      salesByMonth[key] = 0;
    }
    salesByMonth[key] += sale.amount;
  });

  return salesByMonth;
};
console.log(findSales(sales));
