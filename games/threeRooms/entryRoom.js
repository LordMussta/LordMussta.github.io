function entryActionSwitchboard() {
	switch (input) {
	case "LOOK AROUND":
	case "LA":
	entryRoom.lookAroundRoom();
	break; 
	case "DOOR 1":
	case "D1":
	entryRoom.goToDoor1();
	break;
	case "INVESTIGATE LAMP":
	case "I LAMP": 
	entryRoom.investigateLamp();
	break; 
	case "INVESTIGATE SIDE TABLE":
	case "I SIDE TABLE":
	entryRoom.investigateSideTable();
	break;
	case "TAKE KEYS":
	case "T KEYS":
	if (user.sublocation == "side table") {
	entryRoom.takeSideTableItem("keys", "sideTable","side table");
	} else {
	warning.innerHTML = "You are too far from the side table."
	}
	break; 
	case "TAKE VASE":
	case "T VASE":
	if (user.sublocation == "side table") {
	entryRoom.takeSideTableItem("vase", "sideTable","side table");
	} else {
	warning.innerHTML = "You are too far from the side table.";
	}
	break;
	default:
	displayWarning(); 
	}
}

//Entry Room Object
let entryRoom = {
doors: ["DOOR 1: door to kitchen"],
lamp: false,
sideTable: ["vase", "keys"],
standardDialogue: "You walk into the entry room.",
furniture: ["side table", "lamp"],
lookAroundRoom: function() {
	display.innerHTML = "You look around the room and see the following things: <br>" + this.furniture.join(", ") + ".<p> You also see the following doors: <br>" + this.doors.join("<br>") + "</p>" ;
		user.sublocation = "";
	},
goToDoor1: function() {
	user.userLocation = "kitchen";
	displayLocation.innerHTML = user.userLocation;
	display.innerHTML = kitchen.standardDialogue;
	},
investigateSideTable: function() {
	display.innerHTML = "You search the side table and find the following items: <br>" + this.sideTable.join(", ");
		user.sublocation = "side table";
	},
investigateLamp: function() {
	display.innerHTML = "You turn the lamp on";
		this.lamp = true;
		user.sublocation = "lamp";
},
takeSideTableItem: function(item, property, furniture) {
		removeEmpty()
		if (this[property].includes(item) ) {
		this[property].splice(this[property].indexOf(item), 1);
		user.userInventory.push(item);
		display.innerHTML = "After taking the " + item + " the following items are left on the " + furniture + ": <br>" + this[property].join(", ")
		} else {
		display.innerHTML = "There is no " + item + " left on the "+furniture+".  The following items are currently in the "+furniture+": <br>" + this[property].join(", ");	
		}
	},
}

