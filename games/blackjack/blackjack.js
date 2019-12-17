//blackjack.js
//The javascript file for building my blackjack deck and serving the game

//connect to HTML page
img0 = document.getElementById("img0");
img1 = document.getElementById("img1");
img2 = document.getElementById("img2");
img3 = document.getElementById("img3");
img4 = document.getElementById("img4");
img5 = document.getElementById("img5");
img6 = document.getElementById("img6");
nextBtn = document.getElementById("nextBtn")
display = document.getElementById('display');
counter = 0


//display2.src='2D.jpg';
//set up arrays of the different elements of the playing cards
let suits = [ 'Hearts', 'Diamonds', 'Spades', 'Clubs' ];
let cardNumbers = [
	'Ace',
	'King',
	'Queen',
	'Jack',
	'Ten',
	'Nine',
	'Eight',
	'Seven',
	'Six',
	'Five',
	'Four',
	'Three',
	'Two'
];
let deck = [];
let suitLetters = [ 'H', 'D', 'S', 'C' ];
let cardNumberLetters = [ 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2' ];
let cardImagesArray = [];

//a function to build the image file references
function buildCardImageReferences() {
	for (let item of suitLetters) {
		for (let value of cardNumberLetters) {
			cardImagesArray.push('cards/' + value + item + '.jpg');
		}
	}
}

buildCardImageReferences();

//An object constructor function defines a card in the deck
function Card(cardNumber, suit, image, points) {
	this.cardNumber = cardNumber;
	this.suit = suit;
	this.points = points
	this.image = image;
	this.background = 'cards/BC.jpg';
	this.displayCard = function() {
		return this.cardNumber + ' of ' + this.suit;
	};
}

//a function for creating a deck of cards
function createDeck() {
	for (let item of suits) {
		for (let values of cardNumbers) {
			deck.push(new Card(values, item));
		}
	}
}

//initialise the creation of the deck of cards
createDeck();

//adding points to the deck

for (var i = 0; i < deck.length; i++) {
	switch (deck[i].cardNumber) {
	case "Ace":
	deck[i].points = 11;
	break;
	case "King":
	deck[i].points = 10;
	break;
	case "Queen":
	deck[i].points = 10;
	break;
	case "Jack":
	deck[i].points = 10;
	break;
	case "Ten":
	deck[i].points = 10;
	break;
	case "Nine":
	deck[i].points = 9;
	break;
	case "Eight":
	deck[i].points = 8;
	break;
	case "Seven":
	deck[i].points = 7;
	break;
	case "Six":
	deck[i].points = 6;
	break;
	case "Five":
	deck[i].points = 5;
	break;
	case "Four":     
	deck[i].points = 4;
	break;
	case "Three":
	deck[i].points = 3; 
	break;
	case "Two":
	deck[i].points = 2;
	break;
	default: 
	console.log("Something went wrong woth the points")  	
	} 
}

//adding the card images to the deck
for (let index = 0; index < deck.length; index++) {
	deck[index].image = cardImagesArray[index];
}


//a function to shuffle the cards in the deck
function shuffle(array) {
	for (var i = (array.length-1); i > 0; i--) {
		let randomNumber = Math.floor(Math.random()*(i-1));
		let temp = array[i];
		array[i] = array[randomNumber];
		array[randomNumber] = temp
	}
	return array
}

shuffle(deck)

img0.src="cards/Red_back.jpg"
eval("img1.src=deck[" + counter + "].image")

//a button to cycle through all the cards in the deck
nextBtn.addEventListener("click", function(){
eval("img1.src=deck[" + (counter+1) + "].image")
counter++
})


//displaying the cards as images on the HTML page
function nextImage() {
	for (var i = 1; i < deck.length; i++) {
	eval("img1.src=deck[" + i + "].image")
	}
}

//displaying the deck of cards on the HTML page as a list
for (let index = 0; index < deck.length; index++) {
	display.innerHTML += '<br>' + (index + 1).toString() + ') ' + JSON.stringify(deck[index].displayCard());
}

console.log(deck)

//Need a users hand function
function userHand() {

}

//Need a dealer's hand function
function dealersHand() {

}

//Need a function that is the core gameplay logic
function gameEngine() {
	
}