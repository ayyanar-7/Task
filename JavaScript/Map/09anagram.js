var a = ["Tree", "Mango", "Eret", "Rete"];
//Change lowercase 
var x = [];
a.forEach(e => {
    x[x.length] = e.toLowerCase();
});
var a = x;
//ascending alphabetic order for every string
var b = [];
a.forEach(e => {
    e = e.split('').sort().join('');
    b[b.length] = e;
});
//minimize repeted strings
var c = [];
c[0] = b[0];
b.forEach(e => {
    found = false;
    for(let i = 0;i < c.length;i++){
        if(e == c[i]){
            found = true;
        }
    }
    if(found == false){
        c[c.length] = e;
    }
})
//maping object
news = c.map(e => {
    var emp = {};
    var temp = [];
    var j = 0;
    for(let i = 0;i < b.length;i++){
        if(e == b[i]){
            temp[j] = a[i];
            j++;
        }
    }
    var t =[];
    temp.forEach(e => {
        t[t.length] = e.charAt(0).toUpperCase() + e.slice(1);
    })
    temp = t;
    //To capitalized the first letter
    emp[e] = temp;

    return emp;
})

console.log(news);