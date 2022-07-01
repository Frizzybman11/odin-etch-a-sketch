const container = document.querySelector('#container');
let gridSize = 16;
let gridPixel = 0;

for (let x = 0; x < gridSize; x++) {
    let row = document.createElement('div');
    row.setAttribute("class", "row");
    row.setAttribute("id", "row" + (x+1));
    container.appendChild(row);
    for (let y = 0; y < gridSize; y++) {
        let grid = document.createElement('div');
        grid.setAttribute("class", "grid");
        grid.setAttribute("id", "grid" + (y+1));
        row.appendChild(grid);
    }
}

let etch = document.querySelectorAll(".grid");

etch.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.classList.add("hover");
    })
});

const newGrid = document.querySelector("#newGrid");

newGrid.addEventListener('click', function() {
    createGrid();
});

const removeGrid = document.querySelector("#removeGrid");

removeGrid.addEventListener('click', function() {
    deleteGrid();
})

function createGrid() {
    gridSize = null;
    gridSize = prompt("Enter a number from 16 - 100 to set grid size.");
    if (gridSize == null) {
        return;
    } else if (gridSize > 100 || gridSize < 16) {
        alert("Invalid. Please enter a number from 16 - 100");
    } else {
    gridPixel = (gridSize * gridSize);
    gridPixel = (921600 / gridPixel);
    gridPixel = Math.sqrt(gridPixel);
    deleteGrid();
    for (let x = 0; x < gridSize; x++) {
        let row = document.createElement('div');
        row.setAttribute("class", "row");
        row.setAttribute("id", "row" + (x+1));
        container.appendChild(row);
        for (let y = 0; y < gridSize; y++) {
            let grid = document.createElement('div');
            grid.setAttribute("class", "grid");
            grid.setAttribute("id", "grid" + (y+1));
            grid.style.height = gridPixel + "px";
            grid.style.width = gridPixel + "px";
            row.appendChild(grid);
        }
    }
    etch = document.querySelectorAll(".grid");
    etch.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.classList.add("hover");
        })
    });
    }
}

function deleteGrid() {
    let row = document.querySelectorAll(".row");
    for (let x = 0; x < row.length; x++) {
        container.removeChild(row[x]);
    }
}
