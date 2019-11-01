
function loungeActionSwitchboard() {
	switch (input) {
	case "LOOK AROUND":
	case "LA":
	loungeRoom.lookAroundRoom();
	break; 
	case "DOOR 1":
	case "D1":
	loungeRoom.goToDoor1();
	break;
	case "DOOR 2":
	case "D2":
	loungeRoom.goToDoor2();
	break;
	case "INVESTIGATE BOOKSHELF":
	case "I BOOKSHELF":
	loungeRoom.investigateBookshelf();
	break;
	case "INVESTIGATE SOFA":
	case "I SOFA":
	loungeRoom.investigateSofa();
	break;
	case "INVESTIGATE COMPUTER DESK":
	case "I COMPUTER DESK":
	loungeRoom.investigateComputerDesk();
	break;
	case "INVESTIGATE TV CABINET":
	case "I TV CABINET":
	loungeRoom.investigateTvCabinet();
	break; 
	case "READ BIBLE":
	case "R BIBLE":
	loungeRoom.readItem("Bible");
	break; 
	case "READ THE HOBBIT":
	case "R THE HOBBIT":
	loungeRoom.readItem("The Hobbit");
	break; 
	case "READ DICTIONARY":
	case "R DICTIONARY":
	loungeRoom.readItem("Dictionary");
	break; 
	case "TAKE MOULDY CORN CHIP":
	case "T MOULDY CORN CHIP":
		if (user.sublocation == "sofa") {
		loungeRoom.takeSofaItem("mouldy corn chip");
		} else {
		warning.innerHTML = "You are too far from the sofa."
		}
	break; 
	case "TAKE MARBLE":
	case "T MARBLE":
		if (user.sublocation == "sofa") {
		loungeRoom.takeSofaItem("marble");
		} else {
		warning.innerHTML = "You are too far from the sofa."
		}
	break; 
	case "TAKE COINS":
	case "T COINS":
		if (user.sublocation == "sofa") {
		loungeRoom.takeMoney("coins");
		} else {
		warning.innerHTML = "You are too far from the sofa."
		}
	break; 
	case "TAKE TV":
	case "T TV": 
		if (user.sublocation == "tv cabinet") {
		loungeRoom.takeTvCabinetItem("TV", "tvCabinet","TV cabinet");
		} else {
		warning.innerHTML = "You are too far from the TV cabinet."
		}
	break; 
	case "TAKE DVD PLAYER":
	case "T DVD PLAYER": 
		if (user.sublocation == "tv cabinet") {
		loungeRoom.takeTvCabinetItem("DVD player", "tvCabinet","TV cabinet");
		} else {
		warning.innerHTML = "You are too far from the TV cabinet."
		}
	break; 
	case "TAKE DVD":
	case "T DVD": 
		if (user.sublocation == "tv cabinet") {
		loungeRoom.takeTvCabinetItem("DVD", "tvCabinet","TV cabinet");
		} else {
		warning.innerHTML = "You are too far from the TV cabinet."
		}
	break; 
	case "TAKE LAPTOP":
	case "T LAPTOP": 
		if (user.sublocation == "computer desk") {
		loungeRoom.takeComputerDeskItem("laptop", "computerDesk","computer desk");
		} else {
		warning.innerHTML = "You are too far from the computer desk."
		}
	break; 
	case "TAKE PRINTER":
	case "T PRINTER": 
		if (user.sublocation == "computer desk") {
		loungeRoom.takeComputerDeskItem("printer", "computerDesk","computer desk");
		} else {
		warning.innerHTML = "You are too far from the computer desk."
		}
	break; 
	case "TAKE SPEAKERS":
	case "T SPEAKERS": 
		if (user.sublocation == "computer desk") {
		loungeRoom.takeComputerDeskItem("speakers", "computerDesk","computer desk");
		} else {
		warning.innerHTML = "You are too far from the computer desk."
		}
	break; 
	case "TAKE BIBLE":
	case "T SPEAKERS": 
		if (user.sublocation == "bookshelf") {
		loungeRoom.takeBookshelfItem("Bible", "bookshelf","bookshelf");
		} else {
		warning.innerHTML = "You are too far from the bookshelf."
		}
	break; 
	case "TAKE DICTIONARY":
	case "T DICTIONARY": 
		if (user.sublocation == "bookshelf") {
		loungeRoom.takeBookshelfItem("Dictionary", "bookshelf","bookshelf");
		} else {
		warning.innerHTML = "You are too far from the bookshelf."
		}
	break; 
	case "TAKE THE HOBBIT":
	case "T THE HOBBIT": 
		if (user.sublocation == "bookshelf") {
		loungeRoom.takeBookshelfItem("The Hobbit", "bookshelf","bookshelf");
		} else {
		warning.innerHTML = "You are too far from the bookshelf."
		}
	break; 
	default:
	displayWarning(); 
	}
}

//Lounge Room Object
let loungeRoom = {
doors: ["DOOR 1: to the kitchen", "DOOR 2: to the study"],
standardDialogue: "You walk into the lounge room.  The TV is on.",
furniture: ["sofa", "TV cabinet", "computer desk", "bookshelf"],
sofa: ["coins", "mouldy corn chip", "marble"],
tvCabinet: ["TV", "DVD player", "DVD"],
computerDesk: ["laptop", "printer", "speakers"],
bookshelf: ["Bible", "Dictionary", "The Hobbit"],
lookAroundRoom: function() {
	display.innerHTML = "You look around the room and see the following things: <br>" + this.furniture.join(", ") + ".<p> You also see the following doors: <br>" + this.doors.join("<br>") + "</p>" ;
		user.sublocation = "";
	},
goToDoor1: function() {
	user.userLocation = "kitchen";
	displayLocation.innerHTML = user.userLocation;
	display.innerHTML = kitchen.standardDialogue;
	user.sublocation = "";
	}, 
goToDoor2: function() {
if (user.userInventory.includes("keys")) {
	user.userLocation = "study";
	display.innerHTML = study.standardDialogue;	
	displayLocation.innerHTML = user.userLocation;
	user.sublocation = "";
	} else {
	user.userLocation = "lounge room";
	displayLocation.innerHTML = user.userLocation;
	display.innerHTML = "The door is locked. You remain in the lounge room";
	user.sublocation = "";
	}
	},
investigateSofa: function() {
		display.innerHTML = "You search the sofa and find the following items: <br>" + this.sofa.join(", ");
			user.sublocation = "sofa";
	},
investigateTvCabinet: function() {
		display.innerHTML = "You search the TV cabinet and find the following items: <br>" + this.tvCabinet.join(", ");
			user.sublocation = "tv cabinet";
	},
investigateComputerDesk: function() {
		display.innerHTML = "You search the computer desk and find the following items: <br>" + this.computerDesk.join(", ");
			user.sublocation = "computer desk";
	},
investigateBookshelf: function() {
		display.innerHTML = "You search the bookshelf and find the following items: <br>" + this.bookshelf.join(", ");
			user.sublocation = "bookshelf";
	},
takeSofaItem: function(item) {
		removeEmpty()
		if (this.sofa.includes(item)) {
		this.sofa.splice(this.sofa.indexOf(item), 1);
		user.userInventory.push(item);
		display.innerHTML = "After taking the " + item + " the following items are left in the sofa: <br>" + this.sofa.join(", ")
		} else {
		display.innerHTML = "There is no " + item + " left in the sofa.  The following items are currently in the sofa: <br>" + this.sofa.join(", ");	
		}
	},
takeMoney: function(item) {
			removeEmpty()
		if (this.sofa.includes(item)) {
		this.sofa.splice(this.sofa.indexOf(item), 1);
		user.increaseMoney(2.20);
		display.innerHTML = "After taking the " + item + " the following items are left in the sofa: <br>" + this.sofa.join(", ")
		} else {
		display.innerHTML = "There are no " + item + " left in the sofa.  The following items are currently in the sofa: <br>" + this.sofa.join(", ");	
		}
	},
takeTvCabinetItem: function(item, property, furniture) {
		removeEmpty()
		if (this[property].includes(item) ) {
		this[property].splice(this[property].indexOf(item), 1);
		user.userInventory.push(item);
		display.innerHTML = "After taking the " + item + " the following items are left on the " + furniture + ": <br>" + this[property].join(", ")
		} else {
		display.innerHTML = "There is no " + item + " left on the "+furniture+".  The following items are currently in the "+furniture+": <br>" + this[property].join(", ");	
		}
	},
takeComputerDeskItem: function(item, property, furniture) {
		removeEmpty()
		if (this[property].includes(item) ) {
		this[property].splice(this[property].indexOf(item), 1);
		user.userInventory.push(item);
		display.innerHTML = "After taking the " + item + " the following items are left on the " + furniture + ": <br>" + this[property].join(", ")
		} else {
		display.innerHTML = "There is no " + item + " left on the "+furniture+".  The following items are currently in the "+furniture+": <br>" + this[property].join(", ");	
		}
	},
takeBookshelfItem: function(item, property, furniture) {
		removeEmpty()
		if (this[property].includes(item) ) {
		this[property].splice(this[property].indexOf(item), 1);
		user.userInventory.push(item);
		display.innerHTML = "After taking the " + item + " the following items are left on the " + furniture + ": <br>" + this[property].join(", ")
		} else {
		display.innerHTML = "There is no " + item + " left on the "+furniture+".  The following items are currently in the "+furniture+": <br>" + this[property].join(", ");	
		}
	},
readItem: function(book) {
	removeEmpty();
	switch (book) {
	case "Bible":
		if (user.userInventory.includes("Bible")) {
		display.innerHTML = "You start reading the " + book + " . It reads <i>'Do not steal, Do not kill...'</i>";
		} else {
		warning.innerHTML = "You do not have " + book + " in your inventory."
		}
	break;
	case "The Hobbit":
		if (user.userInventory.includes("The Hobbit")) {
		display.innerHTML = "You start reading " + book + " . It reads <i>'Biblo Baggins was the thief of the party...'</i>'";
		} else {
		warning.innerHTML = "You do not have " + book + " in your inventory."
		}
	break;
	case "Dictionary":
			if (user.userInventory.includes("Dictionary")) {
		display.innerHTML = "You start reading the " + book + " . It reads <i>'Thief: a person who takes property that does not belong to them.'</i>";
		} else {
		warning.innerHTML = "You do not have " + book + " in your inventory."
		}
	break; 
		}
	}
}