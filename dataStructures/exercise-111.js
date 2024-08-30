/*111.  Build a to-do list manager where you need to sort the tasks by due date*/

let tasks = [
  { task: "Buy groceries", dueDate: "2024-09-02", completed: false },
  { task: "Finish project", dueDate: "2024-09-01", completed: false },
  { task: "Finish project", dueDate: "2024-08-30", completed: false },
];

const sortByDate = (tasks) => {
  return tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
};

console.log(sortByDate(tasks));
