var batch1_students = ["Shivam", "Rahul", "Kavay", "Dhannu", "Deepanshu", "Nitin", "Manoj", "Shakrudin", "Tara", "Suraj", "Krishna"]
// students_file = open("navgurukul_students.html", "w")
// students_file.write("<html>\n")
// students_file.write("<head>\n")
// students_file.write("<title>NavGurukul Students</title>\n")
// students_file.write("</head>\n")
// students_file.write("<body>\n")
// students_file.write("<ul>")
// for student in batch1_students:
//     students_file.write("<li>" + student + "</li>\n")
// students_file.write("</ul>\n")
// students_file.write("</body>\n")
// students_file.write("</html>\n")
// students_file.close()

var fs = require("fs");

var writeStream = fs.createWriteStream("students.html");
writeStream.write("<html>\n")
writeStream.write("<head>\n")
writeStream.write("<title>NavGurukul Students</title>\n")
writeStream.write("</head>\n")
writeStream.write("<body>\n")
writeStream.write("<ul>")
for (const student of batch1_students) {
    writeStream.write("<li>" + student + "</li>\n")
}
writeStream.write("</ul>\n")
writeStream.write("</body>\n")
writeStream.write("</html>\n")

writeStream.end();
