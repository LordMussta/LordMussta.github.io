//shuffle.js
//to shuffle my memory cards
var deck = [];

function shuffle() {
	while (21 > deck.length) {
		var randomNumber = Math.floor(Math.random() * 20);
		if (deck.length == 20) {
			break;
		} else if (deck.includes(randomNumber)) {
			continue;
		} else {
			deck.push(randomNumber);
		}
	}
	return deck;
}

var cardValues = {
	0: 'Ace',
	1: 'King',
	2: 'Queen',
	3: 'Jack',
	4: 'Ten',
	5: 'Nine',
	6: 'Eight',
	7: 'Seven',
	8: 'Six',
	9: 'Five',
	10: 'Ace',
	11: 'King',
	12: 'Queen',
	13: 'Jack',
	14: 'Ten',
	15: 'Nine',
	16: 'Eight',
	17: 'Seven',
	18: 'Six',
	19: 'Five'
};

function displayCards() {
	deck.forEach((card) => console.log(cardValues[card]));
}

console.log('My shuffled cards:');
shuffle();
console.log(deck);

console.log(' ');
displayCards();
