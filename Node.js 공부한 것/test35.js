var express = require('express');
var app = express();
var port = 3035;
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;
app.use(`/user`, express.static('uploads'));

app.get(`/upload`, function(req, res){
    res.render('test35_upload');
});
app.post('/upload_receiver', upload.single('userfile'), function(req, res){
    res.send(`Uploaded! : ${req.file.filename}`);
});





app.get(['/topic', '/topic/:id'], function(req, res){
    fs.readdir('data', function(err, files){
        if (err){
            console.log(err);
            res.status(500).send(`Internet Server Error`);
        }
        var id = req.params.id;
        if (id){
            fs.readFile('data/'+id, 'utf8', function(err, data){
                if (err){
                    console.log(err);
                    res.status(500).send(`Internet Server Error`);
                }
                res.render('test35', {files:files, title:id, description:data});
            });
        } else {
            res.render('test35', {files:files, title:`Hello World!`, description:`Are You Coding Me?`});
        }
    })
});
app.post('/topic', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/'+title, description, function(err){
        if (err){
            console.log(err);
            res.status(500).send(`Internet Server Error`);
        }
        res.redirect('/topic/'+title);
    });
});

app.listen(port, function(){
    console.log(`test35.js running at http://localhost:${port}`);
});