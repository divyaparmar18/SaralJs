var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var duplicate = [];
var i = 0;
while (i < n.length){
    j = i +1;
    while(j<n.length){
        if(n[i]==n[j]){
            duplicate.push(n.splice(j,1))
            j--
        }
        j++
    }
    i++
}
console.log(n);
console.log(duplicate);

