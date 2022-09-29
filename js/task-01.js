function hw1() {
  const listCategories = document.querySelectorAll('.item');
  console.log(`Number of categories: ${listCategories.length}`);

  listCategories.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);

    console.log(`Elements: ${category.lastElementChild.children.length}`);
  });
}

hw1();
