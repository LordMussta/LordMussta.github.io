var questionsArray3 = ["What is 3*1?", "What is 3*2?", "What is 3*3?", "What is 3*4?", "What is 3*5?", "What is 3*6?", "What is 3*7?", "What is 3*8?", "What is 3*9?", "What is 3*10?", "What is 3*11?", "What is 3*12?", ]
var answersArray3 = [3*1, 3*2, 3*3, 3*4, 3*5, 3*6, 3*7, 3*8, 3*9, 3*10, 3*11, 3*12]
var x3 = 0;
var i3 = 0;
var score3 = 0;
var counter3 = 1;
var percentageScore3 = 0;

function checkAnswer3(){
var userAnswer3 = document.getElementById("inputField3").value;
if (userAnswer3 == answersArray3[x3]) {
	document.getElementById("answer3").innerHTML = "Correct!" + " The answer was " + answersArray3[x3] + ".";
	score3++
	document.getElementById("score3").innerHTML = score3 + "/" + questionsArray3.length;
	document.getElementById("question3").innerHTML = ""
	submitButton3.disabled = true;
}
else {
	document.getElementById("answer3").innerHTML = "Wrong..." + " The answer was " + answersArray3[x3] + ".";
		submitButton3.disabled = true;

}
}

function moveToNextQuestion3() {
if (counter3 < 12) {
		x3++;
		i3++;
		document.getElementById("question3").innerHTML = questionsArray3[i3];
		document.getElementById("answer3").innerHTML = "";
		document.getElementById("inputField3").value = "";
		counter3++
		document.getElementById("questionCounter3").innerHTML = counter3;
			submitButton3.disabled = false;
		}
else {
document.getElementById("warningMessage3").innerHTML = "The 3 times tables are complete.";
document.getElementById("totalScore3").innerHTML = "You got " + Math.round(((score3/counter3)*100)) + "%";
if (score3 > 6) {
	document.getElementById("result3").innerHTML = "You passed the quiz!"
}
else {
		document.getElementById("result3").innerHTML = "You did not pass the quiz."
}
	}
}



var questionsArray4 = ["What is 4*1?", "What is 4*2?", "What is 4*3?", "What is 4*4?", "What is 4*5?", "What is 4*6?", "What is 4*7?", "What is 4*8?", "What is 4*9?", "What is 4*10?", "What is 4*11?", "What is 4*12?", ]
var answersArray4 = [4*1, 4*2, 4*3, 4*4, 4*5, 4*6, 4*7, 4*8, 4*9, 4*10, 4*11, 4*12]
var x4 = 0;
var i4 = 0;
var score4 = 0;
var counter4 = 1;
var percentageScore4 = 0;

function checkAnswer4(){
var userAnswer4 = document.getElementById("inputField4").value;
if (userAnswer4 == answersArray4[x4]) {
	document.getElementById("answer4").innerHTML = "Correct!" + " The answer was " + answersArray4[x4] + ".";
	score4++
	document.getElementById("score4").innerHTML = score4 + "/" + questionsArray4.length;
	document.getElementById("question4").innerHTML = ""
	submitButton4.disabled = true;
}
else {
	document.getElementById("answer4").innerHTML = "Wrong..." + " The answer was " + answersArray4[x4] + ".";
		submitButton4.disabled = true;

}
}

function moveToNextQuestion4() {
if (counter4 < 12) {
		x4++;
		i4++;
		document.getElementById("question4").innerHTML = questionsArray4[i4];
		document.getElementById("answer4").innerHTML = "";
		document.getElementById("inputField4").value = "";
		counter4++
		document.getElementById("questionCounter4").innerHTML = counter4;
			submitButton4.disabled = false;
		}
else {
document.getElementById("warningMessage4").innerHTML = "The 4 times tables are complete.";
document.getElementById("totalScore4").innerHTML = "You got " + Math.round(((score4/counter4)*100)) + "%";
if (score4 > 6) {
	document.getElementById("result4").innerHTML = "You passed the quiz!"
}
else {
		document.getElementById("result4").innerHTML = "You did not pass the quiz."
}
	}
}




var questionsArray5 = ["What is 5*1?", "What is 5*2?", "What is 5*3?", "What is 5*4?", "What is 5*5?", "What is 5*6?", "What is 5*7?", "What is 5*8?", "What is 5*9?", "What is 5*10?", "What is 5*11?", "What is 5*12?", ]
var answersArray5 = [5*1, 5*2, 5*3, 5*4, 5*5, 5*6, 5*7, 5*8, 5*9, 5*10, 5*11, 5*12]
var x5 = 0;
var i5 = 0;
var score5 = 0;
var counter5 = 1;
var percentageScore5 = 0;

function checkAnswer5(){
var userAnswer5 = document.getElementById("inputField5").value;
if (userAnswer5 == answersArray5[x5]) {
	document.getElementById("answer5").innerHTML = "Correct!" + " The answer was " + answersArray5[x5] + ".";
	score5++
	document.getElementById("score5").innerHTML = score5 + "/" + questionsArray5.length;
	document.getElementById("question5").innerHTML = ""
	submitButton5.disabled = true;
}
else {
	document.getElementById("answer5").innerHTML = "Wrong..." + " The answer was " + answersArray5[x5] + ".";
		submitButton5.disabled = true;

}
}

function moveToNextQuestion5() {
if (counter5 < 12) {
		x5++;
		i5++;
		document.getElementById("question5").innerHTML = questionsArray5[i5];
		document.getElementById("answer5").innerHTML = "";
		document.getElementById("inputField5").value = "";
		counter5++
		document.getElementById("questionCounter5").innerHTML = counter5;
			submitButton5.disabled = false;
		}
else {
document.getElementById("warningMessage5").innerHTML = "The 5 times tables are complete";
document.getElementById("totalScore5").innerHTML = "You got " + Math.round(((score5/counter5)*100)) + "%";
if (score5 > 6) {
	document.getElementById("result5").innerHTML = "You passed the quiz!"
}
else {
		document.getElementById("result5").innerHTML = "You did not pass the quiz."
}
	}
}


var questionsArray6 = ["What is 6*1?", "What is 6*2?", "What is 6*3?", "What is 6*4?", "What is 6*5?", "What is 6*6?", "What is 6*7?", "What is 6*8?", "What is 6*9?", "What is 6*10?", "What is 6*11?", "What is 6*12?", ]
var answersArray6 = [6*1, 6*2, 6*3, 6*4, 6*5, 6*6, 6*7, 6*8, 6*9, 6*10, 6*11, 6*12]
var x6 = 0;
var i6 = 0;
var score6 = 0;
var counter6 = 1;
var percentageScore6 = 0;

function checkAnswer6(){
var userAnswer6 = document.getElementById("inputField6").value;
if (userAnswer6 == answersArray6[x6]) {
	document.getElementById("answer6").innerHTML = "Correct!" + " The answer was " + answersArray6[x6] + ".";
	score6++
	document.getElementById("score6").innerHTML = score6 + "/" + questionsArray6.length;
	document.getElementById("question6").innerHTML = ""
	submitButton6.disabled = true;
}
else {
	document.getElementById("answer6").innerHTML = "Wrong..." + " The answer was " + answersArray6[x6] + ".";
		submitButton6.disabled = true;

}
}

function moveToNextQuestion6() {
if (counter6 < 12) {
		x6++;
		i6++;
		document.getElementById("question6").innerHTML = questionsArray6[i6];
		document.getElementById("answer6").innerHTML = "";
		document.getElementById("inputField6").value = "";
		counter6++
		document.getElementById("questionCounter6").innerHTML = counter6;
			submitButton6.disabled = false;
		}
else {
document.getElementById("warningMessage6").innerHTML = "The 6 times tables are complete.";
document.getElementById("totalScore6").innerHTML = "You got " + Math.round(((score6/counter6)*100)) + "%";
if (score6 > 6) {
	document.getElementById("result6").innerHTML = "You passed the quiz!"
}
else {
		document.getElementById("result6").innerHTML = "You did not pass the quiz."
}
	}
}


var questionsArray7 = ["What is 7*1?", "What is 7*2?", "What is 7*3?", "What is 7*4?", "What is 7*5?", "What is 7*6?", "What is 7*7?", "What is 7*8?", "What is 7*9?", "What is 7*10?", "What is 7*11?", "What is 7*12?", ]
var answersArray7 = [7*1, 7*2, 7*3, 7*4, 7*5, 7*6, 7*7, 7*8, 7*9, 7*10, 7*11, 7*12]
var x7 = 0;
var i7 = 0;
var score7 = 0;
var counter7 = 1;
var percentageScore7 = 0;

function checkAnswer7(){
var userAnswer7 = document.getElementById("inputField7").value;
if (userAnswer7 == answersArray7[x7]) {
	document.getElementById("answer7").innerHTML = "Correct!" + " The answer was " + answersArray7[x7] + ".";
	score7++
	document.getElementById("score7").innerHTML = score7 + "/" + questionsArray7.length;
	document.getElementById("question7").innerHTML = ""
	submitButton7.disabled = true;
}
else {
	document.getElementById("answer7").innerHTML = "Wrong..." + " The answer was " + answersArray7[x7] + ".";
		submitButton7.disabled = true;

}
}

function moveToNextQuestion7() {
if (counter7 < 12) {
		x7++;
		i7++;
		document.getElementById("question7").innerHTML = questionsArray7[i7];
		document.getElementById("answer7").innerHTML = "";
		document.getElementById("inputField7").value = "";
		counter7++
		document.getElementById("questionCounter7").innerHTML = counter7;
			submitButton7.disabled = false;
		}
else {
document.getElementById("warningMessage7").innerHTML = "The 7 times tables are complete.";
document.getElementById("totalScore7").innerHTML = "You got " + Math.round(((score7/counter7)*100)) + "%";
if (score7 > 6) {
	document.getElementById("result7").innerHTML = "You passed the quiz!"
}
else {
		document.getElementById("result7").innerHTML = "You did not pass the quiz."
}
	}
}


var questionsArray8 = ["What is 8*1?", "What is 8*2?", "What is 8*3?", "What is 8*4?", "What is 8*5?", "What is 8*6?", "What is 8*7?", "What is 8*8?", "What is 8*9?", "What is 8*10?", "What is 8*11?", "What is 8*12?", ]
var answersArray8 = [8*1, 8*2, 8*3, 8*4, 8*5, 8*6, 8*7, 8*8, 8*9, 8*10, 8*11, 8*12]
var x8 = 0;
var i8 = 0;
var score8 = 0;
var counter8 = 1;
var percentageScore8 = 0;

function checkAnswer8(){
var userAnswer8 = document.getElementById("inputField8").value;
if (userAnswer8 == answersArray8[x8]) {
	document.getElementById("answer8").innerHTML = "Correct!" + " The answer was " + answersArray8[x8] + ".";
	score8++
	document.getElementById("score8").innerHTML = score8 + "/" + questionsArray8.length;
	document.getElementById("question8").innerHTML = ""
	submitButton8.disabled = true;
}
else {
	document.getElementById("answer8").innerHTML = "Wrong..." + " The answer was " + answersArray8[x8] + ".";
		submitButton8.disabled = true;

}
}

function moveToNextQuestion8() {
if (counter8 < 12) {
		x8++;
		i8++;
		document.getElementById("question8").innerHTML = questionsArray8[i8];
		document.getElementById("answer8").innerHTML = "";
		document.getElementById("inputField8").value = "";
		counter8++
		document.getElementById("questionCounter8").innerHTML = counter8;
			submitButton8.disabled = false;
		}
else {
document.getElementById("warningMessage8").innerHTML = "The 8 times tables are complete.";
document.getElementById("totalScore8").innerHTML = "You got " + Math.round(((score8/counter8)*100)) + "%";
if (score8 > 6) {
	document.getElementById("result8").innerHTML = "You passed the quiz!"
}
else {
		document.getElementById("result8").innerHTML = "You did not pass the quiz."
}
	}
}



var questionsArray9 = ["What is 9*1?", "What is 9*2?", "What is 9*3?", "What is 9*4?", "What is 9*5?", "What is 9*6?", "What is 9*7?", "What is 9*8?", "What is 9*9?", "What is 9*10?", "What is 9*11?", "What is 9*12?", ]
var answersArray9 = [9*1, 9*2, 9*3, 9*4, 9*5, 9*6, 9*7, 9*8, 9*9, 9*10, 9*11, 9*12]
var x9 = 0;
var i9 = 0;
var score9 = 0;
var counter9 = 1;
var percentageScore9 = 0;

function checkAnswer9(){
var userAnswer9 = document.getElementById("inputField9").value;
if (userAnswer9 == answersArray9[x9]) {
	document.getElementById("answer9").innerHTML = "Correct!" + " The answer was " + answersArray9[x9] + ".";
	score9++
	document.getElementById("score9").innerHTML = score9 + "/" + questionsArray9.length;
	document.getElementById("question9").innerHTML = ""
	submitButton9.disabled = true;
}
else {
	document.getElementById("answer9").innerHTML = "Wrong..." + " The answer was " + answersArray9[x9] + ".";
		submitButton9.disabled = true;

}
}

function moveToNextQuestion9() {
if (counter9 < 12) {
		x9++;
		i9++;
		document.getElementById("question9").innerHTML = questionsArray9[i9];
		document.getElementById("answer9").innerHTML = "";
		document.getElementById("inputField9").value = "";
		counter9++
		document.getElementById("questionCounter9").innerHTML = counter9;
			submitButton9.disabled = false;
		}
else {
document.getElementById("warningMessage9").innerHTML = "The 9 times tables are complete.";
document.getElementById("totalScore9").innerHTML = "You got " + Math.round(((score9/counter9)*100)) + "%";
if (score9 > 6) {
	document.getElementById("result9").innerHTML = "You passed the quiz!"
}
else {
		document.getElementById("result9").innerHTML = "You did not pass the quiz."
}
	}
}



var questionsArray10 = ["What is 10*1?", "What is 10*2?", "What is 10*3?", "What is 10*4?", "What is 10*5?", "What is 10*6?", "What is 10*7?", "What is 10*8?", "What is 10*9?", "What is 10*10?", "What is 10*11?", "What is 10*12?", ]
var answersArray10 = [10*1, 10*2, 10*3, 10*4, 10*5, 10*6, 10*7, 10*8, 10*9, 10*10, 10*11, 10*12]
var x10 = 0;
var i10 = 0;
var score10 = 0;
var counter10 = 1;
var percentageScore10 = 0;

function checkAnswer10(){
var userAnswer10 = document.getElementById("inputField10").value;
if (userAnswer10 == answersArray10[x10]) {
	document.getElementById("answer10").innerHTML = "Correct!" + " The answer was " + answersArray10[x10] + ".";
	score10++
	document.getElementById("score10").innerHTML = score10 + "/" + questionsArray10.length;
	document.getElementById("question10").innerHTML = ""
	submitButton10.disabled = true;
}
else {
	document.getElementById("answer10").innerHTML = "Wrong..." + " The answer was " + answersArray10[x10] + ".";
		submitButton10.disabled = true;

}
}

function moveToNextQuestion10() {
if (counter10 < 12) {
		x10++;
		i10++;
		document.getElementById("question10").innerHTML = questionsArray10[i10];
		document.getElementById("answer10").innerHTML = "";
		document.getElementById("inputField10").value = "";
		counter10++
		document.getElementById("questionCounter10").innerHTML = counter10;
			submitButton10.disabled = false;
		}
else {
document.getElementById("warningMessage10").innerHTML = "The 10 times tables are complete.";
document.getElementById("totalScore10").innerHTML = "You got " + Math.round(((score10/counter10)*100)) + "%";
if (score10 > 6) {
	document.getElementById("result10").innerHTML = "You passed the quiz!"
}
else {
		document.getElementById("result10").innerHTML = "You did not pass the quiz."
}
	}
}



var questionsArray11 = ["What is 11*1?", "What is 11*2?", "What is 11*3?", "What is 11*4?", "What is 11*5?", "What is 11*6?", "What is 11*7?", "What is 11*8?", "What is 11*9?", "What is 11*10?", "What is 11*11?", "What is 11*12?", ]
var answersArray11 = [11*1, 11*2, 11*3, 11*4, 11*5, 11*6, 11*7, 11*8, 11*9, 11*10, 11*11, 11*12]
var x11 = 0;
var i11 = 0;
var score11 = 0;
var counter11 = 1;
var percentageScore11 = 0;

function checkAnswer11(){
var userAnswer11 = document.getElementById("inputField11").value;
if (userAnswer11 == answersArray11[x11]) {
	document.getElementById("answer11").innerHTML = "Correct!" + " The answer was " + answersArray11[x11] + ".";
	score11++
	document.getElementById("score11").innerHTML = score11 + "/" + questionsArray11.length;
	document.getElementById("question11").innerHTML = ""
	submitButton11.disabled = true;
}
else {
	document.getElementById("answer11").innerHTML = "Wrong..." + " The answer was " + answersArray11[x11] + ".";
		submitButton11.disabled = true;

}
}

function moveToNextQuestion11() {
if (counter11 < 12) {
		x11++;
		i11++;
		document.getElementById("question11").innerHTML = questionsArray11[i11];
		document.getElementById("answer11").innerHTML = "";
		document.getElementById("inputField11").value = "";
		counter11++
		document.getElementById("questionCounter11").innerHTML = counter11;
			submitButton11.disabled = false;
		}
else {
document.getElementById("warningMessage11").innerHTML = "The 11 times tables are complete.";
document.getElementById("totalScore11").innerHTML = "You got " + Math.round(((score11/counter11)*100)) + "%";
if (score11 > 6) {
	document.getElementById("result11").innerHTML = "You passed the quiz!"
}
else {
		document.getElementById("result11").innerHTML = "You did not pass the quiz."
}
	}
}



var questionsArray12 = ["What is 12*1?", "What is 12*2?", "What is 12*3?", "What is 12*4?", "What is 12*5?", "What is 12*6?", "What is 12*7?", "What is 12*8?", "What is 12*9?", "What is 12*10?", "What is 12*11?", "What is 12*12?", ]
var answersArray12 = [12*1, 12*2, 12*3, 12*4, 12*5, 12*6, 12*7, 12*8, 12*9, 12*10, 12*11, 12*12]
var x12 = 0;
var i12 = 0;
var score12 = 0;
var counter12 = 1;
var percentageScore12 = 0;

function checkAnswer12(){
var userAnswer12 = document.getElementById("inputField12").value;
if (userAnswer12 == answersArray12[x12]) {
	document.getElementById("answer12").innerHTML = "Correct!" + " The answer was " + answersArray12[x12] + ".";
	score12++
	document.getElementById("score12").innerHTML = score12 + "/" + questionsArray12.length;
	document.getElementById("question12").innerHTML = ""
	submitButton12.disabled = true;
}
else {
	document.getElementById("answer12").innerHTML = "Wrong..." + " The answer was " + answersArray12[x12] + ".";
		submitButton12.disabled = true;

}
}

function moveToNextQuestion12() {
if (counter12 < 12) {
		x12++;
		i12++;
		document.getElementById("question12").innerHTML = questionsArray12[i12];
		document.getElementById("answer12").innerHTML = "";
		document.getElementById("inputField12").value = "";
		counter12++
		document.getElementById("questionCounter12").innerHTML = counter12;
			submitButton12.disabled = false;
		}
else {
document.getElementById("warningMessage12").innerHTML = "The 12 times tables are complete.";
document.getElementById("totalScore12").innerHTML = "You got " + Math.round(((score12/counter12)*100)) + "%";
if (score12 > 6) {
	document.getElementById("result12").innerHTML = "You passed the quiz!"
}
else {
		document.getElementById("result12").innerHTML = "You did not pass the quiz."
}
	}
}p

