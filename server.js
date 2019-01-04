let http = require('http');
let fs = require('fs');
const express = require('express');
const app = express();

//404 response
function send404Response(response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page not found");
    response.end();
}

// Normaler User Request --> Vorerst nicht benötigt
function onRequest(request, response) { // request = Was wurde vom User angefragt? response = Schickt Antwort auf Anfrage zurück.
        if (request.method == 'GET' && request.url == '/'){
        console.log("User made request" + request.url);
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./Tutorial/main/index.html").pipe(response);
         } else {
        send404Response(response);
    }
}

//* http.createServer(onRequest).listen(8888); // Erstellt Server sobald angefordert von User, welcher auf Port 8888 zuhört
//console.log("Server running!"); //Log sobald Server läuft

//AppEngine spezifische config, damit der Server Responses empfängt

app.get('/', (req, res) => {
    
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./Tutorial/main/index.html").pipe(res);
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});