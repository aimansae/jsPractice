/*76. You manage a library and need to keep track of books. Each book has a title, author, genre, and ISBN. 
You need to: 
Update Books based on ISBN
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

const updateBookByISBN = (isbn, updatedDetails) => {
  return books.map((book) => {
    if (book.ISBN === isbn) {
      return { ...book, ...updatedDetails };
    }
    return book;
  });
};
console.log(updateBookByISBN("1122334455", { title: "UPDATED" }));
