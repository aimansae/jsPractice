/*120. Implement an inventory management system where you can track items.
Generate alerts for low stock
 */

const inventory = [
  { itemName: "Laptop", quantity: 10, location: "Warehouse A" },
  { itemName: "Mouse", quantity: 50, location: "Warehouse B" },
];

const lowStockAlert = (inventory) => {
  const threshold = 30;
  return inventory
    .filter((item) => item.quantity < threshold)
    .map(
      (item) =>
        `Alert ${item.itemName} is low in stock. Quantity is ${item.quantity}`
    );
};
const alerts = lowStockAlert(inventory);
alerts.forEach((alert) => console.log(alert));
