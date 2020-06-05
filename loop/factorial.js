var i = 1
var fact = 1;
while(i<=7){
    fact = fact * i
    i++
}
console.log(fact);

var string_list = ["Rishabh", "Rishabh", "Abhishek", "Rishabh", "Divyashish", "Divyashish"]
var newArray = [];
i = 0
while(i<string_list.length){
    if(!newArray.includes(string_list[i]))
    newArray.push(string_list[i])
    i++
}
console.log(newArray);


