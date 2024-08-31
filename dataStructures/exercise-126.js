/*126. You manage an e-commerce store and have a list of customer orders. Each order has an orderId, customerName, product, quantity, and pricePerUnit. 
You need to Find all orders for a specific customer.
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

const findByCustomer = (customerName) => {
  return orders.filter((order) => order.customerName === customerName);
};

console.log(findByCustomer("Alice"));
