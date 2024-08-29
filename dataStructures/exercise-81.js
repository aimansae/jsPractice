/*80. You manage a course enrollment system where each course has a courseName, instructor, schedule, and enrolledStudents. You need to:
Find all students enrolled in a specific course.
*/
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

const findStudentByCourse = (courseName) => {
  const course = courses.find((course) => course.courseName === courseName);
  if (course) {
    return course.enrolledStudents;
  } else {
    return `Course "${courseName}" not found.`;
  }
};
console.log(findStudentByCourse("History 101"));
console.log(findStudentByCourse("Advanced Mathematics"));
