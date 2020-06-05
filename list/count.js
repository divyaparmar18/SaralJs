var numbers = [50, 40, 23, 70, 56, 12, 5, 10, 7]
var count = 0;

numbers.forEach(element => {
    if(element >= 20 && element <= 40)
    count=count +1});

console.log(count);