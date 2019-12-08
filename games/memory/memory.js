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
var message = document.getElementById('message');
var warning = document.getElementById('warning');
var displayScore = document.getElementById('displayScore');
var cardsFlipped;
var card1;
var card2;
var imageNumber;
var image1;
var image2;
var score;
var deck = [];

function shuffle() {
	changeAllBack();
	score = 0;
	displayScore.innerHTML = score;
	deck = [];
	cardsFlipped = 0;
	while (19 > deck.length) {
		var randomNumber = Math.floor(Math.random() * 18);
		if (deck.length == 18) {
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

var cardRef = [
	'cards/AH.jpg',
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
	'cards/6H.jpg'
];

let shuffleBtn = document.getElementById('shuffleBtn');
shuffleBtn.addEventListener('click', shuffle);

img1.addEventListener('click', function() {
	checkCards(1, cardRef[deck[0]]);
});
img2.addEventListener('click', function() {
	checkCards(2, cardRef[deck[1]]);
});
img3.addEventListener('click', function() {
	checkCards(3, cardRef[deck[2]]);
});
img4.addEventListener('click', function() {
	checkCards(4, cardRef[deck[3]]);
});
img5.addEventListener('click', function() {
	checkCards(5, cardRef[deck[4]]);
});
img6.addEventListener('click', function() {
	checkCards(6, cardRef[deck[5]]);
});
img7.addEventListener('click', function() {
	checkCards(7, cardRef[deck[6]]);
});
img8.addEventListener('click', function() {
	checkCards(8, cardRef[deck[7]]);
});
img9.addEventListener('click', function() {
	checkCards(9, cardRef[deck[8]]);
});
img10.addEventListener('click', function() {
	checkCards(10, cardRef[deck[9]]);
});
img11.addEventListener('click', function() {
	checkCards(11, cardRef[deck[10]]);
});
img12.addEventListener('click', function() {
	checkCards(12, cardRef[deck[11]]);
});
img13.addEventListener('click', function() {
	checkCards(13, cardRef[deck[12]]);
});
img14.addEventListener('click', function() {
	checkCards(14, cardRef[deck[13]]);
});
img15.addEventListener('click', function() {
	checkCards(15, cardRef[deck[14]]);
});
img16.addEventListener('click', function() {
	checkCards(16, cardRef[deck[15]]);
});
img17.addEventListener('click', function() {
	checkCards(17, cardRef[deck[16]]);
});
img18.addEventListener('click', function() {
	checkCards(18, cardRef[deck[17]]);
});

function changeAllBack() {
	for (var i = 1; i < 19; i++) {
		eval('img' + i + ".src='cards/BC.jpg';");
	}
}

function changeTwoBack(image1, image2) {
	setTimeout(() => {
		eval('img' + image1 + ".src='cards/BC.jpg';");
		eval('img' + image2 + ".src='cards/BC.jpg';");
	}, 1500);
}

function checkCards(imageNumber, cardImage) {
	switch (cardsFlipped) {
		case 0:
			cardsFlipped = 1;
			card1 = cardImage;
			eval('img' + imageNumber + '.src =" ' + cardImage + '";');
			image1 = imageNumber;
			break;
		case 1:
			if (image1 == imageNumber) {
			} else {
				cardsFlipped = 2;
				card2 = cardImage;
				eval('img' + imageNumber + '.src =" ' + cardImage + '";');
				image2 = imageNumber;
				checkForMatch(card1, card2, image1, image2);
			}
			break;
		case 2:
			console.log('You have already got two cards flipped at the moment.');
			break;
		default:
			console.log('Something went wrong with the cardsFlipped function');
			break;
	}
}

//Number;

function checkForMatch(one, two, image1, image2) {
	if (one != two) {
		cardsFlipped = 0;
		changeTwoBack(image1, image2);
	} else {
		score = score + 1;
		displayScore.innerHTML = score;
		cardsFlipped = 0;
	}
}
