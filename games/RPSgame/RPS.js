//****************************
//Rock, Paper, Scissors Game
//****************************


//declare the variables

var userResult = document.getElementById('userResult');
var computerResult = document.getElementById('computerResult');
var winner = document.getElementById('winner');
var userDisplayScore = document.getElementById('user');
var computerDisplayScore = document.getElementById('computer');
var userChoice, winner, randNumber, computerScore = 0, userScore = 0;
var win = "<h3>You won!</h3>";
var lose = "<h3 style='color: red'>You lost!</h3>";
var tie = "<h3 style='color: green'>It was a tie!</h3>";
var error = "Something went wrong";
var rockDisplay = document.getElementById("rockImage")
var paperDisplay = document.getElementById("paperImage")
var scissorsDisplay = document.getElementById("scissorsImage")
var compRockDisplay = document.getElementById("computerRockImage")
var compPaperDisplay = document.getElementById("computerPaperImage")
var compScissorsDisplay = document.getElementById("computerScissorsImage")
var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");
var openInstructions = "Instructions: First player to 3 points wins."
var instruct = document.getElementById("instructions")
var gameWinner = "<h3 style='color: blue;'>You were the first to get 3 points!  You are the winner!</h3>";
var gameLoser = "<h3 style='color: red;'>The computer was the first to get 3 points...You lost the game...</h3>";
//var boom = new Audio ();
//boom.src = "http://maceyspythonsandbox.dx.am/sounds/boom.wav";

function reset() {
userScore = 0;
computerScore = 0
displayScores();
rockBtn.disabled = false;
paperBtn.disabled = false;
scissorsBtn.disabled = false;
instruct.innerHTML = openInstructions;
winner.innerHTML = null;
setCompToNone();
setToNone();

}

function checkStatus(){
	if (userScore == 3) {
	rockBtn.disabled = true;
	paperBtn.disabled = true;
	scissorsBtn.disabled = true;
	instruct.innerHTML = gameWinner;
	} else if (computerScore == 3) {
	rockBtn.disabled = true;
	paperBtn.disabled = true;
	scissorsBtn.disabled = true;
	instruct.innerHTML = gameLoser; 
	} else {
	}
}

//****************************
//set the controls for the buttons
//****************************

function pressedRock() {
	changeRockImage();
	randomComputerGuess();
	switch (randNumber) {
		case 0:
		winner.innerHTML = tie;
		break;
		case 1:
		winner.innerHTML = lose;
		computerScore++;
		break;
		case 2:
		winner.innerHTML = win;
		userScore++;
		break;
		default:
		winner.innerHTML = error;
	}
	displayScores();
	checkStatus();
}

function pressedPaper() {
	changePaperImage();
	randomComputerGuess()
		switch (randNumber) {
		case 0:
		winner.innerHTML = win;
		userScore++;
		break;
		case 1:
		winner.innerHTML = tie;
		break;
		case 2:
		winner.innerHTML = lose;
		computerScore++;
		break;
		default:
		winner.innerHTML = error;
	}
	displayScores();
	checkStatus();
}

function pressedScissors() {
	changeScissorsImage();
	randomComputerGuess()
		switch (randNumber) {
		case 0:
		winner.innerHTML = lose;
		computerScore++;
		break;
		case 1:
		winner.innerHTML = win;
		userScore++;
		break;
		case 2:
		winner.innerHTML = tie;
		break;
		default:
		winner.innerHTML = error;
	}
	displayScores();
	checkStatus();
}


function displayScores() {
	userDisplayScore.innerHTML = "User <br>" + userScore;
	computerDisplayScore.innerHTML = "Computer <br>" + computerScore;
}


//***************************************
//Generate Random Choice for the Computer 
//**************************************


function randomComputerGuess() {
	randNumber = Math.floor(Math.random() * 3)
	if (randNumber == 0) {
		computerChangeRockImage();
	} else if (randNumber == 1) {
		computerChangePaperImage();
	} else {
		computerChangeScissorsImage();
	}
}

//********************************
//changing the images for the user
//********************************

function changePaperImage() {
	if (paperDisplay.style.display = "none") {
	paperDisplay.style.display = "block";
	r();
	s();
	} else {
	setToNone();
	}
}

function changeRockImage() {
	if (rockDisplay.style.display = "none") {
	rockDisplay.style.display = "block";
	p();
	s();
	} else {
	setToNone();	
	}
}

function changeScissorsImage() {
	if (scissorsDisplay.style.display = "none") {
	scissorsDisplay.style.display = "block";
	r();
	p();
	} else {
	setToNone();
	}
}

function setToNone() {
	scissorsDisplay.style.display = "none";	
	paperDisplay.style.display = "none";	
	rockDisplay.style.display = "none";	
}

function p() {
	paperDisplay.style.display = "none";
}

function r() {
	rockDisplay.style.display = "none";	
}

function s() {
	scissorsDisplay.style.display = "none";	
}

//***************************
//changing the images for the computer
//***************************

function computerChangePaperImage() {
	if (compPaperDisplay.style.display = "none") {
	compPaperDisplay.style.display = "block";
	cR();
	cS();
	} else {
	setCompToNone();
	}
}

function computerChangeRockImage() {
	if (compRockDisplay.style.display = "none") {
	compRockDisplay.style.display = "block";
	cP();
	cS();
	} else {
	setCompToNone();
	}
}

function computerChangeScissorsImage() {
	if (compScissorsDisplay.style.display = "none") {
	compScissorsDisplay.style.display = "block";
	cP();
	cR();
	} else {
	setCompToNone();
	}
}

function setCompToNone() {
	compScissorsDisplay.style.display = "none";	
	compPaperDisplay.style.display = "none";	
	compRockDisplay.style.display = "none";		
}

function cR() {
	compRockDisplay.style.display = "none";	
}

function cP() {
	compPaperDisplay.style.display = "none";
}

function cS() {
	compScissorsDisplay.style.display = "none";	
}

function soundEffect() {
var x = document.getElementById("coin");
x.play();
}

reset();

