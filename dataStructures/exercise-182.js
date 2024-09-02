/*Implement a shopping cart system where users can add items, 
remove items
 */
const shoppingCart = [];

const addProducts = (productName, id, quantity, price) => {
  // check if product is already there
  const existingItemIndex = shoppingCart.findIndex((item) => item.id === id);
  if (existingItemIndex !== -1) {
    shoppingCart[existingItemIndex].quantity += quantity;
  } else {
    shoppingCart.push({ id, productName, quantity, price });
  }
};

addProducts("Jeans", 1, 2, 50);
addProducts("Shirt", 2, 5, 20);
console.log(shoppingCart);

const removeItems = (id) => {
  const filtered = shoppingCart.filter((item) => item.id !== id);
  shoppingCart.length = 0;
  shoppingCart.push(...filtered);
};
removeItems(1);
console.log(shoppingCart);
