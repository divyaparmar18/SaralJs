var first = [1,2,3,4,5,6]
var second  = [2,3,1,0,6,7]
var diff = first.filter(element =>!second.includes(element));
console.log(diff);


var difference = first.filter(x => !second.includes(x));
console.log(difference);


var difference = first.filter(x => second.indexOf(x) === -1);
console.log(difference);


var b = new Set(second);
var difference = first.filter(x => !b.has(x));
console.log(difference);

//optional with library

// var _ = require('underscore');

// var first = [ 1, 2, 3, 4, 5 ];
// var second = [ 4, 5, 6 ];

// var difference = _.difference(first, second);
// console.log(difference);

