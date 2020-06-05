let numbers_list = [1, 2, 3, 4, 5, 6, 7, 10, -2]
console.log(Math.max(...numbers_list))

let sum = (list1,list2)=>{
    let i = 0;
    let list3 = []
    while (i < list1.length){
        list3.push(list1[i]+list2[i])
        i++
    }
    return list3
    
    
}
console.log(sum([3,5,7],[5,5,9]))