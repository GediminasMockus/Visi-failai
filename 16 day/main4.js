let form = document.querySelector("#todolist");
let ul = document.querySelector("#list");
let box = document.querySelector("task");

box.addEventListener("focus", function(f){
    box.style.backgroundColor = "red";
})
box.addEventListener("blur", function(b){
    box.style.backgroundColor = "blue";
})

form.addEventListener("click", function (e) {
    
e.preventDefault();

let uzduotis = e.target.elements.task.value;
let li = document.createElement("li");

li.textContent = uzduotis;
ul.appendChild(li);
e.target.elements.task.value = "";
})