/*101. Identify the highest and lowest grades in a given array.
 */
const grades = [85, 92, 78, 90, 67, 88, 95, 73, 84];

const findGrade = () => {
  const maxNumb = Math.max(...grades);
  const minNumb = Math.min(...grades);
  return `Highest grade is ${maxNumb}, lowest grade is ${minNumb}`;
};

console.log(findGrade(grades));
