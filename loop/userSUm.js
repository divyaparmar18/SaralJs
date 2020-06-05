const rawInput = require('readline-sync').question

var loop = rawInput("enter a number : ");
i= 0;
sum = 0;

while (i<loop){
    var num = rawInput("enter a number : ");
    sum = sum +parseInt(num)
    i++
}

console.log(sum);
