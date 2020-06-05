var char_list = ["a", "n", "t", "a", "a","t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]

var i = 0;
var countList = [];
while(i<char_list.length){
    var con = []
    var j = i + 1;
    count = 1;
        while(j<char_list.length){
            if(char_list[i]==char_list[j]){
            count = count + 1
            char_list.splice(j,1)
            j--
        }
            j=j+1
    }
    con.push(char_list[i],count);
    countList.push(con)
    i=i+1
}
console.log(countList);
