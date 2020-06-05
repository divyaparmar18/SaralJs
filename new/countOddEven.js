var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]

let oddCount = 0;
 let evenCount = 0;
for (let index = 0; index < elements.length; index++) {
    if(elements[index]%2==0){
        evenCount = evenCount + 1
    }
    else{
        oddCount=oddCount+1
    }
    
}
console.log(oddCount);
console.log(evenCount);



