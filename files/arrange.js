var fs = require("fs");
var text = fs.readFileSync("./exercise.txt");
var data = text.toString().split("\n");
for (let index = 0; index < data.length; index++) {
    if(data[index].includes("delhi")){
        console.log(data[index]);
        var createStream = fs.createWriteStream("delhi.txt");
        createStream.write(data[index]);
        // createStream.end();        
    }
    
    // if(data[index].includes("delhi")){
    //     var createStream = fs.createWriteStream("delhi.txt");
    //     writeStream.write(data[index])

    // }
    // else if(data[index].includes("shimla")){
    //     var createStream = fs.createWriteStream("shimla.txt");
    //     writeStream.write(data[index])

    // }
    // else{
    //     var createStream = fs.createWriteStream("shi.txt");
    //     writeStream.write(data[index])

    // }
    
    
}