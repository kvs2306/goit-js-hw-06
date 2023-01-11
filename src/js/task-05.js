const input = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

input.addEventListener('input', event => {
  spanName.textContent = event.target.value;

  if (event.target.value === '') {
    spanName.textContent = 'Anonymous';
  }
});
