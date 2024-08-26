/*19. You have an array of tags,
each with an array of tags. Extract all unique tags from all posts.
*/

let tags = [
  { id: 1, tags: ["JavaScript", "Web Development"] },
  { id: 2, tags: ["JavaScript", "React"] },
  { id: 3, tags: ["Web Development", "CSS"] },
];

const uniqueTags = (tags) => {
  let tagsInOneArray = tags.flatMap((post) => post.tags);
  console.log(tagsInOneArray);
  let filterArray = tagsInOneArray.filter(
    (item, index) => tagsInOneArray.indexOf(item) === index
  );
  return filterArray;
};
console.log(uniqueTags(tags));
