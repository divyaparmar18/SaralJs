const rawInput = require('readline-sync').question
let questions = ["what is the capital of india","what is taught in ng","what is the capital of maharashtra","what is the capital of karnataka","what is the capital of Tamil nadu","wht do i love the most"]

var options = [['mumbai','delhi','goa','chennai',"50-50"],['software eng','teaching','councelor','sports',"50-50"],['mumbai','nashik','pune','satara',"50-50"],['hebal','kuhar','nandi','bangalore',"50-50"],['tricohilur','mavdipattu','vellimalai','chennai',"50-50"],['teaching','music','dance','code',"50-50"]]

var answers = [2,1,1,4,4,3]
var i = 0;
var l = options[i].length;
while (i<questions.length){
    j = 0;
    console.log(`* ${questions[i]}`)
    
    while (j < l){
        console.log(`${j+1} - ${options[i][j]}`)
        j++
    }
    var user = rawInput('enter your answer :- ');
    if(l==2){
    l = 4
    }
    
    if(user == answers[i]){
        console.log(`Congrats! you have crossed level ${i+1} and won ${i**500+1000}`)
    }
    
    
    else if(user == 5){
        l = 2
        console.log(answers[i]);
        if(answers[i] == 1){
            options[i].pop()
            options[i].pop()
        }
        else if(answers[i] == 2){
            options[i].pop()
            options[i].pop()
        }
        if(answers[i] == 3){
            options[i].shift()
            options[i].shift()
            answers[i] = 1
        }
        if(answers[i] == 4){
            options[i].shift()
            options[i].shift()
            answers[i] = 2
        }
        i = i - 1
        
        
    }
    else{
        console.log("Sorry! you lost :( ");
        break
    }
    i++
}
