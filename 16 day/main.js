let rndNmbr = Math.floor(Math.random() * 100);
console.log(rndNmbr);
let forma = document.querySelector("#forma");
let pResultText = document.querySelector("#resultText");
let pResultCount = document.querySelector("#resultCount");
let count = 0
forma.addEventListener("submit", function (e) {
e.preventDefault();
console.log(e.target.elements.number.value);
if (e.target.elements.number.value == rndNmbr) {
console.log("Pataike");
pResultText.textContent = "Atspejot";
} else if (e.target.elements.number.value > rndNmbr) {
console.log("Per didelis");
pResultText.textContent = "Per didelis";
} else if (e.target.elements.number.value < rndNmbr) {
console.log("Per mazas")
pResultText.textContent = "Per Mazas";
}
count++
pResultCount.textContent = "Bandymu skaicius " + count;
});
