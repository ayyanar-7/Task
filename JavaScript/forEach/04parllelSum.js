var a = [2, 6, 3, 5];
var b = [5, 4, 7, 1];
var c = [];

// for(let i = 0;i < a.length;i++){
//     c[i] = a[i] + b[i];
// }

a.forEach((e, i) => {
    c[i] = e + b[i];
});

c.forEach(e => console.log(e));