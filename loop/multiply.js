const rawInput = require('readline-sync').question;
let i = 0
var num1 = rawInput('enter a number');
var num2 = rawInput('enter second number');
var power = 0;
while(i < num2){
    power = power + parseInt(num1)
    i++
}
console.log(power);
