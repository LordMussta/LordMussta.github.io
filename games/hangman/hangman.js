//Hangman game - Javascript

randomWords = ["HORSE", "GIRAFFE", "BUFFALO", "TURKEY", "EAGLE", "RHINO", "PANTHER", "TIGER", "HIPPO", "MONKEY", "ELEPHANT", "SLOTH", "GORILLA", "RABBIT", "TURTLE", "KOALA", "KITTEN", "KANGAROO"];
var userInput = document.getElementById("input1");
var display2 = document.getElementById("display2");
var insult = document.getElementById("insult");
var display = document.getElementById("display");
var warningMessage = "Please enter a letter";
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
let donkey = ["_ _ _ _ _ _", "D _ _ _ _ _", "D O _ _ _ _", "D O N _ _ _", "D O N K _ _", "D O N K E _", "D O N K E Y"]
var chosen;
let y = 0;
var checkArray = [];
var displayArray = []
var usedLetters = [];
var userValueCap, userValue;

//The below function selects a random word from the array and then populates a set of underscores for the missing letters. 
document.getElementById("btn2").addEventListener("click", function() {
init();
var selection = Math.floor(Math.random()* randomWords.length);
chosen = randomWords[selection];
//console.log(chosen);
for (var i = 0; i < chosen.length; i++) {
	displayArray.push("_")
}
var show = " _ ";
checkLetters();
display.innerHTML = "<h2>" + displayArray.join(" ") + "</h2>";
}) 

//This button should take the player's input - which should be a single letter - and check to see if it is one of the letters in the chosen word
document.getElementById("btn1").addEventListener("click", function() {
	warning.innerHTML= "";
	capitalise();
	let letters = /^[A-Za-z]+$/;
	if (userValue.match(letters)) {
		usedLetters.push(userValue);
		display2.innerHTML = usedLetters;
		if (chosen.includes(userValue)) {
		//console.log("bingo!")
		for (var i = 0; i < checkArray.length; i++) {
			if (checkArray[i] === userValue) {
				displayArray[i] = userValue;
				if (displayArray.join("") === checkArray.join("")) {
					btn1.disabled = true;
					warning.innerHTML = "You won the game!";
				}
			} else {

			}
		}
		display.innerHTML = "<h2>" + displayArray.join(" ") + "</h2>";
		} else {
		y++;
		insult.innerHTML = "<h2>" + donkey[y] + "</h2>";
		//console.log("bong!")
			if (y >= 6) {
			btn1.disabled = true;
			warning.innerHTML = "You lost the game...The word was " + chosen;
			} else {
		}
		}		
	} else {
		warning.innerHTML = warningMessage;
	}
	userInput.value = "";
}) 

function init() {
insult.innerHTML = "<h2>" + donkey[0] + "</h2>";
warning.innerHTML = "";
btn1.disabled = false;
btn2.disabled = false;
y=0;
display.innerHTML = "";
display2.innerHTML = "";
displayArray = [];
checkArray = [];
usedLetters = [];
}


//create a function to check if the letter chosen is in the chosen word and to replace the image with the blanks, plus all of the letters
function checkLetters() {
	var wordLength = chosen.length;
	//console.log("the length of the chosen word is " + wordLength);
	for (var i = 0; i < chosen.length; i++) {
		checkArray.push(chosen[i])
		//console.log(checkArray)	
	}	
}

function opening() {
	btn1.disabled = true;
}

opening();

function capitalise() {
	userValueCap = userInput.value
	userValue = userValueCap.toUpperCase();
}