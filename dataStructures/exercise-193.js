/*193. Imagine an e-commerce platform where you need to manage orders by user ID, product details, and order status.
 Count the number of orders by status.*/
const orders = [
  {
    orderId: 1,
    userId: "u1",
    products: ["Laptop", "Phone"],
    status: "Shipped",
  },
  { orderId: 2, userId: "u2", products: ["Tablet"], status: "Processing" },
  { orderId: 3, userId: "u1", products: ["Monitor"], status: "Delivered" },
  { orderId: 4, userId: "u1", products: ["Chair"], status: "Delivered" },
];

const countByStatus = (orders) => {
  const statusCount = {};

  orders.forEach((order) => {
    const status = order.status;
    if (!statusCount[status]) {
      statusCount[status] = 1;
    } else {
      statusCount[status]++;
    }
  });
  return statusCount;
};
console.log(countByStatus(orders));
