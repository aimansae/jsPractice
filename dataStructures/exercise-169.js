/*169. Calculate the average using reduce*/
const scores = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 78 },
];

const calculateAverage = (scores, property) => {
  scores.reduce((currentValue, item) => {
    currentValue + item[propery];
  }, 0);
};
console.log(calculateAverage(scores, "score"));
