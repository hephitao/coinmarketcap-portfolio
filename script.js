const dollarContainer = document.getElementById('dollar');
const btcAmount = document.getElementById('btc-amount');
const ethAmount = document.getElementById('eth-amount');

const apikey = {
    key:'XXX-YOUR-API-KEY'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key)
    .then(response => response.json())
    .then(btcdata => displayData(btcdata));

const displayData = btcdata => {
    const btc = btcdata.data[0].quote.USD.price.toFixed(0);
    btcAmount.textContent = `$${btc} USD`;

}
