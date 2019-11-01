var row, column, y = 0, colorChoice = "black";
var gridArray = []

function btn1Action() {
	createRows();
}

function createRows() {
	while (y <= 32){
	row = document.createElement("DIV")
	row.id = "new-row-" + y;
	row.className = "row-class";
	document.getElementById("main-container").appendChild(row);	
	createColumns();
	y++;
	}
	applyColour();
}

function createColumns() {
	for (var i = 0; i <= 32; i++) {
	column = document.createElement("DIV")
	column.className = "column-class";
	column.id = "row-" + y + "-column-" + i;
	var columnId = column.id;
	document.getElementById("new-row-" + y).appendChild(column);
	gridArray.push(column.id);
	}
}

function applyColour(){
	gridArray.forEach(run);
}

function run(item, index, arr){
	var colEl = document.getElementById(item);
	colEl.addEventListener("mousedown", function(){colEl.style.backgroundColor = colorChoice;})	
}

function btn2Action() {
	document.getElementById("main-container").innerHTML = "";
	y=0;
}

function changeColour() {
	var mainTitleEl = document.getElementById("mainTitle");
	mainTitleEl.style.color= "black";
}

function changeColourAgain(){
	var mainTitleEl = document.getElementById("mainTitle");
	mainTitleEl.style.color = "brown";
}

function btnWhiteAction() {
	colorChoice = "white";
}

function btnBlackAction() {
	colorChoice = "black";
}

function btnGrayAction() {
	colorChoice = "gray";
}

function btnRedAction() {
	colorChoice = "red";
}
function btnBlueAction() {
	colorChoice = "blue";
}

function btnGreenAction() {
	colorChoice = "green";
}
function btnYellowAction() {
	colorChoice = "yellow";
}

function btnOrangeAction() {
	colorChoice = "orange";
}

function btnBrownAction() {
	colorChoice = "brown";
}
function btnPurpleAction() {
	colorChoice = "purple";
}

function btnPinkAction() {
	colorChoice = "pink";
}