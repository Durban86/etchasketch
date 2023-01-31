const container = document.getElementById('container');
const btn = document.getElementById('newGrid');
const blackPen = document.getElementById('blackPen');
const colorPen = document.getElementById('colorPen');
const shaderPen = document.getElementById('shaderPen');

let pen;

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
			if (pen == 'blackPen') {
				cell.style.background = '#000';
			} else if (pen == 'colorPen') {
				cell.style.background = randomColor();
			} else if (pen == 'shaderPen') {
				let currentOpacity = cell.style.opacity;
				cell.style.background = 'rgb(0, 0, 0)'
				if (currentOpacity) {
					cell.style.opacity = Number(currentOpacity) + 0.1
				} else {
					cell.style.opacity = 0.1
				}
			} else {
				alert('Please choose a pen')
			}
		});
		container.appendChild(cell).className = 'grid-item';
	}
}

function randomColor() {
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
		let b = Math.floor(Math.random() * 256);
		rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
		return rgb
}

btn.addEventListener('click', () => {
	let rows = prompt('How many rows should your grid have?');
	let cols = rows;
	createGrid(rows, cols);
});

blackPen.addEventListener('click', () => {
	pen = blackPen.value
	blackPen.classList.add('selected')
	colorPen.classList.remove('selected')
	shaderPen.classList.remove('selected')
})

colorPen.addEventListener('click', () => {
	pen = colorPen.value
	colorPen.classList.add('selected')
	blackPen.classList.remove('selected')
	shaderPen.classList.remove('selected')
})

shaderPen.addEventListener('click', () => {
	pen = shaderPen.value
	shaderPen.classList.add('selected')
	colorPen.classList.remove('selected')
	blackPen.classList.remove('selected')
})