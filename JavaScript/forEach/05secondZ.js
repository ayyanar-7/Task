var s = "hiiamAyyanar";
var temp = "";
for(let i = 0;i < s.length;i++){
    if(i % 2 == 1)
        temp += 'Z';
    else
        temp += s[i];
}
s = temp;

console.log(temp);
