/*112. Implement a library catalog system where you can add books*/

const catalog = [
  {
    title: "1984",
    author: "George Orwell",
    publicationDate: "1949-06-08",
    checkedOut: false,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationDate: "1960-07-11",
    checkedOut: true,
  },
];

const addBooks = (title, author, publicationDate, checkedOut = false) => {
  const newBook = {
    ...{ title, author, publicationDate, checkedOut },
  };
  catalog.push(newBook);
};
addBooks("Brave New World", "Aldous Huxley", "1932-08-31");
console.log(catalog);
