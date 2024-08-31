/*121. Manage posts on a social media platform where each post has a postId, author, content, likes, and comments. 
You need to: Add a new comment to a post.
*/

const posts = [
  {
    postId: 1,
    author: "Alice",
    content: "Hello world!",
    likes: 10,
    comments: ["Great post!", "Interesting thoughts."],
  },
  {
    postId: 2,
    author: "Bob",
    content: "JavaScript is awesome!",
    likes: 5,
    comments: ["Absolutely!", "I agree!"],
  },
];
const addNewComment = (id, comment) => {
  const postToAdd = posts.find((post) => post.postId === id);
  if (postToAdd) {
    postToAdd.comments.push(comment);
    console.log(`Comment ${comment} added to post with id ${id}`);
  } else {
    console.log(`post with id ${id} not found`);
  }
};
addNewComment(2, "AMAZING");
console.log(posts);
