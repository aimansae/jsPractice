/*46.  You have an array of orders, each with a deliveryDate.
Filter  orders that were delivered within the last 7 days.
*/

let orders = [
  { id: 1, deliveryDate: "2024-08-15" },
  { id: 2, deliveryDate: "2024-08-10" },
  { id: 3, deliveryDate: "2024-08-16" },
  { id: 4, deliveryDate: "2024-08-12" },
  { id: 5, deliveryDate: "2024-08-20" },
  { id: 6, deliveryDate: "2024-08-25" },
];
const rilterRecentOrders = (orders) => {
  // Get today's date
  let today = new Date();

  // Get the date 7 days ago
  let sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  // Filter orders to find those delivered within the last 7 days
  let recentOrders = orders.filter((order) => {
    let deliveryDate = new Date(order.deliveryDate);

    return deliveryDate >= sevenDaysAgo && deliveryDate <= today;
  });

  return recentOrders;
};

console.log(rilterRecentOrders(orders));
