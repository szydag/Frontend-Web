
var kontrol = 0;
function yukselt(){
    if( (kontrol%2) == 0){
        document.getElementById("box").style.height = "620px";
        document.getElementById("daha").innerHTML = "Daha az göster &#5169;";
    }else{
        document.getElementById("box").style.height = "200px";
        document.getElementById("daha").innerHTML = "Daha fazla göster &#5167;";
    }
    kontrol++;
}
var sayac=1;
function ilerikaydir(){
    switch(sayac) {
    case 1:
        document.getElementById("galeri").style.left = "-100%";
        sayac++;
        document.getElementById("geri").disabled=false;
        break;
    case 2:
        document.getElementById("galeri").style.left = "-200%";
        sayac++;
        document.getElementById("ileri").disabled=true;
        break;
}
}
function gerikaydir(){
    switch(sayac) {
    case 2:
        document.getElementById("galeri").style.left = "0%";
        sayac--;
        document.getElementById("geri").disabled=true;
        break;
    case 3:
        document.getElementById("galeri").style.left = "-100%";
        sayac--;
        document.getElementById("ileri").disabled=false;
        break;
}
}



