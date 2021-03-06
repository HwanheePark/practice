var fs = require('fs');

//Sync
console.log(1);
var data = fs.readFileSync('public/text.txt', {encoding:'utf8'})
console.log(2);
console.log(data);
console.log(3);

//Async
console.log(1);
fs.readFile('public/text.txt', {encoding:'utf8'}, function(err, as_data){
    if(err){
        console.log(err);
    };
    console.log(3);
    console.log(as_data);
    console.log(4);
});
console.log(2);