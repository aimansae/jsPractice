/*199. Manage a collection of movies with titles, genres, and rental status. 
Implement functionality return a movie, and list available movies.*/
const movies = [
  { title: "Inception", genre: "Sci-Fi", rented: false },
  { title: "The Godfather", genre: "Crime", rented: true },
  { title: "The Matrix", genre: "Sci-Fi", rented: false },
];

const returnMovie = (title) => {
  const movie = movies.find((m) => m.title === title);
  if (movie && movie.rented) {
    movie.rented = false;
    console.log(`Movie '${title}' returned.`);
  } else if (!movie) {
    console.log(`Movie with '${title}' not found.`);
  } else {
    console.log(`Movie '${title}' was not rented.`);
  }
};
returnMovie("The Godfather");
console.log(movies);

const listMovies = (movies) => {
  return movies.map((movie) => movie.title);
};
console.log(listMovies(movies));
