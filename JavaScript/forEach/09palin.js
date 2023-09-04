var s1 = "word";
var s2 = "drow";

var temp = "";
s1 = s1.split('');
// for(let i = s1.length - 1,j = 0;i >= 0;i--,j++){
//     temp += s1[i];
// }
s1.forEach((e, i, arr) => {
    temp += arr[arr.length - 1 - i];
});

if(temp == s2){
    console.log("palindrome");
}
else{
    console.log("Not palindrom");
}