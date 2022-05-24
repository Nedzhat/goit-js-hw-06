function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');
const changeBtnRef = document.querySelector('.change-color');

function changeColorBody(event) {
  spanRef.textContent = getRandomHexColor();
  bodyRef.style.background = spanRef.textContent;
}

changeBtnRef.addEventListener('click', changeColorBody);
