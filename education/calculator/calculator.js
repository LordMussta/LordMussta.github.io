var sumArray = [];

var btn9 = document.getElementById("btn9");
var btn8 = document.getElementById("btn8");
var btn7 = document.getElementById("btn7");
var btn6 = document.getElementById("btn6");
var btn5 = document.getElementById("btn5");
var btn4 = document.getElementById("btn4");
var btn3 = document.getElementById("btn3");
var btn2 = document.getElementById("btn2");
var btn1 = document.getElementById("btn1");
var btn0 = document.getElementById("btn0");
var btnPlus = document.getElementById("btnPlus");
var btnMinus = document.getElementById("btnMinus");
var btnTimes = document.getElementById("btnTimes");
var btnDivide = document.getElementById("btnDivide");
var btnDecimal = document.getElementById("btnDecimal");
var btnAc = document.getElementById("btnAc");
var btnEquals = document.getElementById("btnEquals");
btn9.onclick = () => sumArray.push(9);
btn8.onclick = () => sumArray.push(8);
btn7.onclick = () => sumArray.push(7);
btn6.onclick = () => sumArray.push(6);
btn5.onclick = () => sumArray.push(5);
btn4.onclick = () => sumArray.push(4);
btn3.onclick = () => sumArray.push(3);
btn2.onclick = () => sumArray.push(2);
btn1.onclick = () => sumArray.push(1);
btn0.onclick = () => sumArray.push(0);
btnPlus.onclick = () => sumArray.push(" + ");
btnMinus.onclick = () => sumArray.push(" - ");
btnTimes.onclick = () => sumArray.push(" * ");
btnDivide.onclick = () => sumArray.push(" / ");
btnDecimal.onclick = () => sumArray.push(".");
btnAc.onclick = clearCalc;
btnEquals.onclick = result;
 

let allBtns = document.querySelectorAll(".sumButton");
let display = document.getElementById("display");

allBtns.forEach((button) => {
	button.addEventListener("click", showNumbers)
});

function showNumbers() {
	display.innerHTML = sumArray.join('');
}

function clearCalc() {
sumArray = [];
display.innerHTML = 0;
}

function result() {	
let z = sumArray.join("");
let a = eval(z);
display.innerHTML = a;
}

function init() {
	display.innerHTML = 0;
}