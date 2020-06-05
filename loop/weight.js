const rawInput = require('readline-sync').question
var i = 0;
var sum = 0;
while(i<11){
    let input = rawInput('enter you weight');
    sum = sum + parseInt(input)
    i=i+1
}
var average = sum/11;
console.log(average);

if (average % 5 == 0){
    console.log("yes it is a divisible of 5");
    
}
else{
    console.log("not a divisible of");
    
}

