/*125. You manage an e-commerce store and have a list of customer orders. Each order has an orderId, customerName, product, quantity, and pricePerUnit. 
You need to calculate the total price for each order*/

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

// // Calculate total price for each order with map
// const calculateTotalPrice = (orders) => {
//   return orders.map((order) => ({
//     product: order.product,
//     total: order.quantity * order.pricePerUnit,
//   }));
// };
// console.log(calculateTotalPrice(orders));

//Calculate total price for each order with reduce
const calculateTotalPrice = (orders) => {
  return orders.reduce((acc, order) => {
    const total = order.pricePerUnit * order.quantity;
    acc.push({ product: order.product, total: total });
    return acc;
  }, []);
};
console.log(calculateTotalPrice(orders));
