
let gridSize = 10;
let cellNumber = gridSize ** 2;
const gridContainer = document.querySelector('.container');


for ( let i = 0; i < cellNumber; i++) {
    const cell = document.createElement('div');
    cell.classList.add('square');
    gridContainer.append(cell);
}