/*176.  Given an array of items with categories, group them by category
 and count the number of items in each category.*/
const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Broccoli", category: "Vegetable" },
];

const groupByCategory = (items) => {
  const object = {};
  items.forEach((item) => {
    const category = item.category;
    const iteName = item.name;
    if (!object[category]) {
      object[category] = { count: 1, names: [iteName] };
    } else {
      object[category].count++;
      object[category].names.push(iteName);
    }
  });
  return object;
};
console.log(groupByCategory(items));
