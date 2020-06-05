var arr = [3,2,10,6,7,5,-7]
i = 0
var num;
while(i<arr.length){
    j = 0
    while(j<arr.length){
   
    if(arr[j] > arr[j+1]){
        num = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = num
        
    }
    j++
    }
    i++
}
console.log(arr);
    



