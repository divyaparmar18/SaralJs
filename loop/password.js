const rawInput = require('readline-sync').question

userInput = rawInput('enter a passwprd :- ')

if(userInput.length >= 6 && userInput.length <=16 && userInput.includes("$")){
    if(userInput.includes("2") || userInput.includes("8")){
        if(userInput.includes("A")||userInput.includes("Z")){
            console.log("strong Password");
            
        }
        else{
            console.log("weak password");
            
        }
    }
    else{
        console.log("weak password");
        
    }
}
else{
    console.log("weak password");
    
}