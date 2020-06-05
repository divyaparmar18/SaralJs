const rawInput = require('readline-sync').question

var num = rawInput("enter a number");
var i = 2;
var isPrime;
while(i < num){
if(num % i == 0){
    isPrime = false
    break
}
else{
    isPrime = true
}
i++
}
console.log(isPrime);




// function isPrime(num) {
//     var prime = num != 1;
//     for(var i=2; i<num; i++) {
//         if(num % i == 0) {
//             prime = false;
//             break;
//         }
//     }
//     return prime;
// }

// console.log(isPrime(5));







