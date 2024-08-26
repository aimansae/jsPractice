//4. Sort an Array of objects by ascending price

const products = [
  {
    name: "lamp",
    price: 30,
  },
  {
    name: "fridge",
    price: 500,
  },
  {
    name: "Tv",
    price: 500,
  },
  {
    name: "washing machine",
    price: 900,
  },
];

const sortArray = (products) => {
  products.sort((a, b) => a.price - b.price);
  console.log(products);
};
sortArray(products);
