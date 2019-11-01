score1 = document.getElementById("score1");
score2 = document.getElementById("score2");
score3 = document.getElementById("score3");
score4 = document.getElementById("score4");
score5 = document.getElementById("score5");
score6 = document.getElementById("score6");
score7 = document.getElementById("score7");
score8 = document.getElementById("score8");
score9 = document.getElementById("score9");
score10 = document.getElementById("score10");

name1 = document.getElementById("name1");
name2 = document.getElementById("name2");
name3 = document.getElementById("name3");
name4 = document.getElementById("name4");
name5 = document.getElementById("name5");
name6 = document.getElementById("name6");
name7 = document.getElementById("name7");
name8 = document.getElementById("name8");
name9 = document.getElementById("name9");
name10 = document.getElementById("name10");

let roundScore;
let roundName;
let highScoreList=[
// {score:2, name:'John'},
];
let highScoreListImport = [];
let retrievedData;
let timeBonus;
let walletBonus;
let inventoryBonus;
let chocolateBonus;

function postHighScores() {
retrievedData = localStorage.getItem("gameHighScores");
highScoreListImport = JSON.parse(retrievedData);
roundName = prompt("Enter your name: ");
roundScore = calculateScore();
	if (highScoreListImport !== null) {
	highScoreListImport.push({score: roundScore, name: roundName});
	} else if (highScoreListImport == null) {
	highScoreListImport = [];
	highScoreListImport.push({score: roundScore, name: roundName});
	}
generateHighScores();
localStorage.setItem("gameHighScores", JSON.stringify(highScoreListImport));
}

function generateHighScores() {
	if (highScoreListImport !== null) {
	highScoreListImport.sort(function(a, b) {return b.score - a.score})
		for (var i = 0; i < highScoreListImport.length; i++) {
		z = i+1;
		x = "score" + z;
		y = "name" + z;
			if (i < 10) {
			document.getElementById(x).innerHTML = highScoreListImport[i].score; 
			document.getElementById(y).innerHTML = highScoreListImport[i].name;
			}
		}
	}
}

function updateHighScores() {
retrievedData = localStorage.getItem("gameHighScores");
highScoreListImport = JSON.parse(retrievedData);

generateHighScores();
}

function calculateScore() {
if (finishedTime > 0 ) {timeBonus = finishedTime *2} else {timeBonus = 0}
if (user.userWallet > 0) {walletBonus = user.userWallet} else {walletBonus = 0};
if (user.userInventory.length > 0) {inventoryBonus = user.userInventory.length * 10} else {inventoryBonus = 0};
if (user.userInventory.includes("chocolate bar")) {chocolateBonus = 50} else {chocolateBonus = 0};
if ( (user.userInventory.includes("poison")) && (user.userInventory.includes("mouldy corn chip"))) {foolishPenalty = -40} else if ((user.userInventory.includes("poison")) && (user.userInventory.includes("mouldy corn chip"))) {foolishPenalty = -20} else {foolishPenalty = 0}
return Math.round(timeBonus + walletBonus + inventoryBonus + chocolateBonus + foolishPenalty);
}