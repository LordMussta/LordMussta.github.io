var qT = "Question "; 
var qN = 1;
var quesA = "What is ";
var x = 3;
var quesB = " * ";
var y = 4;
var quesC = "?"
var ques = x * y;
var correct = "Correct!";
var wrong = "<span style='color: red;'>Incorrect!</span>";
var questionTitle = document.getElementById("questionTitle");
var question = document.getElementById("question");
var displayResult = document.getElementById("displayResult");
var displayScore = document.getElementById("displayScore");
var displayAnswer = document.getElementById("displayAnswer");
var userScore = 0;
var construction = "Still under construction...";

function generateQuestion() {
if (document.getElementById("btn2".disabled = false)) {
x = Math.floor(Math.random()*12)+1;
y = Math.floor(Math.random()*12)+1;
qN = 1;
questionTitle.innerHTML = qT + qN;
question.innerHTML = quesA + x + quesB + y + quesC;
userScore = 0;
document.getElementById("displayScore").innerHTML = userScore;
document.getElementById("btn2").disabled = false;
	displayResult.innerHTML = null;
} else {
x = Math.floor(Math.random()*12)+1;
y = Math.floor(Math.random()*12)+1;
qN = 1;
questionTitle.innerHTML = qT + qN;
question.innerHTML = quesA + x + quesB + y + quesC;
document.getElementById("btn2").disabled = false;
userScore = 0;
document.getElementById("displayScore").innerHTML = userScore;
displayResult.innerHTML = null;
}
}

function submitQuestion () {
var userInput = document.getElementById("input1").value;
if (userInput == x*y) {
	displayResult.innerHTML = correct;
	userScore++;
	displayScore.innerHTML = userScore + "/12";
	//displayAnswer.innerHTML = x*y;
	document.getElementById("input1").value = null;
	document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = false;
} else {
	displayResult.innerHTML = wrong + " The correct answer was " + x*y + ".";
	//displayAnswer.innerHTML = x*y;
	document.getElementById("input1").value = null;
	document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = false;
	}
}

function nextQuestion() {
x = Math.floor(Math.random()*12)+1;
//document.getElementById("displayRandomNumber").innerHTML = x;
y = Math.floor(Math.random()*12)+1;
//document.getElementById("displayRandomNumber").innerHTML = y;
if (qN < 12) {
	document.getElementById("btn2").disabled = false;
		document.getElementById("btn3").disabled = true;
qN++;
questionTitle.innerHTML = qT + qN;
question.innerHTML = quesA + x + quesB + y + quesC;
displayResult.innerHTML = "";
} else {
	displayResult.innerHTML = "You have completed the quiz! You got " + Math.floor((userScore/12)*100) + "%." ;
	document.getElementById("btn1").disabled = false;
	document.getElementById("btn2").disabled = true;
	document.getElementById("btn3").disabled = true;
	}
}

