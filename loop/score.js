var breakingRecords = (scores)=> {
    var i = 0;
    var max = scores[i]
    var min = scores[i]
    var maxcount = 0;
    var mincount = 0;
    
    while(i<scores.length){
        if(max < scores[i]){
            max = scores[i+1]
            maxcount=maxcount+1
        }
        if(min > scores[i]){
            min = scores[i+1]
            mincount++
        }
        i++
    }
    console.log(maxcount , mincount)
}

// var scores = [3 ,4 ,21, 36, 10 ,28 ,35 ,5 ,24, 42]
var scores = [10 ,5 ,20 ,20 ,4, 5 ,2 ,25, 1]

breakingRecords(scores);



