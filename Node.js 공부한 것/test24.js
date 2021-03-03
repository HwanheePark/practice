var express = require('express');
var app = express();
var fs = require('fs');
var port = 3024;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.locals.pretty = true;

app.get('/', function(req, res){
    res.send(`Homepage!`);
});
app.get('/winter', function(req, res){
    res.send('<img src="image/winter.jpg">');
});
app.get('/Dynamic', function(req, res){
    var lis = '';
    for(var i = 0; i < 5; i++){
        lis += '<li>Coding Everybody!</li>';
    };
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dynamic</title>
    </head>
    <body>
        <h1>Dynamic Syntax</h1>
        <ul>
            ${lis}
        </ul>
        ${time}
    </body>
    </html>`
    res.send(output);
});
app.get('/pug', function(req, res){
    res.render('test24_', {user:'hwanhee', time:Date()});
});

app.listen(port, function(){
    console.log(`test24.js listening at http://localhost:${port}`);
});