var fs = require('fs');

//Sync
console.log(1);
var data = fs.readFileSync('public/text.txt', {encoding:'utf8'});
console.log(data);
console.log(2);


//Async
console.log(1);
fs.readFile('public/text.txt', {encoding:'utf8'}, function(err, s){
    console.log(3);
    console.log(s);
    console.log(4);
});
console.log(2);