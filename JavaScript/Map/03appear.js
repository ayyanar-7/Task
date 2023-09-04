let a = ['apple', 'code', 'dog', 'apple', 'code', 'dog', 'apple', 'x', 'code'];

let c = [];
c[0] = a[0];

a.forEach(e => {
    let found = false;
    for(let i = 0;i < c.length;i++){
        if(e == c[i])
            found = true;
    }
    if(found == false)
        c[c.length] = e;
})
console.log(c);
app = c.map(e => {
    let b = {};
    let found = false;
    let count = 0;
    for(let i = 0;i < a.length;i++){
        if(a[i] == e){
            count++;
        }
    }
    b[e] = count;

    return b;
})

console.log(app);