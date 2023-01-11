const resize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

resize.addEventListener('change', el => {
  spanText.style.fontSize = `${el.target.value}px`;
});
