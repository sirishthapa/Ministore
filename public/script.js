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

function remove(){

Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
const removeButtons = document.querySelectorAll(".swal2-confirm")
console.log(removeButtons);
// loop through all the divs with td-cross class
for (let button of removeButtons) {
  // add click event listener to individual divs
  button.addEventListener("click", () => {
    // remove the tr element
    document.getElementsByClassName("table-product")[0].parentElement.remove()
  })
}
}

//local storage
// Function to get the current quantity from local storage
function getStoredQuantity() {
  const storedQuantity = localStorage.getItem('productQuantity');
  return storedQuantity ? parseInt(storedQuantity) : 0;
}

// Function to update the displayed quantity and store it in local storage
function updateQuantityDisplayAndStorage(quantity) {
  document.getElementsByClassName('quantity')[0].textContent = quantity;
  localStorage.setItem('productQuantity', quantity);
}

// Function to handle the "decrement" button click
document.querySelector('.decrement').addEventListener('click', function () {
  let quantity = getStoredQuantity();
  if (quantity > 0) {
    quantity -= 1;
    updateQuantityDisplayAndStorage(quantity);
  }
});

// Function to handle the "increment" button click
document.querySelector('.increment').addEventListener('click', function () {
  let quantity = getStoredQuantity();
  quantity += 1;
  updateQuantityDisplayAndStorage(quantity);
});

// Initialize the quantity display when the page loads
const initialQuantity = getStoredQuantity();
updateQuantityDisplayAndStorage(initialQuantity);
