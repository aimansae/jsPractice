/*40.You have an array of sales transactions, each with a sellerId and amount property.
Calculate the total earnings for each seller.
*/

let sales = [
  { id: "seller1", amount: 200 },
  { id: "seller2", amount: 150 },
  { id: "seller1", amount: 300 },
  { id: "seller3", amount: 400 },
  { id: "seller2", amount: 100 },
  { id: "seller1", amount: 150 },
];

const totalEarnings = (sales) => {
  let earnings = {};
  sales.forEach((sale) => {
    let id = sale.id;
    let amount = sale.amount;
    if (earnings[id]) {
      earnings[id] += amount;
    } else {
      earnings[id] = amount;
    }
  });
  return earnings;
};
console.log(totalEarnings(sales));
