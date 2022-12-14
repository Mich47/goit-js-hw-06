const validInput = document.querySelector('#validation-input');

validInput.addEventListener('blur', onValidInputCheck);

function onValidInputCheck(event) {
  const elem = event.target;
  if (Number(elem.dataset.length) === elem.value.length) {
    elem.classList.add('valid');
    elem.classList.remove('invalid');
    return;
  }
  elem.classList.add('invalid');
  elem.classList.remove('valid');
}

validInput.addEventListener('focus', event => {
  event.target.style.outline = 'none';
});
