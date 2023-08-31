let a = "MalaAalam";
let s = "";
for(let i =0;i < a.length;i++){
    let e = a[i]; 
    if(e >='A' && e<='Z'){
        e  = String.fromCharCode(a[i].charCodeAt(0) + 32);
    }

    s += e;
}

let c = [];
c[0] = s[0];

for(i = 0;i < s.length;i++){
    e = s[i];
    let found = false;
    for(let j = 0;j < c.length;j++){
        if(e == c[j])
            found = true;
    }
    if(found == false)
        c[c.length] = e;
}
app = c.map(e => {
    let b = {};
    let found = false;
    let count = 0;
    for(let i = 0;i < s.length;i++){
        if(s[i] == e){
            count++;
        }
    }
    b[e] = count;

    return b;
})

console.log(app);