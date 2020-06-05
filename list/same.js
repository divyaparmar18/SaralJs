let list1 = [1, 342, 75, 23, 98]
let list2 = [75, 23, 98, 12, 78, 10, 1]
let list3 = []

for (let index = 0; index < list1.length; index++) {
    if(list2.includes(list1[index]))
    list3.push(list1[index])
    
}
// console.log(list3);

let lis1 = [1, 5, 10, 12, 16, 20]
let lis2 = [1, 2, 10, 13, 16]
let lis3 = [];

for (const i of lis1) {
    for (const j of lis2) {
        if(!lis3.includes(i)){
            lis3.push(i)
        }
        if(!lis3.includes(j)){
            lis3.push(j)
        }
        
        
    }
    
}
console.log(lis3);

