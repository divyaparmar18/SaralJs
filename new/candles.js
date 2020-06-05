ar = [3,5,7,2,7,7]
var i = 0;
var count = 0;
var max = ar[0];
while(i<ar.length){
    if(max<ar[i+1]){
        max = ar[i+1]
    }
    i++
}
ar.forEach(element => {
    if(element == max){
        count++
    }
   
});
console.log(count);

