/*123. Manage posts on a social media platform where each post has a postId, author, content, likes, and comments. 
You need to: Update post content.
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

const updatePost = (id, newContent) => {
  const postToUpdate = posts.find((post) => post.postId === id);
  if (postToUpdate) {
    postToUpdate.content = newContent;
  } else {
    console.log(`post with id ${id} not found`);
  }
};

updatePost(1, "CONTENT UPDATEd");
console.log(posts);
