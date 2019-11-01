//javascript animation

let time;
let counter;
let color  = ["red", "green", "black", "blue", "orange", "pink", "yellow", "grey", "red"];
let color2  = ["red", "green", "black", "blue", "orange", "pink", "yellow", "grey", "brown"];
let displayTimer = document.getElementById("displayTimer");
let body = document.getElementById("body");
let score;
let userName;

function displayResults() { 
return "<br>Time bonus: " + timeBonus + "<br>Inventory Bonus: " + inventoryBonus + "<br>Wallet Bonus: " + walletBonus + "<br>Chocolate Bar Bonus:" + chocolateBonus + "<br>Dangerous Goods Penalty: " + foolishPenalty + "<br><b>Total Score: " + roundScore + "</b>";
}

function setUpTimer() {	
	secondInterval = setInterval(runningTimer, 1000);
	counter = 0;
	body.style.backgroundColor = "darkgray";
}

function runningTimer() {
if (time >= 0) {
	displayTimer.innerHTML = time;
	time--;
	} else {
	clearInterval(secondInterval)
	gameRunning = false;
		if (gameWon == true) {
		postHighScores();
		display.innerHTML = "<h1>YOU WIN!!!</h1>" + displayResults();
		warning.innerHTML = "Type 'reset' to start again.";
		} else if (gameWon == false) {
		postHighScores();
		display.innerHTML = "<h1>GAME OVER!!!</h1>" + displayResults();
		runInterval()	
		}
	}
}

function runInterval() {
	firstInterval = setInterval(animation, 100);	
}

function animation() {
//let i = 0;
	if (counter > color.length) {
		clearInterval(firstInterval);
		setTimeout(function() {body.style.color = "black"}, 800)
	} else {
		body.style.backgroundColor = color[counter];
		body.style.color = color2[counter+1];
		counter++;
	}
}
