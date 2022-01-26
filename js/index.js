// ITERATION 1

function updateSubtotal(product) {

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

  let quantity = document.getElementsByClassName('product');

  let subTotal = 0;

  for (let i = 0; i < quantity.length; i++) {
    subTotal += updateSubtotal(quantity[i]);
  }

  let total = document.querySelector('#total-value span');
  let totals = 0;

  totals = subTotal;
  total.innerHTML = totals;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let rowToRemove = target.parentNode.parentNode;
  let parent = rowToRemove.parentNode;

  parent.removeChild(rowToRemove);
}

// ITERATION 5

function createProduct() {
  let newName = document.querySelector('.create-product input');
  let newPrice = document.querySelector('.create-product input[type="number"]')
  let fixedPrice = Number(newPrice.value).toFixed(2);
  let newRow = document.createElement('tr');
  newRow.innerHTML = `<tr class="product">
  <td class="name">
    <span>${newName.value}</span>
  </td>
  <td class="price">$<span>${fixedPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
  newRow.classList.add('product')
  const parent = document.querySelector('#cart tbody')
  parent.appendChild(newRow)

  const removeBtn = newRow.querySelector('.btn-remove')
  removeBtn.addEventListener('click', removeProduct);

  newName.value = '';
  newPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  let removeBtn = document.getElementsByClassName('btn-remove');  
  
  for (let k = 0; k < removeBtn.length; k++) {
  removeBtn[k].addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
  //... your code goes here
});
