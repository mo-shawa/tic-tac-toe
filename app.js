// Define required constants

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

const squares = document.querySelectorAll(".cell");
const main = document.querySelector("main");
const resetBtn = document.getElementById("reset");
const result = document.getElementById("result");

// Define required variables to track state
let nextPlayer = "X";
let won = false;

// Initialization / Reset function
function init() {
	won = false;
	squares.forEach(function (evt) {
		evt.innerHTML = "";
		nextPlayer = "X";
		result.textContent = `${nextPlayer}'s turn`;
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
	if (checkWin(nextPlayer)) {
		result.innerHTML = `${nextPlayer} won!<br />
		Press Reset to play again.`;
		return;
	}
	// After win is ruled out, check for draw
	if (checkDraw(squares)) {
		result.innerHTML = `It's a draw!<br />
		Press Reset to play again.`;
		return;
	}
	// Update turn text
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

function checkDraw(squares) {
	let count = 0;
	squares.forEach((cell) => {
		cell.textContent ? count++ : undefined;
	});
	return count == 9;
}
console.log(checkDraw);
resetBtn.addEventListener("click", init);

console.log("test branch");
