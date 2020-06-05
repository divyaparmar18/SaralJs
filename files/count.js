var fs = require("fs");
var text = fs.readFileSync("./prople.txt");
var textByLine = text.toString().split("\n")
var count = 0;
for (let index = 0; index < textByLine.length; index++) {
    count++
    
}

console.log(count);

