var _ = require('underscore');
var arr = [1,2,3,4,5,10,50,100];
console.log(arr[0]);
console.log(_.first(arr));
console.log(arr[arr.length-1]);
console.log(_.last(arr)+'\n\n');

function b(v1, v2){
    return v2 - v1;
};
console.log(arr.sort());
console.log(arr.sort(b));
console.log(arr.sort(function(v1, v2){return v1-v2}));

function c(callback){callback()};
c(function(){console.log('Hi!!!')});