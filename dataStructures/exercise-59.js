/*59. Given an array of strings, 
group the strings that are anagrams of each other.*/

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const findAnagram = (words) => {
  const group = {};

  words.forEach((word) => {
    let sorted = word.split("").sort().join("");
    if (!group[sorted]) {
      group[sorted] = [];
    }
    group[sorted].push(word);
  });
  return Object.values(group);
};

console.log(findAnagram(words));
