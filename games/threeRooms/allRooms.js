function generalActionSwitchboard() {
	switch (input) {
	case "DRINK POISON":
	case "D POISON":
	allRooms.drinkBadItem("poison");
	break;  
	case "DRINK MILK":
	case "D MILK":
	allRooms.drinkGoodItem("milk");
	break;
	case "EAT CHEESE":
	case "E CHEESE":
	allRooms.eatGoodItem("cheese");
	break;  
	case "EAT HAM":
	case "E HAM":
	allRooms.eatGoodItem("ham");
	break;  
	case "EAT VEGETABLES":
	case "E VEGETABLES":
	allRooms.eatGoodItem("vegetables");
	break;
	case "EAT BREAD":
	case "E BREAD":
	allRooms.eatGoodItem("bread");
	break;
	case "EAT MOULDY CORN CHIP":
	case "E MOULDY CORN CHIP":
	allRooms.eatBadItem("mouldy corn chip");
	break;
	default:
	console.log("something may have gone wrong")
	}
}

let allRooms = {
drinkBadItem: function(drink) {
	if (user.userInventory.includes(drink)) {
		display.innerHTML = "You drink the poison.  You feel sick. Your health has been reduced";
		user.health = user.health - 50;
		user.userInventory.splice(user.userInventory.indexOf(drink), 1)
	} else {
		warning.innerHTML = "You do not have any poison in your inventory."
	}
},
drinkGoodItem: function(drink) {
	if (user.userInventory.includes(drink)) {
		display.innerHTML = "You drink the " + drink + ". Your health has been increased";
		if (user.health <= 90) {
		user.health = user.health + 10;
		} else if (user.health > 90) {
		user.health = 100;
		}
		user.userInventory.splice(user.userInventory.indexOf(drink), 1)
	} else {
		warning.innerHTML = "You do not have any " + drink + " in your inventory."
	}
},
eatGoodItem: function(food) {
	if (user.userInventory.includes(food)) {
		display.innerHTML = "You ate the " + food + ". Your health has been increased";
		if (user.health <= 90) {
		user.health = user.health + 10;
		} else if (user.health > 90) {
		user.health = 100;
		}
		user.userInventory.splice(user.userInventory.indexOf(food), 1)
	} else {
		warning.innerHTML = "You do not have any " + food + " in your inventory."
	}
},
eatBadItem: function(food) {
	if (user.userInventory.includes(food)) {
		display.innerHTML = "You ate something disgusting.  You feel sick. Your health has been reduced";
		user.health = user.health - 10;
		user.userInventory.splice(user.userInventory.indexOf(food), 1)
	} else {
		warning.innerHTML = "You do not have any in your inventory."
	}
},
}