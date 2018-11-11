let product = [
  {
      name : 'USB',
      stock : 10,
      price : 120000,
  },
  {
      name : 'Laptop',
      stock : 2,
      price : 5500000,
  },
  {
      name : 'Smartphone',
      stock : 5,
      price : 2000000,
  },
  {
      name : 'Charger',
      stock : 4,
      price : 150000, 
  }
];


// ================================================== //
// ========== make table of product items =========== //
// ================================================== //
let tableBody = document.getElementById('table-body');

for (let i = 0; i < product.length; i++) {
    let tableRow = document.createElement('tr');
    let trInTableBody = tableBody.appendChild(tableRow);
    
    let prop;
    for (prop in product[i]) {
        var tableData = document.createElement('td');
        trInTableBody.appendChild(tableData);
        tableData.textContent = product[i][prop];
    }

    // Add Buy Button last column
    let tableButton = document.createElement('td');
    let buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';
    tableButton.appendChild(buyButton);
    trInTableBody.appendChild(tableButton);

    // Set Buy Button attribute
    buyButton.setAttribute('class', 'btn btn-buy');
    buyButton.setAttribute('id', 'buy-btn-' + i);
}

// ================================================== //
// =========== list shopping cart items ============= //
// ================================================== //

let shoppingCart = document.getElementById('shopping-cart');
let btnList = document.getElementsByClassName('btn-buy');

// add evenlistener to buy-btn
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', function clickBuy() {
        let itemCard = document.createElement('div');
        itemCard.setAttribute('class', 'container flex-space-between selected-item');
        itemCard.setAttribute('id', product[i].name.toLowerCase());
        shoppingCart.appendChild(itemCard);

        itemName(i, itemCard);
        itemQuantity(i, itemCard);
        totalItemPrice(i, itemCard);
        showCheckoutSection(i);

        product[i].updateStock = function(sold) {
            this.stock -= sold;
        };
    });
};


function itemName(i, itemCard) {
    let itemBuy = document.createElement('div');
    itemBuy.textContent = product[i].name;
    itemCard.appendChild(itemBuy);
}

function itemQuantity(i, itemCard) {
    let quantityDiv = document.createElement('div');
    let quantity = document.createElement('input');
    quantity.setAttribute('type', 'number');
    quantity.setAttribute('min', '1');
    quantity.setAttribute('max', product[i].stock);
    quantity.setAttribute('value', '1')
    quantity.setAttribute('id', product[i].name.toLowerCase() + 'Quantity');
    quantityDiv.appendChild(quantity);
    itemCard.appendChild(quantityDiv);
}

function totalItemPrice(i, itemCard) {
    let price = product[i].price;
    let inputQuantity = document.getElementById(product[i].name.toLowerCase() + 'Quantity');
    let howMany = inputQuantity.value;
    let totalPrice = price * howMany;
    finalPrice += price;
    console.log(finalPrice);

    let itemsPrice = document.createElement('div');
    itemsPrice.textContent = 'Rp. ' + totalPrice;
    itemCard.appendChild(itemsPrice);

    inputQuantity.addEventListener('click', function() {
        howMany = inputQuantity.value;
        totalPrice = price * howMany;
        itemsPrice.textContent = 'Rp. ' + totalPrice;
        itemCard.appendChild(itemsPrice);
        return totalPrice;
    });
    
    inputQuantity.addEventListener('click', function() {
        finalPrice += price;
        updateFinalPrice();
        return finalPrice;
    });
};


// ================================================== //
// ==================== checkout ==================== //
// ================================================== //
let finalPrice = 0;
function showCheckoutSection(i) {
    let checkoutSection = document.getElementById('checkout');
    checkoutSection.style.visibility = 'visible';
    checkoutSection.style.bottom = '0';

    updateFinalPrice();
}

function updateFinalPrice() {
    document.getElementById('finalPrice').textContent = finalPrice;
}

document.getElementById('btn-checkout').addEventListener('click', function() {
    let selectedItems = document.getElementsByClassName('selected-item');
    for (let i = 0; i < selectedItems.length; i++) {
        
    }
})