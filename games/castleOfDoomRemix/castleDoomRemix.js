var validCommand = "<b>Please enter a valid command.</b>";
var yesChosen = "You have said yes.";
var noChosen = "You have said no.";
var goodbye = "<b>Too wimpy hey!</b>";
var outputText = document.getElementById("output");
var locationText = document.getElementById("location");
var commandText = document.getElementById("commandLine");
var inputField = document.getElementById("inputField");
var submitButton = document.getElementById("btn1");
var warning = document.getElementById("warningMessage");

var castleEntrance = 
{
location: "In front of the Castle",
question: "A large and ominous castle stands in front of you. <p><b>Do you wish to enter?</b></p>",
availableCommands: "yes or no",
option1: "yes",
option2: "no", 
	decision: function() 
	{
	var userResponse = document.getElementById("inputField").value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = entryHall1.question;// 1)change the dialogue
		locationText.innerHTML = entryHall1.location; // 2)change location text
		commandText.innerHTML = entryHall1.availableCommands; // 3) change available commands
		inputField.value = null; // 4) set input field to blank
		submitButton.setAttribute("onClick", "entryHall1.decision(); chaching.play()");
				document.getElementById("warningMessage").innerHTML = null;
		}
		else if (userResponse == this.option2) 
		{	
		outputText.innerHTML = goodbye;
		locationText.innerHTML = "Lobby";
		commandText.innerHTML = "none";
		inputField.value = null;
		submitButton.disabled = true;
		warning.innerHTML = null;
		
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}



var entryHall1 = 
{
location: "Outside the Castle",
question: "You open the large oak door and step over the threshold.",
availableCommands: "ok",
option1: "ok",
	decision: function()
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = entryHall2.question;
		locationText.innerHTML = entryHall2.location;
		commandText.innerHTML = entryHall2.availableCommands;
		inputField.value = null; 
				warning.innerHTML = null;
		submitButton.setAttribute("onClick", "entryHall2.decision(); chaching.play()")
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var entryHall2 = 
{
location: "Outside the Castle",
question: "Inside is a dark room that is long and narrow and there are suits of armour on either side of the passage way.",
availableCommands: "ok",
option1: "ok",
	decision: function()
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = entryHall3.question;
		locationText.innerHTML = entryHall3.location;
		commandText.innerHTML = entryHall3.availableCommands;
		inputField.value = null; 
				warning.innerHTML = null;
		submitButton.setAttribute("onClick", "entryHall3.decision(); chaching.play()")
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var entryHall3 = 
{
location: "Entry Hall",
question: "You are starting to feel a little unsure of your previous decision. <p><b>Do you want to go back outside?</b></p>",
option1: "yes",
option2: "no", 
availableCommands: "yes or no",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = outsideCastle1.question;
		locationText.innerHTML = outsideCastle1.location;
		commandText.innerHTML = outsideCastle1.availableCommands;
		inputField.value = null; 
		submitButton.setAttribute("onClick", "outsideCastle1.decision(); chaching.play()");
				warning.innerHTML = null;
		}
		else if (userResponse == this.option2) 
		{	
		outputText.innerHTML = dinningHall1.question;
		locationText.innerHTML = dinningHall1.location;
		commandText.innerHTML = dinningHall1.availableCommands;
		inputField.value = null;
		submitButton.setAttribute("onClick", "dinningHall1.decision(); chaching.play()");
				warning.innerHTML = null;
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var outsideCastle1 = 
{
location: "Outside the Castle",
question: "You scamper back to the great oak doors before they click shut...",
availableCommands: "ok",
option1: "ok",
	decision: function()
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = outsideCastle2.question;
		locationText.innerHTML = outsideCastle2.location;
		commandText.innerHTML = outsideCastle2.availableCommands;
		inputField.value = null; 
				warning.innerHTML = null;
		submitButton.setAttribute("onClick", "outsideCastle2.decision(); chaching.play()")
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var outsideCastle2 = 
{
location: "Outside the Castle",
question: "You run for a good while before you finally slow to a walk. Man that place freaked you out!",
availableCommands: "ok",
option1: "ok",
	decision: function()
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = hailStorm1.question;
		locationText.innerHTML = hailStorm1.location;
		commandText.innerHTML = hailStorm1.availableCommands;
		inputField.value = null; 
				warning.innerHTML = null;
		submitButton.setAttribute("onClick", "hailStorm1.decision(); chaching.play()")
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var dinningHall1 = 
{
location: "Dinning Hall",
question: "You enter a large dinning hall. There are four long tables filling the room.",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = dinningHall2.question;
		locationText.innerHTML = dinningHall2.location;
		commandText.innerHTML = dinningHall2.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "dinningHall2.decision(); chaching.play()")
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var dinningHall2 = 
{
location: "Dinning Hall",
question: "Aside from tables and chairs, the room is relatively empty.",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = dinningHall3.question;
		locationText.innerHTML = dinningHall3.location;
		commandText.innerHTML = dinningHall3.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "dinningHall3.decision(); chaching.play()")
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var dinningHall3 = 
{
location: "Dinning Hall",
question: "There are three doors out of the main hall.  One in the centre, one on the right and the left.<p><b>Which door would you like to enter?</b></p>",
option1: "left",
option2: "right",
option3: "centre", 
availableCommands: "left or right or centre",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "left": //staircase
		outputText.innerHTML = staircase1.question;
		locationText.innerHTML = staircase1.location;
		commandText.innerHTML = staircase1.availableCommands;
		inputField.value = null; 
				warning.innerHTML = null;
		submitButton.setAttribute("onClick", "staircase1.decision(); chaching.play()")
		break;
		case "right":  //stables
		outputText.innerHTML = stables1.question;
		locationText.innerHTML = stables1.location;
		commandText.innerHTML = stables1.availableCommands;
		inputField.value = null;
				warning.innerHTML = null;
		submitButton.setAttribute("onClick", "stables1.decision(); chaching.play()"); 
		break;
		case "centre": //kitchen
		outputText.innerHTML = kitchen1.question;
		locationText.innerHTML = kitchen1.location;
		commandText.innerHTML = kitchen1.availableCommands;
		inputField.value = null;
		submitButton.setAttribute("onClick", "kitchen1.decision(); chaching.play()"); 
				warning.innerHTML = null;
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var stables1 = 
{
location: "Stables",
question: "The door leads to the Castle's stables.",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = stables2.question;
		locationText.innerHTML = stables2.location;
		commandText.innerHTML = stables2.availableCommands;
		inputField.value = null;
		submitButton.setAttribute("onClick", "stables2.decision(); chaching.play()");
		warning.innerHTML = null;
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var stables2 = 
{
location: "Stables",
question: "You see a lovely black mare in the stables.<p><b>Do you want to take the horse for a ride?</b></p>",
option1: "yes",
option2: "no",
option3: "", 
availableCommands: "yes or no",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = paddock1.question;
		locationText.innerHTML = paddock1.location;
		commandText.innerHTML = paddock1.availableCommands;
		inputField.value = null;
		submitButton.setAttribute("onClick", "paddock1.decision(); chaching.play()");
		warning.innerHTML = null;
		}
		else if (userResponse == this.option2) 
		{	
		outputText.innerHTML = feedHorse.question;
		locationText.innerHTML = feedHorse.location;
		commandText.innerHTML = feedHorse.availableCommands;
		inputField.value = null;
		submitButton.setAttribute("onClick", "feedHorse.decision(); chaching.play()");
		warning.innerHTML = null;
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var feedHorse = {
location: "Stables",
question: "<b>Would you like to feed the horse instead?</b>",
option1: "yes",
option2: "no",
availableCommands: "yes or no",
decision: function () 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = horseLikesFood1.question;
		locationText.innerHTML = horseLikesFood1.location;
		commandText.innerHTML = horseLikesFood1.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "horseLikesFood1.decision(); chaching.play()"); 
		}
		else if (userResponse == this.option2) 
		{	
		outputText.innerHTML = notMuchToDo.question;
		locationText.innerHTML = notMuchToDo.location;
		commandText.innerHTML = notMuchToDo.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "notMuchToDo.decision(); chaching.play()"); 
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}

	}
}

var horseLikesFood1 = {
location: "Stables",
question: "You find a bag of oats in the corner of the room.",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = horseLikesFood2.question;
		locationText.innerHTML = horseLikesFood2.location;
		commandText.innerHTML = horseLikesFood2.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "horseLikesFood2.decision(); chaching.play()"); 
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var horseLikesFood2 = {
location: "Stables",
question: "You take a handful of them and offer them to the horse.",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = horseLikesFood3.question;
		locationText.innerHTML = horseLikesFood3.location;
		commandText.innerHTML = horseLikesFood3.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "horseLikesFood3.decision(); chaching.play()"); 
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var horseLikesFood3 = {
location: "Stables",
question: "The horse neighs with delight! The horse then sits down and bows its head to you. ",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = horseLikesFood4.question;
		locationText.innerHTML = horseLikesFood4.location;
		commandText.innerHTML = horseLikesFood4.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "horseLikesFood4.decision(); chaching.play()"); 
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var horseLikesFood4 = {
location: "Stables",
question: "I think it wants to take you for a ride...<p><b>Do you want to take the horse for a ride?</b></p>",
option1: "yes",
option2: "no",
availableCommands: "yes or no",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = paddock1.question;
		locationText.innerHTML = paddock1.location;
		commandText.innerHTML = paddock1.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "paddock1.decision(); chaching.play()"); 
		}
		else if (userResponse == this.option2) 
		{	
		outputText.innerHTML = notMuchToDo.question;
		locationText.innerHTML = notMuchToDo.location;
		commandText.innerHTML = notMuchToDo.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "notMuchToDo.decision(); chaching.play()"); 
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var notMuchToDo = {
location: "",
question: "There is not much to do here...you decide to walk back into the main hall",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = dinningHall3.question;
		locationText.innerHTML = dinningHall3.location;
		commandText.innerHTML = dinningHall3.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "dinningHall3.decision(); chaching.play()");
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}



var paddock1 = 
{
location: "Paddock",
question: "You lead the horse out of the stables and into the paddock next to the castle.",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = paddock2.question;
		locationText.innerHTML = paddock2.location;
		commandText.innerHTML = paddock2.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "paddock2.decision(); chaching.play()");
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var paddock2 = 
{
location: "Paddock",
question: "You mount the horse and then kick it into a cantor; and then a gallop.",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = paddock3.question;
		locationText.innerHTML = paddock3.location;
		commandText.innerHTML = paddock3.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "paddock3.decision(); chaching.play()");
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var paddock3 = 
{
location: "Paddock",
question: "It is a beautiful ride and the feel of the wind in your hair is so envigorating. <p><b>Do you want to keep riding?</b></p>",
option1: "yes",
option2: "no",
availableCommands: "yes or no",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = toTheVillage1.question;
		locationText.innerHTML = toTheVillage1.location;
		commandText.innerHTML = toTheVillage1.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "toTheVillage1.decision(); chaching.play()");
		}
		else if (userResponse == this.option2) 
		{	
		outputText.innerHTML = putHorseAway1.question;
		locationText.innerHTML = putHorseAway1.location;
		commandText.innerHTML = putHorseAway1.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "putHorseAway1.decision(); chaching.play()"); 
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}
var putHorseAway1 = 
{
location: "Stables",
question: "You ride back to the stables. You put the horse back in its stable.",
option1: "ok", 
availableCommands: "ok",
decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = putHorseAway2.question;
		locationText.innerHTML = putHorseAway2.location;
		commandText.innerHTML = putHorseAway2.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "putHorseAway2.decision(); chaching.play()");
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	},
}

var putHorseAway2 = 
{
location: "Stables",
question: "You then head back to the main hall.",
option1: "ok", 
availableCommands: "ok",
decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = dinningHall3.question;
		locationText.innerHTML = dinningHall3.location;
		commandText.innerHTML = dinningHall3.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "dinningHall3.decision(); chaching.play()");
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	},
}


var toTheVillage1 =
{
location: "Towards the Village",
question: "You ride the horse out of the paddock and leap the gate that leads to the local village.",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = toTheVillage2.question;
		locationText.innerHTML = toTheVillage2.location;
		commandText.innerHTML = toTheVillage2.availableCommands;
		warning.innerHTML = null;
		inputField.value = null;
		submitButton.setAttribute("onClick", "toTheVillage2.decision(); chaching.play()"); 
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var toTheVillage2 =
{
location: "Towards the Village",
question: "You really speed off together...and soon you are far away from the castle",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = hailStorm1.question;
		locationText.innerHTML = hailStorm1.location;
		commandText.innerHTML = hailStorm1.availableCommands;
		warning.innerHTML = null;
		inputField.value = null;
		submitButton.setAttribute("onClick", "hailStorm1.decision(); chaching.play()"); 
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}



var hailStorm1 = {
location: "Somewhere Outside the Castle",
question: "You fail to notice the change in weather...it begins to hail.",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = hailStorm2.question;
		locationText.innerHTML = hailStorm2.location;
		commandText.innerHTML = hailStorm2.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "hailStorm2.decision(); boom.play()")
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var hailStorm2 = {
location: "Somewhere Outside the Castle",
question: "The hail stones are HUGE!",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == "ok") 
		{
		outputText.innerHTML = hailStorm3.question;
		locationText.innerHTML = hailStorm3.location;
		commandText.innerHTML = hailStorm3.availableCommands;
		submitButton.setAttribute("onClick", "hailStorm3.decision(); chaching.play()")
		inputField.value = null; 
		warning.innerHTML = null;
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var hailStorm3 = {
location: "Somewhere Outside the Castle",
question: "You are struck in the head...",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = gameOver.question;
		locationText.innerHTML = gameOver.location;
		commandText.innerHTML = gameOver.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.disabled = true;
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var staircase1 =
{
location: "Staircase",
question: "In front of you is a large twisting staircase leading up into the castle.",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) //up
		{
		outputText.innerHTML = staircase2.question;
		locationText.innerHTML = staircase2.location;
		commandText.innerHTML = staircase2.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "staircase2.decision(); chaching.play()"); 
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var staircase2 =
{
location: "Staircase",
question: "Alternatively the staircase also descends into the depths of the castle. <p><b> Do you want to ascend or descend the stairs?</b></p>",
option1: "up",
option2: "down",
option3: "", 
availableCommands: "up or down",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) //up
		{
		outputText.innerHTML = wizardsTower1.question;
		locationText.innerHTML = wizardsTower1.location;
		commandText.innerHTML = wizardsTower1.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "wizardsTower1.decision(); chaching.play()"); 
		}
		else if (userResponse == this.option2) //down
		{	
		outputText.innerHTML = dungeon1.question;
		locationText.innerHTML = dungeon1.location;
		commandText.innerHTML = dungeon1.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "dungeon1.decision(); chaching.play()"); // 5) change the button event
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var dungeon1 = 
{
location: "Dungeon",
question: "You go down a floor and find a locked gate. There is nothing else to do here.",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = dungeon2.question;
		locationText.innerHTML = dungeon2.location;
		commandText.innerHTML = dungeon2.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "dungeon2.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var dungeon2 = 
{
location: "Dungeon",
question: "You go back up the staircase to the ground floor. <p><b>Do you want to go back into the main hall or do you want to ascend the staircase?</b></p>",
option1: "hall",
option2: "up", 
availableCommands: "hall, up",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "hall":
		outputText.innerHTML = dinningHall3.question;
		locationText.innerHTML = dinningHall3.location;
		commandText.innerHTML = dinningHall3.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "dinningHall3.decision(); chaching.play()"); 
		break;
		case "up":
		outputText.innerHTML = wizardsTower1.question;
		locationText.innerHTML = wizardsTower1.location;
		commandText.innerHTML = wizardsTower1.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "wizardsTower1.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}




var wizardsTower1 = 
{
location: "Wizards Tower",
question: "You commence ascending the stairs...there are so many stairs!",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = wizardsTower2.question;
		locationText.innerHTML = wizardsTower2.location;
		warning.innerHTML = null;
		commandText.innerHTML = wizardsTower2.availableCommands;	
		submitButton.setAttribute("onClick", "wizardsTower2.decision(); chaching.play()"); 
		inputField.value = null; 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var wizardsTower2 = 
{
location: "Wizards Tower",
question: "Up and up and up you go...There are clouds outside the window!",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = wizardsTower3.question;
		locationText.innerHTML = wizardsTower3.location;
		warning.innerHTML = null;
		commandText.innerHTML = wizardsTower3.availableCommands;	
		submitButton.setAttribute("onClick", "wizardsTower3.decision(); chaching.play()"); 
		inputField.value = null; 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}



var wizardsTower3 = 
{
location: "Wizards Tower",
question: "Finally there is a door just a few steps ahead...you quietly open the door and step inside.",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = wizardsTower4.question;
		locationText.innerHTML = wizardsTower4.location;
		warning.innerHTML = null;
		commandText.innerHTML = wizardsTower4.availableCommands;	
		submitButton.setAttribute("onClick", "wizardsTower4.decision(); chaching.play()"); 
		inputField.value = null; 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var wizardsTower4 = 
{
location: "Wizards Tower",
question: "In front of you there is a wizard looking into a crystal ball. <p><b>What should you do?</b></p>",
option1: "run",
option2: "talk",
option3: "jump",
option4: "fight", 
availableCommands: "run, talk, jump or fight",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "run": //run
		outputText.innerHTML = run1.question;
		locationText.innerHTML = run1.location;
		warning.innerHTML = null;
		commandText.innerHTML = run1.availableCommands;	
		submitButton.setAttribute("onClick", "run1.decision(); chaching.play()"); 
		inputField.value = null; 
		break;
		case "talk":  //talk
		outputText.innerHTML = talk1.question;
		locationText.innerHTML = talk1.location;
		commandText.innerHTML = talk1.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "talk1.decision(); chaching.play()"); 
		break;
		case "jump": 
		outputText.innerHTML = jump1.question;
		locationText.innerHTML = jump1.location;
		commandText.innerHTML = jump1.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "jump1.decision(); chaching.play()"); 
		break;
		case "fight": 
		outputText.innerHTML = fight1.question;
		locationText.innerHTML = fight1.location;
		commandText.innerHTML = fight1.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "fight1.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var talk1 = 
{
question: "'Hail Great Wizard' you say. The Wizard turns to the greeting.",
location: "Wizards Tower",
availableCommands: "ok",
decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = talk2.question;
		locationText.innerHTML = talk2.location;
		commandText.innerHTML = talk2.availableCommands;	 
		warning.innerHTML = null;
		inputField.value = null; 
		submitButton.setAttribute("onClick", "talk2.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	
	}
}

var talk2 = 
{
question: "He has a wicked smile on his face. Please don't kill me...please don't kill me...",
location: "Wizards Tower",
availableCommands: "ok",
decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = talk3.question;
		locationText.innerHTML = talk3.location;
		commandText.innerHTML = talk3.availableCommands;	 
		warning.innerHTML = null;
		inputField.value = null; 
		submitButton.setAttribute("onClick", "talk3.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	
	}
}

var talk3 = 
{
question: "There is a lightening strike and you fall down dead...",
location: "Wizards Tower",
availableCommands: "ok",
decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = gameOver.question;
		locationText.innerHTML = gameOver.location;
		commandText.innerHTML = gameOver.availableCommands;	
		submitButton.disabled = true; 
		warning.innerHTML = null;
		inputField.value = null; 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	
	}
}

var run1 =
{
question: "Scared out of your brains you dart out of the room and swoop down the stairs at the greatest of speeds...",
location: "various",
availableCommands: "ok",
decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = run2.question;
		locationText.innerHTML = run2.location;
		commandText.innerHTML = run2.availableCommands;	
 		submitButton.setAttribute("onClick", "run2.decision(); chaching.play()"); 
		inputField.value = null; 
		warning.innerHTML = null;
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var run2 =
{
question: "You run straight for the front door...You run out past the village and all the way home.",
location: "home",
availableCommands: "ok",
decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = run3.question;
		locationText.innerHTML = run3.location;
		commandText.innerHTML = run3.availableCommands;	
 		submitButton.setAttribute("onClick", "run3.decision(); chaching.play()"); 
		inputField.value = null; 
		warning.innerHTML = null;
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var run3 =
{
question: "Then you brush your teeth and tuck yourself into bed.",
location: "home",
availableCommands: "ok",
decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = gameOver.question;
		locationText.innerHTML = gameOver.location;
		commandText.innerHTML = gameOver.availableCommands;	
		submitButton.disabled = true; 
		inputField.value = null; 
		warning.innerHTML = null;
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}




var fight1 =
{
question: "You see a fire brand sitting beside the fireplace in his room.  You pick up the brand.",
location: "Wizards Tower",
availableCommands: "ok",
decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = fight2.question;
		locationText.innerHTML = fight2.location;
		commandText.innerHTML = fight2.availableCommands;	
		submitButton.setAttribute("onClick", "fight2.decision(); chaching.play()"); 
		inputField.value = null; 
		warning.innerHTML = null;
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var fight2 =
{
question: "The wizard turns on you with a wicked smile.",
location: "Wizards Tower",
availableCommands: "ok",
decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = fight3.question;
		locationText.innerHTML = fight3.location;
		commandText.innerHTML = fight3.availableCommands;	
		submitButton.setAttribute("onClick", "fight3.decision(); chaching.play()"); 
		inputField.value = null; 
		warning.innerHTML = null;
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var fight3 =
{
question: "He whispers an enchantment and waves his wand and you are struck by lightening...",
location: "Wizards Tower",
availableCommands: "ok",
decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok": 
		outputText.innerHTML = gameOver.question;
		locationText.innerHTML = gameOver.location;
		commandText.innerHTML = gameOver.availableCommands;	
		submitButton.disabled = true;
		inputField.value = null; 
		warning.innerHTML = null;
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var jump1 = 
{
question: "You jump aside and roll out of the way as the wizard turns on you and blows up the spot where you were standing.",
location: "Wizards Tower",
availableCommands: "ok",
option1: "ok", 
decision: function() 
	{
	userResponse = inputField.value;
	if (userResponse == this.option1) //up
		{
		outputText.innerHTML = jump2.question;
		locationText.innerHTML = jump2.location;
		commandText.innerHTML = jump2.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "jump2.decision(); chaching.play()"); 
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}	
	}
}

var jump2 = 
{
question: "You pick up a brick and toss it at the wizard.",
location: "Wizards Tower",
availableCommands: "ok",
option1: "ok", 
decision: function() 
	{
	userResponse = inputField.value;
	if (userResponse == this.option1) //up
		{
		outputText.innerHTML = jump3.question;
		locationText.innerHTML = jump3.location;
		commandText.innerHTML = jump3.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "jump3.decision(); chaching.play()"); 
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}	
	}
}

var jump3 = 
{
question: "It strikes him in the end.  He falls to the ground in a lump.",
location: "Wizards Tower",
availableCommands: "ok",
option1: "ok", 
decision: function() 
	{
	userResponse = inputField.value;
	if (userResponse == this.option1) //up
		{
		outputText.innerHTML = defeatWizard1.question;
		locationText.innerHTML = defeatWizard1.location;
		commandText.innerHTML = defeatWizard1.availableCommands;
		inputField.value = null;
		cheer.play(); 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "defeatWizard1.decision(); chaching.play()"); 

		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}	
	}
}




var defeatWizard1 = 
{
question: "You walk past the wizard and find that there is a treasure chest in the corner of the room.",
location: "Wizards Tower",
availableCommands: "ok",
option1: "ok", 
decision: function() 
	{
	userResponse = inputField.value;
	if (userResponse == this.option1) //up
		{
		outputText.innerHTML = defeatWizard2.question;
		locationText.innerHTML = defeatWizard2.location;
		commandText.innerHTML = defeatWizard2.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "defeatWizard2.decision(); chaching.play()"); 
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}	
	}
}

var defeatWizard2 = 
{
question: "You open the treasure chest and find that it is <b>filled with gold!!! <br>You are super rich!!!</b>",
location: "Wizards Tower",
availableCommands: "ok",
option1: "ok", 
decision: function() 
	{
	userResponse = inputField.value;
	if (userResponse == this.option1) //up
		{
		outputText.innerHTML = defeatWizard3.question;
		locationText.innerHTML = defeatWizard3.location;
		commandText.innerHTML = defeatWizard3.availableCommands;
		inputField.value = null;
		cheer.play(); 
		warning.innerHTML = null;
		submitButton.disabled="true"; 

		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}	
	}
}

var defeatWizard3 = 
{
question: "<b style='font-size: 100px'>Congratulations! You have WON the game!</b>",
location: "Lobby",
availableCommands: "none",
}



var kitchen1 = 
{
location: "Kitchen",
question: "You pass through the left door and twist and turn through a few narrow passage ways until you arrive at a large kitchen.",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = kitchen2.question;
		locationText.innerHTML = kitchen2.location;
		commandText.innerHTML = kitchen2.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "kitchen2.decision(); chaching.play()");
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var kitchen2 = 
{
location: "Kitchen",
question: "There is no one around, but there is a large roast meal sitting on the kitchen bench.",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = kitchen3.question;
		locationText.innerHTML = kitchen3.location;
		commandText.innerHTML = kitchen3.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "kitchen3.decision(); chaching.play()");
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var kitchen3 = 
{
location: "Kitchen",
question: "You suddenly realise that you are very hungry and that you haven't eaten for hours. <p><b>Do you want to eat the roast?</b></p>",
option1: "yes",
option2: "no",
option3: "", 
availableCommands: "yes or no",
	decision: function() 
	{
	userResponse = inputField.value;
		if (userResponse == this.option1) 
		{
		outputText.innerHTML = eatRoast1.question;
		locationText.innerHTML = eatRoast1.location;
		commandText.innerHTML = eatRoast1.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "eatRoast1.decision(); chaching.play()");
		}
		else if (userResponse == this.option2) 
		{	
		outputText.innerHTML = lookOutWindow1.question;
		locationText.innerHTML = lookOutWindow1.location;
		commandText.innerHTML = lookOutWindow1.availableCommands;
		inputField.value = null;
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "lookOutWindow1.decision(); chaching.play()");
		}
		else 
		{
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var eatRoast1 = 
{
location: "Kitchen",
question:  "You start munching into the lovely roast chicken and vegetables.",
option1: "ok",
option2: "", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = eatRoast2.question;
		locationText.innerHTML = eatRoast2.location;
		commandText.innerHTML = eatRoast2.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "eatRoast2.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var eatRoast2 = 
{
location: "Kitchen",
question:  "You end up sitting on the floor with the tray and devouring the whole lot.",
option1: "ok",
option2: "", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = eatRoast3.question;
		locationText.innerHTML = eatRoast3.location;
		commandText.innerHTML = eatRoast3.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "eatRoast3.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var eatRoast3 = 
{
location: "Kitchen",
question:  "Then you feel rather bloated and a bit sleepy...",
option1: "ok",
option2: "", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = wakeUp.question;
		locationText.innerHTML = wakeUp.location;
		commandText.innerHTML = wakeUp.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "wakeUp.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}




var wakeUp = 
{
location: "Kitchen",
question:  "You wake up to the sounds of foot steps...There are soldiers in front of you!",
option1: "ok",
option2: "", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = soldiers1.question;
		locationText.innerHTML = soldiers1.location;
		commandText.innerHTML = soldiers1.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "soldiers1.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var soldiers1 = {
question: "The soldiers seem pretty angry with you...they seem to be shouting but you don't seem to understand their words...",
location: "Kitchen",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = soldiers2.question;
		locationText.innerHTML = soldiers2.location;
		commandText.innerHTML = soldiers2.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "soldiers2.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var soldiers2 = {
question: "They escort you roughly down to the dungeon.",
location: "Dungeon",
option1: "ok",
option2: "", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = putInDungeon.question;
		locationText.innerHTML = putInDungeon.location;
		commandText.innerHTML = putInDungeon.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "putInDungeon.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var putInDungeon = {
question: "Soon you are locked away in the dungeon...it is very dark and cold down here...",
location: "Dungeon Cell",
option1: "ok",
option2: "", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = gameOver.question;
		locationText.innerHTML = gameOver.location;
		commandText.innerHTML = gameOver.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.disabled = true; 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var lookOutWindow1 = 
{
location: "Kitchen",
question: "You keep looking around the kitchen, but things seem pretty normal around here.",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = lookOutWindow2.question;
		locationText.innerHTML = lookOutWindow2.location;
		commandText.innerHTML = lookOutWindow2.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "lookOutWindow2.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var lookOutWindow2 = 
{
location: "Kitchen",
question: "But as you pass by a window you notice that the view is spectacular.",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = lookOutWindow3.question;
		locationText.innerHTML = lookOutWindow3.location;
		commandText.innerHTML = lookOutWindow3.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "lookOutWindow3.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}



var lookOutWindow3 = 
{
location: "Kitchen",
question: "The castle appears to sit on the edge of a cliff and from this window you can see the ocean in all its beauty.",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = lookOutWindow4.question;
		locationText.innerHTML = lookOutWindow4.location;
		commandText.innerHTML = lookOutWindow4.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "lookOutWindow4.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var lookOutWindow4 = 
{
location: "Kitchen",
question: "You feel like you want to get a better view of this wonderful vista. <p><b> Do you want to climb out the window for a better view?</b></p>",
option1: "yes",
option2: "no", 
availableCommands: "yes or no",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "yes":
		outputText.innerHTML = climbOutWindow1.question;
		locationText.innerHTML = climbOutWindow1.location;
		commandText.innerHTML = climbOutWindow1.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "climbOutWindow1.decision(); chaching.play()"); 
		break;
		case "no":
		outputText.innerHTML = notMuchToDo.question;
		commandText.innerHTML = notMuchToDo.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "notMuchToDo.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var climbOutWindow1 = 
{
location: "Wall of Castle",
question: "You climb out the window and feel the delightful breeze flow through your hair.",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = climbOutWindow2.question;
		locationText.innerHTML = climbOutWindow2.location;
		commandText.innerHTML = climbOutWindow2.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "climbOutWindow2.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var climbOutWindow2 = 
{
location: "Wall of Castle",
question: "While taking in the view you notice a window high above you.",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = climbOutWindow3.question;
		locationText.innerHTML = climbOutWindow3.location;
		commandText.innerHTML = climbOutWindow3.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "climbOutWindow3.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var climbOutWindow3 = 
{
location: "Wall of Castle",
question: "Streaming out of the window is some long blonde beautiful hair. <p><b>Do you want to climb up and see...</b></p>",
option1: "yes",
option2: "no", 
availableCommands: "yes or no",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "yes":
		outputText.innerHTML = fallOutWindow1.question;
		locationText.innerHTML = fallOutWindow1.location;
		commandText.innerHTML = fallOutWindow1.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "fallOutWindow1.decision(); chaching.play()"); 
		break;
		case "no":
		outputText.innerHTML = doNotChaseTheBlonde1.question;
		commandText.innerHTML = doNotChaseTheBlonde1.availableCommands;
		locationText.innerHTML = doNotChaseTheBlonde1.location;

		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "doNotChaseTheBlonde1.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var noClimbing1 = 
{
question: "Yeah, that does seem like a dumb thing to do!",
location: "Kitchen",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = noClimbing2.question;
		locationText.innerHTML = noClimbing2.location;
		commandText.innerHTML = noClimbing2.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "noClimbing2.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var noClimbing2 = 
{
question: "You find there is not much else to do in the kitchen so you decide to wander back into the main hall.",
location: "Kitchen",
option1: "ok",
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = dinningHall3.question;
		locationText.innerHTML = dinningHall3.location;
		commandText.innerHTML = dinningHall3.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "dinningHall3.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var doNotChaseTheBlonde1 = {
question: "Well, why would you risk your neck for a bit of blonde hair anyway.",
location: "Wall of Castle",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = doNotChaseTheBlonde1.question;
		locationText.innerHTML = doNotChaseTheBlonde1.location;
		commandText.innerHTML = doNotChaseTheBlonde1.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "doNotChaseTheBlonde1.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var doNotChaseTheBlonde2 = {
question: "There is not much else happening in the kitchen.",
location: "Kitchen",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = doNotChaseTheBlonde3.question;
		locationText.innerHTML = doNotChaseTheBlonde3.location;
		commandText.innerHTML = doNotChaseTheBlonde3.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "doNotChaseTheBlonde3.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var doNotChaseTheBlonde3 = {
question: "You decide to wander back into the main hall and do some more exploring.",
location: "Kitchen",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = dinningHall3.question;
		locationText.innerHTML = dinningHall3.location;
		commandText.innerHTML = dinningHall3.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "dinningHall3.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var fallOutWindow1 = {
question: "You start scaling the castle wall like some kind of mountain climber.",
location: "Wall of Castle",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = fallOutWindow2.question;
		locationText.innerHTML = fallOutWindow2.location;
		commandText.innerHTML = fallOutWindow2.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "fallOutWindow2.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var fallOutWindow2 = {
question: "You wonder if it is a damsel in distress.",
location: "Wall of Castle",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = fallOutWindow3.question;
		locationText.innerHTML = fallOutWindow3.location;
		commandText.innerHTML = fallOutWindow3.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "fallOutWindow3.decision(); chaching.play()"); 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}

var fallOutWindow3 = {
question: "Suddenly a large gust of winds billows past you.",
location: "Wall of Castle",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = fallOutWindow4.question;
		locationText.innerHTML = fallOutWindow4.location;
		commandText.innerHTML = fallOutWindow4.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.setAttribute("onClick", "fallOutWindow4.decision(); chaching.play()"); 		
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var fallOutWindow4 = {
question: "Your foot slips...<br>Ahhhhhhhhhhh!!!",
location: "Wall of Castle",
option1: "ok", 
availableCommands: "ok",
	decision: function() 
	{
	userResponse = inputField.value;
		switch (userResponse)
		{ 
		case "ok":
		outputText.innerHTML = gameOver.question;
		locationText.innerHTML = gameOver.location;
		commandText.innerHTML = gameOver.availableCommands;
		inputField.value = null; 
		warning.innerHTML = null;
		submitButton.disabled = true; 
		break;
		default:
		document.getElementById("warningMessage").innerHTML = validCommand;
		document.getElementById("inputField").value = null;	
		}
	}
}


var gameOver = 
{
location: "Lobby",
question: "<p style='color: white; font-size: 80px; text-align: center; font-family: 'Righteous';'>GAME OVER</p>",
option1: "",
availableCommands: "none",
}

var resetGame = {
option1: "yes",
option2: "no", 
decision: function() {
	warning.innerHTML = "You have successfully reset the game";
	outputText.innerHTML = castleEntrance.question;
	locationText.innerHTML = castleEntrance.location;
	commandText.innerHTML = castleEntrance.availableCommands;
	submitButton.disabled = false;
	submitButton.setAttribute("onClick", "castleEntrance.decision()"); 
	}
}

//display the opening dialogue
document.getElementById("output").innerHTML = castleEntrance.question;
document.getElementById("location").innerHTML = castleEntrance.location;
document.getElementById("commandLine").innerHTML = castleEntrance.availableCommands;

