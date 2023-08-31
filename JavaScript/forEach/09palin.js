var s1 = "word";
var s2 = "dronw";

var temp = "";

for(let i = s1.length - 1,j = 0;i >= 0;i--,j++){
    temp += s1[i];
}
if(temp == s2){
    console.log("palindrome");
}
else{
    console.log("Not palindrom");
}