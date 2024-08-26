/*23.You have an array of students with their scores.
Find the top 3 students with the highest scores.
*/

let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Dave", score: 95 },
  { name: "Eve", score: 88 },
];

const calculateScore = (students) => {
  const sortedScore = students.sort((a, b) => b.score - a.score);
  const topThreeStudents = sortedScore.slice(0, 3);
  return topThreeStudents;
};
console.log(calculateScore(students));
