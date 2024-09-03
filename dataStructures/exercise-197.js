/*197. Manage recipes with a recipe name, ingredients, and preparation steps. 
Implement functionality find recipes by ingredient*/

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
const findRecipe = (ingredients) => {
  return recipes.filter((recipe) =>
    recipe.ingredients.includes(ingredients.toLowerCase())
  );
};
console.log(findRecipe("eggs"));
