const express = require('express');
const app = express();
var port = 3000;

app.get('/', function(req, res){
    res.send(`Hellooooooo!`);
});
app.get('/login', function(req, res){
    res.send(`로그인하시오.`);
});
app.listen(port, function(){
    console.log(`app(test) listening at http://localhost:${port}`);
});