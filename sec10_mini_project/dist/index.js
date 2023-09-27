"use strict";
const btn = document.querySelector('#btn');
// ? mean not null and not undefined check
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    alert("click!");
});
// ====================================================================
// ! mean non-null assertion operator
const btn2 = document.querySelector('#btn');
btn2.addEventListener("click", function () {
    alert("click2!");
});
// ====================================================================
// unknown means typescript does not know the type
let mystery = "Hello World!!!";
// as string means type assertion
const numChars = mystery.length;
// ====================================================================
const btn3 = document.querySelector('#btn');
btn3.addEventListener("click", function () {
    const input = document.querySelector("input#todoinput");
    alert(input.value);
    input.value = "";
});
// ====================================================================
const btn4 = document.querySelector('#btn');
btn4.addEventListener("click", function () {
    const input = document.querySelector("input#todoinput");
    // type assertion "as syntax"
    input.value = "test";
    // type assertion "generics"
    alert(input.value);
    // type assertion "as syntax"
    input.value = "";
});
// ====================================================================
// mini project: Todos
const btnSubmit = document.querySelector('#btn2');
const input = document.querySelector("input#todoinput2");
const form = document.querySelector("form#todoform");
const ulList = document.querySelector("ul#todolist");
const todos = readTodos();
todos.forEach(function (todo) {
    createTodo(todo);
});
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON) {
        return JSON.parse(todosJSON);
    }
    else {
        return [];
    }
}
const handleSubmit = function (e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    // TEST START
    console.dir(todos);
    // TEST END
    localStorage.setItem("todos", JSON.stringify(todos));
    // TEST START
    console.log(localStorage.getItem("todos"));
    console.dir(JSON.parse(localStorage.getItem("todos")));
    // TEST END
    input.value = "";
};
function createTodo(todo) {
    const newLi = document.createElement("li");
    newLi.textContent = todo.text;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = this.checked;
        // TEST START
        console.dir(todos);
        // TEST END
        localStorage.setItem("todos", JSON.stringify(todos));
        // TEST START
        console.log(localStorage.getItem("todos"));
        console.dir(JSON.parse(localStorage.getItem("todos")));
        // TEST END
    });
    newLi.append(checkbox);
    ulList === null || ulList === void 0 ? void 0 : ulList.append(newLi);
}
form.addEventListener("submit", handleSubmit);
