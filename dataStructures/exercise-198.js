/*198 Manage a collection of movies with titles, genres, and rental status. 
Implement functionality to rent a movie*/
const movies = [
  { title: "Inception", genre: "Sci-Fi", rented: false },
  { title: "The Godfather", genre: "Crime", rented: true },
  { title: "The Matrix", genre: "Sci-Fi", rented: false },
];

const rentMovie = (title) => {
  const movieFound = movies.find((movie) => movie.title === title);
  if (movieFound && !movieFound.rented) {
    movieFound.rented = true;
    console.log(`Movie '${title}' rented.`);
  } else if (!movieFound) {
    console.log(`Movie '${title}' not found.`);
  } else {
    console.log(`Movie '${title}' is already rented.`);
  }
};

rentMovie("The Godfather");
console.log(movies);
