/*88.  Given a string, count the frequency of each word and return an object where keys are words and values are their frequencies.*/
const text = "this is a test this is only a test";
const findFrequency = (text) => {
  const frequency = {};
  let splitted = text.split("");
  console.log(splitted);

  splitted.forEach((word) => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  return frequency;
};

console.log(findFrequency(text));
