

function kitchenActionSwitchboard() {
	switch (input) {
		case "LOOK AROUND":
		case "LA":
		kitchen.lookAroundRoom();
		break; 
		case "INVESTIGATE FRIDGE":
		case "I FRIDGE":
		kitchen.investigateFridge();
		break; 
		case "INVESTIGATE CUPBOARD":
		case "I CUPBOARD":
		kitchen.investigateCupboard();
		break; 
		case "INVESTIGATE DRAWS":
		case "I DRAWS":
		kitchen.investigateDraws();
		break;
		case "INVESTIGATE BENCH":
		case "I BENCH":
		kitchen.investigateBench();
		break;
		case "DOOR 1":
		case "D1":
		kitchen.goToDoor1();
		break;
		case "DOOR 2":
		case "D2":
		kitchen.goToDoor2();
		break; 
		case "TAKE HAM":
		case "T HAM":
			if (user.sublocation == "fridge") {
			kitchen.takeFridgeItem("ham");				
			} else {
			warning.innerHTML = "You are too far from the fridge.";	
			}
		break; 
		case "TAKE CHEESE":
		case "T CHEESE":
			if (user.sublocation == "fridge") {
			kitchen.takeFridgeItem("cheese");
			} else {
			warning.innerHTML = "You are too far from the fridge."
			}
		break; 
		case "TAKE VEGETABLES":
		case "T VEGETABLES":
			if (user.sublocation == "fridge") {
		kitchen.takeFridgeItem("vegetables");
			} else {
			warning.innerHTML = "You are too far from the fridge."
			}
		break;  
		case "TAKE MILK":
		case "T MILK": 
			if (user.sublocation == "fridge") {
			kitchen.takeFridgeItem("milk");
			} else {
			warning.innerHTML = "You are too far from the fridge."
			}		
		break;
		case "TAKE PLATES":
		case "T PLATES":
			if (user.sublocation == "cupboard") {
			kitchen.takeCupboardItem("plates")			
			} else {
			warning.innerHTML = "You are too far from the cupboard."	
			}
		break; 
		case "TAKE BOWLS":
		case "T BOWLS":
			if (user.sublocation == "cupboard") {
			kitchen.takeCupboardItem("bowls")			
			} else {
			warning.innerHTML = "You are too far from the cupboard."	
			}
		break; 
		case "TAKE CUPS":
		case "T CUPS":
			if (user.sublocation == "cupboard") {
			kitchen.takeCupboardItem("cups")			
			} else {
			warning.innerHTML = "You are too far from the cupboard."	
			}
			break; 
		case "TAKE GLASSES":
		case "T GLASSES":
			if (user.sublocation == "cupboard") {
			kitchen.takeCupboardItem("glasses")			
			} else {
			warning.innerHTML = "You are too far from the cupboard."	
			}
		break; 
		case "TAKE POISON":
		case "T POISON":
			if (user.sublocation == "cupboard") {
			kitchen.takeCupboardItem("poison")			
			} else {
			warning.innerHTML = "You are too far from the cupboard."	
			}
		break; 
		case "TAKE SPOON":
		case "T SPOON":
			if (user.sublocation == "draws") {
			kitchen.takeDrawsItem("spoon")			
			} else {
			warning.innerHTML = "You are too far from the draws.";
			}
		break; 
		case "TAKE KNIFE":
		case "T KNIFE":
			if (user.sublocation == "draws") {
			kitchen.takeDrawsItem("knife")			
			} else {
			warning.innerHTML = "You are too far from the draws.";
			}
		break; 
		case "TAKE FORK":
		case "T FORK":
			if (user.sublocation == "draws") {
			kitchen.takeDrawsItem("fork")			
			} else {
			warning.innerHTML = "You are too far from the draws.";
			}
		break; 
		case "TAKE BREAD":
		case "T BREAD": 
		if (user.sublocation == "bench") {
		kitchen.takeBenchItem("bread", "bench", "bench");
		} else {
		warning.innerHTML = "You are too far from the bench."
		}
		break;
		case "TAKE TOASTER":
		case "T TOASTER": 
		if (user.sublocation == "bench") {
		kitchen.takeBenchItem("toaster", "bench", "bench");
		} else {
		warning.innerHTML = "You are too far from the bench."
		}
		break;
		case "TAKE MICROWAVE":
		case "T MICROWAVE": 
		if (user.sublocation == "bench") {
		kitchen.takeBenchItem("microwave", "bench", "bench");
		} else {
		warning.innerHTML = "You are too far from the bench."
		}
		break;
		case "TAKE CHOCOLATE BAR":
		case "T CHOCOLATE BAR":
		if (user.sublocation == "bench") {
		kitchen.takeBenchItem("chocolate bar", "bench", "bench");
		} else {
		warning.innerHTML = "You are too far from the bench."
		}
		break; 
		default:
		displayWarning(); 
	}
}


//Kitchen Object
let kitchen = {
standardDialogue: "You are in the kitchen. All is quiet.",
furniture: ["fridge", "cupboard", "draws", "bench"],
fridge: ["ham", "cheese", "milk", "vegetables"],
cupboard: ["plates", "bowls", "cups", "glasses", "poison"],
draws: ["spoon", "knife", "fork"],
bench: ["bread", "toaster", "microwave"],
doors: ["DOOR 1 to the lounge room", "DOOR 2 to the entry room"],
lookAroundRoom: function() {
	display.innerHTML = "You look around the room and see the following things: <br>" + this.furniture.join(", ") + ".<p> You also see the following doors: <br>" + this.doors.join("<br>") + "</p>" ;
		user.sublocation = "";
	},
goToDoor1: function() {
	user.userLocation = "lounge room";
	displayLocation.innerHTML = user.userLocation;
	display.innerHTML = loungeRoom.standardDialogue;
	user.sublocation = "";
	},
goToDoor2: function() {
	user.userLocation = "entry room";
	displayLocation.innerHTML = user.userLocation;
	display.innerHTML = entryRoom.standardDialogue;
	user.sublocation = "";
	},
takeCupboardItem: function(item) {
		removeEmpty()
		if (this.cupboard.includes(item)) {
		this.cupboard.splice(this.cupboard.indexOf(item), 1);
		user.userInventory.push(item);
		display.innerHTML = "After taking the " + item + " the following items are left in the cupboard: <br> " + this.cupboard.join(", ")
		} else {
		display.innerHTML = "There is no " + item + " left in the cupboard.  The following items are currently in the cupboard: <br>" + this.cupboard.join(", ");	
		}
	},
takeBenchItem: function(item, property, furniture) {
		removeEmpty()
		if (this[property].includes(item) ) {
		this[property].splice(this[property].indexOf(item), 1);
		user.userInventory.push(item);
		display.innerHTML = "After taking the " + item + " the following items are left on the " + furniture + ": <br>" + this[property].join(", ")
		} else {
		display.innerHTML = "There is no " + item + " left on the "+furniture+".  The following items are currently in the "+furniture+": <br>" + this[property].join(", ");	
		}
	},
takeDrawsItem: function(item) {
		removeEmpty()
		if (this.draws.includes(item)) {
		this.draws.splice(this.draws.indexOf(item), 1);
		user.userInventory.push(item);
		display.innerHTML = "After taking the " + item + " the following items are left in the draws: <br>" + this.draws.join(", ")
		} else {
		display.innerHTML = "There is no " + item + " left in the draws.  The following items are currently in the draws: <br>" + this.draws.join(", ");	
		}
	},
takeFridgeItem: function(food) {
		removeEmpty()
		if (this.fridge.includes(food)) {
		this.fridge.splice(this.fridge.indexOf(food), 1);
		user.userInventory.push(food);
		display.innerHTML = "After taking the " + food + " the following items are left in the fridge: <br>" + this.fridge.join(", ")
		} else {
		display.innerHTML = "There is no " + food + " left in the fridge.  The following items are currently in the fridge: <br>" + this.fridge.join(", ");	
		}
	},
investigateFridge: function() {
		display.innerHTML = "You look in the fridge and find the following items: <br>" + this.fridge.join(", ");
		user.sublocation = "fridge";
	},
investigateCupboard: function() {
		display.innerHTML = "You look in the cupboard and find the following items: <br>" + this.cupboard.join(", ");
			user.sublocation = "cupboard";
	},
investigateDraws: function() {
		display.innerHTML = "You look in the draws and find the following items: <br>" + this.draws.join(", ");
			user.sublocation = "draws";
	},
investigateBench: function() {
		display.innerHTML = "You look at the bench and find the following items: <br>" + this.bench.join(", ");
			user.sublocation = "bench";
	},
}
