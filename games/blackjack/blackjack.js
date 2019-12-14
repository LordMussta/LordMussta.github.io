demo = document.getElementById('demo');



let suits = ["Hearts", "Diamonds", "Spades", "Clubs"]
let numbers = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"]
let deck = []
let deck2 = []

function Card(number, suit) {
	this.number = number;
	this.suit = suit;
	this.background = "BC.jpg";
	this.displayCard = function() {
	console.log(this.number + " of " + this.suit);
	};
}

let aceHearts = new Card("Ace", "Hearts", 10, "AH.jpg");
let kingHearts = new Card("King", "Hearts", 10, "KH.jpg");
let queenHearts = new Card("Queen", "Hearts", 10, "QH.jpg");

let deckArray = []

let testObject = {}
testObject.myArray = []


function forTesting2() {
	for (let item of suits) {
		for (let values of numbers) {
		deckArray.push(new Card(values, item))
		}
	}
}

forTesting2()

console.log(deckArray.length)
console.log(deckArray)

demo.innerHTML = deckArray[];