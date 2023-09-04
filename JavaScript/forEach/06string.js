var s = "hjwyidhif";
// var found = false;
// for(let i = 0;i < s.length;i++){
//     if(s[i] == 'y'){
//         found = true;
//         break;
//     }
// }
// if(found){
//     console.log('Yes');
// }
// else{
//     console.log("No");
// }

s = s.split('');
var found = false;
s.forEach(e => {
    if(e == 'y'){
        found = true;
    }
});
if(found){
    console.log('Yes');
}
else{
    console.log("No");
}