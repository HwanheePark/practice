const { response } = require('express');
const express = require('express');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const multer = require('multer');
const _storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
const upload = multer({ storage: _storage });

app.use(bodyParser.urlencoded({ extended: false }))
const fs = require('fs');
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;
app.use('/user', express.static('uploads'));

app.get('/upload', function(req, res){
    res.render('test30_upload');
});
app.post('/upload', upload.single('userfile'), function(req, res){
    res.send(`uploaded : `+req.file.filename);
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
                res.render('test30', {_files:files, title:id, description:data});
            });
        } else {
            res.render('test30', {_files:files, title:`Hello~!`, description:`Let's Coding, Now~!`});
        }
    });
});
app.post('/topic_receiver', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/'+title, description, function(err){
        if(err){
            console.log(err);
            res.status(500).send(`Internet Server Error`);
        }
        res.redirect('/topic/'+title);
    });
});

app.get('/', function(req, res){
    res.send(`<h1>Homepage~!</h1>`);
});
app.listen(port, function(){
    console.log(`test30.js connected at http://localhost:${port}`);
});