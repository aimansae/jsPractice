/*102. Identify the highest and lowest grades in a given array.
 Count how many students scored above a certain threshold.
*/
const grades = [85, 92, 78, 90, 67, 88, 95, 73, 84];

const analyzeGrades = (threshold) => {
  return grades.filter((grade) => grade >= threshold).length;
};

console.log(analyzeGrades(90));
