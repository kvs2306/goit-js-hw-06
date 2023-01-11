const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ulEl = document.querySelector('#ingredients');

const ingredientsArr = ingredients.map(el => {
  return `<li>${el}</li>`;
});

ulEl.insertAdjacentHTML('beforeend', ingredientsArr.join(''));
console.log(ulEl);
