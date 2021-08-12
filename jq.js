document.querySelector(".foot").style.display = 'none';
document.querySelector(".para").style.display = 'none';
$(".button").click(function () {
    const coin = document.querySelector(".select").value;
    const url = `https://api.cryptonator.com/api/ticker/${coin}`
    $.getJSON(url, function (data) {
        let name = data.ticker.base;
        let price = data.ticker.price;
        let volume = data.ticker.volume;
        document.querySelector(".foot").style.display = 'block';
        document.querySelector(".coinprice").textContent = price;
        document.querySelector(".coinvolume").textContent = volume;
        document.querySelector(".coinname").textContent = name;
        let timestamp = data.timestamp;
        let ts_ms = timestamp * 1000;
        let ob = new Date(ts_ms);
        document.querySelector(".para").style.display = 'block';
        document.querySelector(".para").textContent = `This data is as per ${("0" + ob.getHours()).slice(-2)}:${("0" + ob.getMinutes()).slice(-2)} ${("0" + ob.getDate()).slice(-2)}-${("0" + (ob.getMonth() + 1)).slice(-2)}-${ob.getFullYear()} `;
    });
});
