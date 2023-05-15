function createBoard (size) {
    const gridContainer = document.getElementById("grid-container")
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    let sizeOfBoard = size * size;

    for (let i = 0; i <sizeOfBoard; i++ ) {
    const grid = document.createElement("div");
    grid.classList.add("canvas");
    grid.addEventListener("mouseover", function () {
        grid.style.backgroundColor = "black";
    })
    gridContainer.appendChild(grid)
}

}
function cleared() {
    const cells = document.querySelectorAll(".canvas");
    cells.forEach(function(cell) {
        cell.style.backgroundColor = "#ccc";
    });
}

createBoard(16);

//Next Steps
//adjustable grid EX: shrinks to grows size of grid
//I guess I have to study CSS Variables in order to make it easier