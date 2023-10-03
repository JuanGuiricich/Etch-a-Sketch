const gridContainer = document.querySelector('#gridContainer');
const columns = 16;
const rows = 16;

for (let i = 0; i < columns; i++) {
  for (let j = 0; j < rows; j++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    gridContainer.appendChild(cell);
    cell.textContent = '';
  }
};
