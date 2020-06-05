var numbers = [150, 80, 150, 140, 56, 112, 18, 10, 0]
var min = numbers[0]
var secondMin = null
i = 1;
while(i < numbers.length){
    
    if(numbers[i] < min){
         secondMin = min;
         min = numbers[i];
    }
    else if(min < numbers[i] && numbers[i] < secondMin){
        secondMin = numbers[i]
        
    
    }
    i++
}
if(secondMin == null){
    secondMin = min

}
console.log(secondMin);

