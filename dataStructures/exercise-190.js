/*190. Imagine an e-commerce platform where you need 
to manage orders by user ID, product details, and order status. 
You want to find orders by user*/
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

const findByUser = (id) => {
  const filtered = orders.filter((order) => order.userId === id);
  if (filtered.length === 0) {
    console.log(`No order found with user id ${id}`);
  } else {
    console.log(`order found`);
  }
  return filtered;
};
console.log(findByUser("u1"));
