/*22. You have an array of orders with customer IDs.
Group these orders by customer
*/

let customerOrders = [
  { id: 1, customerId: "A", amount: 250 },
  { id: 2, customerId: "B", amount: 50 },
  { id: 3, customerId: "A", amount: 300 },
  { id: 4, customerId: "C", amount: 100 },
  { id: 5, customerId: "B", amount: 150 },
];

const ordersByCustomer = (customerOrders) => {
  let orders = {};
  customerOrders.forEach((order) => {
    if (orders[order.customerId]) {
      orders[order.customerId].push(order);
    } else {
      orders[order.customerId] = [order];
    }
  });
  return orders;
};
console.log(ordersByCustomer(customerOrders));
