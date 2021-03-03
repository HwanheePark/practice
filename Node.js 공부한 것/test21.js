const express = require('express');
const app = express();
var port = 3021;

app.set('view engine', 'pug');
app.set('views', './views');
if (app.get('env') === 'development') {
    app.locals.pretty = true;
  };

app.get('/topic/:id/:mode', function(req, res){
    res.send(req.params.id+' , '+req.params.mode);
});
app.get('/topic', function(req, res){
    var topics = [
        '<p>Javascript is...</p>',
        '<p>Node.js is...</p>',
        '<p>Express is...</p>'
    ];
    var output = `
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">Node.js</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.query.id]}
    ${req.query.name}
    `;
    res.send(output);
});
app.get('/', function(req, res){
    res.send(`<h1>This is a homepage!</h1>`);
});
app.get('/template', function(req, res){
    res.render('test21_', {time:Date()});
});

app.listen(port, function(){
    console.log(`test21.js listening at http://localhost:${port}`);
});