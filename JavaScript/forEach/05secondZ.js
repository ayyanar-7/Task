var s = "hiiamAyyanar";
var temp = "";
for(let i = 0;i < s.length;i++){
    if(i % 2 == 1)
        temp[i] = 'Z';
    else
        temp[i] = s[i];
}
s = temp

console.log(temp);
