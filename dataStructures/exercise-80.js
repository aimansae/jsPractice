/*80. You manage a course enrollment system where each course has a courseName, instructor, schedule, and enrolledStudents. You need to:
Organize courses by instructor using a data structure.
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

// organize by Instructor

const organizeByInstructor = (courses) => {
  let object = {};
  courses.forEach((course) => {
    if (!object[course.instructor]) {
      object[course.instructor] = [];
    }
    object[course.instructor].push(course);
  });

  return object;
};
console.log(organizeByInstructor(courses));
