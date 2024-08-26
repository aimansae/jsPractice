/*48.You have an array of songs objects, each with title, author.
Extract a list of all songs by a specific artist.
*/

let data = [
  { song: "A", artist: "Mark" },
  { song: "B", artist: "Mark" },
  { song: "C", artist: "Phil" },
  { song: "D", artist: "Mark" },
  { song: "E", artist: "Mark" },
  { song: "E", artist: "Stephan" },
];
const filterSongsByArtist = (data) => {
  return data.filter((song) => song.artist === "Mark");
};
console.log(filterSongsByArtist(data));
