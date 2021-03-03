const express = require('express');
const app = express();
const port = 3014;

app.use(express.static('public'));
app.get('/', function(req, res){
    res.send(`This is homepage!`);
});
app.get('/winter', function(req, res){
    res.send(`<img src = '/image/winter.jpg'>`);
});
app.get('/test', function(req, res){
    res.send(`<h1>This is Test page</h1>`);
});
app.get('/dynamic', function(req, res){
    var lis = '';
    for(var i = 0; i < 10; i++){
        lis = lis + '<li>Coding Everybody!</li>';
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
        This is Dynimic page~!
        <ul>
            ${lis}
        </ul>
        ${time}
    </body>
    </html>`;
    res.send(output);
});

app.listen(port, function(){
    console.log(`test14 listening at http://localhost:${port}`);
});