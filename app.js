var express = require('express');
var load = require('express-load');
var porta = process.env.PORT || 3000;
app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);


app.listen(porta, function () {
  console.log("Aplicação no ar.");
});