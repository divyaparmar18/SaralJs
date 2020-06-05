var numbers = [150, 80, 150, 140, 56, 112, 5, 10, 1]
var max = numbers[0]
var secondMax = null
i = 1;
while(i < numbers.length){
    
    if(numbers[i] > max){
         secondMax , max = max,numbers[i]
    }
    else if(max > numbers[i] && numbers[i] > secondMax){
        secondMax = numbers[i]
        
    
    }
    i++
}
if(secondMax == null){
    secondMax = max

}
console.log(secondMax);

