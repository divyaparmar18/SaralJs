let mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
let subStr = "over"
let replacementStr = "on"
let ar = mainStr.split(" ");



let i = 0;
while (i < ar.length){
    if(ar[i] == subStr){
        ar[i] = replacementStr;
    }
    i++
}
console.log(ar);
