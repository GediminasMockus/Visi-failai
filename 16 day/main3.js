let forma = document.querySelector("#form1");
let suma = document.querySelector("#kmi");

forma.addEventListener("submit",function(e){
    e.preventDefault();
    let ugis = +e.target.elements.height.value;
    let svoris = +e.target.elements.weight.value;
    let rezultatas = (svoris / ((ugis*ugis) / 10000)).toFixed(2);
    suma.textContent = rezultatas;
})