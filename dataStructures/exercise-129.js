/*129. You manage a library system where each book has a title, author, ISBN, and availableCopies. You need to:
Return a book by increasing its availableCopies.
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

const returnBook = (isbn) => {
  book = books.find((book) => book.ISBN === isbn);
  if (book) {
    book.availableCopies += 1;
    console.log(`Book ${book.title} returned successfully`);
  } else {
    console.log(`Book with ISBN ${isbn} not found in the library.`);
  }
};
returnBook("0987654311");
console.log(books);
