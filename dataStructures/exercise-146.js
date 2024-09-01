/*146. You are building a task manager where tasks have different statuses, 
and you need to new tasks */

let tasks = [
  { id: 1, title: "Task 1", status: "pending" },
  { id: 2, title: "Task 2", status: "completed" },
  { id: 3, title: "Task 3", status: "completed" },
];

const addTasks = (id, newTaskTitle, status = "pending") => {
  const newTask = { id, title: newTaskTitle, status };
  tasks.push(newTask);
};
addTasks(5, "Task 5");
console.log("Modifying the initial array", tasks);

// without modifying the original array
const addTasksNoMutation = (id, newTaskTitle, status = "pending") => {
  const newTask = { id, title: newTaskTitle, status };
  return [...tasks, newTask];
};

const addTask = addTasksNoMutation(4, "NewTask");
console.log("Not Modifying the initial array", tasks);
