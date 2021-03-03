var express = require('express');
var app = express();
var port = 3025;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;

app.get('/', function(req, res){
    res.send(`<h1>Homepage</h1>`);
});
app.get('/form', function(req, res){
    res.render('test25_form');
});
app.get('/form_receiver', function(req, res){
    var title = req.query.title;
    var description = req.query.description;
    res.send(title+'<br>'+description);
});
app.post('/form_receiver', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+'<br>'+description);
});
app.get('/topic', function(req, res){

});
app.get('/topic/:id/:mode', function(req, res){
    res.send(req.params.id+'<br>'+req.params.mode);
});

app.listen(port, function(){
    console.log(`test25.js listening at http://localhost:${port}`);
});