/*110.  Build a to-do list manager where you
mark tasks as complete*/

let tasks = [
  { task: "Buy groceries", dueDate: "2024-09-02", completed: false },
  { task: "Finish project", dueDate: "2024-09-01", completed: false },
];

const markAsComplete = (taskName) => {
  tasks.forEach((task) => {
    if (task.task.toLowerCase() === taskName.toLowerCase()) {
      task.completed = true;
      console.log(`Task '${task.task}' marked as complete.`);
    }
  });
};

markAsComplete("Finish Project");
console.log(tasks);
