//Three Rooms - text adventure experiment

//Declare variables
let input;
let inputConv;
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let display = document.getElementById("display");
let warning = document.getElementById("warning");
let displayLocation = document.getElementById("displayLocation");
let inventory = document.getElementById("inventory");
let wallet = document.getElementById("wallet");
let health = document.getElementById("health");
let gameRunning = false;
let gameWon = false;
let instructions = document.getElementById("instructions");
let btn3 = document.getElementById("btn3");
let finishedTime;

btn1.addEventListener("click", initialise);
btn3.addEventListener("click", showInstructions);

function initialise() {
clearWarning();
inputConv = document.getElementById("input").value;
input = inputConv.toUpperCase();
if (gameRunning == false) {
	if (input == "START" || input == "RESET") {
	gameRunning = true;
	init()	
	clearInput();
	} else {
	warning.innerHTML = "Please type 'start' to begin.";
	clearInput();
	}
} else if (gameRunning == true) {
	testForGeneralActions();
	}
}


//set up main function for taking dialogue and accessing the correct objects
function testForGeneralActions() {
	if (input == "DRINK POISON" || input == "DRINK MILK" || input == "EAT CHEESE" || input == "EAT HAM" || input == "EAT BREAD") {
	generalActionSwitchboard();
	updates();
	} else {
	roomSwitchBoard();
	}
}


function roomSwitchBoard() {
	switch (user.userLocation) {
	case "kitchen":
	kitchenActionSwitchboard();
	break;
	case "lounge room": 
	loungeActionSwitchboard();
	break;
	case "entry room":
	entryActionSwitchboard();
	break; 
	case "study":
	studyActionSwitchboard();
	break; 
	default:
	display.innerHTML = "Something went wrong here.";
	}
updates();
}

function updates() {
	displayLocation.innerHTML = user.userLocation;
	inventory.innerHTML = user.userInventory.join(", ");
	let number; 
	wallet.innerHTML = parseFloat(user.userWallet).toLocaleString('en-US', { style: 'currency', currency: 'USD' }); 
	health.innerHTML = user.health; 
	clearInput();
	user.checkHealth()
	if (user.userInventory.includes("chocolate bar")) {
		display.innerHTML = "...";
		gameWon = true;
		finishedTime = time;
		time = 0 ;
	}
}

function clearInput() {
	document.getElementById("input").value = null;
}

function displayWarning() {
	warning.innerHTML = "Invalid Command";
}

function clearWarning() {
	warning.innerHTML = "";
}

function removeEmpty() {
	if (user.userInventory.includes("empty")) {
		user.userInventory = [];
	}
}

function showInstructions() {
	if (instructions.style.display === "none") {
	instructions.style.display = "block";
	btn3.innerHTML = "Hide Commands";
	} else if (instructions.style.display = "block") {
	instructions.style.display = "none";
	btn3.innerHTML = "Show Commands";
	}
}

//set-up initial dialogue
function init() {
time = 90;
user.userLocation = "kitchen";
setUpTimer();
displayTimer.innerHTML = time;
display.innerHTML = kitchen.standardDialogue;
user.userWallet = 0;
wallet.innerHTML = user.userWallet;
user.userInventory = []
inventory.innerHTML = user.userInventory;
entryRoom.lamp = false;
entryRoom.sideTable = ["vase", "keys"];
kitchen.fridge = ["ham", "cheese", "milk", "vegetables"];
kitchen.cupboard = ["plates", "bowls", "cups", "glasses", "poison"];
kitchen.draws = ["spoon", "knife", "fork"];
kitchen.bench = ["bread", "toaster", "microwave"];
loungeRoom.sofa = ["coins", "mouldy corn chip", "marble"];
loungeRoom.tvCabinet = ["TV", "DVD player", "DVD"];
loungeRoom.computerDesk = ["laptop", "printer", "speakers"];
loungeRoom.bookshelf = ["Bible", "Dictionary", "The Hobbit"];
study.safe = ["wallet"];
addChocBar();
user.health = 100;
health.innerHTML = user.health;
displayLocation.innerHTML = user.getLocation();
}

let addToArray;

function addChocBar() {
let prize = "chocolate bar";
addToArray = Math.floor( Math.random() * 10)
	switch (addToArray) {
	case 0:
	entryRoom.sideTable.push(prize);
	console.log(entryRoom.sideTable)
	break;
	case 1:
	kitchen.fridge.push(prize)
	console.log(kitchen.fridge)
	break;
	case 2:
	kitchen.cupboard.push(prize)
	console.log(kitchen.cupboard)	
	break;
	case 3:
	kitchen.draws.push(prize) 
	console.log(kitchen.draws)
	break;
	case 4:
	kitchen.bench.push(prize) 
	console.log(kitchen.bench)
	break;
	case 5:
	loungeRoom.sofa.push(prize) 
	console.log(loungeRoom.sofa)
	break;
	case 6:
	loungeRoom.tvCabinet.push(prize) 
	console.log(loungeRoom.tvCabinet)
	break;
	case 7:
	loungeRoom.computerDesk.push(prize) 
	console.log(loungeRoom.computerDesk)
	break;
	case 8:
	loungeRoom.bookshelf.push(prize) 
	console.log(loungeRoom.bookshelf)
	break;
	case 9:
	study.safe.push(prize) 
	console.log(study.safe)
	break;
	default:
	console.log("something wrong with the addToChocBar Function")   
	}
}

function welcome() {
display.innerHTML = "<p class='centered'>You have just been accepted into a local thieves gang.  Now you are being trained to case a house. <br>As a test, one of the gang members has hidden a chocolate bar somewhere inside the house. " + "<br>Your job is to try and find the the chocolate bar within " + String(time) + " seconds. </p>" + "<p class='centered'><i>Type 'start' to begin</i></p>" + "<p style='text-align: center'><i>For instructions on the commands, click the below button .</i></p>";
}

welcome();

updateHighScores();

//IDEAS FOR DEVELOPMENT

//add a function random function that puts the chocolate bar in a random location in the house
//add event listener - key press submit
//add autofocus on the input box
//add a safe combination
//add more rooms