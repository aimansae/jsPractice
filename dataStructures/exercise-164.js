/*164. Given an array of objects with nested 
properties,extract specific values*/
const records = [
  { id: 1, details: { name: "John", age: 28 } },
  { id: 2, details: { name: "Jane", age: 22 } },
];

const getNames = (records) => {
  return records.map((record) => record.details.name);
};
console.log(getNames(records));
