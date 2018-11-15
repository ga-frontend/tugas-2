let product = [
    {
        name : 'USB Unyu 16GB: Hari SENIN harga NAIK',
        stock : 3,
        price : 110.000
    },
    {
        name : 'CASE LAPTOP: Limitted Edition',
        stock : 2,
        price : 980.000
    },
    {
        name : 'TAS LAPTOP: Banting harga',
        stock : 2,
        price : 199.000
    }
]

function pesan() {
    let stock1 = document.getElementById("stock1");
    let stock2 = document.getElementById("stock2");
    let stock3 = document.getElementById("stock3");
    let produk1 = document.getElementById("jumlah1").value;
    let produk2 = document.getElementById("jumlah2").value;
    let produk3 = document.getElementById("jumlah3").value;


stock1.innerHTML= product[0].stock - produk1;
stock2.innerHTML= product[1].stock - produk2;
stock3.innerHTML= product[2].stock - produk3;
}

console.log(pesan);