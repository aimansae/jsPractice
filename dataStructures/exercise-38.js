/*38. You have an array of articles, each with a title and views property.
Find the top N most viewed articles.
*/

const movies = [
  { title: "A", views: 300 },
  { title: "B", views: 400 },
  { title: "C", views: 320 },
  { title: "D", views: 50 },
  { title: "E", views: 700 },
];

const mostViewed = (movies) => {
  const sorted = movies.sort((a, b) => b.views - a.views);
  return sorted.slice(0, 2);
};
console.log(mostViewed(movies));
