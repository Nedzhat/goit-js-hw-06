const categoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesRef.length}`);

const firstCategoryRef = document.querySelector('.item');
console.log(`Category: ${firstCategoryRef.firstElementChild.textContent}`);
console.log(`Elements: ${firstCategoryRef.lastElementChild.children.length}`);

const secondCategoryRef = firstCategoryRef.nextElementSibling;
console.log(`Category: ${secondCategoryRef.firstElementChild.textContent}`);
console.log(`Elements: ${secondCategoryRef.lastElementChild.children.length}`);

const thirdCategoryRef = secondCategoryRef.nextElementSibling;
console.log(`Category: ${thirdCategoryRef.firstElementChild.textContent}`);
console.log(`Elements: ${thirdCategoryRef.lastElementChild.children.length}`);
