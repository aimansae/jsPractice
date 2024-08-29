/*79.You have an inventory system for a warehouse, where each item has an id, name, category, and quantity. You need to:
Organize items by category using a data structure.
Find all items that are low on stock (quantity below a threshold).
Update item quantities when stock is added or removed.*/

let inventory = [
  { id: 1, name: "Item A", category: "Electronics", quantity: 50 },
  { id: 2, name: "Item B", category: "Electronics", quantity: 20 },
  { id: 3, name: "Item C", category: "Books", quantity: 5 },
  { id: 4, name: "Item D", category: "Books", quantity: 0 },
  { id: 5, name: "Item E", category: "Furniture", quantity: 15 },
];

// by category [category:{id:'', name:'', q:''}]

const organizedByCategory = (inventory) => {
  const object = {};

  inventory.forEach((item) => {
    if (!object[item.category]) {
      object[item.category] = [];
    }
    object[item.category].push(item);
  });
  return object;
};

console.log(organizedByCategory(inventory));

// // low in stock

const lowInStock = (inventory) => {
  const threshold = 30;
  const low = inventory.filter((item) => item.quantity < threshold);
  return low;
};
console.log(lowInStock(inventory));

// update Item based on stock

const updateByStock = (id, updatedQuantity) => {
  const item = inventory.find((item) => item.id === id);
  if (item) {
    item.quantity += updatedQuantity;

    if (item.quantity < 0) {
      item.quantity = 0;
    }

    console.log(`Updated ${item.name} quantity to ${item.quantity}.`);
  } else {
    // If item is not found, log an appropriate message
    console.log(`Item with ID ${id} not found.`);
  }
};
updateByStock(2, 10);

// delete
const deleteStock = (id) => {
  const itemToDelete = inventory.find((item) => item.id === id);

  if (itemToDelete) {
    // Filter out the item with the specified id
    inventory = inventory.filter((item) => item.id !== id);
    console.log(`Deleted item: ${itemToDelete.name}`);
  } else {
    // If item is not found, log an appropriate message
    console.log(`Item with ID ${id} not found.`);
  }
};

console.log(deleteStock(1));
console.log(inventory);
