let color = "black";
let click = true;



function populateGrid(size) {
    let grid = document.getElementById('grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare)
        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement('beforeend', square);
    }
}

populateGrid(16);

function changeSize(input) {
    if (input >= 2 || input <= 100) {
        populateGrid(input);
    }
    console.log("Please choose a number between 2 and 100!");
}

function colorSquare() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function resetGrid() {
    let grid = document.getElementById('grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector(".grid").addEventListener("click", () => {
    click = !click;
})
