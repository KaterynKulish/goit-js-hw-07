const changeBody = document.querySelector('body');
const nameColor = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', handleClick);

function handleClick() {
  changeBody.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = changeBody.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
