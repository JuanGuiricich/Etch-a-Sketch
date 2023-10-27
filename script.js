const gridContainer = document.querySelector('#gridContainer');
const columns = 16;
const rows = 16;
const clearButton = document.querySelector('#clearButton');
const resizeButton = document.querySelector('#resizeButton');
const resizeInput = document.querySelector('#resizeInput');



function createGrid(rows, columns) {
  const totalCells = rows * columns;
  for (let i = 0; i < totalCells; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('gridItem');
    const cellSize = 100 / columns;
    newDiv.style.width = cellSize + '%';
    newDiv.style.paddingBottom = cellSize + '%';
    gridContainer.appendChild(newDiv);
  }
}

createGrid(rows, columns);

const gridItems = document.querySelectorAll('.gridItem');


clearButton.addEventListener('click', () => {
  console.log('clear button clicked');
  gridItems.forEach((gridItem) => {
    gridItem.classList.remove('hovered');
  });
});

gridItems.forEach((gridItem) => {
  gridItem.addEventListener('mouseover', () => {
    gridItem.classList.add('hovered');
  });
});

resizeButton.addEventListener('click', () => {
  console.log('resize button clicked');
  const newRows = resizeInput.value;
  const newColumns = resizeInput.value;
  gridContainer.innerHTML = '';
  if (newRows > 100 || newColumns > 100 && newRows < 1 || newColumns < 1) {
    alert('Please enter a number between 1 and 100');
    createGrid(rows, columns);
  }else {
    createGrid(newRows, newColumns);
  }
  const gridItems = document.querySelectorAll('.gridItem');
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', () => {
      gridItem.classList.add('hovered');
    });
  });
  clearButton.addEventListener('click', () => {
    console.log('clear button clicked');
    gridItems.forEach((gridItem) => {
      gridItem.classList.remove('hovered');
    });
  });
});
