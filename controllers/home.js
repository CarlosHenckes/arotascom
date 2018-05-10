
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
        frota: function (req, res){
            res.render('home/frota');
        },
        cadastro: function(req, res){
            res.render('home/cadastro');
        },
        cadastrar: function(req, res){
            res.redirect('/frota');
        }
    };
    return HomeController;
};