/*56.  You are developing a chat application, and you want to 
filter out messages containing spam keywords. 
You have a list of spam keywords and a list of incoming messages. 
Implement a system that checks each message and removes the spam keywords, ensuring no duplicates in the list of filtered keywords.*/

const spamKeywords = ["buy", "free", "win", "click", "subscribe"];
const incomingMessages = [
  "Click here to win a free prize!",
  "This is a friendly message",
  "Subscribe now and get free stuff",
  "Hello, how are you?",
  "Win big with this offer!",
];

const filteredWords = incomingMessages
  .map((message) =>
    message
      .split(/\s+/)
      .map((word) => word.toLowerCase())
      .filter((word) => !spamKeywords.includes(word))
  )
  .flat();

const uniqueWords = [...new Set(filteredWords)];

//Filtered words
console.log("Filtered Words", uniqueWords);
