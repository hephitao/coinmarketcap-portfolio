const dollarContainer = document.getElementById('dollar');
const btcAmount = document.getElementById('btc-amount');
const ethAmount = document.getElementById('eth-amount');

const apikey = {
    key:'ca8e00b7-b0b5-4b72-81a4-136d52b5146d'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key)
    .then(response => response.json())
    .then(btcdata => displayData(btcdata));

const displayData = btcdata => {
    const btc = btcdata.data[0].quote.USD.price.toFixed(0);
    btcAmount.textContent = `$${btc} USD`;

}
