const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("kimchi");
const todoList = document.getElementById("todo-list");

let theList = [];

function saveList() {
    localStorage.setItem("t", JSON.stringify(theList));
}

function deletList(e) {
    const li = e.target.parentElement;
    li.remove();
    theList = theList.filter((d) => d.id !== parseInt(li.id));
    saveList();
}

function mkList1(something) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const b = document.createElement("button");
    li.id = something.id;
    span.innerText = something.text +` `;
    b.innerText = `✖️`; 
    b.addEventListener("click", deletList);
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(b);
}

function mkList2(e) {
    e.preventDefault();
    const newFace = todoInput.value;
    todoInput.value = ``;
    const newList = {text: newFace, id: Date.now()};
    theList.push(newList);
    mkList1(newList);
    saveList();
}
todoForm.addEventListener("submit", mkList2);
const saved = localStorage.getItem("t");
if (saved !== null) {
    const parsedToDos = JSON.parse(saved);
    theList = parsedToDos;
    parsedToDos.forEach(mkList1);
}
