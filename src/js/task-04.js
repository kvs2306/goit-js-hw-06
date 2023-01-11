let counterValue = 0;

const sumValue = document.querySelector('#value');
const decButton = document.querySelector('[data-action="decrement"]');
const incButton = document.querySelector('[data-action="increment"]');

decButton.addEventListener('click', () => {
  counterValue--;
  sumValue.textContent = counterValue;
});
incButton.addEventListener('click', () => {
  counterValue++;
  sumValue.textContent = counterValue;
});
