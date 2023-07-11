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


// Get the element and the button
var elementToRemove = document.querySelector('.table');
var removeButton = document.getElementById('mysvg');

// Add click event listener to the button
removeButton.addEventListener('click', function() {
  // Remove the element
  elementToRemove.remove();
});