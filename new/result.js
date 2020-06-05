marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65],
    [95, 45, 78],
    [87, 67, 49, 68, 88]
]

let sum;
for (let index = 0; index < marks.length; index++) {
    sum = 0
    let count = 0;
   for (let i = 0; i < marks[index].length; i++) {
       count++
       sum = sum + marks[index][i]
       
   }
    
    let average = sum/count
    console.log(Math.floor(average))
       
    
}


