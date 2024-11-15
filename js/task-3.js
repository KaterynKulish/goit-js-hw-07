const input = document.querySelector('#name-input');
const name = document.querySelector('#name-output');

input.addEventListener('input', handleInput);

function handleInput(event) {
  if (input.value.trim() === '') {
    name.textContent = 'Anonimous';
  } else {
    name.textContent = input.value.trim();
  }
}
