const formRef = document.querySelector('.login-form');
console.log('formRef ', formRef);

formRef.addEventListener('submit', onForm);

function onForm(event) {
  event.preventDefault();
  const formEl = event.target.elements;

  console.log('formEl.password ', formEl.password.value);
  console.log('formEl.email ', formEl.email.value);

  if (!formEl.email.value || !formEl.password.value) {
    alert('Empty field!');
  }
  console.dir(formEl);
}
