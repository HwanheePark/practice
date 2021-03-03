var express = require('express');
var app = express();
var port = 3028;
var fs = require('fs');
var bodyParser = require('body-parser');
var multer  = require('multer')
var _storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
var upload = multer({ storage : _storage });
const { title } = require('process');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;
app.use('/user', express.static('uploads'));

app.get('/upload', function(req, res){
    res.render('test28_upload');
});
app.post('/upload', upload.single('userfile'), function(req, res){
    console.log(req.file);
    res.send('Uploaded : '+req.file.filename);
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
                res.render('test28_file', {_files:files, title:id, description:data});
            });
        } else {
            res.render('test28_file', {_files:files, title:'Welcome!',description:'Server side Javascript'})
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
    res.send(`Homepage!`);
});
app.get('/winter', function(req, res){
    res.send(`<img src="image/winter.jpg">`);
});
app.get('/template', function(req, res){
    res.render('test28_view', {_pug:'Useful Module!',time:Date()});
});

app.listen(port, function(){
    console.log(`test28.js listening at http://localhost:${port}`);
});