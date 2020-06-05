// function generatePyramid() {
//     var totalNumberofRows = 5;
//     var output = '';
//     for (var i = 1; i <= totalNumberofRows; i++) {
//         for (var j = 1; j <= i; j++) {
//             output += j + '  ';
//         }
//         console.log(output);
//         output = '';
//     }
// }

// generatePyramid();

function createPyramid(n)
{
    for (let i = 0; i < n; i++) {
        var output = '';
        for (let j =0; j < (n - i)-1; j++) output += '1';
        for (let k = 0; k <= i; k++) output += '*';
        console.log(output);  
    } 
}

createPyramid(5) 

var num = 5;
var i = 0;
while(i<num){
    var output = ""
    var j = 0;
    while(j<num-i){
        output = output+ " "
        j++
    }
    var k = 0;
    while(k<=i){
        output=output+"* "
        k++
    }
    console.log(output);
    
    i++
}
console.log(output);


