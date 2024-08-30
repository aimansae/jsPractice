/*100. You have an array of student grades and need to:
Find the average grade.*/
const grades = [85, 92, 78, 90, 67, 88, 95, 73, 84];

//
const average = (grades) => {
  const total = grades.reduce((total, currentV) => {
    return total + currentV;
  }, 0);

  const average = total / grades.length;

  return average;
};

console.log(average(grades));
