/*76. You manage a library and need to keep track of books. Each book has a title, author, genre, and ISBN. 
You need to: 
Organize books by genre.
Find all books by a specific author.
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

// organize books by genre. OUTPUT
{
  genre: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      ISBN: "1234567890",
    },
    { title: "another fiction" },
  ];
}

const organizeByGenre = (books) => {
  const organized = {};

  books.forEach((book) => {
    if (!organized[book.genre]) {
      organized[book.genre] = [];
    }
    organized[book.genre].push(book);
  });

  return organized;
};
let organizedBooks = organizeByGenre(books);
console.log(organizedBooks);

const findByAuthor = (author) => {
  return books.filter((book) => book.author === author);
};
console.log(findByAuthor("Harper Lee"));
