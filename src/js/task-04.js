const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let currentValue = 0;

function updateCounter() {
  counterValue.textContent = currentValue;
}

decrementButton.addEventListener("click", () => {
  currentValue -= 1;
  updateCounter();
});

incrementButton.addEventListener("click", () => {
  currentValue += 1;
  updateCounter();
});
