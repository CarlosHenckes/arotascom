var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var porta = process.env.PORT || 3000;
app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.listen(porta, function () {
  console.log("Aplicação no ar.");
});