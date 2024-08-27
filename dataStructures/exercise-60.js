/*60. Write a function that takes a string as input 
and returns the string in reverse order.
*/
const input = "hello";
const reversedString = (input) => {
  //transform string in array,reverse it, join the single words
  return input.split("").reverse().join("");
};
console.log(reversedString(input));
