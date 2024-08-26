/*12. Task: Create a Map where the keys are student names and the values are their grades.
Write a function that returns the average grade of all students.*/

const grades = new Map([
  ["Jack", 85],
  ["Lara", 30],
  ["John", 15],
  ["Jules", 75],
]);

function calculateAverage(grades) {
  let total = 0;
  let count = 0;

  grades.forEach((grade) => {
    total += grade;
    count++;
  });

  return total / count;
}
console.log(calculateAverage(grades));
