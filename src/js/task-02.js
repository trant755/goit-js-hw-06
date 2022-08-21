const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const CreateItemOfIngredients = (ContentArr) => {
  let ItemOfIngredients = ContentArr.map(ContentEl => {
    const item = document.createElement('li');
    item.textContent = ContentEl;
    return item
  })

  ingredientsList.append(...ItemOfIngredients)
}

CreateItemOfIngredients(ingredients)