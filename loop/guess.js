const rawInput = require('readline-sync').question
var i = 1;
let comp = (Math.floor(Math.random() * 10))



while (i <= 5){
    var input = rawInput("enter a number between 1 to 10 : ");
    if(input == comp){
        console.log("you won");
        break
        
    }
    else if(i == 5){
        console.log("sorry you lost");

        
    }
    else{
        console.log("try again");
        
    }
    
    
    i=i+1
}
console.log(comp);
