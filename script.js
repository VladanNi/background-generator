var css= document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".randomButton");

addNewRandomGradient()

//dodeljuje vrednost iz dva input polja
function changeBackground() {
	color1.setAttribute("value", color1.value);
	color2.setAttribute("value", color2.value);
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	
	css.textContent = body.style.background + ";";

}
//gradient hexadecimal random
function randomGradient() {
	var letters = "0123456789ABCDEF";
	var hexColor= "#";
	for(i=0; i < 6; i++) {
		hexColor += letters[Math.floor(Math.random() * 16)];
	}
	return hexColor;
}
//dodeljuje vrednosti koje ce kasnije biti ucitane
function addNewRandomGradient() {
	color1.setAttribute("value", randomGradient());
	color2.setAttribute("value", randomGradient());
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
button.addEventListener("click", addNewRandomGradient);
