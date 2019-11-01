
function studyActionSwitchboard() {
	switch (input) {
	case "LOOK AROUND":
	case "LA":
	study.lookAroundRoom();
	break; 
	case "DOOR 1":
	case "D1":
	study.goToDoor1();
	break;
	case "INVESTIGATE SAFE":
	case "I SAFE":
	study.investigateSafe();
	break;
	case "TAKE WALLET":
	case "T WALLET":
	study.takeMoney("wallet");
	break;
	default:
	displayWarning(); 
	}
}


let study = {
doors: ["DOOR 1: to the lounge room"],
standardDialogue: "The door has been unlocked. You walk into the study.  The blinds are closed.",
furniture: ["safe"],

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
investigateSafe: function() {
		display.innerHTML = "You search the safe and find the following items: <br>" + this.safe.join(", ");
			user.sublocation = "safe";
	},
takeSafeItem: function(item, property, furniture) {
		removeEmpty()
		if (this[property].includes(item) ) {
		this[property].splice(this[property].indexOf(item), 1);
		user.userInventory.push(item);
		display.innerHTML = "After taking the " + item + " the following items are left on the " + furniture + ": <br>" + this[property].join(", ")
		} else {
		display.innerHTML = "There is no " + item + " left on the "+furniture+".  The following items are currently in the "+furniture+": <br>" + this[property].join(", ");	
		}
	},
takeMoney: function(item) {
			removeEmpty()
		if (this.safe.includes(item)) {
		this.safe.splice(this.safe.indexOf(item), 1);
		user.increaseMoney(20);
		display.innerHTML = "After taking the " + item + " the following items are left in the safe: <br>" + this.safe.join(", ")
		} else {
		display.innerHTML = "There are no " + item + " left in the safe.  The following items are currently in the safe: <br>" + this.safe.join(", ");	
		}
	},
}