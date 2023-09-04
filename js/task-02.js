const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContect = ingredient;
  listItem.classList.add("item");
  ingredientsList.appendChild(listItem);
});

ingredientsList.appendChild(fragment);
