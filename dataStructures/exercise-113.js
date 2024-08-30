/*113. Search for books by title or author,*/
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

const searchBooks = (search) => {
  const searchToLowercase = search.toLowerCase();
  return catalog.filter(
    (book) =>
      book.title.toLowerCase().includes(searchToLowercase) ||
      book.author.toLowerCase().includes(searchToLowercase)
  );
};
console.log(searchBooks("Harper Lee"));
console.log(searchBooks("1984"));
