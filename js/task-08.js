const formRef = document.querySelector('.login-form');

function onFormSubmit(event) {
  event.preventDefault();

  const newUser = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  if (newUser.email === '' || newUser.password === '') {
    return alert('Please fill in all the fields!');
  }

  event.currentTarget.reset();
  return console.log(newUser);
}

formRef.addEventListener('submit', onFormSubmit);
