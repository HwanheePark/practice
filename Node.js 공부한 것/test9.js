const fs = require('fs');

//동기
console.log(1);
var data = fs.readFileSync('test9_data.txt', {encoding:'utf8'});
console.log(2);

//비동기
console.log(1);
fs.readFile('test9_data.txt', {encoding:'utf8'}, function(err, data){
    console.log(3);
    console.log(data);
    console.log(4);
});
console.log(2);