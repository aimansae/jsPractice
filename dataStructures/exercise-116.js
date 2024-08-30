/*116. Create a contact management system where delete contacts*/

const contacts = [
  { name: "John Doe", phone: "555-1234", tags: ["friend", "work"] },
  { name: "Jane Smith", phone: "555-5678", tags: ["family"] },
];
const deleteContacts = (name) => {
  let filtered = contacts.filter((contact) => contact.name !== name);
  if (filtered.length === contacts.length) {
    console.log("contact ${name} not found");
  } else {
    contacts.length = 0;
    contacts.push(...filtered);
    console.log(`${name} removed successfully`);
  }
};
deleteContacts("Jane Smith");
console.log(contacts);
