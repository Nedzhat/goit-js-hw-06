const inputRef = document.querySelector('#validation-input');
const dataLength = inputRef.dataset.length;

const trueChange = () => {
  if (inputRef.classList.contains('invalid')) {
    inputRef.classList.replace('invalid', 'valid');
    return;
  }
  inputRef.classList.add('valid');
};

const falseChange = () => {
  if (inputRef.classList.contains('valid')) {
    inputRef.classList.replace('valid', 'invalid');
    return;
  }
  inputRef.classList.add('invalid');
};

const tryChangeBorder = event => {
  if (inputRef.value.length <= dataLength) {
    trueChange();
    return;
  }
  if (inputRef.value.length > dataLength) {
    falseChange();
    return;
  }
};

inputRef.addEventListener('blur', tryChangeBorder);
