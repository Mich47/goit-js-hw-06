const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onForm);

function onForm(event) {
  event.preventDefault();
  const { email, password } = event.target.elements;

  if (!email.value || !password.value) {
    alert('Empty field!');
    return;
  }

  console.log({ email: email.value, password: password.value });

  event.target.reset();
}
