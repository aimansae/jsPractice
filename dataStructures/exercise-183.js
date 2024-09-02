/*183.Create a system to recommend friends based on 
mutual connections. Each user has a list of friends, 
and you want to suggest new friends based on mutual 
connections. */
const users = {
  Alice: ["Bob", "Charlie"],
  Bob: ["Alice", "Charlie", "David"],
  Charlie: ["Alice", "Bob"],
  David: ["Bob"],
};

function recommendFriends(user) {
  const friends = users[user] || [];
  console.log(friends);
  const recommendations = {};

  friends.forEach((friend) => {
    const friendFriends = users[friend] || [];
    console.log(friendFriends);
    friendFriends.forEach((ff) => {
      if (!friends.includes(ff) && ff !== user) {
        if (!recommendations[ff]) {
          recommendations[ff] = 0;
        }
        recommendations[ff]++;
      }
    });
  });

  return Object.entries(recommendations)
    .sort((a, b) => b[1] - a[1])
    .map(([name]) => name);
}

console.log("Recommendations for Alice:", recommendFriends("Alice"));
