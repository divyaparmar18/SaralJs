var number = 30
var n = [10, 11, 12, 13, 14, 17, 18, 19]

let i = 0;
while (i < n.length){
    j = i;
    while (j < n.length){
        if(n[i] + n[j] == 30){
            console.log(n[i],n[j])
        }j++
    }
    i++
}