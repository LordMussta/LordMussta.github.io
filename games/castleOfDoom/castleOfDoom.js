
//starting function - Welcome
function welcome() {
var start = prompt("A large and ominous castle stands in front of you.  Do you wish to enter (type 'yes' or 'no')"); 
	if (start === "yes"){
	enterCastle();
	echo("Thanks for playing!")
	} else if (start === "no"){
	exit();
	echo("Thanks for playing!")
	} else {
	welcome();
	}
}

//description of the entry hall function
function enterCastle() 
{
confirm("You open the large oak door and step over the threshold.");
confirm("Inside is a dark room that is long and narrow and there are suits of armour on either side of the passage way.");
confirm("You are starting to feel a little unsure of your previous decision.");
leaveCastle();
}

//if user does not want to play
function exit() 
{
confirm("Too wimpy hey! Goodbye");
}

function leaveCastle()
{
var goOutside = prompt("Do you want to go back outside? (type 'yes' or 'no')");
	if (goOutside === "yes")
	{
	backOutside();
	}
	else if (goOutside === "no")
	{
	mainHall();
	}
	else 
	{
	leaveCastle();
	}
}


function backOutside() 
{
confirm("You scamper back to the great oak doors before they click shut.");
confirm("You run for a good while before you finally slow to a walk. Man that place freaked you out!");
deathByHail();
}


function deathByHail()
{
confirm("You fail to notice the change in weather...it begins to hail.");
confirm("The hail stones are HUGE!");
confirm("You are struck in the head...");
gameOver();
}

function gameOver()
{
confirm("......GAME OVER......");
}


function mainHall() 
{
confirm("After passing through a narrow entry passageway, you enter a large dinning hall. There are four long tables filling the room.");
confirm("Aside from tables and chairs, the room is relatively empty.");
confirm("There are three doors out of the main hall.  One in the centre, one on the right and the left");
threeDoors();
}


function threeDoors()
{
var chooseDoor = prompt("Which door would you like to enter? ('centre', 'left' or 'right')");
	switch (true) 
	{
	case chooseDoor === "left":
	leftDoor();
	break;
 	case chooseDoor === "right":
	rightDoor();
	break;
	case chooseDoor === "centre":
	centreDoor();
	break;
	default: 
	threeDoors();
	break;
	}
}

function leftDoor()
{
confirm("The door leads to the Castle's stables.");
confirm("You see a lovely black mare in the stables");
goRide();
}

function goRide()
{
var yesRide = prompt("Do you want to take the horse for a ride? ('yes' or 'no')");
	switch (true) 
	{
	case yesRide === "yes":
	horseRide();
	break;
 	case yesRide === "no":
	noHorseRide();
	break;
	default: 
	goRide();
	break;
	}
}


function horseRide()
{
confirm("You lead the horse out of the stables and into the paddock next to the castle");
confirm("You mount the horse and then kick it into a cantor; and then a gallop.");
confirm("It is a beautiful ride and the feel of the wind in your hair is so envigorating.");
rideToVillage();
}

function rideToVillage()
{
var yesVillage = prompt("Do you want to keep riding? ('yes' or 'no')");
	switch (true) 
	{
	case yesVillage === "yes":
	villageRide();
	break;
 	case yesVillage === "no":
	backToStables();
	break;
	default: 
	rideToVillage();
	break;
	}
}


function backToStables()
{
confirm("You ride back to the stables.");
confirm("You put the horse back in its stable.");
confirm("You then head back to the main hall with the three doors.");
threeDoors();
}

function villageRide()
{
confirm("You ride the horse out of the paddock and leap the gate that leads to the local village.");
confirm("You really speed off together...and soon you are far away from the castle");
deathByHail();
}


function noHorseRide()
{
var feedHorse = prompt("Would you like to feed the horse instead? ('yes' or 'no')");
switch (true)
	{
	case feedHorse === "yes":
	yesFeedHorse();
	break;
	case feedHorse === "no":
	noFeedHorse();
	break; 
	default:
	noHorseRide();
	break;
	}
}

function yesFeedHorse()
{
confirm("You find a bag of oats in the corner of the room.  You take a handful of them and offer them to the horse.");
confirm("The horse neighs with delight!");
confirm("The horse then sits down and bows its head to you. I think it wants to take you for a ride...");
goRide();
}

function noFeedHorse()
{
confirm("There is nothing much else to do in the stables.  You decide to walk back into the main hall again.");
threeDoors();
}

function rightDoor()
{
confirm("In front of you is a large twisting staircase leading up into the castle.");
confirm("Alternatively the staircase also descends into the depths of the castle.");
chooseDirection();
}

function chooseDirection()
{
var upOrDown = prompt("Do you want to ascend or descend the stairs? ('up' or 'down')");
	switch (true)
	{
	case upOrDown === "up":
	upStairs();
	break;
	case upOrDown === "down":
	downStairs();
	break;
	default:
	chooseDirection();
	break;
	} 
}

function upStairs()
{
confirm("You commence ascending the stairs...there are so many stairs!");
confirm("Up and up and up you go...There are clouds outside the window!");
confirm("Finally there is a door just a few steps ahead...you quietly open the door and step inside.");
confirm("In front of you there is a wizard looking into a crystal ball.");
fightTheWizard();
}

function fightTheWizard()
{
var action = prompt("What should you do? ('run', 'talk', 'jump' or 'fight')");
	switch (true)
	{
	case action === "fight":
	fightingTime();
	break;
	case action === "talk":
	talkingTime();
	break;
	case action === "run":
	runningTime();
	break;
	case action === "jump":
	jumpingTime();
	break;
	default:
	fightTheWizard();
	break;
	}
}

function fightingTime()
{
confirm("You see a fire brand sitting beside the fireplace in his room.  You pick up the brand.  The wizard turns on you with a wicked smile.");
confirm("He whispers an enchantment and waves his wand and you are struck by lightening.");
gameOver();
}

function jumpingTime()
{
confirm("You jump aside and roll out of the way as the wizard turns on you and blows up the spot where you were standing.");
confirm("You pick up a brick and toss it at the wizard.");
confirm("It strikes him in the end.  He falls to the ground in a lump");
confirm("You walk past the wizard and find that there is a treasure chest in the corner of the room.");
confirm("You open the treasure chest and find that it is filled with gold!!!");
confirm("You are super rich!!!");
confirm("CONGRATULATIONS...YOU HAVE WON THE GAME!!!");
confirm("press any key to exit...");
}

function talkingTime()
{
confirm("'Hail Great Wizard' you say.");
confirm("The Wizard turns to the greeting. He has a wicked smile on his face.");
confirm("Please don't kill me...please don't kill me...");
confirm("There is a lightening strike and you fall down dead...");
gameOver();
}

function runningTime()
{
confirm("Scared out of your brains you dart out of the room and swoop down the stairs at the greatest of speeds...you run straight for the front door...");
confirm("You run out past the village and all the way home.");
confirm("Then you brush your teeth and tuck yourself into bed.");
gameOver();
}

function downStairs()
{
confirm("You go down a floor and find a locked gate. There is nothing else to do here.  You go back up the staircase to the ground floor.");
upOrOut();
}

function upOrOut()
{
var decideUpOrOut = prompt("Do you want to go back into the main hall or do you want to ascend the staircase? ('hall' or 'up')");
	switch (true)
	{
	case decideUpOrOut === "hall":
	threeDoors();
	break;
	case decideUpOrOut === "up":
	upStairs();
	break;
	default:
	upOrOut();
	break;
	}
}

function centreDoor()
{
confirm("You pass through the left door and twist and turn through a few narrow passage ways until you arrive at a large kitchen.");
confirm("There is no one around, but there is a large roast meal sitting on the kitchen bench.");
confirm("You suddenly realise that you are very hungry and that you haven't eaten for hours.");
eatTheRoast();
}

function eatTheRoast()
{
var eatChicken = prompt("Do you want to eat the roast? ('yes' or 'no')");
	switch (true)
	{
	case eatChicken === "yes":
	yummyChicken();
	break;
	case eatChicken === "no":
	noEatChicken();
	break;
	default:
	eatTheRoast();
	}
}

function yummyChicken()
{
confirm("You start munching into the lovely roast chicken and vegetables.  You end up sitting on the floor with the tray and devouring the whole lot.");
confirm("Then you feel rather bloated and a bit sleepy...");
confirm("You wake up to the sounds of foot steps...There are soldiers in front of you!");
youAreArrested();
}

function youAreArrested()
{
confirm("The soldiers seem pretty angry with you...they seem to be shouting but you don't seem to understand their words");
confirm("They escort you roughly down to the dungeon");
confirm("Soon you are locked away in the dungeon...it is very dark and cold down here...");
gameOver();
}

function noEatChicken()
{
confirm("You keep looking around the kitchen, but things seem pretty normal around here.");
confirm("But as you pass by a window you notice that the view is spectacular.");
confirm("The castle appears to sit on the edge of a cliff and from this window you can see the ocean in all its beauty.");
confirm("You feel like you want to get a better view of this wonderful vista.")
lookOutWindow();
}

function lookOutWindow()
{
var climbOutWindow = prompt("Do you want to climb out the window for a better view?");
	switch (true)
	{
	case climbOutWindow === "yes":
	yesClimb();
	break;
	case climbOutWindow === "no":
	noClimb();
	break;
	default:
	lookOutWindow();
	}
}

function yesClimb()
{
confirm("You climb out the window and feel the delightful breeze flow through your hair.");
confirm("While taking in the view you notice a window high above you.  Streaming out of the window is some long blonde beautiful hair.");
climbTheWall();
}


function climbTheWall()
{
var yesClimb = prompt("Do you want to climb up and see...");

switch (true)
	{
	case yesClimb === "yes":
	upTheWall();
	break;
	case yesClimb === "no":
	noUpTheWall();
	break;
	default:
	climbTheWall();
	break;
	}
}

function upTheWall()
{
confirm("You start scaling the castle wall like some kind of mountain climber.  You wonder if it is a damsel in distress");
confirm("Suddenly a large gust of winds billows past you.");
confirm("Your foot slips...");
confirm("Ahhhhhhhhhhh!!!");
gameOver();
}

function noUpTheWall()
{
confirm("Well, why would you risk your neck for a bit of blonde hair anyway.");
confirm("There is not much else happening in the kitchen.  You decide to wander back into the main hall and do some more exploring.");
threeDoors();
}



function noClimb()
{
confirm("Yeah, that does seem like a dumb thing to do!");
confirm("You find there is not much else to do in the kitchen so you decide to wander back into the main hall.");
threeDoors();
}
