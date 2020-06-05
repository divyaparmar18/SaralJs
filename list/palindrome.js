var name = ['m','a','g','i','a','m']
var reverseName = [];
var j = 0;
var i = name.length - 1;
var isPalindrom;
while (i >= 0){
    if(name[i] !== name[j]){
        isPalindrom = false;
        break
    }
    else{
        isPalindrom = true
    }
    j++
    i--
}
console.log(isPalindrom);

