const express = require('express');
const app = express();
var port = 3022;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'Pug');
app.set('views', './views');
if (app.get('env') === 'development') {
    app.locals.pretty = true;
  };  

app.get('/form', function(req, res){
    res.render('test22_');
});
app.get('/form_receiver', function(req, res){
    var title = req.query.title;
    var description = req.query.description;
    res.send(title+' , '+description);
});
app.post('/form_receiver', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+' , '+description);
});
app.get('/', function(req, res){
    res.send(`<h1>Hello world~!!</h1>`);
});

app.listen(port, function(){
    console.log(`test22.js listening at http://localhost:${port}`);
});