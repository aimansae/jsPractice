/*181. Manage a library catalog where you can 
add books, search for books by title, 
and group books by genre. */
const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
  { title: "1984", author: "George Orwell", genre: "Dystopian" },
  { title: "1985", author: "George Orwell", genre: "Dystopian" },
];

const addBook = (title, author, genre) => {
  const newBook = {
    title: title,
    author,
    genre,
  };

  books.push(newBook);
  console.log("Book added");
};
addBook("The Hobbit2", "J.R.R. Tolkien", "Fantasy");
console.log(books);

const searchBook = (title) => {
  let book = books.find(
    (book) => book.title.toLowerCase() === title.toLowerCase()
  );
  if (book) {
    console.log(`Book found ${book.title}`);
  } else {
    console.log(`Book ${title} not found`);
  }
};
searchBook("The Hobbit");
searchBook("The Hossbit2");

// Group by genre

const groupByGenre = () => {
  const group = {};

  books.forEach((book) => {
    if (!group[book.genre]) {
      group[book.genre] = { count: 0, books: [] };
    }
    group[book.genre].count++;
    group[book.genre].books.push(book);
  });
  return group;
};
console.log(groupByGenre());
console.log(books);
