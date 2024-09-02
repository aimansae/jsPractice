/*180.: Create a simple Todo List where users can add, remove, and mark tasks as completed. */
const tasks = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Clean the house", completed: true },
];

// add a new Taks
const addNewTask = (title) => {
  const newTask = { title, id: tasks.length + 1 };
  tasks.push(newTask);
  console.log(`${title} added to list`);
};
addNewTask("Send Emails");

console.log(tasks);

const removeTask = (id) => {
  const filtered = tasks.filter((task) => task.id !== id);
  if (filtered.length < tasks.length) {
    console.log(`Task '${id}' removed successfully`);
    tasks.length = 0;
    tasks.push(...filtered);
  } else {
    console.log(`Task with id '${id}' not found`);
  }
};
removeTask(2);
console.log(tasks);

const markAsCompleted = (id) => {
  let taskFound = false;
  tasks.forEach((task) => {
    if (task.id === id) {
      task.completed = true;
      console.log(`${task.title} completed`);
      taskFound = true;
    }
  });
  if (!taskFound) {
    console.log(`Task with id ${id} not found`);
  }
};
markAsCompleted(1);
console.log(tasks);
