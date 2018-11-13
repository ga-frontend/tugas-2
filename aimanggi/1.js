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

let nama = document.getElementById("index").value;
let email = document.getElementById("email").value;
let alamat = document.getElementById("alamat").value;
let hp = document.getElementById("hp").value;
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


stock1.innerHTML= product[0].stock - document.getElementById("qty1").value ;
stock2.innerHTML= product[1].stock - document.getElementById("qty2").value ;
stock3.innerHTML= product[2].stock - document.getElementById("qty3").value ;

}

function selesai() {
document.getElementById("sudahselesai").innerHTML = "TERIMA KASIH SUDAH MELAKUKAN ORDER"; 
}

console.log(akuorder);

