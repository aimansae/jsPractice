/*167. Given an array of objects, group them by a specified property.*/
const products = [
  { category: "Electronics", name: "Laptop" },
  { category: "Electronics", name: "Phone" },
  { category: "Furniture", name: "Table" },
];

const groupObject = (products, property) => {
  const group = {};
  products.forEach((item) => {
    const key = item[property];

    if (!group[key]) {
      group[key] = [];
    }
    group[key].push(item);
  });
  return group;
};

const regrouped = groupObject(products, "category");
console.log(regrouped);
