// incrementButton.decrementbutoon
const quantityElement = document.querySelector('.quantity');
const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');

let quantity = 0;

incrementButton.addEventListener('click', () => {
  quantity++;
  quantityElement.textContent = quantity;
});

decrementButton.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
    quantityElement.textContent = quantity;
  }
});
