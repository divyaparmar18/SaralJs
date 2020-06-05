var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var subStr = "over"
// var arrayMain = mainStr.split(" ");
var i = 0;
while(i<mainStr.length){
    if(mainStr[i] == subStr){
        arrayMain.splice(i,1)
        i--
    }
    i++
}
console.log(mainStr);


