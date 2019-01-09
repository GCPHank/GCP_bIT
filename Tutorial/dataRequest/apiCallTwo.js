var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var main = require('../../server');

var stockPrice = 0; 
var request = new XMLHttpRequest(); 

//request.open( 'GET', '/dataRequest/data.txt', true);
request.open( 'GET', 'https://api.iextrading.com/1.0/stock/aapl/price', false);   
request.onload = function() {
    if (request.status != 200) {
        document.write(request.statusText + 'Ein Fehler ist aufgetreten')
        document.write(this.responseText);
    } else {
        stockPrice = request.responseText;     
    }    
return stockPrice;
}

request.send();

console.log(main.company + "Import in apiCall")

exports.stockPrice = stockPrice;