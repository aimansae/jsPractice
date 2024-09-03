/*184. . Implement functions to add and remove grades to a student object*/
const students = {
  Alice: [90, 85, 88],
  Bob: [70, 80, 78],
};

const addGrade = (key, grade) => {
  if (students[key]) {
    students[key].push(grade);
    console.log(`Grade ${grade} added for ${key}`);
  } else {
    students[key] = [grade];
  }
};
addGrade("Alice", 22);
console.log(students);

// remove grades

const removeGrade = (studentName, gradeToDelete) => {
  if (!students[studentName]) {
    console.log(`student ${studentName} not found`);
  }

  students[studentName] = students[studentName].filter(
    (grade) => grade !== gradeToDelete
  );

  console.log(`Removed grade ${gradeToDelete} from ${studentName}'s list.`);
};
console.log("Before removal:", students);
removeGrade("Alice", 85);
console.log("After removal:", students);
