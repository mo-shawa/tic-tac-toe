// define required constants

// define required variables used to track state of the game

const squares = document.querySelectorAll("main > div");
const main = document.querySelector("main");
let nextPlayer = "O";
const resetBtn = document.getElementById("reset");

function init() {
	squares.forEach(function (e) {
		e.innerHTML = "";
	});
}

main.addEventListener("click", function (evt) {
	const square = evt.target;
	//
	if (square.innerHTML) {
		return;
	} else {
		square.innerHTML = `<h1>${nextPlayer}</h1>`;
	}
	console.log(square);
	// Set next player
	nextPlayer == "O" ? (nextPlayer = "X") : (nextPlayer = "O");
});

resetBtn.addEventListener("click", init);
