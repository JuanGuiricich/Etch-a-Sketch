const gridContainer = document.querySelector('#gridContainer');
const columns = 27;
const rows = 27;

function createGrid(rows, columns) {
  const totalCells = rows * columns;
  for (let i = 0; i < totalCells; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('gridItem');
    const cellSize = 100 / columns; // Adjust this as needed
    newDiv.style.width = cellSize + '%';
    newDiv.style.paddingBottom = cellSize + '%';
    gridContainer.appendChild(newDiv);
  }
}

createGrid(rows, columns);

const gridItems = document.querySelectorAll('.gridItem');

gridItems.forEach((gridItem) => {
  gridItem.addEventListener('mouseover', () => {
    gridItem.classList.add('hovered');
  });
});
