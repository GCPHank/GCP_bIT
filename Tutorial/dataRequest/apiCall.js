var request = new XMLHttpRequest();

//request.open( 'GET', '/dataRequest/data.txt', true);
request.open( 'GET', 'https://api.iextrading.com/1.0/stock/aapl/price', true);
request.send();
request.onload = function() {
    if (request.status != 200) {
        document.write(request.statusText + 'Ein Fehler ist aufgetreten')
        document.write(this.responseText)
    } else {
        document.write('Der aktuelle Apple Kurs ist ' + request.responseText + ' USD')
    }

} 

