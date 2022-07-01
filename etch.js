const container = document.querySelector('#container');

for (let x = 0; x < 16; x++) {
    let row = document.createElement('div');
    row.setAttribute("class", "row");
    row.setAttribute("id", "row" + (x+1));
    container.appendChild(row);
    for (let y = 0; y < 16; y++) {
        let grid = document.createElement('div');
        grid.setAttribute("class", "grid");
        grid.setAttribute("id", "grid" + (y+1));
        row.appendChild(grid);
    }
}

const etch = document.querySelectorAll(".grid");

etch.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.classList.add("hover");
    })
});

