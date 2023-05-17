const slider = document.getElementById("boardAdjuster")
const currentBoardValue = document.getElementById("sizeOfBoard");
currentBoardValue.innerHTML = "Size Of Board: "+slider.value+"x"+slider.value; //Displays Default Value

slider.oninput = function () { 
    currentBoardValue.innerHTML = "Size Of Board: "+slider.value+"x"+slider.value; //Changes HTML to display board dimensions
}
function createBoard (size) {
    const gridContainer = document.getElementById("grid-container")
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    gridContainer.style.width = `600px`;
    gridContainer.style.height = `600px`;
    gridContainer.innerHTML = "";

    let sizeOfBoard = size * size; //Amount of Squares
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
        //In the query canvas, select each cell and sets its background color to the original color
    });
}

const userInput = (dimensions) => {
    if (dimensions > 1 && dimensions <= 100) {
        createBoard(dimensions);
    } else {
        console.log("Board size is out of range")
    }
}
createBoard(16);

//Next Steps
//adjustable grid EX: shrinks to grows size of grid
//I guess I have to study CSS Variables in order to make it easier