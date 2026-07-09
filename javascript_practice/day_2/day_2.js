// 1) asking user for name
const name = prompt("Please enter your name");

// 2) update page title to user's name
document.title = `${name}'s TODO List`;

// 4.1) "Add" button
const taskList = document.querySelector("#taskList");
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  if (taskInput.value.trim() === "") return;//to prevent empty tasks
  li.textContent = taskInput.value;
  taskList.append(li);
  taskInput.value = ""; //clear input field

  // 5) "Done" button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.classList.add("doneBtn");
  li.append(doneBtn);

  // 6) doneBtn logic
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("completed"); //done button is a toggle
    if (li.classList.contains("completed")) {
      taskList.append(li);
    } else {
      taskList.prepend(li);
    }
  });
});

// 4.2) "Clear" button
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});


