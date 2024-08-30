/*108.  Build a to-do list manager where you can add a new task*/
const tasks = [
  { task: "Buy groceries", dueDate: "2024-09-02", completed: false },
  { task: "Finish project", dueDate: "2024-09-01", completed: true },
];

const addTasks = (taskName, dueDate) => {
  tasks.push({ task: taskName, dueDate: dueDate, completed: false });
  console.log(`Task '${taskName}' added successfully.`);
};
addTasks("Iron Clothes", "2024-09-01");
console.log(tasks);
