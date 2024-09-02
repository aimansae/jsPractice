/*177. Grouping Movies by Genre and add a status  notSeen*/
const movies = [
  { title: "Movie 1", genre: "Action" },
  { title: "Movie 2", genre: "Drama" },
  { title: "Movie 3", genre: "Action" },
  { title: "Movie 4", genre: "Comedy" },
  { title: "Movie 5", genre: "Drama" },
];

const groupByGenre = (movies) => {
  const object = {};
  movies.forEach((movie) => {
    const genre = movie.genre;
    if (!object[genre]) {
      object[genre] = [];
    }
    object[genre].push({ ...movie, status: "NotSeen" });
  });

  return object;
};
console.log(groupByGenre(movies));
