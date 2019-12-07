var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');
var img7 = document.getElementById('img7');
var img8 = document.getElementById('img8');
var img9 = document.getElementById('img9');
var img10 = document.getElementById('img10');
var img11 = document.getElementById('img11');
var img12 = document.getElementById('img12');
var img13 = document.getElementById('img13');
var img14 = document.getElementById('img14');
var img15 = document.getElementById('img15');
var img16 = document.getElementById('img16');
var img17 = document.getElementById('img17');
var img18 = document.getElementById('img18');
//var img19 = document.getElementById('display');
var randomNumber;

//function init() {}

var deck = [];

function shuffle() {
	while (19 > deck.length) {
	randomNumber = getRndInteger(0,18)
		if (deck.length == 18) {
			break;
		} else if (deck.includes(randomNumber)) {
			continue;
		} else {
			deck.push(randomNumber);
		}
	}
	console.log(deck)
	return deck;
}

function generateNumber() {
return Math.floor(Math.random() * 18);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//console.log('My shuffled cards:');
shuffle();

var cardRef = 
['cards/AH.jpg', 
'cards/KS.jpg', 
'cards/QH.jpg',
'cards/JS.jpg',
'cards/10H.jpg',
'cards/9S.jpg',
'cards/8H.jpg',
'cards/7S.jpg',
'cards/6H.jpg',
'cards/AH.jpg',
'cards/KS.jpg',
'cards/QH.jpg',
'cards/JS.jpg',
'cards/10H.jpg',
'cards/9S.jpg',
'cards/8H.jpg',
'cards/7S.jpg',
'cards/6H.jpg',
]

let shuffleBtn = document.getElementById('shuffleBtn');
shuffleBtn.addEventListener('click', shuffle)

img1.addEventListener('click', function() {
	img1.src = cardRef[deck[0]];
	speed();
});
img2.addEventListener('click', function() {
	img2.src = cardRef[deck[1]];
	speed();
});
img3.addEventListener('click', function() {
	img3.src =cardRef[deck[2]];
	speed();
});
img4.addEventListener('click', function() {
	img4.src = cardRef[deck[3]];
	speed();
});
img5.addEventListener('click', function() {
	img5.src = cardRef[deck[4]];
	speed();
});
img6.addEventListener('click', function() {
	img6.src = cardRef[deck[5]];
	speed();
});
img7.addEventListener('click', function() {
	img7.src = cardRef[deck[6]];
	speed();
});
img8.addEventListener('click', function() {
	img8.src = cardRef[deck[7]];
	speed();
});
img9.addEventListener('click', function() {
	img9.src = cardRef[deck[8]];
	speed();
});
img10.addEventListener('click', function() {
	img10.src = cardRef[deck[9]];
	speed();
});
img11.addEventListener('click', function() {
	img11.src = cardRef[deck[10]];
	speed();
});
img12.addEventListener('click', function() {
	img12.src = cardRef[deck[11]];
	speed();
});
img13.addEventListener('click', function() {
	img13.src = cardRef[deck[12]];
	speed();
});
img14.addEventListener('click', function() {
	img14.src = cardRef[deck[13]];
	speed();
});
img15.addEventListener('click', function() {
	img15.src = cardRef[deck[14]];
	speed();
});
img16.addEventListener('click', function() {
	img16.src = cardRef[deck[15]];
	speed();
});
img17.addEventListener('click', function() {
	img17.src = cardRef[deck[16]];
	speed();
});
img18.addEventListener('click', function() {
	img18.src = cardRef[deck[17]];
	speed();
});

function speed() {
	setTimeout(changeBack, 3000);
}

function changeBack() {
	for (var i = 1; i < 19; i++) {
		eval('img' + i + ".src='cards/BC.jpg';");
	}
}

//shuffle(cards);

//console.log('It is connected');

//let cards = [ '8H', '9S', '10H', 'JS', 'QH', 'KS' ];

//let displayedCardsOrder = [];

/*
function shuffle(array) {
	let randomNumber = Math.floor(Math.random() * array.length);
	let result = "img13.src='cards/" + cards[randomNumber] + ".jpg'";
	eval(result);
}

function shuffleCards(array) {
	let randomNumber = Math.floor(Math.random() * array.length);
	//while the sum of the new array list is not equal to the new array list - keep picking new random numbers and adding them to the array
	let shuffledDeck = [];

	//sum of all items in the current array
	let sum;
	function calcSum(shuffledDeck) {
		shuffledDeck.forEach(function(item) {
			sum += item;
			return sum;
		});
	}
}
*/
/*

	while (sum != ) {
	
	//if the random number chosen has is already in the new array, then pick a new random number
		if () {
		
		} 
	}
}
*/
/*
let shuffleBtn = document.getElementById('shuffleBtn');
shuffleBtn.addEventListener('click', function() {
	shuffleCards;
});
*/