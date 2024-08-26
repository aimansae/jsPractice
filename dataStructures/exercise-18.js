/*18. You have an array of customer orders with their amounts and dates.
You need to filter out orders above a certain amount and sort them by date.
*/

let orders = [
  { id: 1, amount: 250, date: "2024-08-15" },
  { id: 2, amount: 50, date: "2024-08-16" },
  { id: 3, amount: 300, date: "2024-08-14" },
  { id: 4, amount: 100, date: "2024-08-17" },
];

const sortOrdersByDate = (orders) => {
  let minAmount = 100;
  let filteredOrders = orders.filter(
    (currentAmount) => currentAmount.amount > minAmount
  );
  filteredOrders.sort((a, b) => new Date(a.date) - new Date(b.date));
  return filteredOrders;
};
console.log(sortOrdersByDate(orders));
