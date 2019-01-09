let http = require('http');
let fs = require('fs');
const bodyParser = require('body-parser');
const request = require('request');
let express = require('express');
let app = express();
let date = require('./Tutorial/dataRequest/date');
//let stock = require('./Tutorial/dataRequest/apiCallTwo.js');
var company;

app.set('view engine', 'ejs'); //Damit index.ejs ansteuerbar ist 
app.use(express.static('public')); //Damit CSS verwendbar ist und geladen wird
app.use(bodyParser.urlencoded({ extended: true })); //body-Parser um das req.body Element zu nutzen, was in der

app.get('/', (req, res) => {
  res.render('index');
});

//Eingabefeld auf der index.ejs
 app.post('/', function (req, res) {
  company = req.body.company; //req.body (Value des UserInputs) kann durch body-parser ausgelesen werden
  console.log(company);
  var url = `https://api.iextrading.com/1.0/stock/${company}/price`;
  console.log(url);

  request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      var stock = body;
      console.log('Kurs:', stock);
      var stockText = `Der ${company} Kurs liegt aktuell bei ${stock} USD, gelistet am NASDAQ.`; 
      res.render('index', {stock: stockText});
      console.log(`Der ${company} Kurs liegt aktuell bei ${stock} USD, gelistet am NASDAQ.`);
    }
  });
}) 





//AppEngine spezifische config, damit der Server Responses empfängt
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

console.log(date.myDateTime());
