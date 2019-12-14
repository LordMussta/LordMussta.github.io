//blackjack.js
//The javascript file for building my blackjack deck and serving the game

//connect to HTML page
display = document.getElementById('display');

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
console.log(cardImagesArray);

//An object constructor function defines a card in the deck
function Card(cardNumber, suit, image) {
	this.cardNumber = cardNumber;
	this.suit = suit;
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
/*
function addImages() {
    for (let filename of cardImagesArray) {
        deck.push()
    }
}

//a function to shuffle the cards in the deck
function shuffle() {
	let i = 0;
	while (51 > deck.length) {
		var randomNumber = Math.floor(Math.random() * 50);
		if (deck.length == 50) {
			break;
		} else if (deck.includes(randomNumber)) {
			continue;
		} else {
			deck.push(randomNumber);
		}
	}
	return deck;
}

shuffle();
*/

//displaying the deck of cards on the HTML page as a list
for (let index = 0; index < deck.length; index++) {
	display.innerHTML += '<br>' + (index + 1).toString() + ') ' + JSON.stringify(deck[index].displayCard());
}

for (let index = 0; index < deck.length; index++) {
	console.log(deck[index].image);
}

/*
let aceHearts = new Card('Ace', 'Hearts', 10, 'AH.jpg');
let kingHearts = new Card('King', 'Hearts', 10, 'KH.jpg');
let queenHearts = new Card('Queen', 'Hearts', 10, 'QH.jpg');
*/
