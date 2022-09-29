const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

//1 =================================

const listArr = [];

ingredients.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.setAttribute('class', 'item');
  listArr.push(listItem);
});

list.append(...listArr);

//2 =================================

// ingredients.forEach(item => {
//   const listItem = document.createElement('li');
//   listItem.textContent = item;
//   listItem.setAttribute('class', 'item');
//   list.append(listItem);
// });
