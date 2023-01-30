//Pseudocode
//Create a grid based how many rows and columns the user chooses

const container = document.getElementById('container');
const btn = document.getElementById('newGrid');

// let rows;
// let cols;

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function createGrid(rows, cols) {
	container.style.setProperty('--grid-rows', rows);
	container.style.setProperty('--grid-cols', cols);
	removeAllChildNodes(container)
	for (i = 0; i < (rows * cols); i++) {
		let cell = document.createElement('div');
		cell.addEventListener('mouseover', function(event) {
			event.target.classList.add('color');
		});
		container.appendChild(cell).className = 'grid-item';
	}
}

btn.addEventListener('click', () => {
	let gridItems = document.querySelectorAll('.grid-item')
	let rows = prompt('How many rows should your grid have?');
	let cols = rows;
	createGrid(rows, cols);
});
// createGrid(rows, cols);

// document.getElementsByClassName('grid-item').addEventListener('mouseover' () => {
// 	document.getElementsByClassName.style.setProperty('background-color', 'black');
// });