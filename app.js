// define required constants

// define required variables used to track state of the game

const squares = document.querySelectorAll("main > div");
const main = document.querySelector("main");
let nextPlayer = "O";

main.addEventListener("click", function (evt) {
	const square = evt.target;
	console.log(square);
	nextPlayer == "O" ? (nextPlayer = "X") : (nextPlayer = "O");
	square.innerHTML = `<h1>${nextPlayer}</h1>`;
});
