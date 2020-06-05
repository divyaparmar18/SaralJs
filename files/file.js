// var fs = require("fs");

// var createStream = fs.createWriteStream("JournalDEV.txt");
// createStream.end();

var fs = require("fs");


function readData(err, data) {
	  console.log(data);
}

fs.readFile('prople.txt', 'utf8', readData);
