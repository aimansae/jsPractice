/*76. You manage a library and need to keep track of books. Each book has a title, author, genre, and ISBN. 
You need to: 
Delete books based on title
*/
let books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    ISBN: "1234567890",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    ISBN: "0987654321",
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Science",
    ISBN: "1122334455",
  },
];

const deleteBook = (titleToDelete) => {
  const updatedBooks = books.filter((book) => book.title !== titleToDelete);
  const deletedBooks = books.filter((book) => book.title === titleToDelete);
  books = updatedBooks;
  return deletedBooks;
};

const deleted = deleteBook("A Brief History of Time");
console.log("Deleted:", deleted);
console.log("Remaining books:", books);
