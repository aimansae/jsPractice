/*119. Implement an inventory management system where you can track items, quantities, and locations. Implement features to update inventory counts
 */
const inventory = [
  { itemName: "Laptop", quantity: 10, location: "Warehouse A" },
  { itemName: "Mouse", quantity: 50, location: "Warehouse B" },
];

const updateCount = (itemName, quantityChange) => {
  const item = inventory.find((item) => item.itemName === itemName);
  if (item) {
    item.quantity += quantityChange;
  } else {
    console.log(`${itemName} not found.`);
  }
};
updateCount("Laptop", 70);
console.log(inventory);
