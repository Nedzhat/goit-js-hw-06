const inputRef = document.querySelector('#name-input');
const userRef = document.querySelector('#name-output');

const changeUserName = () => {
  if (event.currentTarget.value === '') {
    userRef.textContent = 'Anonymous';
  } else {
    userRef.textContent = event.currentTarget.value;
  }
};

inputRef.addEventListener('input', changeUserName);
