let product = [
  {
  name : 'hijab1',
  stock : 12,
  price : 149000
  },
  {
  name : 'hijab2',
  stock : 1,
  price : 149000
},
{
  name : 'hijab3',
  stock : 7,
  price : 149000
  },
];

let a = document.getElementById("product").value;
let nama = document.getElementById("index").value;
let email = document.getElementById("email").value;
let alamat = document.getElementById("alamat").value;
let hp = document.getElementById("hp").value;
let end = document.getElementById("sudahselesai");


function akuorder() {
let stock1 = document.getElementById("stock1");
let stock2 = document.getElementById("stock2");
let stock3 = document.getElementById("stock3");

  if (a = 1) {
  stock1.innerHTML= product[0].stock - document.getElementById("qty").value ;
}

else if (a = 2) {
  stock2.innerHTML= product[1].stock - document.getElementById("qty").value ;
}

else if (a = 3) {
  stock3.innerHTML= product[2].stock - document.getElementById("qty").value ;
}

else { stock3.innerHTML= 0;
}

document.getElementById("sudahselesai").innerHTML = "TERIMA KASIH SUDAH MELAKUKAN ORDER";
}





console.log(akuorder);

