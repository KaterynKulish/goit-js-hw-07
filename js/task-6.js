const input = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
let sizes = 30;

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  if (Number(input.value) < 0 && Number(input.value) <= 100) {
    createBox(Number(input.value));
  }
}

function createBox(quant) {
  boxes.innerHTML = '';

  const allBox = [];
  for (let i = 0; i < quant; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${sizes + i * 10}px`;
    box.style.height = `${sizes + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    allBox.push(box);
  }
  boxes.append(...allBox);
  input.value = '';
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(_);
