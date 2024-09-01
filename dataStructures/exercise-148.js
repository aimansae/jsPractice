/*148. You are building a task manager where tasks have different statuses, 
and you need to delete tasks */

let tasks = [
  { id: 1, title: "Task 1", status: "pending" },
  { id: 2, title: "Task 2", status: "completed" },
  { id: 3, title: "Task 3", status: "completed" },
];

const deleteTasks = (id) => {
  const updatedTask = tasks.filter((task) => task.id !== id);
  if (tasks.length > updatedTask.length) {
    tasks = updatedTask;
    console.log(` Task with id ${id} removed successfully`);
  } else {
    console.log(`Task with id ${task.id} not found`);
  }
};

deleteTasks(1);
console.log(tasks);
