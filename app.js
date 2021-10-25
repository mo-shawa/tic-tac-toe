// define required constants

// define required variables used to track state of the game

const squares = document.querySelectorAll("main > div");
const main = document.querySelector("main");

main.addEventListener("click", function (evt) {
	const square = evt.target;
	console.log(square);
	square.innerHTML = `<h1>X</h1>`;
});
