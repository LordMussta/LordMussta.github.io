//**************************
//TIC TAC TOE GAME
//**************************

//Declare some global variables
let player;
let icon;
let gameboard;
let gameRunning;
let playerOneScore = 0;
let playerTwoScore = 0;



function init() {
gameRunning = true; 
player = 1;
$("#firstCol").removeClass("inactive")
$("#firstCol").addClass("active")
$("#thirdCol").removeClass("active")
$("#thirdCol").addClass("inactive")
gameboard = [null,null,null,null,null,null,null,null,null]
updateGameboard()
updateScores()
}

function updateScores() {
$("#oneScore").html(playerOneScore)
$("#twoScore").html(playerTwoScore)
}

//Toggle Players after a move has been made
function togglePlayers() {
	$("#firstCol").toggleClass("active").toggleClass("inactive");
	$("#thirdCol").toggleClass("active").toggleClass("inactive");
	if (player == 1) {
		player = 2
	} else if (player == 2) {
		player = 1
	}
}

//Set up the next round button
$("#nextBtn").on("click", nextRound)
function nextRound() {
	init()
}

//Set up the Clear Rounds Button
clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", resetAction);
function resetAction() {
playerOneScore = 0;
playerTwoScore = 0;
	init()
}

//Set Up Event Listeners
$("#A1").on("click", function(){gameLogic(0, player)});
$("#A2").on("click", function(){gameLogic(1, player)});
$("#A3").on("click", function(){gameLogic(2, player)});
$("#B1").on("click", function(){gameLogic(3, player)});
$("#B2").on("click", function(){gameLogic(4, player)});
$("#B3").on("click", function(){gameLogic(5, player)});
$("#C1").on("click", function(){gameLogic(6, player)});
$("#C2").on("click", function(){gameLogic(7, player)});
$("#C3").on("click", function(){gameLogic(8, player)});


function gameLogic(arrayPosition, playerNo) {
	if (gameRunning == true) {
		icon = determineIcon()
		if (gameboard[arrayPosition] == null) {
		gameboard[arrayPosition] = icon;
		updateGameboard()
		//checkWinA1()
		checkForWinner(arrayPosition, playerNo)
		togglePlayers()	
		}
	}
}

function determineIcon() {
	if (player == 1) {
	return "X";
	} else if (player == 2) {
	return "O";
	}
}

//Update Board after each turn
function updateGameboard() {
$("#A1").html(gameboard[0]);
$("#A2").html(gameboard[1]);
$("#A3").html(gameboard[2]);
$("#B1").html(gameboard[3]);
$("#B2").html(gameboard[4]);
$("#B3").html(gameboard[5]);
$("#C1").html(gameboard[6]);
$("#C2").html(gameboard[7]);
$("#C3").html(gameboard[8]);
}

function checkForWinner(squarePressed, playerNo) {
icon = determineIcon();
	if (gameboard[0] == icon && gameboard[1] == icon && gameboard[2] == icon) {
	winner(playerNo);
	} 
	if (gameboard[0] == icon && gameboard[3] == icon && gameboard[6] == icon) {
	winner(playerNo);
	}
	if (gameboard[0] == icon && gameboard[4] == icon && gameboard[8] == icon) {
	winner(playerNo);
	} 
	if (gameboard[1] == icon && gameboard[4] == icon && gameboard[7] == icon) {
	winner(playerNo);
	}
	if (gameboard[2] == icon && gameboard[4] == icon && gameboard[6] == icon) {
	winner(playerNo);
	}  
	if (gameboard[2] == icon && gameboard[5] == icon && gameboard[8] == icon) {
	winner(playerNo);
	} 
	if (gameboard[3] == icon && gameboard[4] == icon && gameboard[5] == icon) {
	winner(playerNo);
	} 
	if (gameboard[6] == icon && gameboard[7] == icon && gameboard[8] == icon) {
	winner(playerNo);
	}
updateScores()
}

function winner(player) {
setTimeout(function() {alertify.alert("Result:", "Player " + player + " Wins!")}, 250)
if (player == 1) {
	playerOneScore++
} else if (player == 2) {
	playerTwoScore++
}
gameRunning = false;
}

init()