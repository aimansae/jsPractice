/*101. Given an array of objects, filter out those 
where a specified property status is not 'active'.*/
const tasks = [
  { id: 1, status: "active" },
  { id: 2, status: "inactive" },
  { id: 3, status: "active" },
];
const activeTasks = (tasks) => {
  return tasks.filter((task) => task.status === "active");
};
console.log(activeTasks(tasks));
