document.querySelector(".foot").style.display = 'none';
document.querySelector(".para").style.display = 'none';

$(".button").click(function () {
const coin = document.querySelector(".select").value;
console.log(coin);
const url = `https://api.coingecko.com/api/v3/coins/${coin}`;
var xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    if(this.readyState==4 && this.status==200){
        var data = JSON.parse(xhttp.responseText)
        let name = data.id;
        let price = data.market_data.current_price.usd;
        let rank = data.market_cap_rank;
        document.querySelector(".foot").style.display = 'block';
        document.querySelector(".coinprice").textContent = price;
        document.querySelector(".coinrank").textContent = rank;
        document.querySelector(".coinname").textContent = name;
        document.querySelector(".para").style.display = 'block';
        document.querySelector(".para").textContent = 'This data is as per : '+new Date().toLocaleString();
    }
}
xhttp.open('GET',url)
xhttp.send();

})

