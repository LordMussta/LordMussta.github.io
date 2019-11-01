var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");
var img10 = document.getElementById("img10");
var img11 = document.getElementById("img11");
var img12 = document.getElementById("img12");
var img13 = document.getElementById("display");

let cards = ["8H", "9S", "10H", "JS", "QH", "KS"]

function shuffle(array) {
let randomNumber = Math.floor((Math.random())*(array.length))
let result = "img13.src='cards/"+cards[randomNumber]+".jpg'";
eval(result)
}

let displayedCardsOrder = []


function shuffleCards(array) {
let randomNumber = Math.floor((Math.random())*(array.length))
	//while the sum of the new array list is not equal to the new array list - keep picking new random numbers and adding them to the array
let shuffledDeck = []

//sum of all items in the current array
let sum;
function calcSum(shuffledDeck) {
	shuffledDeck.forEach(function(item){
	sum += item; 
	return sum
	})
}

	while (sum != ) {
	
	//if the random number chosen has is already in the new array, then pick a new random number
		if () {
		
		} 
	}
}

let shuffleBtn = document.getElementById("shuffleBtn");
shuffleBtn.addEventListener("click", function() {shuffleCards})

function init() {

}

shuffle(cards)

img1.addEventListener("click", function() {
	img1.src ="cards/2H.jpg";		
	speed();
});
img2.addEventListener("click", function() {
	img2.src ="cards/3S.jpg";	
	speed();
});
img3.addEventListener("click", function() {
	img3.src ="cards/4H.jpg";
	speed();
});
img4.addEventListener("click", function() {
	img4.src ="cards/5S.jpg";	
	speed();
});
img5.addEventListener("click", function() {
	img4.src ="cards/6H.jpg";	
	speed();
});
img6.addEventListener("click", function() {
	img6.src ="cards/7S.jpg";	
	speed();
});
img7.addEventListener("click", function() {
	img7.src ="cards/8H.jpg";	
	speed();
});
img8.addEventListener("click", function() {
	img8.src ="cards/9S.jpg";	
	speed();
});
img9.addEventListener("click", function() {
	img9.src ="cards/10H.jpg";	
	speed();
});
img10.addEventListener("click", function() {
	img10.src ="cards/JS.jpg";	
	speed();
});
img11.addEventListener("click", function() {
	img11.src ="cards/QH.jpg";	
	speed();
});
img12.addEventListener("click", function() {
	img12.src ="cards/KS.jpg";	
	speed();
});


function speed() {
	setTimeout(changeBack, 3000);
}

function changeBack() {
for (var i = 1; i < 13; i++) {
	eval("img"+i+".src='cards/BC.jpg';")
	}
}

