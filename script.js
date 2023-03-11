const gridContainer = document.getElementById("grid-container")

for (let i = 0; i < 16; i++ ) {
    const grid = document.createElement("div");
    grid.innerHTML = "Testing"
    grid.classList.add("canvas")
    gridContainer.appendChild(grid)
}