/*11.  Create an object representing a book with properties like title, author, and year. Write
a function to print a formatted string containing this information.*/

let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

const printBookInfo = (book) => {
  console.log(
    `${book.title} by ${book.author}, published in by ${book.author}`
  );
};
printBookInfo(book);
