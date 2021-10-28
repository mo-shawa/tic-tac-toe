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
		// Clear all cells
		evt.innerHTML = "";
		// Reset player turn
		nextPlayer = "X";
		result.textContent = `${nextPlayer}'s turn`;
	});
}

// Click listener can target main due to delegation
main.addEventListener("click", function (evt) {
	const square = evt.target;
	// Exit if square already played or there's a winner
	if (square.textContent || won == true) {
		return;
	}
	// If clicked block is empty, insert X or O
	square.innerHTML ? undefined : (square.innerHTML = `<h1>${nextPlayer}</h1>`);
	// Check for a winner
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
	// Swap player turn and update text
	nextPlayer == "O" ? (nextPlayer = "X") : (nextPlayer = "O");
	result.textContent = `${nextPlayer}'s turn`;
});

function checkWin(player) {
	won = false;

	// I can't believe this worked
	for (let i = 0; i < winCombos.length; i++) {
		// Compares the contents of cells in the pattern laid out by winCombos
		if (
			// ex: on the first iteration, winCombos[i][0] is the 0th item in the 0th array [>0<,1,2]
			// so we're checking if squares[0]'s matches whoever just played
			// if that returns false, we exit and i++ into the next possible win combination
			// if true, do same for [0,>1<,2] and then [0,1,>2<]
			squares[winCombos[i][0]].textContent == player &&
			squares[winCombos[i][1]].textContent == player &&
			squares[winCombos[i][2]].textContent == player
		) {
			// If any collection of cells contain the same text (player), that player won
			won = true;
		}
	}
	return won;
}

function checkDraw(squares) {
	// Could have used Array.from(squares) to use .every to check
	// Introduced many more problems than it solved, so we did this
	let count = 0;
	// Track how many cells have been played
	squares.forEach((cell) => {
		cell.textContent ? count++ : undefined;
	});
	// if all cells have been played without a winner, return true
	return count == 9;
}

resetBtn.addEventListener("click", init);
