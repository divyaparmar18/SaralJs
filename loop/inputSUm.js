const rawInput = require('readline-sync').question

var i = 1
var num = 0;

while(i <= 10){
    var userInput = rawInput("put any number : ");
    num = num + parseInt(userInput)
    i++
}
console.log(num);



