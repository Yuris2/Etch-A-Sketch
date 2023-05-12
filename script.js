const gridContainer = document.getElementById("grid-container")

for (let i = 0; i <16*16; i++ ) {
    const grid = document.createElement("div");
    grid.classList.add("canvas");
    grid.addEventListener("mouseover", function () {
        grid.style.backgroundColor = "black";
    })
    gridContainer.appendChild(grid)
}

function cleared() {
    const cells = document.querySelectorAll(".canvas");
    cells.forEach(function(cell) {
        cell.style.backgroundColor = "#ccc";
    });
}

//Next Steps
//adjustable grid EX: shrinks to grows size of grid