/*128. You manage a library system where each book has a title, author, ISBN, and availableCopies. You need to:
Borrow a book by reducing its availableCopies if available.
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
    author: "Harper Lee",
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

const borrowBook = (isbn) => {
  const book = books.find((book) => book.ISBN === isbn);
  if (book) {
    if (book.availableCopies > 0) {
      book.availableCopies -= 1;
      console.log(`Book '${book.title}' borrowed`);
    } else {
      console.log(`${book.title} is not found`);
    }
  }
};
borrowBook("1122334455");
console.log(books);
