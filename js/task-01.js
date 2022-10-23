function hw1() {
  const listCategories = document.querySelectorAll('.item');
  console.log(`Number of categories: ${listCategories.length}`);

  listCategories.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);

    console.log(`Elements: ${category.lastElementChild.children.length}`);
  });
}

// function hw1() { //Рекомендація викладача
//   const list = document.querySelector('#categories');
//   const items = list.querySelectorAll('.item');
//   console.log(`У списку ${items.length} категорій:`);
//   items.forEach(node => {
//     const h2 = node.querySelector('h2');
//     const nodeItems = node.querySelectorAll('li');
//     console.log(` - категорія: ${h2.textContent} (кількість елементів: ${nodeItems.length})`);
//   });
// }

hw1();
