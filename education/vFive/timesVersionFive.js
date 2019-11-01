var questionNumber = document.getElementById("displayQuestionNumber");
var question = document.getElementById("displayQuestion");
var result = document.getElementById("displayResult");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
questionTitle = "Question ";
qN = 1;
var questPartA = "What is ";
var questPartB = " * ";
var questPartC = "?";
var correct = "Correct!"
var wrong = "<i style='color: red'>Wrong!</i>";
var answerWas = " The answer was ";
var x = 3;
var y = 1;
var i = 0;
var userScore = 0;
questionNumber.innerHTML = questionTitle + qN;
questionDisplayed = questPartA + x + questPartB + y + questPartC;
question.innerHTML = questionDisplayed;

function chooseTable() {
var queryNumber = document.getElementById("queryNumber1").value;
if (queryNumber < 13 && queryNumber > 0) {
	x = queryNumber;
	y = 1;
	question.innerHTML = questPartA + x + questPartB + y + questPartC;
	btn1.disabled = false;
	btn2.disabled = false;	
	document.getElementById("queryNumber1").value = null;
	document.getElementById("userInput").value = null;
	result.innerHTML = null;
	userScore = 0;
	qN = 1;
	questionNumber.innerHTML = questionTitle + qN;
	document.getElementById("userScore").innerHTML = userScore + "/12";
	document.getElementById("progressBar").value = 0;
} else {
	document.getElementById("queryNumber1").value = null;
}
}

function submitQuestion() {
var userAnswer = document.getElementById("userInput").value;
	if (userAnswer == (x*y)) {
		result.innerHTML = correct;
		btn1.disabled = true;
		userScore++;
		document.getElementById("userScore").innerHTML = userScore + "/12";
		btn3.disabled = true;

	} else {
		result.innerHTML = wrong + answerWas + x*y;
		btn1.disabled = true;
		btn3.disabled = true;
	}
}

function nextQuestion() {
if (qN < 12) {
	qN++;	
	questionNumber.innerHTML = questionTitle + qN;
	y++;
	question.innerHTML = questPartA + x + questPartB + y + questPartC;
	document.getElementById("userInput").value = null;
	btn1.disabled = false;
	result.innerHTML = null;
	document.getElementById("progressBar").value = 8.3*qN;
	} else {
	result.innerHTML = "You have completed the quiz";
	btn1.disabled = true;
	btn2.disabled = true;
	btn3.disabled = false;
	}
}

