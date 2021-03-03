var fs = require('fs');

//Sync
console.log(1);
var Sync_data = fs.readFileSync('public/text.txt', {encoding:'utf8'});
console.log(2);
console.log(Sync_data);
console.log(3);

//Async
console.log(1);
fs.readFile('public', {encoding:'utf8'}, function(err, data){
    console.log(3);
    console.log(data);
    console.log(4);
});
console.log(2);