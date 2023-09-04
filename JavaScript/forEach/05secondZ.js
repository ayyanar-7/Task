var s = "hiiamAyyanar";
var temp = [];

// for(let i = 0;i < s.length;i++){
//     if(i % 2 == 1)
//         temp += 'Z';
//     else
//         temp += s[i];
// }
// s = temp;

var S = s.split('');

S.forEach((e, i) => {
    if(i % 2 == 1){
        temp[temp.length] = 'Z';
    }
    else{
        temp[temp.length] = e;
    }
});

s = temp.join('');
console.log(s);
