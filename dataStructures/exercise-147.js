/*147. You are building a task manager where tasks have different statuses, 
and you need to  update tasks */

let tasks = [
  { id: 1, title: "Task 1", status: "pending" },
  { id: 2, title: "Task 2", status: "completed" },
  { id: 3, title: "Task 3", status: "completed" },
];

const updateTask = (id, newStatus) => {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    const oldStatus = task.status;
    task.status = newStatus;
    console.log(
      `Task ${task.title} changed from '${oldStatus}' to '${task.status}'`
    );
  } else {
    console.log(`Task with given ID ${id} not found`);
  }
};
updateTask(1, "Completed");
console.log(tasks);
