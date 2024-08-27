/*67. You manage an inventory for a store:
Filter items that are out of stock.
Sort items by price in ascending order.
Find the total value of all items in stock.*/

const inventory = [
  { name: "Laptop", price: 999.99, inStock: true },
  { name: "Mouse", price: 25.99, inStock: true },
  { name: "Keyboard", price: 49.99, inStock: false },
  { name: "Monitor", price: 199.99, inStock: true },
  { name: "Headphones", price: 79.99, inStock: false },
];
const manageInventory = (inventory) => {
  return inventory
    .filter((item) => item.inStock) // Filter out items that are out of stock
    .sort((a, b) => a.price - b.price) // Sort items by price in ascending order
    .reduce((total, item) => total + item.price, 0); // Calculate the total value of all items in stock
};

const totalValue = manageInventory(inventory);
console.log(`Total value of all items in stock: EUR ${totalValue.toFixed(2)}`);
