const _ = require('underscore');
const fs = require('fs');

var arr = [1,2,3,4,5];
console.log(_.first(arr));
console.log(_.last(arr));

//Sync
console.log(1);
var data = fs.readFileSync('test11_data.txt', {encoding:'utf8'});
console.log(data);
console.log(2);

//Async
console.log(1);
fs.readFile('test11_data.txt', {encoding:'utf8'}, function(err, data){
    console.log(3);
    console.log(data);
    console.log(4);
});
console.log(2);