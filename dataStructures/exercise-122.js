/*122. Manage posts on a social media platform where each post has a postId, author, content, likes, and comments. 
You need to: Like a post based on postId.
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

const likePosts = (id) => {
  const postToLike = posts.find((post) => post.postId === id);
  if (postToLike) {
    postToLike.likes += 1;
  } else {
    console.log(`post with id ${id} not found`);
  }
};
likePosts(1, likePosts);
console.log(posts);
