/*123. Manage posts on a social media platform where each post has a postId, author, content, likes, and comments. 
You need to: Delete a post based on ID.
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

const deletePost = (id) => {
  const filteredPost = posts.filter((post) => post.postId !== id);
  if (filteredPost.length === posts.length) {
    console.log(`Post with id ${id} not found`);
  } else {
    posts.length = 0;
    posts.push(...filteredPost);
    console.log(`Post with id ${id} deleted successfully`);
  }
};

deletePost(1);
console.log(posts);
