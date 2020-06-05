var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]

let oddCount = 0;
let evenCount = 0;
let oddCountSum = 0;
let evenCountSum = 0;

elements.forEach(element => {
    if(element%2==0){

        evenCount = evenCount + 1
        evenCountSum = evenCountSum + element;
    }
    else{
        oddCount=oddCount+1
        oddCountSum = oddCountSum + element;
    }
    
});
console.log(Math.floor(oddCountSum/oddCount));
console.log(Math.floor(evenCountSum/evenCount));