/*114. Create a contact management system where you can add contacts*/
const contacts = [
  { name: "John Doe", phone: "555-1234", tags: ["friend", "work"] },
  { name: "Jane Smith", phone: "555-5678", tags: ["family"] },
];
const addContact = (name, phone, tags = []) => {
  const newContact = { name, phone, tags };
  contacts.push(newContact);
};
addContact("new contact", "0233233454", ["newTag"]);
console.log(contacts);
