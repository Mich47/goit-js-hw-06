const fontSizeControl = document.querySelector('#font-size-control');

const spanValue = document.querySelector('#text');

fontSizeControl.addEventListener(
  'input',
  event => (spanValue.style.fontSize = `${event.target.value}px`)
);
