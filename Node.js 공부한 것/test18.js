const express = require('express');
const app = express();
const port = 3018;

app.set('view engine', 'pug');
app.set('views', './views');
if (app.get('env') === 'development') {
    app.locals.pretty = true;
  }
app.use(express.static('public'));
app.get('/', function(req, res){
    res.send(`<h1>This is homepage~!</h1>`);
});
app.get('/template', function(req, res){
    res.render('temp', {time:Date(),user:'hwanhee'});
});
app.get('/test', function(req, res){
    res.render('test_1');
});
app.listen(port, function(){
    console.log(`test18.js listening at http://localhost:${port}`);
});