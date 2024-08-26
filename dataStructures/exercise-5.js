//5. Check how many times a letter appears in an array

const countLetters = (letters) => {
  let count = {};

  letters.forEach((item) => {
    count[item] = (count[item] | 0) + 1;
  });
  console.log(count);
};

const letters = ["a", "b", "a", "b", "c"];
countLetters(letters);
