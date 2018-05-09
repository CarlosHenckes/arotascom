module.exports = function (app) {
    var home = app.controllers.home;
    app.get('/', home.index);
    app.get('/corridas', home.corridas);
    app.get('/frota', home.frota);
};