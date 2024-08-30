/*114. Create a contact management system where you can update contacts*/
const contacts = [
  { name: "John Doe", phone: "555-1234", tags: ["friend", "work"] },
  { name: "Jane Smith", phone: "555-5678", tags: ["family"] },
];
const updateContacts = (oldName, newName, newPhone, newTags) => {
  const updatedContacts = contacts.map((contact) => {
    if (contact.name === oldName) {
      return {
        ...contact,
        name: newName || contact.name,
        name: newName || contact.name,
        phone: newPhone || contact.phone,
        tags: newTags || contact.tags,
      };
    }
    return contact;
  });
  contacts.length = 0;
  contacts.push(...updatedContacts);
};

updateContacts("Jane Smith", "Gina Smith");
console.log(contacts);
