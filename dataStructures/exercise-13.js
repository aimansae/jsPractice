/*13. Create a Set of colors. Add a new color to the set,
then check if a particular color exists in the set and remove a color.*/

const colors = new Set(["red", "blue", "green"]);
colors.add("yellow");
console.log(colors);
console.log(colors.has("red"));
colors.delete("blue");
console.log(colors);