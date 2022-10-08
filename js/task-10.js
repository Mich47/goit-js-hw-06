function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('#boxes');

const createBtnRef = document.querySelector('button[data-create]');

const destroyBtnRef = document.querySelector('button[data-destroy]');

createBtnRef.addEventListener('click', () => {
  destroyBoxes();
  const amounBoxes = document.querySelector('#controls').firstElementChild.value;
  createBoxes(Number(amounBoxes));
});

destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const firstDivSize = 30; //Початкова ширина і висота div
  //Масив створив таким чином, бо map не викликає кол-бек для пустих елементів масиву
  const amountBoxesArr = new Array(amount);
  for (let i = 0; i < amountBoxesArr.length; i++) {
    amountBoxesArr[i] = firstDivSize; //Записуємо початкову ширина і висота div як значення кожного елемента масиву
  }

  const boxes = amountBoxesArr
    .map((firstDivSize, idx) => {
      const divSize = firstDivSize + 10 * idx;
      return `<div style="width: ${divSize}px; height: ${divSize}px; border: 1px dashed red;"></div>`;
    })
    .join('');

  boxesRef.insertAdjacentHTML('afterbegin', boxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

boxesRef.style.marginTop = '10px';
boxesRef.style.display = 'flex';
boxesRef.style.gap = '10px';
boxesRef.style.flexWrap = 'wrap';
