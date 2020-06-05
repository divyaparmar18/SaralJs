var sentence = "NavGurukul is an alternative to higher education reducing the barriers of current formal education system"
let breakIntoWords = (sentence) =>{
let i = 0;
let list = []
let str = ""
while(i<sentence.length){
   if(sentence[i] == " "){
    list.push(str)
    str = ""
    }
    else{
        str=str+sentence[i]
    }
    i++

}
return list
}

console.log(breakIntoWords(sentence))

