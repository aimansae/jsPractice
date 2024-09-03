/*186. An object representing a collection of books in a 
library, where each book has its genres listed.
Access: genres of "1984",
Checking if "Drama" is a genre for "To Kill a Mockingbird"
Adding a new genre to "The Great Gatsby"*/

const library = {
  "The Great Gatsby": ["Classic", "Fiction"],
  "To Kill a Mockingbird": ["Classic", "Drama"],
  1984: ["Dystopian", "Fiction"],
  "The Catcher in the Rye": ["Classic", "Fiction"],
};

const accessGenre = (key) => {
  return library[key];
};
console.log(accessGenre("1984"));

const checkDrama = (key, genre) => {
  const isDrama = library[key].includes(genre);
  return isDrama;
};
console.log(checkDrama("To Kill a Mockingbird", "Drama"));

const addGenre = (key, genreToAdd) => {
  library[key].push(genreToAdd);
  return library[key];
};
console.log(addGenre("The Great Gatsby", "DramaADDED"));
