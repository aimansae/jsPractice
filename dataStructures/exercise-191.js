/*/*191. Imagine an e-commerce platform where you need 
to manage orders by user ID, product details, and order status. 
update the status of an order, */
const orders = [
  {
    orderId: 1,
    userId: "u1",
    products: ["Laptop", "Phone"],
    status: "Shipped",
  },
  { orderId: 2, userId: "u2", products: ["Tablet"], status: "Processing" },
  { orderId: 3, userId: "u1", products: ["Monitor"], status: "Delivered" },
];

const updateStatus = (id, statusUpdate) => {
  const orderFound = orders.find((order) => order.orderId === id);
  if (orderFound) {
    orderFound.status = statusUpdate;
  }
};

updateStatus(1, "SENT BACK");

console.log(orders);
