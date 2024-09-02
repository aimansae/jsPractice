/*  Given an array of contacts, group them by their city.
 */

const contacts = [
  { name: "John Doe", phone: "555-1234", city: "New York" },
  { name: "Jane Smith", phone: "555-5678", city: "Los Angeles" },
  { name: "Jim Brown", phone: "555-8765", city: "New York" },
  { name: "Jill Green", phone: "555-4321", city: "Los Angeles" },
];
/*output
// {
"new york":[
{ name: "John Doe", phone: "555-1234", },
{ name: "Jim Brown", phone: "555-8765",
]
}
*/

const groupByCity = (contacts) => {
  return contacts.reduce((acc, contact) => {
    const city = contact.city;

    if (!acc[city]) {
      acc[city] = [];
    }

    acc[city].push(contact);

    return acc;
  }, {});
};
console.log(groupByCity(contacts));

const byCityWithForEach = (contacts) => {
  const object = {};
  contacts.forEach((contact) => {
    const city = contact.city;
    if (!object[city]) {
      object[city] = [];
    }

    object[city].push(contact);
  });
  return object;
};
console.log(byCityWithForEach(contacts));
