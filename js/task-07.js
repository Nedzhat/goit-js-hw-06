const controlBtn = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

function changeInput(event) {
  textSpan.style.fontSize = `${event.currentTarget.value}px`;
}

controlBtn.addEventListener('input', changeInput);
