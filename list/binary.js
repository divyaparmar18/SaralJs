var binaryNumber = [1, 2, 0, 1, 1, 0, 1, 1]
var i = binaryNumber.length-1;
var j = 0;
var sum = 0;
var num;
while (i >= 0){
    if(binaryNumber[i] > 1 || binaryNumber < 0){
        console.log("invalid input ");
        break
        
    }
    else{
        if(binaryNumber[i] !== 0){
            num = (2**j)
        }
        else{
            num = 0
        }
       sum = sum + num
        j++
        i--
       
    }
    
}
console.log(sum);





// console.log(sum);

    