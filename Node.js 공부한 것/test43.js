const express = require('express');
const app = express();
var port = 3043;
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;

app.get(['/topic', '/topic/:id'], function(req, res){
    fs.readdir('data', function(err, files){
        if (err) {
            console.log(err);
            res.status(500).send(`Internet Server Error`);
        }
        var id = req.params.id;
        if (id) {
            fs.readFile('data/'+id, 'utf8', function(err, data){
                
            });
        } else {

        }
    });
});
app.post('/topic', function(req, res){
    
});

app.listen(port, function(){
    console.log(`test43.js listening at http://localhost:${port}`);
});