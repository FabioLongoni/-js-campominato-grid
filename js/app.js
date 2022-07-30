//definiamo il numero di celle
let gridSize = 10;
let cellNumber = gridSize ** 2;

//richiamiamo il container
const gridContainer = document.querySelector('.container');
//richiamiamo il button
const playButton = document.getElementById('play_button')

playButton.addEventListener('click', function () { 
    playButton.style.display = 'none';
    gridContainer.style.display = 'grid';
    // console.log(gridContainer);
})

//generiamo e appendiamo al container le nostre celle
for ( let i = 0; i < cellNumber; i++) {
    const cell = getSquareElement();
    gridContainer.append(cell);
    cell.innerHTML = i + 1;
}


function getSquareElement() {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('click',clickHover);

    return square;
}

function clickHover() {
    const square = this;
    square.classList.toggle('click_hover');
    console.log(square.innerHTML);
}