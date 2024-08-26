/*26. Create an array from r strings and 'Jupiter ' at the end and 'Sun' at the start.
Remove the last 2strings, and then the first two
*/

let planets = ["Mercury", "Venus", "Earth", "Mars"];

// Add Jupiter at the end
const addStringEnd = (planets) => {
  planets.push("Jupiter");
};
console.log(addStringEnd(planets));
// Add Sun at the start

const addStringStart = (planets) => {
  planets.unshift("Sun");
};
console.log(addStringStart(planets));

// Remove the 2 last strings
const removeLastTwoItems = (planets) => {
  planets.splice(-2, 2);
  console.log("Remove 2 last items", planets);
};
removeLastTwoItems(planets);

const removeFirstTwoItems = (planets) => {
  // Remove the first 2 strings
  planets.splice(0, 2);
  console.log("Remove first 2 items", planets);
};

removeFirstTwoItems(planets);
