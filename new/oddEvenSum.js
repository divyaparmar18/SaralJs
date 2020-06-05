var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]

let oddCount = 0;
let evenCount = 0;

elements.forEach(element => {
    if(element%2==0){
        evenCount = evenCount + element
    }
    else{
        oddCount=oddCount+element
    }
    
});console.log(oddCount);
console.log(evenCount)