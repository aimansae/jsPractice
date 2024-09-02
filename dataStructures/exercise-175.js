//175. Group given books by genre

const books = [
  { title: "Book A", genre: "Science Fiction" },
  { title: "Book B", genre: "Science Fiction" },
  { title: "Book C", genre: "Fantasy" },
  { title: "Book D", genre: "Non-Fiction" },
  { title: "Book E", genre: "Fantasy" },
];

const groupByGenre = (books) => {
  const object = {};
  books.forEach((book) => {
    const genre = book.genre;

    if (!object[genre]) {
      object[genre] = [];
    }
    object[genre].push(book);
  });

  return object;
};
console.log(groupByGenre(books));

// withRecuce
const groupWithReduce = (books) => {
  return books.reduce((acc, book) => {
    const genre = book.genre;
    if (!acc[genre]) {
      acc[genre] = [];
    }
    acc[genre].push(book);
    return acc;
  }, {});
};
console.log(groupWithReduce(books));
