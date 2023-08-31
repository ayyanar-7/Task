var s = "hjwdidhif";
var found = false;
for(let i = 0;i < s.length;i++){
    if(s[i] == 'y'){
        found = true;
        break;
    }
}
if(found){
    console.log('Yes');
}
else{
    console.log("No");
}