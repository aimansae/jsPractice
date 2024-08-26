//29. calculate average from an array of grades without reduce

const calculateAverage = (arr) => {
  let total = 0;

  arr.forEach((grade) => {
    total += grade;
  });

  let gradeAverage = total / arr.length;
  console.log("Total is:", total, "Average is:", gradeAverage);
  return gradeAverage;
};

let grade = [55, 63, 82, 98, 91, 43];
calculateAverage(grade);
