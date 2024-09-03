/*187. Let's create an object that tracks the days 
each employee attended work in a month.
Modify Alex attends so he attends on second day as well
*/
const attendance = {
  John: [true, false, true, true, false, true], // `true` means attended, `false` means absent
  Mary: [true, true, true, false, true, true],
  Alex: [false, false, true, true, false, false],
};

const addAttendance = (attendance, key) => {
  attendance[key].push(true)[1];
};
addAttendance(attendance, "Alex");
console.log(attendance);
