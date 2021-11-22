let form = document.querySelector("#form1");
let pSum = document.querySelector("#sum");
console.log(form);
console.log(pSum);
form.addEventListener("submit", function (e) {
e.preventDefault();
let firstDigit = +e.target.elements.firstNumber.value;
let secondDigit = +e.target.elements.secondNumber.value;
pSum.textContent = firstDigit + secondDigit;
})