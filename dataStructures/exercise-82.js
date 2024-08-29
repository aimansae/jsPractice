/*80. You manage a course enrollment system where each course has a courseName, instructor, schedule, and enrolledStudents. You need to:
Add and remove students from a course based on enrollment changes.*/
let courses = [
  {
    courseName: "Introduction to Programming",
    instructor: "John Doe",
    schedule: "Monday 10:00 AM - 12:00 PM",
    enrolledStudents: ["Alice", "Bob"],
  },
  {
    courseName: "Advanced Mathematics",
    instructor: "Jane Smith",
    schedule: "Wednesday 2:00 PM - 4:00 PM",
    enrolledStudents: ["Charlie", "David"],
  },
  {
    courseName: "History 101",
    instructor: "John Doe",
    schedule: "Friday 1:00 PM - 3:00 PM",
    enrolledStudents: ["Eve", "Frank"],
  },
];

// update course by adding student name

const updateStudent = (courseName, studentName) => {
  const course = courses.find((course) => course.courseName === courseName);
  if (course.enrolledStudents.includes(studentName)) {
    return `student already enrolled`;
  } else course.enrolledStudents.push(studentName);
};
updateStudent("History 101", "ADDEDJack");
console.log(courses);

// remove student by course name

const removeStudent = (courseName, studentName) => {
  let course = courses.find((course) => course.courseName === courseName);
  if (!course) {
    return `Course "${courseName}" not found.`;
  }
  if (!course.enrolledStudents.includes(studentName)) {
    return `${studentName} is not enrolled in "${courseName}".`;
  }
  course.enrolledStudents = course.enrolledStudents.find(
    (student) => student !== studentName
  );
  return `${studentName} has been removed from "${courseName}".`;
};

console.log(removeStudent("History 101", "Eve"));
