/*127. You manage an e-commerce store and have a list of customer orders. Each order has an orderId, customerName, product, quantity, and pricePerUnit. 
Update an order's quantity based on the orderId
*/

const orders = [
  {
    orderId: 1,
    customerName: "Alice",
    product: "Laptop",
    quantity: 2,
    pricePerUnit: 1000,
  },
  {
    orderId: 2,
    customerName: "Bob",
    product: "Smartphone",
    quantity: 1,
    pricePerUnit: 700,
  },
  {
    orderId: 3,
    customerName: "Alice",
    product: "Tablet",
    quantity: 3,
    pricePerUnit: 400,
  },
];

const updateQuantity = (orderId, quantity) => {
  const order = orders.find((order) => order.orderId === orderId);
  if (order) {
    order.quantity += quantity;
    console.log(`order with id ${orderId} added +${quantity}`);
  } else {
    console.log(`order with id ${orderId} not found`);
  }
};
updateQuantity(3, 25);
console.log(orders);
