const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));
app.get('/', function(req, res){
    res.send(`<h1>This is homepage.</h1>`);
});
app.get('/winter', function(req, res){
    res.send(`<img src = '/winter.jpg'>`);
});

app.listen(port, function(){
    console.log(`test12.js listening at http://localhost:${port}`);
});