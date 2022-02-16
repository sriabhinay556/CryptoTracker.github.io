document.querySelector(".foot").style.display = 'none';
document.querySelector(".para").style.display = 'none';
console.log("Hi");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        console.log("Inside");
        console.log(xhttp.responseText)
    }
    else{
        console.log('error')
    }
}
xhttp.open('GET','https://api.coingecko.com/api/v3/coins/bitcoin')
xhttp.send();
console.log("Bye");

