// // define required constants

const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

// //Define required variables to track state

// define required constants
const squares = document.querySelectorAll(".cell");
const main = document.querySelector("main");

let nextPlayer = "X";
const resetBtn = document.getElementById("reset");
const result = document.getElementById("result");

// define required variables used to track state of the game
let won = false;

function init() {
	won = false;
	squares.forEach(function (evt) {
		evt.innerHTML = "";
		result.textContent = "X's turn";
		nextPlayer = "X";
	});
}

main.addEventListener("click", function (evt) {
	const square = evt.target;
	// Exit if square already played or there's a winner
	if (square.textContent || won == true) {
		return;
	}
	// If clicked block is empty, insert X or O
	square.innerHTML ? undefined : (square.innerHTML = `<h1>${nextPlayer}</h1>`);
	// Check win
	checkWin(nextPlayer)
		? (result.textContent = `${nextPlayer} won bruh`)
		: undefined;

	// Update text
	nextPlayer == "O" ? (nextPlayer = "X") : (nextPlayer = "O");
	result.textContent = `${nextPlayer}'s turn`;
});

function checkWin(player) {
	won = false;
	for (let i = 0; i < winCombos.length; i++) {
		if (
			squares[winCombos[i][0]].textContent == player &&
			squares[winCombos[i][1]].textContent == player &&
			squares[winCombos[i][2]].textContent == player
		) {
			won = true;
			console.log("someone won");
		}
	}
	return won;
}
resetBtn.addEventListener("click", init);

console.log("branch test");
