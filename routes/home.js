module.exports = function (app) {
    var home = app.controllers.home;
    app.get('/', home.index);
    app.get('/corridas', home.corridas);
    app.get('/frota', home.frota);
    app.get('/cadastro', home.cadastro);
    app.post('/cadastrar', home.cadastrar);
    app.get('/sobre', home.sobre);
};