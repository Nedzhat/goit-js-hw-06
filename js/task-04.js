const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');
let counterValue = 0;

const addedOne = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const minusOne = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

btnDecrement.addEventListener('click', minusOne);
btnIncrement.addEventListener('click', addedOne);
