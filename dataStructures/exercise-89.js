/*89. You have a list of students with their enrolled courses. 
Track which students are enrolled in which courses using an object.
*/
const students = [
  { name: "Alice", courses: ["Math", "Science"] },
  { name: "Bob", courses: ["Math", "English"] },
  { name: "Charlie", courses: ["Science", "History"] },
];

const trackStudentsByCourse = (students) => {
  let obj = {};
  students.forEach((student) => {
    student.courses.forEach((course) => {
      if (!obj[course]) {
        obj[course] = [];
      }
      obj[course].push(student.name);
    });
  });
  return obj;
};

console.log(trackStudentsByCourse(students));
