const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredients) => {
  const listItem = document.createElement("li");
  listItem.textContect = ingredient;
  listItem.classList.add("item");
  ingredientsList.appendChild(listItem);
});
