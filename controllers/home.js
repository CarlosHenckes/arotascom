const https = require("https");
const url = 'https://arotas.herokuapp.com/loc/percorridas';

module.exports = function (app) {
    var HomeController = {
        index: function (req, res) {
            res.render('home/index');
        },
        corridas: function (request, response) {
            var lista = "";
            https.get(url, res => {
                res.setEncoding("utf8");
                res.on("data", data => {
                    //lista += data;
                });
                res.on("end", () => {
                    lista = JSON.parse(lista);
                    console.log(lista);
                });
                res.on("error", function (err) {
                    console.log(err);
                });
            });
            response.render('home/corridas', { lista : '{"placa":"CSA6410"}' });
        }
    };
    return HomeController;
};