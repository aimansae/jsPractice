/*158. Given an object with properties price and 
discount, update the price to be price 
- discount for each property pair.*/
const item = {
  price: 100,
  discount: 20,
};

const updatePrice = (item) => {
  const { price, discount } = item;
  return { ...item, price: price - discount };
};
console.log(updatePrice(item));
