const express = require('express');
const app = express();
var port = 3020;

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('<h1>This is homepage~!!');
});
app.get('/winter', function(req, res){
    res.send('<img src = "/image/winter.jpg">');
});
app.get('/dynamic', function(req, res){
    var lis ='';
    for(var i = 0; i < 5; i++){
        lis += '<h2><li>Deepstate Out!!!</li></h2>'
    };
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thispage</title>
    </head>
    <body>
        <h1>Donald Trump will be finally win!</h1>
        <ul>
            ${lis}
        </ul>
        ${time}
    </body>
    </html>`
    res.send(output);
});

app.listen(port, function(){
    console.log(`test20 listening at http://localhost:${port}`);
});