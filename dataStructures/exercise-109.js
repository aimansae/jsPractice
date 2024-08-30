/*109.  Build a to-do list manager where you can add, remove, and mark tasks as complete*/
let tasks = [
  { task: "Buy groceries", dueDate: "2024-09-02", completed: false },
  { task: "Finish project", dueDate: "2024-09-01", completed: true },
];

// Function to remove a task by its name
const removeTasks = (taskName) => {
  tasks = tasks.filter((task) => task.task !== taskName);
  console.log(`Task '${taskName}' removed successfully.`);
};

// Example usage
removeTasks("Buy groceries");
console.log(tasks);
