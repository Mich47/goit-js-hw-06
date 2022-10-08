function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorSpanRef = document.querySelector('.color');
const btnRef = document.querySelector('.change-color');

btnRef.addEventListener('click', onBtn);

function onBtn() {
  const hexColor = getRandomHexColor();
  colorSpanRef.textContent = hexColor;
  document.body.setAttribute('style', `background-color: ${hexColor}`);
}
