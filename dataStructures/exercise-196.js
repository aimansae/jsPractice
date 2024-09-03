/*196. Manage recipes with a recipe name, ingredients, and preparation steps. 
Implement functionality to add a new recipe*/
const recipes = [
  {
    name: "Pancakes",
    ingredients: ["flour", "milk", "eggs"],
    steps: ["Mix ingredients", "Cook on skillet"],
  },
  {
    name: "Spaghetti",
    ingredients: ["spaghetti", "tomato sauce"],
    steps: ["Boil spaghetti", "Add sauce"],
  },
];

const addRecipe = (name, ingredients, steps) => {
  const newRecipe = {
    name,
    ingredients: [],
    steps: [],
  };

  recipes.push(newRecipe);
  console.log(`Recipe '${name}' added.`);
};
addRecipe(
  "Omlette",
  ["eggs", "milk", "cheese"],
  ["Beat eggs and milk", "Pour into skillet", "Cook until firm"]
);
console.log(recipes);
