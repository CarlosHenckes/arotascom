var Request = require("request");
const url = 'https://arotas.herokuapp.com/loc/percorridas';

module.exports = function (app) {
    let list;
    var HomeController = {
        index: function (req, res) {
            res.render('home/index');
        },
        corridas: function (req, res) {
            res.render('home/corridas');
        },
        frota: function (req, res) {
            res.render('home/frota');
        },
        cadastro: function (req, res) {
            res.render('home/cadastro');
        },
        cadastrar: function (req, res) {
            Request.post({
                "headers": { "content-type": "application/json" },
                "url": "https://arotas.herokuapp.com/loc",
                "body": JSON.stringify({
                    "placa": req.body.placa,
                    "nomeMotorista": req.body.nomeMotorista,
                    "localizacao": {
                        "latitude": -23.574076,
                        "longitude": -46.623360
                    },
                    "status": "LIVRE"
                })
            }, (error, response, body) => {
                if (error) {
                    return console.dir(error);
                }
            });
            res.redirect('/frota');
        }
    };
    return HomeController;
};