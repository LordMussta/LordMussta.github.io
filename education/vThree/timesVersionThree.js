var questionsArray = ["What is 6*1?", "What is 6*2?", "What is 6*3?", "What is 6*4?", "What is 6*5?", "What is 6*6?", "What is 6*7?", "What is 6*8?", "What is 6*9?", "What is 6*10?", "What is 6*11?", "What is 6*12?", ]
var answersArray = [6*1, 6*2, 6*3, 6*4, 6*5, 6*6, 6*7, 6*8, 6*9, 6*10, 6*11, 6*12]
var x = 0;
var i = 0;
var score = 0;
var counter = 1;
var percentageScore = 0;

function checkAnswer(){
var userAnswer = document.getElementById("inputField").value;
if (userAnswer == answersArray[x]) {
	document.getElementById("answer").innerHTML = "Correct!" + " The answer was " + answersArray[x] + ".";
	score++
	document.getElementById("score").innerHTML = score + "/" + questionsArray.length;
	document.getElementById("question").innerHTML = ""
	secondButton.disabled = true;
}
else {
	document.getElementById("answer").innerHTML = "Wrong..." + " The answer was " + answersArray[x] + ".";
		secondButton.disabled = true;

}
}

function moveToNextQuestion() {
if (counter < 12) {
		x++;
		i++;
		document.getElementById("question").innerHTML = questionsArray[i];
		document.getElementById("answer").innerHTML = "";
		document.getElementById("inputField").value = "";
		counter++
		document.getElementById("questionCounter").innerHTML = counter;
			secondButton.disabled = false;
		}
else {
document.getElementById("warningMessage").innerHTML = "You have completed your 6 times tables!";
document.getElementById("totalScore").innerHTML = "You got " + Math.round(((score/counter)*100)) + "%";
if (score > 6) {
	document.getElementById("result").innerHTML = "You passed the quiz!"
}
else {
		document.getElementById("result").innerHTML = "You did not pass the quiz...Please try again."
}
	}
}

