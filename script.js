const gridContainer = document.getElementById("grid-container")

for (let i = 0; i < 16*16; i++ ) {
    const grid = document.createElement("div");
    grid.classList.add("canvas")
    gridContainer.appendChild(grid)
}