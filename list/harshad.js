let num = 219;
let arr = Array.from(num.toString());
let harsh = 0;
const ele = arr.forEach(element => {
    harsh = harsh + parseInt(element)
    return harsh
});
console.log(harsh)
if(num%harsh==0){
    console.log("yes it is a harshad number");
    
}
else{
    console.log("it is not a harshad number")
}



