let jkjil = document.getElementById("result");
jkjil.style.display = "none";
let product = [
    {
        name : 'USB',
        stock : 5,
        price : 100000
    },
    {
        name : 'Laptop',
        stock : 10,
        price : 200000
    },
    {
        name : 'Hp',
        stock : 15,
        price : 300000
    },
    {
        name : 'Penghapus',
        stock : 20,
        price : 400000
    },
    {
        name : 'Tes',
        stock : 25,
        price : 500000
    }
];

const tb = document.getElementById("tabel");
for (let i = 0; i < product.length; i++) {
    let h = String(i);
    let tr = document.createElement("tr");
    let td = document.createElement('td');
    tr.appendChild(td);
    td.innerHTML = product[i].name;
    tr.setAttribute("class", "tdHover");
    
    let td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.setAttribute("class", "stokstok");
    td3.innerHTML = "<div align=\"center\"><input type=\"number\" class=\"stokuhuy\" id=\"stok" + h + "\" value=\"" + product[i].stock + "\" readonly> </div>";
  
    
    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.innerHTML = "<div align=\"center\"><button type=\"button\" id=\"sub"+ h +"\"  class=\"btn btn-info\">-</button><input type=\"number\" id=\"jumlah"+ h +"\" value=\"0\" onChange=berubah(" + h + ")/ class=\"inputJumlah\"><button type=\"button\" id=\"add"+ h +"\"  class=\"btn btn-info\">+</button></div>";
    let td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.innerHTML = "<div align=\"center\"><input type=\"text\" id=\"harga"+ h +"\" value=" + 0 + " class=\"hrgg\" readonly></div>";
    td2.setAttribute("width", "100px");
  
    tabel.appendChild(tr);
  tr.setAttribute("class", "trHover");
    // option.setAttribute("value", product[i].name);
    // option.text = product[i].name;
    // tb.appendChild(tr);
}
let trq = document.createElement("tr");
let tdq = document.createElement("td");
tdq.setAttribute("colspan", "3");
trq.appendChild(tdq);
tdq.innerHTML = "<h4>Total</h4>";


let tdqq = document.createElement("td");
trq.appendChild(tdqq);
tdqq.innerHTML = "<div align=\"center\"><input type=\"text\" id=\"total\" value=" + 0 + " class=\"totalll\"  readonly></div>";
tabel.appendChild(trq);
trq.setAttribute("class", "trHover");

for (let j = 0; j < product.length; j++) {
let k = String(j);
let ahay = "sub"+k;
let ahayo = "jumlah"+k;
let ahaye = "harga"+k;
let ahayi = product[j].price;

document.getElementById(ahay).addEventListener('click', function(){
//   let nomor = product.findIndex(i => i.name === this.value);
  let aha = document.getElementById(ahayo).value;
  let ahayet = parseInt(ahayi);
  // let total1 = document.getElementById("total").value; 
  // let ttl1 = parseInt(total1);
  if (aha <= 0){
    document.getElementById(ahayo).value = 0;
    document.getElementById(ahaye).value = 0;
    let poiei = 0;
    
            for(let ei = 0; ei < product.length; ei++){
              let defei = "harga" + ei;
              let ghiei = document.getElementById(defei).value;
              
              let yuiei = parseInt(ghiei);
              poiei += yuiei;
              document.getElementById("total").value = poiei;
            } 
  }
  else{
    document.getElementById(ahayo).value -= 1;
    let wer = (aha-1)*ahayi;
    document.getElementById(ahaye).value = wer;
    let poieo = 0;
    
            for(let eo = 0; eo< product.length; eo++){
              let defeo = "harga" + eo;
              let ghieo = document.getElementById(defeo).value;
              
              let yuieo = parseInt(ghieo);
              poieo += yuieo;
              document.getElementById("total").value = poieo;
            } 
    // let tol1 = ttl1 - ahayet;
    // document.getElementById("total").value = tol1;
  }
//   document.getElementById("harga").innerHTML = 'Rp. ' + product[nomor].price;
 });
}


for (let l = 0; l < product.length; l++) {
let m = String(l);
let cui = "add"+m;
let cuit = "jumlah"+m;
let cuay = "harga"+m;

document.getElementById(cui).addEventListener('click', function(){
  let cuayi = product[m].price;
  let cuayit = parseInt(cuayi);
let total2 = document.getElementById("total").value; 
  let ttl2 = parseInt(total2);
  
  let cu = document.getElementById(cuit).value;
  let cul = parseInt(cu);
  let jaja = product[l].stock;
  let jajal = parseInt(jaja);
  
   if(cul>=jajal){
     document.getElementById(cuit).value = cul;
     let bhj = cuayi*cul;
     document.getElementById(cuay).value = bhj;
     let poiey = 0;
    
            for(let ey = 0; ey < product.length; ey++){
              let defey = "harga" + ey;
              let ghiey = document.getElementById(defey).value;
              
              let yuiey = parseInt(ghiey);
              poiey += yuiey;
              document.getElementById("total").value = poiey;
            } 
   }
   else{
    let luc = cul+1;
    document.getElementById(cuit).value = luc;
    let wek = luc*cuayi;
    document.getElementById(cuay).value = wek;
     // let tol2 = ttl2 + cuayit;
     // document.getElementById("total").value = tol2;
     let poieu = 0;
    
            for(let eu = 0; eu < product.length; eu++){
              let defeu = "harga" + eu;
              let ghieu = document.getElementById(defeu).value;
              
              let yuieu = parseInt(ghieu);
              poieu += yuieu;
              document.getElementById("total").value = poieu;
            } 
   }
  
  // for(let z = 0; z < product.length; l++){
  // let variab = document.getElementById(cuay).value;
  // arrTotalChange.push();
  // // }
      
 });
}

for (let u = 0; u < product.length; u++) {
let idk = "jumlah" + u;
let idj = "harga" + u;
  
 
      

document.getElementById(idk).addEventListener('change', function(){
 
let hoho = product[u].stock;
let hihi = product[u].price;
let piece = document.getElementById(idk).value;
let total3 = document.getElementById("total").value; 
let ttl3 = parseInt(total3);
if(piece<=0){
    document.getElementById(idk).value = 0;
    document.getElementById(idj).value = 0;
    let poiet = 0;
    
            for(let et = 0; et < product.length; et++){
              let defet = "harga" + et;
              let ghiet = document.getElementById(defet).value;
              
              let yuiet = parseInt(ghiet);
              poiet += yuiet;
              document.getElementById("total").value = poiet;
            } 
}
else if(piece>=hoho){
     document.getElementById(idk).value = hoho;
     let jgh = hoho*hihi;
     document.getElementById(idj).value = jgh;
     let poier = 0;
    
            for(let er = 0; er < product.length; er++){
              let defer = "harga" + er;
              let ghier = document.getElementById(defer).value;
              
              let yuier = parseInt(ghier);
              poier += yuier;
              document.getElementById("total").value = poier;
            }  
}
else{
    document.getElementById(idk).value = piece;
    let ljk = hihi*piece;
    document.getElementById(idj).value = ljk;
    let poi = 0;
    
            for(let f = 0; f < product.length; f++){
              let def = "harga" + f;
              let ghi = document.getElementById(def).value;
              
              let yui = parseInt(ghi);
              poi += yui;
              document.getElementById("total").value = poi;
            } 
}

});
}
function beliSekarang(){
  let be_total = document.getElementById("total").value;
  jkjil.style.display = "block";
  // let table_name_hidden = document.getElementById("tabel");
  let button_name_hidden = document.getElementById("kudu_hilang");
  button_name_hidden.style.display = "none";
  // table_name_hidden.style.display = "none";
    document.getElementById("result").innerHTML = "Total Belanja : Rp. " + be_total;
  for (let be = 0; be < product.length; be++) {
    let btn_add = "add" + be;
    let btn_sub = "sub" + be;
    let be_stock = product[be].stock;
    // let int_be_stock = parseInt(be_stock);
    let be_name = product[be].name;
    let be_jumlah = "jumlah" + be;
    let be_jumlah_skrg = document.getElementById(be_jumlah).value;
    let be_harga = "harga" + be;
    let be_stok = "stok" + be;
    let ccd = be_stock - be_jumlah_skrg;
    product[be].stock = ccd;
    document.getElementById(be_stok).value = ccd;
    document.getElementById(be_jumlah).readOnly = true;
    document.getElementById(btn_add).disabled = true;
    document.getElementById(btn_sub).disabled = true;
  }
  
}