
const url = 'https://arotas.herokuapp.com/loc/percorridas';

module.exports = function (app) {
    let list;
    var HomeController = {
        index: function (req, res) {
            res.render('home/index');
        },
        corridas: function (req, res) {            
            res.render('home/corridas');
        }
    };
    return HomeController;
};