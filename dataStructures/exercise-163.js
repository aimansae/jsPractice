/*164.  Given an object, remove properties 
where the value is less than a specified number.
*/
const data = {
  a: 5,
  b: 10,
  c: 2,
  d: 8,
};

const threshold = 5;
const removeValues = (data) => {
  const array = Object.entries(data);
  console.log(array);
  const filtered = array.filter(([key, value]) => value > threshold);
  return Object.fromEntries(filtered);
};

console.log(removeValues(data));
