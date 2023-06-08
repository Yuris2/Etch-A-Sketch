let isColored = false;
let isErasing = false;
let isRandom = false;

function changeColor(color, erase, random) {
    if (color == true && erase == false && random == true) {
        //random color
        isColored = true;
        isErasing = false;
        isRandom = true;
    } else if (color == false && erase == false && random == false) {
        //black
        isColored = false;
        isErasing = false;
        isRandom = false;
    } else if (color == false && erase == true && random == false) {
        //erase
        isErasing = true;
        isRandom = false;
    } else if (color == true && erase == false && random == false) {
        //specific color
        isColored = true;
        isErasing = false;
        isRandom = false;
    }
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
            if (isColored == false && isErasing == false) {
                grid.style.backgroundColor = "black";
            } else if (isColored == true && isErasing == false && isRandom == true) {
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                grid.style.backgroundColor = "#"+randomColor
            } else if (isErasing == true) {
                grid.style.backgroundColor = "#ccc"
            }
            
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

const grid = () => {
    let checkBox = document.getElementById("gridSelector")
    const cells = document.querySelectorAll(".canvas")

    if (checkBox.checked == true) {
        cells.forEach(function(cell) {
            cell.style.border = "1px solid #00000046";
        })
    } else {
        cells.forEach(function(cell) {
            cell.style.border = ""
        })
    }
}

createBoard(16); //Default Board
const slider = document.getElementById("boardAdjuster")
const currentBoardValue = document.getElementById("sizeOfBoard");
currentBoardValue.innerHTML = slider.value+"x"+slider.value; //Displays Default Value

slider.oninput = function () { 
    currentBoardValue.innerHTML = slider.value+"x"+slider.value; //Changes HTML to display board dimensions
    createBoard(slider.value);
    grid()
}


//Next Steps
//Styling