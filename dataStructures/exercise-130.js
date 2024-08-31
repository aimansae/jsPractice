/*130. You manage a library system where each book has a title, author, ISBN, and availableCopies. You need to:
Find all books by a specific author.
*/
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    ISBN: "1234567890",
    availableCopies: 3,
  },
  {
    title: "To Kill a Mockingbird",
    author: "George Orwell",
    ISBN: "0987654321",
    availableCopies: 2,
  },
  {
    title: "1984",
    author: "George Orwell",
    ISBN: "1122334455",
    availableCopies: 1,
  },
];

const findByAuthor = (author) => {
  const foundBooks = books.filter((book) => book.author === author);
  if (foundBooks.length > 0) {
    return (
      `All books by ${author} are:` + foundBooks.map((book) => `${book.title}`)
    );
  } else {
    console.log(`Author '${author}' not found`);
  }
};
console.log(findByAuthor("George Orwell"));
