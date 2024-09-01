/*145. You need to manage product inventory
and perform operations like adding and removing products.*/

const inventory = {
  electronics: [
    { id: 1, name: "Laptop", quantity: 10 },
    { id: 2, name: "Smartphone", quantity: 20 },
  ],
  furniture: [
    { id: 3, name: "Desk", quantity: 5 },
    { id: 4, name: "Chair", quantity: 15 },
  ],
};

// Add a new product

const addProduct = (category, product) => {
  if (inventory[category]) {
    inventory[category].push(product);
  } else {
    inventory[category] = [product];
  }
};

// Remove a Product

const removeProduct = (category, productID) => {
  if (inventory[category]) {
    const initialLength = inventory[category].length;
    inventory[category] = inventory[category].filter(
      (product) => product.id !== productID
    );
    const newLength = inventory[category].length;
    if (initialLength > newLength) {
      console.log(
        `Product with ID ${productID} successfully deleted from ${category}.`
      );
    } else {
      console.log(`Product with ID ${productID} not found in ${category}.`);
    }
  } else {
    console.log(`Category ${category} does not exist.`);
  }
};
addProduct("electronics", { id: 5, name: "Tablet", quantity: 25 });
removeProduct("furniture", 3);

console.log(inventory);
