a = [{'name' : "ayyanar"},
{'name' : "vikram"},
{'name' : "guna"},
{'name' : "logesh"},
{'name' : "nandhini"}];

var b = a.map(e => {
    v={}
    let x = "";
    x += String.fromCharCode(e.name.charCodeAt(0) - 32);
    for(let i = 1;i < e.name.length;i++){
        x += e.name[i];
    }
    v.name = x;

    return v
})

console.log(b);