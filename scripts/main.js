const todoInput = document.querySelector(".todo-input");
const doneBtn = document.querySelector(".done-btn");
const darkModeBtn = document.querySelector(".dark-mode-btn");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");
const body = document.querySelector("body");

let newId = 1;
let displayOnlyDone = false;
let displayDarkMode = false;
// let displayOnlyDone = false;

// const todo = {
//   id: 1,
//   title: "Wash the dishes",
//   isDone: false,
// };

const todos = [];

function addRemoveButton(todos, todo, newTodoLi) {
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "🗑️";
  removeBtn.onclick = function () {
    let index = todos.indexOf(todo);
    todos.splice(index, 1);
    displayTodos(todos);
  };
  newTodoLi.append(removeBtn);
}

function addDoneButton(todos, todo, newTodoLi) {
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✌️";
  doneBtn.onclick = function () {
    let index = todos.indexOf(todo);
    todos[index].isDone = true;
    displayTodos(todos);
  };
  newTodoLi.append(doneBtn);
}

function displayTodos(todos) {
  todoList.innerHTML = "";
  for (let todo of todos) {
    console.log("todos", todos);
    const newTodoLi = document.createElement("li");
    newTodoLi.textContent = todo.title;

    if (todo.isDone) {
      newTodoLi.style.textDecoration = "line-through";
    }

    todoList.append(newTodoLi);

    addRemoveButton(todos, todo, newTodoLi);
    addDoneButton(todos, todo, newTodoLi);
  }
}

// SOME OPTION TO GET A NEW ID
// function getNewId(arr) {
//   if (!arr.length) {
//     return 1;
//   }
//   return arr[arr.length - 1].id + 1;
// }

addBtn.onclick = function () {
  const title = todoInput.value;
  const newTodo = { id: newId, title: title, isDone: false };
  newId++;
  todos.push(newTodo);
  displayTodos(todos);
  doneBtn.textContent = "Show Done";
  displayOnlyDone = false;
};

doneBtn.onclick = function () {
  if (!displayOnlyDone) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.isDone;
    });

    displayTodos(filteredTodos);
    doneBtn.textContent = "Show All";
    displayOnlyDone = true;
  } else {
    displayTodos(todos);
    doneBtn.textContent = "Show Done";
    displayOnlyDone = false;
  }
};

darkModeBtn.onclick = function () {
  if (displayDarkMode) {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    darkModeBtn.textContent = "Dark Mode";
    displayDarkMode = false;
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    darkModeBtn.textContent = "Light Mode";
    displayDarkMode = true;
  }
};

darkModeBtn.onclick = function () {
  body.classList.toggle("dark");
  // if (displayDarkMode) {
  //   darkModeBtn.textContent = "Dark Mode";
  // } else {
  //   darkModeBtn.textContent = "Light Mode";
  // }
  displayDarkMode = !displayDarkMode;
  darkModeBtn.textContent = displayDarkMode ? "Light Mode" : "Dark Mode";
};
