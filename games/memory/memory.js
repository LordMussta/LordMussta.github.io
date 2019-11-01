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

