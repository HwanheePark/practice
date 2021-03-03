const _ = require('underscore');
var arr = [2,4,6,8,10];
console.log(_.first(arr));
console.log(arr[0]);
console.log(_.last(arr));
console.log(arr[arr.length-1]);
console.log(_.rest(arr, [3]));