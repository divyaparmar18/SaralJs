const rawInput = require('readline-sync').question

var won = ()=>{
    console.log("You won :)");
    
}

var lost = ()=>{
    console.log('You Lost :(');
    
}

while(true){
   let  userInput = rawInput('Enter rock or paper or scissor :- ');
   let options = ['rock','paper','scissor']
   let com = options[Math.floor(Math.random()*3)];
   if(!options.includes(userInput)){
       console.log('Invalid Input');
       
   }
   else{
   
   if(userInput==com){
       console.log("Draw");
       
   }
   else if(userInput == "rock" && com == "paper"){
   (lost());
 }
 else if(userInput == "scissor" && com == "rock"){
    (lost());
     
 }
 else if(userInput == "paper" && com == 'scissor'){
     (lost());
     
 }
 else if(userInput == "paper" && com == "rock"){
     (won())
 }
 else if(userInput == "rock" && com == "scissor"){
    (won())
}
else if(userInput == "scissor" && com == "paper"){
    (won())
}

var again = rawInput('do you want to play again if yes then press "y" if no then press "no" : - ');
if(again == "no"){
    break
}
}
}