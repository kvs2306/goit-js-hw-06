function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const magicButton = document.querySelector('.change-color');
const body = document.querySelector('body');
const sumColor = document.querySelector('.color');

magicButton.addEventListener('click', elem => {
  let generation = getRandomHexColor();
  body.style.backgroundColor = generation;
  sumColor.textContent = generation;
});
