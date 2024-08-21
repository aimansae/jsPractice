let addTask = document.querySelector("#add-task");
const taskContainer = document.querySelector("#task-container");
const input = document.querySelector("#input-task");

// Event listener for add button
addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let list = document.createElement("li");
  list.innerText = `${input.value}`;
  task.append(list);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  if (input.value === "") {
    alert("Please enter a task");
  } else {
    taskContainer.appendChild(task);
  }
  input.value = "";

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  deleteButton.addEventListener("click", function (e) {
    let target = e.target;

    target.parentElement.parentElement.remove();
  });
});
