let product = [
  {
      name : 'usb',
      stock : 10,
      price : 120000
  },
  {
      name : 'laptop',
      stock : 2,
      price : 5500000
  },
  {
      name : 'hp',
      stock : 5,
      price : 2000000
  },
  {
      name : 'penghapus',
      stock : 0,
      price : 1500
  }
];


// ================================================== //
// ========== make table of product items =========== //
// ================================================== //
let tableBody = document.getElementById('table-body');

for (let i = 0; i < product.length; i++) {
    let tableRow = document.createElement('tr');
    let trInTableBody = tableBody.appendChild(tableRow);
    console.log(trInTableBody);
    
    let prop;
    for (prop in product[i]) {
        var tableData = document.createElement('td');
        trInTableBody.appendChild(tableData);
        tableData.textContent = product[i][prop];
    }
}


// ================================================== //
// ========== make function for shopping ============ //
// ================================================== //