/*178. group animals by type*/

const animals = [
  { name: "Lion", type: "Mammal" },
  { name: "Elephant", type: "Mammal" },
  { name: "Crocodile", type: "Reptile" },
  { name: "Parrot", type: "Bird" },
  { name: "Tiger", type: "Mammal" },
];
// output:
// {
//   typeMammal: [
//[{ name: Location, type: mammal }];
// }
const groupByType = (animals) => {
  const object = {};

  animals.forEach((animal) => {
    const type = animal.type;

    if (!object[type]) {
      object[type] = [];
    }
    object[type].push(animal);
  });
  return object;
};

console.log(groupByType(animals));
