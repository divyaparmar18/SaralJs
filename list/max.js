var numbers = [50, 40, 23, 70, 56, 112, 5, 10, 7]
var max = numbers[0];
var i = 1;
while(i <= numbers.length){
    if (max < numbers[i])
    max = numbers[i]
    i=i+1
}
console.log(max);
