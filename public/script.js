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


// Get the cross icons div
const removeButtons = document.querySelectorAll(".td-cross")
// loop through all the divs with td-cross class
for (let button of removeButtons) {
  // add click event listener to individual divs
  button.addEventListener("click", () => {
    // remove the tr element
    button.parentElement.parentElement.remove()
  })
}