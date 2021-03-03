const { static } = require('express');
var express = require('express');
var app = express();
var port = 3029;
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var _storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
var upload = multer({ storage: _storage });
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;
app.use(express.static('public'));
app.use('/user', express.static('uploads'));

app.get('/upload', function(req, res){
    res.render('test29_upload');
});
app.post('/upload', upload.single('userfile'), function(req, res){
    res.send(`Uploaded!`);
});





app.get(['/topic', '/topic/:id'], function(req, res){
     fs.readdir('data', function(err, files){
        if(err){
            console.log(err);
            res.status(500).send(`Internet Server Error`);
        };
        var id = req.params.id;
        //id값이 있을 때
        if(id){
            fs.readFile('data/'+id, 'utf8', function(err, data){
                if(err){
                    console.log(err);
                    res.status(500).send(`Internet Server Error`);
                };
                res.render('test29_form', {_files:files, title:id, description:data});
            });
        //id값이 없을 때
        } else {
            res.render('test29_form', {_files:files, title:'Hello~!', description:'You can do it that you creat the information list'});
        };
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
        res.redirect('/topic/'+title);
    });
});

app.get('/', function(req, res){
    res.send(`<h1>Homepage~!</h1>`);
});
app.listen(port, function(){
    console.log(`test29.js connected at http://localhost:${port}`);
});