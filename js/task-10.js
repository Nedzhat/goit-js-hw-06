function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < countBoxes; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-div');
    newDiv.style.display = 'block';
    newDiv.style.width = 30 + 10 * i + 'px';
    newDiv.style.height = 30 + 10 * i + 'px';
    newDiv.style.background = getRandomHexColor();
    boxesRef.append(newDiv);
  }
}

function destroyBoxes(point) {
  const divForDestroy = document.querySelectorAll('.new-div');
  for (const unit of divForDestroy) {
    unit.remove();
  }
}

const controlsRef = document.querySelector('#controls');
const inpRef = document.querySelector('input');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');
let countBoxes = 0;

inpRef.addEventListener('input', e => {
  countBoxes = inpRef.value;
});

btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);
