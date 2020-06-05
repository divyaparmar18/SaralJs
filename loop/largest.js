const rawInput = require('readline-sync').question

var first = rawInput('enter a number ')
var second = rawInput('enter a num ')
var third = rawInput('enter an num ')

if(first>second&& first>third){
    console.log(first);
    
}
else if(second>first&&second>third){
    console.log(second);
    
}
else{
    console.log(third);
    
}