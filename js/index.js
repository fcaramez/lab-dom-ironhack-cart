// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span')
  let quantity = product.querySelector('.quantity input')

  let priceValue = price.innerHTML;
  let quantityValue = quantity.value;
  
  let subTotal = 0;

  subTotal = priceValue * quantityValue;

  let total = product.querySelector('.subtotal span');
  
  total.innerHTML = subTotal;

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let quantity = document.getElementsByClassName('product');

  let subTotal = 0;

  for (let i = 0; i < quantity.length; i++) {
    subTotal += updateSubtotal(quantity[i]);
  }
  // ITERATION 3

  let total = document.querySelector('#total-value span');
  let totals = 0;

  totals = subTotal;
  total.innerHTML = totals;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
