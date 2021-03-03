const _ = require('underscore');
var arr = [5,2,4,6,7,10];
function b(v1, v2){
    return v2-v1;
};

console.log(_.first(arr));
console.log(arr[0]);
console.log(_.last(arr));
console.log(arr[arr.length-1]);

arr.sort(b);
console.log(arr);
