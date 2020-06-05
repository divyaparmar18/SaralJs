const rawInput = require('readline-sync').question

let findIndex = (query,list)=>{
    var i = 0;
    var index;
    while(i<list.length){
        if(query === list[i]){
            index = i
        }
        i++}
return index
}

var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var shifted_chars = ['c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b']

let encription = (plainText)=>{
    let encripted = "";
    for (const i of plainText) {
        if(chars.includes(i)){
            let charIndex = findIndex(i,chars);
            let newChar = shifted_chars[charIndex];
            encripted=encripted+newChar
        }
        else{
            encripted=encripted+i
        }
    }
    return encripted
}

let decription = (plainText)=>{
    let decripted = "";
    for (const i of plainText) {
        if(chars.includes(i)){
            let charIndex = findIndex(i,shifted_chars);
            let newChar = chars[charIndex];
            decripted=decripted+newChar
        }
        else{
            decripted=decripted+i
        }
    }
    return decripted
}


while(true){
    var input = rawInput('enter encrition or decription "e" or "d"')
    if(input == "e"){
        var msg = rawInput('enter a msg to encript');
        console.log(encription(msg))
    }
    else if(input == "d"){
        var msg = rawInput('enter a msg to decript');
        console.log(decription(msg))
    }
    else{
        var again = rawInput('again "y" or "no" ') 
        if(again == "no"){
            break
        }
        else{
            continue
        }
    }
}
