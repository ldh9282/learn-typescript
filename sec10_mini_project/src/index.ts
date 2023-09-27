
const btn: HTMLButtonElement | null = document.querySelector('#btn')

// ? mean not null and not undefined check
btn?.addEventListener("click", function() {
    alert("click!")
})
// ====================================================================
// ! mean non-null assertion operator
const btn2: HTMLButtonElement = document.querySelector('#btn')!

btn2.addEventListener("click", function() {
    alert("click2!")
})
// ====================================================================
// unknown means typescript does not know the type
let mystery: unknown = "Hello World!!!"

// as string means type assertion
const numChars = (mystery as string).length
// ====================================================================
const btn3: HTMLButtonElement = document.querySelector('#btn')!

btn3.addEventListener("click", function() {
    const input = document.querySelector("input#todoinput") as HTMLInputElement
    alert(input.value)
    input.value = ""
})
// ====================================================================
const btn4: HTMLButtonElement = document.querySelector('#btn')!

btn4.addEventListener("click", function() {
    const input = document.querySelector("input#todoinput");
    // type assertion "as syntax"
    (input as HTMLInputElement).value = "test";
    // type assertion "generics"
    alert((<HTMLInputElement>input).value);
    // type assertion "as syntax"
    (input as HTMLInputElement).value = "";
})
// ====================================================================
// mini project: Todos
const btnSubmit = document.querySelector('#btn2')! as HTMLButtonElement
const input = document.querySelector("input#todoinput2")! as HTMLInputElement
const form = document.querySelector("form#todoform")! as HTMLFormElement
const ulList = document.querySelector("ul#todolist") as HTMLUListElement

interface Todo {
    text: string;
    completed: boolean;
}

const todos: Todo[] = readTodos()
todos.forEach(function(todo) {
    createTodo(todo)
})
function readTodos(): Todo[] {
    const todosJSON: string | null = localStorage.getItem("todos")
    if (todosJSON) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
    
}

const handleSubmit = function (this: HTMLFormElement, e: SubmitEvent): void {
    e.preventDefault()
    
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo)
    todos.push(newTodo)

    // TEST START
    console.dir(todos);
    // TEST END

    localStorage.setItem("todos", JSON.stringify(todos))

    // TEST START
    console.log(localStorage.getItem("todos"));
    console.dir(JSON.parse(localStorage.getItem("todos")!));
    // TEST END

    input.value = ""
}

function createTodo(todo: Todo) {

    const newLi = document.createElement("li") as HTMLLIElement
    newLi.textContent = todo.text

    const checkbox = document.createElement("input") as HTMLInputElement
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed
    checkbox.addEventListener("change", function() {
        todo.completed = this.checked
        // TEST START
        console.dir(todos);
        // TEST END
        localStorage.setItem("todos", JSON.stringify(todos))
        // TEST START
        console.log(localStorage.getItem("todos"));
        console.dir(JSON.parse(localStorage.getItem("todos")!));
        // TEST END
    })
    newLi.append(checkbox)

    ulList?.append(newLi)
}

form.addEventListener("submit", handleSubmit)
