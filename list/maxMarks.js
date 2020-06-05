let max_marks = (marks)=>{
    let i = 0;
    while(i < marks.length){
        let j = 0;
        let max = marks[i][j]
        while(j < marks[i].length){
            if(max < marks[i][j+1]){
                max = marks[i][j+1]
            }
            j++
        }
        console.log(max);
        i++
        
    }
}
max_marks([[45, 21, 42, 63], [12, 42, 42, 53], [42, 90, 78, 13], [94, 89, 78, 76], [87, 55, 98, 99]])



