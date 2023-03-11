const gridContainer = document.getElementById("grid-container")


for (let i = 0; i < 15; i++ ) {
    const grid = document.createElement("div");
    grid.innerHTML = "Testing"
    gridContainer.appendChild(grid)
}