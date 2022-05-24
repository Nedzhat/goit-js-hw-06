const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

const createMarkup = value => {
  const vegetable = document.createElement('li');
  vegetable.textContent = value;
  vegetable.classList.add('item');
  return vegetable;
};

const updateMarkup = ingredients.map(createMarkup);
listRef.append(...updateMarkup);
