/*39.  You have an array of orders, each with a status property (e.g., "pending", "shipped", "delivered").
Filter out orders that are "shipped".
*/

const orders = [
  {
    item: "Pizza",
    status: "delivered",
  },
  {
    item: "Pasta",
    status: "delivered",
  },
  {
    item: "Sushi",
    status: "shipped",
  },
  {
    item: "Kebab",
    status: "delivered",
  },
  {
    item: "Chicken",
    status: "shipped",
  },
  {
    item: "Dish",
    status: "Pending",
  },
];
const shippedOrders = (orders) => {
  return orders.filter((order) => order.status === "shipped");
};

console.log(shippedOrders(orders));
