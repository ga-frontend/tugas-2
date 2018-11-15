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

let end = document.getElementById("sudahselesai");


function akuorder() {
let stock1 = document.getElementById("stock1");
let stock2 = document.getElementById("stock2");
let stock3 = document.getElementById("stock3");
let a = document.getElementById("qty1").value;
let b = document.getElementById("qty2").value;
let c = document.getElementById("qty3").value;

if (a + b + c >= 1) {
  document.getElementById("area").style.display="block";
}
else{alert("Masukkan jumlah produk!");

}

stock1.innerHTML= product[0].stock - a ;
stock2.innerHTML= product[1].stock - b ;
stock3.innerHTML= product[2].stock - c ;

}

function selesai() {
let name = document.getElementById("index").value;
let email = document.getElementById("email").value;
let alamat = document.getElementById("alamat").value;
let hp = document.getElementById("hp").value;
let a = document.getElementById("qty1").value;
let b = document.getElementById("qty2").value;
let c = document.getElementById("qty3").value;

document.getElementById("sudahselesai").innerHTML = "TERIMA KASIH SUDAH MELAKUKAN ORDER"; 
document.getElementById("order-nama").innerHTML= "Nama: " + name ;
document.getElementById("order-email").innerHTML= "Email: " + email ;
document.getElementById("order-address").innerHTML= "Alamat: " + alamat ;
document.getElementById("order-phone").innerHTML= "No.Hp: " + hp ;

let total = a * product[0].price + b * product[1].price + c * product[2].price
document.getElementById("order-detail").innerHTML= "Total order anda Rp " + total ;
}

console.log(akuorder);

