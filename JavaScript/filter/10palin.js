var a = ["malayalam", "tree", "mom", "gova", "Pop"];

function palin(s){
    s = s.toLowerCase();
    var rev = "";
    for(let i = s.length - 1;i >= 0;i--){
        rev += s[i];
    }

    return s == rev;
}

var f = a.filter(e => {
    if(palin(e)){
        return e;
    }
})
console.log(f);