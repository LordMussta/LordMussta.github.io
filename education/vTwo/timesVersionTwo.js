var userScore = 0;
var scorePercentage = ((userScore/(submissions*10))*100)
var submissions = 0;
var answer1 = 7*1;
var answer2 = 7*2;
var answer3 = 7*3;
var answer4 = 7*4;
var answer5 = 7*5;
var answer6 = 7*6;
var answer7 = 7*7;
var answer8 = 7*8;
var answer9 = 7*9;
var answer10 = 7*10;
var answer11 = 7*11;
var answer12 = 7*12;


function firstSum() {
var userAnswer1 = document.getElementById("sum1").value;
if (userAnswer1 == answer1) 
	{
document.getElementById("sum1Output").innerHTML = " Correct!";
userScore += 10;
submissions += 1;
document.getElementById("totalScoreDisplay").innerHTML = userScore;
	}
else 
	{
document.getElementById("sum1Output").innerHTML = "Sorry, but the answer was " + answer1;
submissions +=1;
	}
}


function secondSum() {
var userAnswer2 = document.getElementById("sum2").value;
if (userAnswer2 == answer2) 
	{
document.getElementById("sum2Output").innerHTML = "Correct!";
userScore += 10;
submissions +=1;
document.getElementById("totalScoreDisplay").innerHTML = userScore;
	}
else 
	{
document.getElementById("sum2Output").innerHTML = "Sorry, but the answer was " + answer2;
submissions +=1;
	}
}

function thirdSum() {
var userAnswer3 = document.getElementById("sum3").value;
if (userAnswer3 == answer3) 
	{
document.getElementById("sum3Output").innerHTML = "Correct!";
userScore += 10;
submissions +=1;
document.getElementById("totalScoreDisplay").innerHTML = userScore;
	}
else 
	{
document.getElementById("sum3Output").innerHTML = "Sorry, but the answer was " + answer3;
submissions +=1;
	}
}

function fourthSum() {
var userAnswer4 = document.getElementById("sum4").value;
if (userAnswer4 == answer4) 
	{
document.getElementById("sum4Output").innerHTML = "Correct!";
userScore += 10;
submissions +=1;
document.getElementById("totalScoreDisplay").innerHTML = userScore;
	}
else 
	{
document.getElementById("sum4Output").innerHTML = "Sorry, but the answer was " + answer4;
submissions +=1;
	}
}

function fifthSum() {
var userAnswer5 = document.getElementById("sum5").value;
if (userAnswer5 == answer5) 
	{
document.getElementById("sum5Output").innerHTML = "Correct!";
userScore += 10;
submissions +=1;
document.getElementById("totalScoreDisplay").innerHTML = userScore;
	}
else 
	{
document.getElementById("sum5Output").innerHTML = "Sorry, but the answer was " + answer5;
submissions +=1;
	}
}

function sixthSum() {
var userAnswer6 = document.getElementById("sum6").value;
if (userAnswer6 == answer6) 
	{
document.getElementById("sum6Output").innerHTML = "Correct!";
userScore += 10;
submissions +=1;
document.getElementById("totalScoreDisplay").innerHTML = userScore;
	}
else 
	{
document.getElementById("sum6Output").innerHTML = "Sorry, but the answer was " + answer6;
submissions +=1;
	}
}

function seventhSum() {
var userAnswer7 = document.getElementById("sum7").value;
if (userAnswer7 == answer7) 
	{
document.getElementById("sum7Output").innerHTML = "Correct!";
userScore += 10;
submissions +=1;
document.getElementById("totalScoreDisplay").innerHTML = userScore;
	}
else 
	{
document.getElementById("sum7Output").innerHTML = "Sorry, but the answer was " + answer7;
submissions +=1;
	}
}

function eigthSum() {
var userAnswer8 = document.getElementById("sum8").value;
if (userAnswer8 == answer8) 
	{
document.getElementById("sum8Output").innerHTML = "Correct!";
userScore += 10;
submissions +=1;
document.getElementById("totalScoreDisplay").innerHTML = userScore;
	}
else 
	{
document.getElementById("sum8Output").innerHTML = "Sorry, but the answer was " + answer8;
submissions +=1;
	}
}

function ninthSum() {
var userAnswer9 = document.getElementById("sum9").value;
if (userAnswer9 == answer9) 
	{
document.getElementById("sum9Output").innerHTML = "Correct!";
userScore += 10;
submissions +=1;
document.getElementById("totalScoreDisplay").innerHTML = userScore;
	}
else 
	{
document.getElementById("sum9Output").innerHTML = "Sorry, but the answer was " + answer9;
submissions +=1;
	}
}


function tenthSum() {
var userAnswer10 = document.getElementById("sum10").value;
if (userAnswer10 == answer10) 
	{
document.getElementById("sum10Output").innerHTML = "Correct!";
userScore += 10;
submissions +=1;
document.getElementById("totalScoreDisplay").innerHTML = userScore;
	}
else 
	{
document.getElementById("sum10Output").innerHTML = "Sorry, but the answer was " + answer10;
submissions +=1;
	}
}


function eleventhSum() {
var userAnswer11 = document.getElementById("sum11").value;
if (userAnswer11 == answer11) 
	{
document.getElementById("sum11Output").innerHTML = "Correct!";
userScore += 10;
submissions +=1;
document.getElementById("totalScoreDisplay").innerHTML = userScore;
	}
else 
	{
document.getElementById("sum11Output").innerHTML = "Sorry, but the answer was " + answer11;
submissions +=1;
	}
}

function twelfthSum() {
var userAnswer12 = document.getElementById("sum12").value;
if (userAnswer12 == answer12) 
	{
document.getElementById("sum12Output").innerHTML = "Correct!";
userScore += 10;
document.getElementById("totalScoreDisplay").innerHTML = userScore;
submissions +=1;
	}
else 
	{
document.getElementById("sum12Output").innerHTML = "Sorry, but the answer was " + answer12;
submissions +=1;
	}
}

