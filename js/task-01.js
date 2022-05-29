const categoriesRef = document.querySelectorAll('.item');
const categoriesListRef = document.querySelector('#categories');

console.log(`Number of categories: ${categoriesRef.length}`);

for (let i = 0; i < categoriesRef.length; i += 1) {
  console.dir(`Category: ${categoriesRef[i].children[0].textContent}`);
  console.dir(`Elements: ${categoriesRef[i].children[1].children.length}`);
}
