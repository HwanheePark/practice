var express = require('express');
var app = express();
var port = 3026;
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.urlencoded({ extended: false }))
app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/topic/new', function(req, res){
    res.render('test26_new');
});
app.get('/topic', function(req, res){
    fs.readdir('data', function(err, files){
        if(err){
            console.log(err);
            res.status(500).send(`Internet Server Error`);
        };
        res.render('test26_view', {files:files});
    });
});
app.post('/topic', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/'+title, description, function(err){
        if(err){
            console.log(err);
            res.status(500).send(`Internet Server Error`);
        };
        var output = `
        Data Saved!<br><br>
        <a href='/topic/new'>Back</a>
        `
        res.send(output);
    });
});
app.get('/topic/new', function(req, res){
    res.render('test26_new');
});
app.get('/', function(req, res){
    res.send(`<h1>Homepage~!</h1>`);
});

app.listen(port, function(){
    console.log(`test26.js listening at http://localhost:${port}`);
});