var marks = ["10", "32", "42", "65", "67", "89", "76", "38", "67"]
var total_marks = 0
var counter = 0;

while (counter < marks.length){
	total_marks = total_marks + parseInt(marks[counter])
    counter = counter + 1
}
console.log(total_marks);

var name = ["Savitri", "Phule", "26"]
console.log(`${name[0]} ${name[1]}`);
